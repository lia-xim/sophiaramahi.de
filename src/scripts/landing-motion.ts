/* Purple Frame — Motion für Landing-Szenen (Hub, Leistungen, lokale
   Versionen, Projekte). Gleicher Kontrakt wie die Startseite: nur mit
   `html.motion`, sonst bleibt alles im offenen Grundzustand. */

export {};

const root = document.querySelector<HTMLElement>("[data-landing]");
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

      /* Hero: Bild setzt sich, Beam blendet ein, Inhalt steigt auf */
      const heroMedia = root.querySelector(".ld-hero__media img");
      if (heroMedia) {
        gsap.fromTo(heroMedia, { scale: 1.08 }, { scale: 1, duration: 1.4, ease: "power2.out" });
        gsap.fromTo(heroMedia, { yPercent: 0 }, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: { trigger: ".ld-hero", start: "top top", end: "bottom top", scrub: true },
        });
      }
      const heroBeam = root.querySelector(".ld-hero__beam");
      if (heroBeam) gsap.fromTo(heroBeam, { opacity: 0 }, { opacity: 1, duration: 1.6, ease: "power2.out", delay: 0.2 });
      const heroContent = root.querySelector(".ld-hero__content");
      if (heroContent) {
        gsap.fromTo(
          heroContent.children,
          { autoAlpha: 0.001, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.1, ease: "power3.out", delay: 0.1 }
        );
      }

      /* Projektseite: Lichttisch — Kopf hebt sich, die vier Kacheln
         leuchten nacheinander auf. Mobil ersetzen ruhige Auftritte die
         Sticky-Bühne. */
      const stage = root.querySelector<HTMLElement>("[data-projekt-grid]");
      if (stage) {
        const tiles = gsap.utils.toArray<HTMLElement>(".pj-tile", stage);
        const desktopStage = window.matchMedia("(min-width: 901px)").matches;
        if (desktopStage && tiles.length) {
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: stage,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          });
          tl.fromTo(".pj-grid", { scale: 0.965, y: 12 }, { scale: 1, y: 0, duration: 0.6, ease: "power1.out" }, 0)
            .to(".pj-head", { autoAlpha: 0, y: -70, duration: 0.32 }, 0.08)
            .to(".pj-scroll", { autoAlpha: 0, duration: 0.08 }, 0.02);
          tiles.forEach((tile, index) => {
            const dim = tile.querySelector(".pj-tile__dim");
            const meta = tile.querySelector(".pj-tile__meta");
            const at = 0.22 + index * 0.14;
            if (dim) tl.fromTo(dim, { opacity: 0.85 }, { opacity: 0, duration: 0.26 }, at);
            /* Die Ecktitel sind dauerhaft da — anfangs gedimmt, mit dem
               Scroll werden sie kräftig. */
            if (meta) tl.fromTo(meta, { autoAlpha: 0.45 }, { autoAlpha: 1, duration: 0.24 }, at + 0.04);
          });
          tl.to({}, { duration: 0.12 });
        } else {
          tiles.forEach((tile) => {
            gsap.fromTo(
              tile,
              { autoAlpha: 0.001, y: 32 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: { trigger: tile, start: "top 90%", once: true },
              }
            );
          });
        }
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

      /* Bild-Parallaxe in Frames, Kapiteln und Bühnenmedien */
      gsap.utils.toArray<HTMLElement>(".ld-frame img, .ld-chapter__media img").forEach((image) => {
        gsap.fromTo(image, { yPercent: -4.5 }, {
          yPercent: 4.5,
          ease: "none",
          scrollTrigger: { trigger: image.closest("a, div") as Element, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      /* Prozess-Schiene zeichnet sich mit dem Scroll */
      const stepsLine = root.querySelector(".ld-steps__line i");
      if (stepsLine) {
        const vertical = window.matchMedia("(max-width: 900px)").matches;
        gsap.fromTo(stepsLine, vertical ? { scaleY: 0 } : { scaleX: 0 }, {
          ...(vertical ? { scaleY: 1 } : { scaleX: 1 }),
          ease: "none",
          scrollTrigger: { trigger: ".ld-steps__rail", start: "top 78%", end: "bottom 58%", scrub: true },
        });
      }

      /* Finale: das Portal baut sich auf — optional über bewegtem Licht */
      const portal = root.querySelector(".ld-finale__portal");
      if (portal) {
        const finaleVideo = root.querySelector<HTMLVideoElement>("[data-finale-video]");
        if (finaleVideo) {
          ScrollTrigger.create({
            trigger: ".ld-finale",
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
          scrollTrigger: { trigger: ".ld-finale", start: "top 82%", end: "center 50%", scrub: 0.5 },
        });
        if (finaleVideo) {
          finaleTl
            .fromTo(".ld-finale__media", { opacity: 0 }, { opacity: 1, duration: 0.9 }, 0)
            .fromTo(finaleVideo, { scale: 1.1 }, { scale: 1, duration: 1 }, 0)
            .fromTo(".ld-finale__slit", { width: "8vw", opacity: 0.4 }, { width: "min(30vw, 320px)", opacity: 0.9, duration: 0.5 }, 0);
        }
        finaleTl
          .fromTo(portal, { scaleY: 0.12, opacity: 0.15 }, { scaleY: 1, opacity: 0.8, duration: 1 }, 0)
          .fromTo(".ld-finale__horizon", { scaleX: 0.16, opacity: 0 }, { scaleX: 1, opacity: 0.7, duration: 1 }, 0.05)
          .fromTo(".ld-finale__content", { autoAlpha: 0.15, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.12);
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
