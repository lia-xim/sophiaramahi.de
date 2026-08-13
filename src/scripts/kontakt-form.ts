/* Kontaktformular-Enhancement: läuft immer (kein Motion-Gate), das
   Formular funktioniert aber auch ohne dieses Script — dann übernimmt
   der klassische POST mit Redirect. Mit JS: Zeitfalle füllen, per fetch
   senden, Status inline zeigen, bei Erfolg das Formular durch die
   Bestätigung ersetzen. */

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

  const updateCount = () => {
    if (!message || !counter) return;
    counter.textContent = `${message.value.length} / ${message.maxLength}`;
  };
  message?.addEventListener("input", updateCount);
  updateCount();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (!submit || !status) {
      form.submit();
      return;
    }

    const label = submit.textContent;
    submit.disabled = true;
    submit.textContent = "Wird gesendet …";
    form.setAttribute("aria-busy", "true");
    status.textContent = "";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
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

      if (response.status === 400) {
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
      if (!form.classList.contains("kn-card--sent")) {
        submit.disabled = false;
        submit.textContent = label;
        form.removeAttribute("aria-busy");
      }
    }
  });
}
