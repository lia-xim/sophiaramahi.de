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

      /* Mobil fährt die Choreografie bewusst kleiner: Auftritte und
         Scroll-Signaturen bleiben, aber Dauerschleifen, Deko-Parallaxen
         und Videohintergründe entfallen — weniger Arbeit pro Frame,
         weniger Akku. Die CSS-Seite spiegelt dieselbe 900px-Grenze. */
      const compact = window.matchMedia("(max-width: 900px)").matches;

      /* Hero: Bild setzt sich, Beam blendet ein, Inhalt steigt auf */
      const heroMedia = root.querySelector(".ld-hero__media img");
      if (heroMedia) {
        gsap.fromTo(heroMedia, { scale: 1.08 }, { scale: 1, duration: 1.4, ease: "power2.out" });
        if (!compact) {
          gsap.fromTo(heroMedia, { yPercent: 0 }, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: { trigger: ".ld-hero", start: "top top", end: "bottom top", scrub: true },
          });
        }
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
          /* Mobil gleiten die Kacheln nur — keine Opacity-Einblendung,
             damit das erste Projektbild sofort gemalt wird (LCP). */
          tiles.forEach((tile) => {
            gsap.fromTo(
              tile,
              { y: 32 },
              {
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
      if (!compact) {
        gsap.utils.toArray<HTMLElement>(".ld-frame img, .ld-chapter__media img, .lw-chapter__media img").forEach((image) => {
          gsap.fromTo(image, { yPercent: -4.5 }, {
            yPercent: 4.5,
            ease: "none",
            scrollTrigger: { trigger: image.closest("a, div") as Element, start: "top bottom", end: "bottom top", scrub: true },
          });
        });
      }

      /* Themenwelten des Leistungs-Hubs */
      // Ambient-Video im Hero: läuft nur, solange es sichtbar ist —
      // mobil bleibt das Poster stehen (kein Video-Download, kein Decode)
      const ambient = compact ? null : root.querySelector<HTMLVideoElement>("[data-ambient-video]");
      if (ambient) {
        ScrollTrigger.create({
          trigger: ambient.closest("section") as Element,
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => {
            if (self.isActive) ambient.play().catch(() => {});
            else ambient.pause();
          },
        });
      }
      // Hero-Inhalt und Sprung-Index treten gestaffelt auf
      const lwHeroContent = root.querySelector(".lw-hero__content");
      if (lwHeroContent) {
        gsap.fromTo(
          lwHeroContent.children,
          { autoAlpha: 0.001, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.1, ease: "power3.out", delay: 0.1 }
        );
        gsap.fromTo(".lw-index a", { autoAlpha: 0.001, x: 24 }, { autoAlpha: 1, x: 0, duration: 0.6, stagger: 0.06, ease: "power2.out", delay: 0.4 });
      }
      // Rhythmusbalken: pulsieren kräftig, solange das Kapitel sichtbar ist
      const bars = compact ? [] : gsap.utils.toArray<HTMLElement>(".lw-bars i");
      if (bars.length) {
        bars.forEach((bar, index) => {
          gsap.to(bar, {
            scaleY: 0.35 + ((index * 41) % 85) / 100,
            transformOrigin: "center bottom",
            duration: 0.55 + ((index * 13) % 7) / 10,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            scrollTrigger: { trigger: ".lw-bars", start: "top bottom", toggleActions: "play pause resume pause" },
          });
        });
      }

      // Musikvideo: die Farbebenen rasten in der Kapitelmitte ein — wie
      // ein Beat-Drop — und lösen sich beim Weiterscrollen wieder
      const splitM = compact ? null : root.querySelector("img.lw-split--m");
      const splitC = compact ? null : root.querySelector("img.lw-split--c");
      if (splitM && splitC) {
        const mvTl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: ".lw-chapter--musikvideo", start: "top bottom", end: "bottom top", scrub: true },
        });
        mvTl
          .fromTo(splitM, { xPercent: -2.6, x: 0, opacity: 0.42 }, { xPercent: -0.2, opacity: 0.22, duration: 0.5 }, 0)
          .fromTo(splitC, { xPercent: 2.6, x: 0, opacity: 0.42 }, { xPercent: 0.2, opacity: 0.22, duration: 0.5 }, 0)
          .to(splitM, { xPercent: -3, opacity: 0.46, duration: 0.5 }, 0.5)
          .to(splitC, { xPercent: 3, opacity: 0.46, duration: 0.5 }, 0.5);
      }
      const pulse = compact ? null : root.querySelector(".lw-mvpulse");
      if (pulse) {
        const pulseTl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: ".lw-chapter--musikvideo", start: "top bottom", end: "bottom top", scrub: true },
        });
        [0.28, 0.5, 0.72].forEach((at) => {
          pulseTl
            .to(pulse, { opacity: 0.8, duration: 0.05 }, at)
            .to(pulse, { opacity: 0, duration: 0.15 }, at + 0.05);
        });
      }
      // Schnitt-Playhead wandert mit dem Scroll über die Timeline
      const timelineHead = root.querySelector(".lw-timeline__head");
      if (timelineHead) {
        gsap.fromTo(timelineHead, { left: "8%" }, {
          left: "88%",
          ease: "none",
          scrollTrigger: { trigger: ".lw-chapter--postproduktion", start: "top bottom", end: "bottom top", scrub: true },
        });
      }
      // Schallringe expandieren spürbar mit dem Scroll
      gsap.utils.toArray<HTMLElement>(".lw-rings i").forEach((ring, index) => {
        gsap.fromTo(ring, { scale: 0.68, opacity: 0.2 }, {
          scale: 1.14 + index * 0.06,
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: ".lw-chapter--tonaufnahme", start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // Tonaufnahme: die Waveform füllt sich, als liefe die Aufnahme mit
      const waveFill = root.querySelector("[data-lw-wavefill]");
      if (waveFill) {
        gsap.fromTo(waveFill, { clipPath: "inset(0 100% 0 0)" }, {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
          scrollTrigger: { trigger: ".lw-chapter--tonaufnahme", start: "top 78%", end: "bottom 40%", scrub: true },
        });
      }
      // Mapping-Raster driftet leicht über die Fläche
      const gridOverlay = root.querySelector(".lw-grid-overlay");
      if (gridOverlay) {
        gsap.fromTo(gridOverlay, { xPercent: -2, opacity: 0.6 }, {
          xPercent: 2,
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: ".lw-chapter--projection-mapping", start: "top bottom", end: "bottom top", scrub: true },
        });
      }
      // Vollbild-Bühnen: sanfte Gegenbewegung des Hintergrunds
      if (!compact) {
        gsap.utils.toArray<HTMLElement>(".lw-chapter__stagebg img:not(.lw-echo)").forEach((image) => {
          gsap.fromTo(image, { yPercent: -5 }, {
            yPercent: 5,
            ease: "none",
            scrollTrigger: { trigger: image.closest("section") as Element, start: "top bottom", end: "bottom top", scrub: true },
          });
        });
      }

      /* Mikroeffekte der Welten */
      const chapterVisible = (selector: string) => ({
        trigger: selector,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play pause resume pause",
      });

      // Scroll-Vignette: am Rand der Szene stark, in der Mitte offen —
      // mobil steht sie ruhig auf ihrem CSS-Wert
      if (!compact) {
        gsap.utils.toArray<HTMLElement>(".lw-vignette").forEach((vignette) => {
          const section = vignette.closest("section") as Element;
          gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true },
          })
            .fromTo(vignette, { opacity: 1 }, { opacity: 0.28, duration: 0.5 })
            .to(vignette, { opacity: 1, duration: 0.5 });
        });
      }

      // Ghost-Nummern ziehen langsam gegen die Scrollrichtung
      if (!compact) {
        gsap.utils.toArray<HTMLElement>(".lw-chapter__ghost").forEach((ghost) => {
          gsap.fromTo(ghost, { yPercent: 16 }, {
            yPercent: -16,
            ease: "none",
            scrollTrigger: { trigger: ghost.closest("section") as Element, start: "top bottom", end: "bottom top", scrub: true },
          });
        });
      }

      // Lichtstaub: jedes Korn treibt in eigener Tiefe
      if (!compact) {
        gsap.utils.toArray<HTMLElement>(".lw-dust i").forEach((dot, index) => {
          gsap.fromTo(dot, { y: 30 + (index % 3) * 22 }, {
            y: -(30 + ((index + 1) % 3) * 26),
            ease: "none",
            scrollTrigger: { trigger: dot.closest("section") as Element, start: "top bottom", end: "bottom top", scrub: true },
          });
        });
      }

      // Eventfilm: die Scheinwerfer schwenken mit dem Scroll über die
      // Bühne, der Verfolger-Spot wandert unter ihnen durch
      const eventScrub = {
        trigger: ".lw-chapter--eventfilm",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      };
      const beam = root.querySelector(".lw-beam:not(.lw-beam--b)");
      if (beam) {
        gsap.fromTo(beam, { rotation: -8, xPercent: -7, transformOrigin: "top center" }, {
          rotation: 9,
          xPercent: 7,
          ease: "none",
          scrollTrigger: eventScrub,
        });
      }
      const beamB = root.querySelector(".lw-beam--b");
      if (beamB) {
        gsap.fromTo(beamB, { rotation: 7, xPercent: 6, transformOrigin: "top center" }, {
          rotation: -9,
          xPercent: -6,
          ease: "none",
          scrollTrigger: eventScrub,
        });
      }
      const spot = root.querySelector(".lw-spot");
      if (spot) {
        gsap.fromTo(spot, { xPercent: -25, opacity: 0.35 }, {
          xPercent: 150,
          opacity: 0.95,
          ease: "none",
          scrollTrigger: eventScrub,
        });
      }

      // Imagefilm: das Glühen atmet (nur Desktop — mobil steht es ruhig)
      const glow = compact ? null : root.querySelector(".lw-glow");
      if (glow) {
        gsap.to(glow, {
          scale: 1.12,
          opacity: 0.75,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          scrollTrigger: chapterVisible(".lw-chapter--imagefilm"),
        });
      }

      // Imagefilm: der Fokus wird gezogen — das Bild kommt unscharf aus
      // dem Dunkel und zieht mit dem Scroll scharf; der Startwert spiegelt
      // exakt den CSS-Zustand unter html.motion
      const focusImg = root.querySelector(".lw-chapter--imagefilm .lw-chapter__stagebg img");
      if (focusImg) {
        const blurFrom = window.matchMedia("(max-width: 900px)").matches ? 8 : 16;
        gsap.fromTo(focusImg, { filter: `blur(${blurFrom}px)` }, {
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: { trigger: ".lw-chapter--imagefilm", start: "top 85%", end: "center 55%", scrub: true },
        });
      }
      const iris = root.querySelector(".lw-iris i");
      if (iris) {
        gsap.fromTo(iris, { scale: 0.72, opacity: 0.05 }, {
          scale: 1.08,
          opacity: 0.9,
          ease: "none",
          scrollTrigger: { trigger: ".lw-chapter--imagefilm", start: "top 90%", end: "center 50%", scrub: true },
        });
      }
      const af = root.querySelector(".lw-af");
      if (af) {
        gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: ".lw-chapter--imagefilm", start: "top 60%", end: "center 42%", scrub: true },
        })
          .fromTo(af, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35 }, 0)
          .to(af, { autoAlpha: 0.6, duration: 0.3 }, 0.7);
      }

      // Kamera: Brennweitenzug — das Bild zoomt mit dem Scroll, die
      // mm-Anzeige zählt mit und der Sucher zieht sich leicht zusammen
      const kamScrub = {
        trigger: ".lw-chapter--kamera-bildgestaltung",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      };
      const kamImg = root.querySelector(".lw-chapter--kamera-bildgestaltung .lw-chapter__stagebg img");
      if (kamImg) {
        gsap.fromTo(kamImg, { scale: 1, transformOrigin: "50% 42%" }, {
          scale: 1.22,
          ease: "none",
          scrollTrigger: kamScrub,
        });
      }
      const mmValue = root.querySelector("[data-lw-mm]");
      if (mmValue) {
        const zoom = { mm: 24 };
        gsap.to(zoom, {
          mm: 70,
          ease: "none",
          onUpdate: () => {
            mmValue.textContent = String(Math.round(zoom.mm));
          },
          scrollTrigger: kamScrub,
        });
      }
      const finder = root.querySelector(".lw-finder");
      if (finder) {
        gsap.fromTo(finder, { scale: 1, transformOrigin: "center" }, {
          scale: 0.93,
          ease: "none",
          scrollTrigger: kamScrub,
        });
      }

      // Kamera: Fadenkreuz driftet wie aus der Hand geführt (nur Desktop)
      const cross = compact ? null : root.querySelector(".lw-finder__cross");
      if (cross) {
        gsap.to(cross, {
          x: 10,
          y: -7,
          duration: 3.6,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          scrollTrigger: chapterVisible(".lw-chapter--kamera-bildgestaltung"),
        });
      }

      // Live Visuals: das Projektions-Echo flackert leicht (nur Desktop)
      const echo = compact ? null : root.querySelector(".lw-echo");
      if (echo) {
        gsap.to(echo, {
          opacity: 0.22,
          xPercent: 0.8,
          duration: 1.6,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          scrollTrigger: chapterVisible(".lw-chapter--live-visuals"),
        });
      }

      // Postproduktion: die Clips setzen sich nacheinander in die Spur
      const clips = gsap.utils.toArray<HTMLElement>(".lw-timeline i");
      if (clips.length) {
        gsap.fromTo(clips, { scaleX: 0, transformOrigin: "left center" }, {
          scaleX: 1,
          duration: 0.55,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: ".lw-timeline", start: "top 92%", once: true },
        });
      }

      // Mapping: die Scan-Linie tastet die Fläche von oben nach unten ab —
      // mobil bleibt sie aus (CSS blendet sie unter 900px auf opacity 0)
      const scan = compact ? null : root.querySelector(".lw-scan");
      if (scan) {
        const scanTl = gsap.timeline({ repeat: -1, repeatDelay: 1.2, scrollTrigger: chapterVisible(".lw-chapter--projection-mapping") });
        scanTl
          .fromTo(scan, { top: "10%", opacity: 0 }, { opacity: 0.9, duration: 0.8, ease: "sine.out" }, 0)
          .to(scan, { top: "88%", duration: 6, ease: "none" }, 0)
          .to(scan, { opacity: 0, duration: 0.8, ease: "sine.in" }, 5.2);
      }

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

      /* Finale: das Portal baut sich auf — optional über bewegtem Licht.
         Mobil bleibt das Poster stehen statt des Videos. */
      const portal = root.querySelector(".ld-finale__portal");
      if (portal) {
        const finaleVideo = compact ? null : root.querySelector<HTMLVideoElement>("[data-finale-video]");
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
