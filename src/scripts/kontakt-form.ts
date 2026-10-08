/* Formularversand mit serverseitig geprüftem Turnstile-Nachweis. */

export {};

const form = document.querySelector<HTMLFormElement>("[data-kontakt-form]");

if (form) {
  const ts = form.querySelector<HTMLInputElement>("input[name='ts']");
  if (ts) ts.value = String(Date.now());
  const submissionId = form.querySelector<HTMLInputElement>("input[name='submissionId']");
  if (submissionId) submissionId.value = crypto.randomUUID();

  const submit = form.querySelector<HTMLButtonElement>("[data-kn-submit]");
  const status = form.querySelector<HTMLElement>("[data-kn-status]");
  const message = form.querySelector<HTMLTextAreaElement>("textarea[name='message']");
  const counter = form.querySelector<HTMLElement>("[data-kn-count]");
  const widget = form.querySelector<HTMLElement>("[data-kn-turnstile]");
  type Turnstile = { render: (container: HTMLElement, options: Record<string, unknown>) => string; reset: (id: string) => void };
  const provider = window as typeof window & { turnstile?: Turnstile };
  let widgetId: string | undefined;
  let token = "";
  let sending = false;
  let loading = false;
  const securityMessage = () => {
    if (status) status.textContent = "Die Sicherheitsprüfung ist noch nicht abgeschlossen. Bitte warten Sie kurz oder laden Sie die Seite neu.";
  };
  const loadWidget = () => {
    if (loading || !widget) return;
    loading = true;
    if (!widget.dataset.sitekey) { securityMessage(); return; }
    const render = () => {
      if (!provider.turnstile) { securityMessage(); return; }
      widgetId = provider.turnstile.render(widget, {
        sitekey: widget.dataset.sitekey,
        action: "contact",
        size: "flexible",
        theme: "auto",
        language: "de",
        callback: (value: string) => { token = value; if (status && !sending) status.textContent = ""; },
        "expired-callback": () => { token = ""; if (widgetId) provider.turnstile?.reset(widgetId); },
        "error-callback": () => { token = ""; securityMessage(); },
      });
    };
    if (provider.turnstile) { render(); return; }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = render;
    script.onerror = securityMessage;
    document.head.append(script);
  };
  form.addEventListener("focusin", loadWidget, { once: true });
  if (widget) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { loadWidget(); observer.disconnect(); }
    }, { rootMargin: "200px" });
    observer.observe(widget);
  }

  const updateCount = () => {
    if (!message || !counter) return;
    counter.textContent = `${message.value.length} / ${message.maxLength}`;
  };
  message?.addEventListener("input", updateCount);
  updateCount();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (sending) return;
    if (!form.reportValidity()) return;
    if (!token) { loadWidget(); securityMessage(); status?.focus(); return; }
    if (!submit || !status) {
      form.submit();
      return;
    }

    const label = submit.textContent;
    sending = true;
    submit.disabled = true;
    submit.textContent = "Wird gesendet …";
    form.setAttribute("aria-busy", "true");
    status.textContent = "";

    try {
      const data = new FormData(form);
      data.set("cf-turnstile-response", token);
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (response.ok && result?.ok) {
        form.classList.add("kn-card--sent");
        form.removeAttribute("aria-busy");
        form.innerHTML = [
          '<div class="kn-sent">',
          '<span class="cine-label">Anfrage gesendet</span>',
          '<h2 tabindex="-1" data-kn-success>Danke — die Anfrage ist unterwegs.</h2>',
          "<p>Sophia meldet sich meist innerhalb von zwei Werktagen.</p>",
          "</div>",
        ].join("");
        form.querySelector<HTMLElement>("[data-kn-success]")?.focus();
        return;
      }

      if (result?.error === "schutz" || response.status === 403) {
        status.textContent = "Die Anfrage konnte nicht freigegeben werden. Bitte wiederholen Sie die Sicherheitsprüfung und versuchen Sie es erneut.";
      } else if (response.status === 400) {
        status.textContent = "Bitte prüfen Sie die Angaben — Name, gültige E-Mail, Thema und eine Nachricht ab 20 Zeichen.";
      } else if (response.status === 429 || result?.error === "rate") {
        status.textContent = "Zu viele Versuche in kurzer Zeit. Bitte warten Sie zehn Minuten oder schreiben Sie direkt an info@sophiaramahi.de.";
      } else {
        status.textContent = "Der Versand ist gerade nicht möglich. Schreiben Sie direkt an info@sophiaramahi.de — die Anfrage kommt genauso an.";
      }
      status.focus();
    } catch {
      status.textContent = "Keine Verbindung. Bitte später erneut versuchen oder direkt an info@sophiaramahi.de schreiben.";
      status.focus();
    } finally {
      sending = false;
      token = "";
      if (!form.classList.contains("kn-card--sent")) {
        if (widgetId) provider.turnstile?.reset(widgetId);
        submit.disabled = false;
        submit.textContent = label;
        form.removeAttribute("aria-busy");
      }
    }
  });
}
