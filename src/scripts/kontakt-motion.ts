/* Purple Frame — Motion für die Kontaktseite. Gleicher Kontrakt wie
   überall: nur mit `html.motion`, sonst bleibt alles im offenen
   Grundzustand. */

export {};

const root = document.querySelector<HTMLElement>("[data-kontakt]");
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMotion = document.documentElement.classList.contains("motion");

if (root && isMotion && !prefersReduced) {
  Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
    .then(([gsapModule, triggerModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ ignoreMobileResize: true });

      /* Bühnen-Video: läuft nur, solange die Bühne sichtbar ist —
         mobil bleibt das Poster stehen. */
      const compact = window.matchMedia("(max-width: 900px)").matches;
      const video = compact ? null : root.querySelector<HTMLVideoElement>("[data-kn-video]");
      if (video) {
        ScrollTrigger.create({
          trigger: video.closest("section") as Element,
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => {
            if (self.isActive) video.play().catch(() => {});
            else video.pause();
          },
        });
      }

      /* Auftritt: Intro-Spalte und Formular-Karte steigen versetzt auf */
      const intro = root.querySelector(".kn-intro");
      if (intro) {
        gsap.fromTo(
          intro.children,
          { autoAlpha: 0.001, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.1, ease: "power3.out", delay: 0.1 }
        );
      }
      const card = root.querySelector(".kn-card");
      if (card) {
        gsap.fromTo(card, { autoAlpha: 0.001, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.3 });
      }
      const danke = root.querySelector(".kn-danke");
      if (danke) {
        gsap.fromTo(
          danke.children,
          { autoAlpha: 0.001, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.1, ease: "power3.out", delay: 0.1 }
        );
      }

      /* Portal-Glow atmet ruhig, solange die Bühne sichtbar ist */
      const portal = root.querySelector(".kn-portal");
      if (portal && !compact) {
        gsap.to(portal, {
          opacity: 0.95,
          scaleY: 1.08,
          transformOrigin: "center bottom",
          duration: 4.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          scrollTrigger: { trigger: ".kn-stage", start: "top bottom", toggleActions: "play pause resume pause" },
        });
      }

      /* Generische Auftritte (Schritte-Sektion) */
      gsap.utils.toArray<HTMLElement>("[data-fx='rise']").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0.001, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          }
        );
      });

      window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
    })
    .catch(() => {
      document.documentElement.classList.remove("motion");
    });
}
