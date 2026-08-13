import { contactLimits, contactTopics } from "../data/kontakt.ts";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MAX_REQUEST_BYTES = 16_000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const RATE_RETRY_SECONDS = Math.ceil(RATE_WINDOW_MS / 1000);
const ALLOWED_CONTENT_TYPES = ["application/x-www-form-urlencoded", "multipart/form-data"];
const ALLOWED_FIELDS = new Set(["name", "email", "project", "message", "firma", "ts", "submissionId"]);
const rateLog = new Map<string, number[]>();

type ContactHandlerDependencies = {
  fetcher?: typeof fetch;
  now?: () => number;
  env?: (name: string) => string | undefined;
  rateLimit?: (ip: string, now: number) => boolean;
};

const defaultEnv = (name: string) =>
  process.env[name] ?? (import.meta.env?.[name] as string | undefined);

const clean = (value: FormDataEntryValue | null, keepNewlines = false) => {
  const text = typeof value === "string" ? value : "";
  const pattern = keepNewlines ? /[\u0000-\u0009\u000b-\u001f\u007f]/g : /[\u0000-\u001f\u007f]/g;
  return text.replace(pattern, " ").trim();
};

const isEmail = (value: string) =>
  value.length <= contactLimits.email.max && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

const isUuid = (value: string) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);

const allowInstanceRequest = (ip: string, now: number) => {
  const recent = (rateLog.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) return false;
  recent.push(now);
  rateLog.set(ip, recent);

  // Eine langlebige Function-Instanz darf nicht unbegrenzt IP-Schlüssel sammeln.
  if (rateLog.size > 1_000) {
    for (const [key, times] of rateLog) {
      if (!times.some((time) => now - time < RATE_WINDOW_MS)) rateLog.delete(key);
    }
  }
  return true;
};

const sameSiteRequest = (request: Request, url: URL) => {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== url.host) return false;
    } catch {
      return false;
    }
  }

  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && !["same-origin", "same-site", "none"].includes(fetchSite)) return false;
  return true;
};

const hasSafeShape = (data: FormData) => {
  for (const [key, value] of data.entries()) {
    if (!ALLOWED_FIELDS.has(key) || typeof value !== "string") return false;
  }
  return [...ALLOWED_FIELDS].every((key) => data.getAll(key).length <= 1);
};

export async function handleContactRequest(
  request: Request,
  dependencies: ContactHandlerDependencies = {},
) {
  const url = new URL(request.url);
  const wantsJson = (request.headers.get("accept") ?? "").includes("application/json");
  const now = dependencies.now?.() ?? Date.now();
  const fetcher = dependencies.fetcher ?? fetch;
  const getEnv = dependencies.env ?? defaultEnv;
  const rateLimit = dependencies.rateLimit ?? allowInstanceRequest;

  const responseHeaders = {
    "Cache-Control": "no-store, max-age=0",
    "X-Content-Type-Options": "nosniff",
    "X-Robots-Tag": "noindex",
  };
  const json = (status: number, body: Record<string, unknown>, extraHeaders: HeadersInit = {}) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...responseHeaders, "Content-Type": "application/json; charset=utf-8", ...extraHeaders },
    });
  const redirect = (to: string) =>
    new Response(null, {
      status: 303,
      headers: { ...responseHeaders, Location: new URL(to, url).toString() },
    });
  const success = () => (wantsJson ? json(200, { ok: true }) : redirect("/kontakt/danke/"));
  const invalid = (status = 400) =>
    wantsJson ? json(status, { ok: false, error: "eingaben" }) : redirect("/kontakt/#fehler-eingaben");
  const unavailable = (status: number, error = "versand", retryAfter?: number) =>
    wantsJson
      ? json(status, { ok: false, error }, retryAfter ? { "Retry-After": String(retryAfter) } : {})
      : redirect("/kontakt/#fehler-versand");

  if (!sameSiteRequest(request, url)) return invalid();

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) return invalid(413);

  const contentType = (request.headers.get("content-type") ?? "").toLowerCase();
  if (!ALLOWED_CONTENT_TYPES.some((type) => contentType.startsWith(type))) return invalid(415);

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return invalid();
  }
  if (!hasSafeShape(data)) return invalid();

  // Bots sollen nicht erfahren, welche Falle ausgelöst hat.
  if (clean(data.get("firma"))) return success();

  const startedAt = Number(clean(data.get("ts")));
  if (Number.isFinite(startedAt) && startedAt > 0) {
    const elapsed = now - startedAt;
    if (elapsed >= 0 && elapsed < 3_000) return success();
  }

  const name = clean(data.get("name"));
  const email = clean(data.get("email"));
  const topic = clean(data.get("project"));
  const message = clean(data.get("message"), true);
  const suppliedSubmissionId = clean(data.get("submissionId"));

  if (
    name.length < contactLimits.name.min ||
    name.length > contactLimits.name.max ||
    !isEmail(email) ||
    !(contactTopics as readonly string[]).includes(topic) ||
    message.length < contactLimits.message.min ||
    message.length > contactLimits.message.max ||
    (suppliedSubmissionId && !isUuid(suppliedSubmissionId))
  ) {
    return invalid();
  }

  const ip = (request.headers.get("x-forwarded-for") ?? "unbekannt").split(",")[0].trim();
  if (!rateLimit(ip, now)) return unavailable(429, "rate", RATE_RETRY_SECONDS);

  const apiKey = getEnv("RESEND_API_KEY");
  const to = getEnv("CONTACT_TO") ?? "info@sophiaramahi.de";
  const from = getEnv("CONTACT_FROM") ?? "Sophia Ramahi Website <onboarding@resend.dev>";
  if (!apiKey) return unavailable(503);

  const submissionId = suppliedSubmissionId || crypto.randomUUID();
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
    `— Kontaktformular, ${new Date(now).toISOString()}`,
  ].join("\n");

  try {
    const response = await fetcher(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `contact_${submissionId}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Projektanfrage: ${topic} — ${name}`,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) return unavailable(502);
  } catch {
    return unavailable(502);
  }

  return success();
}
