const header = document.querySelector<HTMLElement>("[data-site-header]");
if (header) {
  const onScroll = () => header.toggleAttribute("data-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
const nav = document.querySelector<HTMLElement>("[data-nav]");

const closeMenu = () => {
  if (!toggle || !nav) return;
  toggle.setAttribute("aria-expanded", "false");
  nav.hidden = true;
  nav.removeAttribute("data-open");
  document.documentElement.style.overflow = "";
};

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const willOpen = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(willOpen));
    nav.hidden = !willOpen;
    nav.toggleAttribute("data-open", willOpen);
    document.documentElement.style.overflow = willOpen ? "hidden" : "";
  });
  nav.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      toggle.focus();
    }
  });
}

const contactForm = document.querySelector<HTMLFormElement>("[data-contact-form]");
const formStatus = document.querySelector<HTMLElement>("[data-form-status]");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = new FormData(contactForm);
    const destination = contactForm.dataset.contactEmail;
    if (!destination) return;
    const subject = `Projektanfrage: ${String(data.get("project") || "Videoproduktion")}`;
    const body = [`Name: ${String(data.get("name") || "")}`, `E-Mail: ${String(data.get("email") || "")}`, `Projekt: ${String(data.get("project") || "")}`, "", String(data.get("message") || "")].join("\n");
    formStatus.textContent = "Ihr E-Mail-Programm wird geöffnet. Bitte senden Sie den vorbereiteten Entwurf dort ab.";
    window.location.href = `mailto:${destination}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
