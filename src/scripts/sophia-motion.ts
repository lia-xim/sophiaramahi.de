/* Purple Frame — Zusatz-Choreografie der Über-Sophia-Seite.
   Ergänzt landing-motion.ts: Konturwort-Parallaxe, schwebendes
   Sucher-Porträt und das Wort-Reveal des Arbeitsweise-Manifests.
   Gleicher Kontrakt: nur mit `html.motion`, sonst bleibt alles offen. */

export {};

const page = document.querySelector<HTMLElement>("[data-landing]");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const active = document.documentElement.classList.contains("motion");

if (page && active && !reduced) {
  Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
    .then(([gsapModule, triggerModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      /* Konturwort im Hero zieht langsam quer */
      const ghost = page.querySelector("[data-sp-ghost]");
      if (ghost) {
        gsap.fromTo(ghost, { xPercent: -3 }, {
          xPercent: 3,
          ease: "none",
          scrollTrigger: { trigger: ".lw-hero", start: "top top", end: "bottom top", scrub: true },
        });
      }

      /* Das Sucher-Porträt schwebt ruhig, solange es sichtbar ist */
      const frame = page.querySelector(".sp-frame");
      if (frame) {
        gsap.to(frame, {
          y: -12,
          rotation: 1.4,
          duration: 4.2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          scrollTrigger: { trigger: ".lw-hero", start: "top bottom", toggleActions: "play pause resume pause" },
        });
      }

      /* Manifest: die Arbeitsweise leuchtet Wort für Wort auf */
      const manifest = page.querySelector<HTMLElement>("[data-sp-manifest]");
      if (manifest) {
        const words = gsap.utils.toArray<HTMLElement>(".sp-manifest__word", manifest);
        const accent = manifest.querySelector<HTMLElement>(".sp-manifest__word--accent");
        if (words.length) {
          const step = 0.72 / words.length;
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: manifest,
              start: "top 55%",
              end: "bottom bottom",
              scrub: 0.5,
              onUpdate: (self) => {
                if (!accent) return;
                const index = words.indexOf(accent);
                accent.classList.toggle("is-lit", self.progress >= 0.06 + index * step);
              },
            },
          });
          words.forEach((word, index) => {
            if (word === accent) return;
            tl.to(word, { color: "#f2eefc", duration: step * 1.6 }, 0.06 + index * step);
          });
          tl.fromTo(".sp-manifest__glow", { opacity: 0.2, scale: 0.75 }, { opacity: 1, scale: 1.1, duration: 1 }, 0)
            .to({}, { duration: 0.14 });
        }
      }
    })
    .catch(() => {
      document.documentElement.classList.remove("motion");
    });
}
