/* Purple Frame — Motion für die Projektseiten („Vorführung").
   Gleicher Kontrakt wie überall: nur mit `html.motion`, sonst bleibt
   alles im offenen Grundzustand. Eigenes Modul mit Root [data-projekt],
   damit keine fremden Trigger auf anderen Seiten laufen. */

import "./reel-player";

export {};

const root = document.querySelector<HTMLElement>("[data-projekt]");
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMotion = document.documentElement.classList.contains("motion");

if (root && isMotion && !prefersReduced) {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
    .then(([gsapModule, triggerModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ ignoreMobileResize: true });

      /* Titelkarte: das Bild setzt sich, Meta → Titel → Logline steigen */
      const heroImg = root.querySelector(".pd-hero__stage img");
      if (heroImg) {
        gsap.fromTo(heroImg, { scale: 1.08 }, { scale: 1, duration: 1.6, ease: "power2.out" });
        gsap.fromTo(heroImg, { yPercent: 0 }, {
          yPercent: 7,
          ease: "none",
          scrollTrigger: { trigger: ".pd-hero", start: "top top", end: "bottom top", scrub: true },
        });
      }
      const heroInner = root.querySelector(".pd-hero__inner");
      if (heroInner) {
        gsap.fromTo(
          heroInner.children,
          { autoAlpha: 0.001, y: 34 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.15 }
        );
      }
      // Scroll-Hinweis verschwindet, sobald die Reise beginnt
      const cue = root.querySelector(".pd-hero__cue");
      if (cue) {
        gsap.to(cue, {
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: { trigger: ".pd-hero", start: "2% top", end: "18% top", scrub: true },
        });
      }

      /* Generische Auftritte */
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

      /* Szenen: Ghost-Nummern ziehen gegen die Scrollrichtung */
      gsap.utils.toArray<HTMLElement>(".pd-scene__ghost").forEach((ghost) => {
        gsap.fromTo(ghost, { yPercent: 16 }, {
          yPercent: -16,
          ease: "none",
          scrollTrigger: { trigger: ghost.closest("section") as Element, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      /* Vollbild-Beats: Bild atmet, Vignette öffnet sich zur Mitte */
      gsap.utils.toArray<HTMLElement>(".pd-beat").forEach((beat) => {
        const image = beat.querySelector("img");
        if (image) {
          gsap.fromTo(image, { yPercent: -6, scale: 1.06 }, {
            yPercent: 6,
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: beat, start: "top bottom", end: "bottom top", scrub: true },
          });
        }
        const vignette = beat.querySelector(".pd-vignette");
        if (vignette) {
          gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: beat, start: "top bottom", end: "bottom top", scrub: true },
          })
            .fromTo(vignette, { opacity: 1 }, { opacity: 0.3, duration: 0.5 })
            .to(vignette, { opacity: 1, duration: 0.5 });
        }
        const caption = beat.querySelector("figcaption");
        if (caption) {
          gsap.fromTo(caption, { autoAlpha: 0.001, y: 16 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: beat, start: "top 45%", once: true },
          });
        }
      });

      /* Kontaktbogen: Frames mit eigener Tiefe, Bilder mit Parallaxe */
      gsap.utils.toArray<HTMLElement>(".pd-sheet__grid figure").forEach((figure, index) => {
        gsap.fromTo(figure, { autoAlpha: 0.001, y: 40 + (index % 2) * 20 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: figure, start: "top 90%", once: true },
        });
        const image = figure.querySelector("img");
        if (image) {
          gsap.fromTo(image, { yPercent: -4 }, {
            yPercent: 4,
            ease: "none",
            scrollTrigger: { trigger: figure, start: "top bottom", end: "bottom top", scrub: true },
          });
        }
      });

      /* Abspann: Credits-Zeilen treten gestaffelt auf */
      const creditRows = gsap.utils.toArray<HTMLElement>(".pd-credits__rows li");
      if (creditRows.length) {
        gsap.fromTo(creditRows, { autoAlpha: 0.001, y: 18 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".pd-credits", start: "top 74%", once: true },
        });
      }

      /* Nächste Vorführung: Karte blendet auf, Bild schiebt leicht */
      const nextCard = root.querySelector(".pd-next__card");
      if (nextCard) {
        const image = nextCard.querySelector("img");
        if (image) {
          gsap.fromTo(image, { yPercent: -5 }, {
            yPercent: 5,
            ease: "none",
            scrollTrigger: { trigger: nextCard, start: "top bottom", end: "bottom top", scrub: true },
          });
        }
      }

      /* Finale: Portal baut sich über dem bewegten Licht auf */
      const portal = root.querySelector(".pd-finale__portal");
      if (portal) {
        const finaleVideo = root.querySelector<HTMLVideoElement>("[data-finale-video]");
        if (finaleVideo) {
          ScrollTrigger.create({
            trigger: ".pd-finale",
            start: "top bottom",
            end: "bottom top",
            onToggle: (self) => {
              if (self.isActive) finaleVideo.play().catch(() => {});
              else finaleVideo.pause();
            },
          });
        }
        const finaleTl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: ".pd-finale", start: "top 82%", end: "center 50%", scrub: 0.5 },
        });
        if (finaleVideo) {
          finaleTl
            .fromTo(".pd-finale__media", { opacity: 0 }, { opacity: 1, duration: 0.9 }, 0)
            .fromTo(finaleVideo, { scale: 1.1 }, { scale: 1, duration: 1 }, 0)
            .fromTo(".pd-finale__slit", { width: "8vw", opacity: 0.4 }, { width: "min(30vw, 320px)", opacity: 0.9, duration: 0.5 }, 0);
        }
        finaleTl
          .fromTo(portal, { scaleY: 0.12, opacity: 0.15 }, { scaleY: 1, opacity: 0.8, duration: 1 }, 0)
          .fromTo(".pd-finale__horizon", { scaleX: 0.16, opacity: 0 }, { scaleX: 1, opacity: 0.7, duration: 1 }, 0.05)
          .fromTo(".pd-finale__content", { autoAlpha: 0.15, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.12);
      }

      /* Leicht magnetische Primäraktion (nur Zeiger-Geräte) */
      const magneticCta = root.querySelector<HTMLElement>("[data-magnetic]");
      if (magneticCta && window.matchMedia("(pointer: fine)").matches) {
        const setX = gsap.quickTo(magneticCta, "x", { duration: 0.4, ease: "power3.out" });
        const setY = gsap.quickTo(magneticCta, "y", { duration: 0.4, ease: "power3.out" });
        magneticCta.addEventListener("mousemove", (event) => {
          const rect = magneticCta.getBoundingClientRect();
          setX((event.clientX - (rect.left + rect.width / 2)) * 0.18);
          setY((event.clientY - (rect.top + rect.height / 2)) * 0.3);
        });
        magneticCta.addEventListener("mouseleave", () => {
          setX(0);
          setY(0);
        });
      }

      window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
    })
    .catch(() => {
      document.documentElement.classList.remove("motion");
    });
}
