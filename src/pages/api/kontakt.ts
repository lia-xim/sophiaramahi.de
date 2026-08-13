/* Kontakt-Endpoint: nimmt das Formular von /kontakt/ entgegen, prüft es
   serverseitig und versendet über Resend (REST-API, kein SDK).

   Sicherheitsschichten:
   - nur POST, Same-Origin-Check über den Origin-Header
   - Honeypot-Feld und Zeitfalle werden als Erfolg beantwortet (silent drop)
   - strenge Feldvalidierung gegen die geteilte Themenliste, Längen-Caps,
     Kontrollzeichen-Filter (verhindert Header-Injection im Reply-To)
   - Best-effort-Rate-Limit pro Function-Instanz
   - der API-Key bleibt serverseitig (process.env, nie PUBLIC_)

   Antwortformen: fetch-Aufrufe (Accept: application/json) bekommen JSON,
   klassische Formular-POSTs einen 303-Redirect — Erfolg auf /kontakt/danke/,
   Fehler auf /kontakt/#fehler-… (dort zeigt reines :target-CSS die Meldung,
   die Seite funktioniert also auch ohne JavaScript vollständig). */

import type { APIRoute } from "astro";
import { contactLimits, contactTopics } from "../../data/kontakt";

export const prerender = false;

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/* Best-effort: schützt eine warme Instanz vor Dauerfeuer. Kein Ersatz für
   die Honeypot/Zeitfallen-Schicht, aber eine zusätzliche Bremse. */
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const rateLog = new Map<string, number[]>();

const env = (name: string) => process.env[name] ?? (import.meta.env[name] as string | undefined);

const clean = (value: FormDataEntryValue | null, keepNewlines = false) => {
  const text = typeof value === "string" ? value : "";
  const pattern = keepNewlines ? /[\u0000-\u0009\u000b-\u001f\u007f]/g : /[\u0000-\u001f\u007f]/g;
  return text.replace(pattern, " ").trim();
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

export const POST: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const wantsJson = (request.headers.get("accept") ?? "").includes("application/json");

  const json = (status: number, body: Record<string, unknown>) =>
    new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
  const redirect = (to: string) =>
    new Response(null, { status: 303, headers: { Location: new URL(to, url).toString() } });
  const success = () => (wantsJson ? json(200, { ok: true }) : redirect("/kontakt/danke/"));
  const invalid = () => (wantsJson ? json(400, { ok: false, error: "eingaben" }) : redirect("/kontakt/#fehler-eingaben"));
  const unavailable = (status: number) =>
    wantsJson ? json(status, { ok: false, error: "versand" }) : redirect("/kontakt/#fehler-versand");

  // Same-Origin: das Formular lebt nur auf dieser Website.
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== url.host) return invalid();
    } catch {
      return invalid();
    }
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return invalid();
  }

  // Honeypot: Menschen sehen das Feld nicht, Bots füllen es.
  if (clean(data.get("firma"))) return success();

  // Zeitfalle: nur werten, wenn der Client-Zeitstempel plausibel ist.
  const ts = Number(clean(data.get("ts")));
  if (Number.isFinite(ts) && ts > 0) {
    const elapsed = Date.now() - ts;
    if (elapsed >= 0 && elapsed < 3000) return success();
  }

  const name = clean(data.get("name"));
  const email = clean(data.get("email"));
  const topic = clean(data.get("project"));
  const message = clean(data.get("message"), true);

  if (
    name.length < contactLimits.name.min ||
    name.length > contactLimits.name.max ||
    email.length > contactLimits.email.max ||
    !isEmail(email) ||
    !(contactTopics as readonly string[]).includes(topic) ||
    message.length < contactLimits.message.min ||
    message.length > contactLimits.message.max
  ) {
    return invalid();
  }

  // Rate-Limit pro IP (best effort, pro warmer Instanz).
  const ip = (request.headers.get("x-forwarded-for") ?? "unbekannt").split(",")[0].trim();
  const now = Date.now();
  const recent = (rateLog.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) return unavailable(429);
  recent.push(now);
  rateLog.set(ip, recent);

  const apiKey = env("RESEND_API_KEY");
  const to = env("CONTACT_TO") ?? "info@sophiaramahi.de";
  const from = env("CONTACT_FROM") ?? "Sophia Ramahi Website <onboarding@resend.dev>";
  if (!apiKey) return unavailable(503);

  const text = [
    "Neue Projektanfrage über sophiaramahi.de",
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Thema: ${topic}`,
    "",
    "Nachricht:",
    message,
    "",
    `— Kontaktformular, ${new Date().toISOString()}`,
  ].join("\n");

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Projektanfrage: ${topic} — ${name}`,
        text,
      }),
    });
    if (!response.ok) return unavailable(502);
  } catch {
    return unavailable(502);
  }

  return success();
};

/* Alles außer POST ist hier nicht vorgesehen. */
export const ALL: APIRoute = () => new Response(null, { status: 405, headers: { Allow: "POST" } });
