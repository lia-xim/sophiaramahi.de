/* Purple Frame — Motion der Leistungs-Landingpages (Basis + lokale
   Versionen). Eigenes Modul, damit die Seitenfamilie unabhängig vom
   Hub choreografiert werden kann: Themenwelt-Hero, Filmstreifen-
   Ablauf, Lichttisch-Kacheln und Abspann-Finale.

   Kontrakt wie überall: nur unter `html.motion`, sonst bleibt der
   offene Grundzustand aus dem CSS stehen. */

export {};

const root = document.querySelector<HTMLElement>("[data-service]");
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

      const desktop = window.matchMedia("(min-width: 901px)").matches;

      /* Hero: Bühne setzt sich, Inhalt tritt gestaffelt auf */
      const hero = root.querySelector<HTMLElement>(".sd-hero");
      if (hero) {
        const heroExit = {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        } as const;
        const heroVisible = {
          trigger: hero,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause resume pause",
        } as const;

        const stageImg = hero.querySelector(".lw-chapter__stagebg img:not(.lw-echo)");
        if (stageImg) {
          gsap.fromTo(stageImg, { scale: 1.07 }, { scale: 1, duration: 1.6, ease: "power2.out" });
          gsap.fromTo(stageImg, { yPercent: 0 }, { yPercent: -6, ease: "none", scrollTrigger: heroExit });
        }

        const content = hero.querySelector(".sd-hero__content");
        if (content) {
          gsap.fromTo(
            content.children,
            { autoAlpha: 0.001, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.1, ease: "power3.out", delay: 0.1 }
          );
        }

        // Ghost-Nummer zieht gegen die Scrollrichtung
        const ghost = hero.querySelector(".lw-chapter__ghost");
        if (ghost) gsap.fromTo(ghost, { yPercent: 8 }, { yPercent: -14, ease: "none", scrollTrigger: heroExit });

        // Vignette: offen, solange die Bühne steht — schließt beim Abgang
        const vignette = hero.querySelector(".lw-vignette");
        if (vignette) gsap.fromTo(vignette, { opacity: 0.34 }, { opacity: 1, ease: "none", scrollTrigger: heroExit });

        // Der Lichtkegel schwenkt kaum merklich (Eventfilm)
        const beam = hero.querySelector(".lw-beam");
        if (beam) {
          gsap.to(beam, {
            rotation: 2.4,
            xPercent: 3,
            transformOrigin: "top center",
            duration: 5.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            scrollTrigger: heroVisible,
          });
        }

        // Lichtstaub: jedes Korn treibt in eigener Tiefe
        gsap.utils.toArray<HTMLElement>(".lw-dust i", hero).forEach((dot, index) => {
          gsap.fromTo(dot, { y: 20 + (index % 3) * 16 }, {
            y: -(20 + ((index + 1) % 3) * 20),
            ease: "none",
            scrollTrigger: heroExit,
          });
        });

        // Rhythmusbalken pulsieren ruhig (Musikvideo)
        gsap.utils.toArray<HTMLElement>(".lw-bars i", hero).forEach((bar, index) => {
          gsap.to(bar, {
            scaleY: 0.45 + ((index * 37) % 40) / 100,
            transformOrigin: "center bottom",
            duration: 0.9 + ((index * 13) % 7) / 10,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            scrollTrigger: heroVisible,
          });
        });

        // Das Glühen atmet (Imagefilm)
        const glow = hero.querySelector(".lw-glow");
        if (glow) {
          gsap.to(glow, {
            scale: 1.12,
            opacity: 0.75,
            duration: 4,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            scrollTrigger: heroVisible,
          });
        }

        // Fadenkreuz driftet wie aus der Hand geführt (Kamera)
        const cross = hero.querySelector(".lw-finder__cross");
        if (cross) {
          gsap.to(cross, {
            x: 10,
            y: -7,
            duration: 3.6,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            scrollTrigger: heroVisible,
          });
        }

        // Schallringe atmen mit dem Scroll (Tonaufnahme)
        gsap.utils.toArray<HTMLElement>(".lw-rings i", hero).forEach((ring, index) => {
          gsap.fromTo(ring, { scale: 0.9, opacity: 0.45 }, {
            scale: 1.06 + index * 0.04,
            opacity: 1,
            ease: "none",
            scrollTrigger: heroExit,
          });
        });

        // Projektions-Echo flackert leicht (Live Visuals)
        const echo = hero.querySelector(".lw-echo");
        if (echo) {
          gsap.to(echo, {
            opacity: 0.22,
            xPercent: 0.8,
            duration: 1.6,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            scrollTrigger: heroVisible,
          });
        }

        // Mapping-Raster driftet, die Scan-Linie tastet die Fläche ab
        const gridOverlay = hero.querySelector(".lw-grid-overlay");
        if (gridOverlay) {
          gsap.fromTo(gridOverlay, { xPercent: -2, opacity: 0.6 }, { xPercent: 2, opacity: 1, ease: "none", scrollTrigger: heroExit });
        }
        const scan = hero.querySelector(".lw-scan");
        if (scan) {
          const scanTl = gsap.timeline({ repeat: -1, repeatDelay: 1.2, scrollTrigger: heroVisible });
          scanTl
            .fromTo(scan, { top: "10%", opacity: 0 }, { opacity: 0.9, duration: 0.8, ease: "sine.out" }, 0)
            .to(scan, { top: "88%", duration: 6, ease: "none" }, 0)
            .to(scan, { opacity: 0, duration: 0.8, ease: "sine.in" }, 5.2);
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

      /* Vertiefung: das Geisterwort zieht langsam gegen die Scrollrichtung */
      const focusGhost = root.querySelector(".sd-focus__ghost");
      if (focusGhost) {
        gsap.fromTo(focusGhost, { yPercent: 14 }, {
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: focusGhost.closest("section") as Element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      /* Filmstreifen: der Playhead fährt über die Spur, die Clips
         setzen sich nacheinander ins Licht */
      const strip = root.querySelector<HTMLElement>(".sd-strip");
      if (strip) {
        const clips = gsap.utils.toArray<HTMLElement>(".sd-clip", strip);
        if (desktop && clips.length) {
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: strip, start: "top 72%", end: "bottom 46%", scrub: 0.6 },
          });
          const head = strip.querySelector(".sd-strip__head");
          if (head) tl.fromTo(head, { left: "0%" }, { left: "100%", duration: 1 }, 0);
          clips.forEach((clip, index) => {
            tl.fromTo(clip, { autoAlpha: 0.35 }, { autoAlpha: 1, duration: 0.18 }, index * 0.25 + 0.04);
          });
        } else {
          clips.forEach((clip) => {
            gsap.fromTo(
              clip,
              { autoAlpha: 0.35 },
              {
                autoAlpha: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: { trigger: clip, start: "top 85%", once: true },
              }
            );
          });
        }
      }

      /* Lichttisch-Kacheln: der Schleier hebt sich, die Ecktitel
         werden kräftig, sobald die Kachel im Blick ist */
      gsap.utils.toArray<HTMLElement>(".sd-tile").forEach((tile) => {
        const dim = tile.querySelector(".sd-tile__dim");
        const meta = tile.querySelector(".sd-tile__meta");
        if (dim) {
          gsap.fromTo(dim, { opacity: 0.75 }, {
            opacity: 0,
            ease: "none",
            scrollTrigger: { trigger: tile, start: "top 88%", end: "top 42%", scrub: 0.6 },
          });
        }
        if (meta) {
          gsap.fromTo(meta, { autoAlpha: 0.5 }, {
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: { trigger: tile, start: "top 88%", end: "top 42%", scrub: 0.6 },
          });
        }
      });

      /* Finale: das Portal baut sich über dem bewegten Licht auf,
         der Abspann rollt hinein */
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
          .fromTo(".ld-finale__content", { autoAlpha: 0.15, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.12)
          .fromTo(".sd-credit", { autoAlpha: 0.001, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.09 }, 0.2);
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
