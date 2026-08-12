/* Purple Frame v2 — Scroll-Choreografie der Startseite.
   Progressive Enhancement: läuft nur mit `html.motion` (Inline-Gate im Head,
   respektiert prefers-reduced-motion). Scheitert der GSAP-Import, wird die
   Klasse entfernt und jede Szene fällt in ihren offenen Grundzustand. */

export {};

const root = document.querySelector<HTMLElement>("[data-home]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const motionActive = document.documentElement.classList.contains("motion");

/* Showreel: eigener minimaler Player (Play/Pause, Scrubber, Zeit, Vollbild).
   Ohne JS bleiben die nativen Controls vollständig bedienbar. */
const reelFrame = document.querySelector<HTMLElement>("[data-reel]");
if (reelFrame) {
  const video = reelFrame.querySelector<HTMLVideoElement>("video");
  const play = reelFrame.querySelector<HTMLButtonElement>("[data-reel-play]");
  const ui = reelFrame.querySelector<HTMLElement>("[data-reel-ui]");
  const toggle = reelFrame.querySelector<HTMLButtonElement>("[data-reel-toggle]");
  const scrub = reelFrame.querySelector<HTMLElement>("[data-reel-scrub]");
  const fill = reelFrame.querySelector<HTMLElement>("[data-reel-fill]");
  const knob = reelFrame.querySelector<HTMLElement>("[data-reel-knob]");
  const time = reelFrame.querySelector<HTMLElement>("[data-reel-time]");
  const full = reelFrame.querySelector<HTMLButtonElement>("[data-reel-full]");

  if (video && play && ui && toggle && scrub && fill && knob && time) {
    video.removeAttribute("controls");
    play.hidden = false;

    const format = (seconds: number) => {
      const safe = Number.isFinite(seconds) ? Math.max(0, Math.round(seconds)) : 0;
      return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, "0")}`;
    };

    const render = () => {
      const duration = video.duration || 48;
      const progress = duration > 0 ? video.currentTime / duration : 0;
      fill.style.transform = `translateY(-50%) scaleX(${progress})`;
      knob.style.left = `${progress * 100}%`;
      time.textContent = `${format(video.currentTime)} / ${format(duration)}`;
      scrub.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
      ui.dataset.state = video.paused ? "paused" : "playing";
      /* Zustands-Sync: sobald das Video läuft oder angespielt wurde, gehört
         die Fläche dem Player — das Start-Overlay darf nie darüber liegen. */
      if (!video.paused || video.currentTime > 0.05) {
        play.hidden = true;
        ui.hidden = false;
      }
    };

    const start = () => {
      play.hidden = true;
      ui.hidden = false;
      ui.classList.add("is-visible");
      window.setTimeout(() => ui.classList.remove("is-visible"), 2400);
      void video.play();
    };

    play.addEventListener("click", start);
    toggle.addEventListener("click", () => {
      if (video.paused) void video.play();
      else video.pause();
    });
    video.addEventListener("click", () => {
      if (!play.hidden) return;
      if (video.paused) void video.play();
      else video.pause();
    });
    video.addEventListener("play", render);
    video.addEventListener("pause", render);
    video.addEventListener("timeupdate", render);
    video.addEventListener("loadedmetadata", render);
    video.addEventListener("ended", () => {
      video.currentTime = 0;
      video.pause();
      ui.hidden = true;
      play.hidden = false;
    });

    const seekFromEvent = (event: PointerEvent) => {
      const rect = scrub.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      if (Number.isFinite(video.duration)) video.currentTime = ratio * video.duration;
      render();
    };
    scrub.addEventListener("pointerdown", (event) => {
      scrub.setPointerCapture(event.pointerId);
      seekFromEvent(event);
    });
    scrub.addEventListener("pointermove", (event) => {
      if (event.buttons > 0) seekFromEvent(event);
    });
    scrub.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const delta = event.key === "ArrowRight" ? 5 : -5;
        video.currentTime = Math.min(video.duration || 48, Math.max(0, video.currentTime + delta));
        render();
      }
    });

    if (full) {
      full.addEventListener("click", () => {
        const host = reelFrame as HTMLElement & { requestFullscreen?: () => Promise<void> };
        if (document.fullscreenElement) void document.exitFullscreen();
        else if (host.requestFullscreen) void host.requestFullscreen();
      });
    }
  }
}

if (root && motionActive && !reduceMotion) {
  /* Scroll-Restauration deaktivieren: Ein Reload mitten in der Erzählung
     würde sonst Pins und Startzustände gegeneinander verschieben. */
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
    .then(([gsapModule, triggerModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ ignoreMobileResize: true });

      /* Der stumme Hero-Loop läuft nur im Motion-Modus. */
      const heroVideo = root.querySelector<HTMLVideoElement>("[data-hero-video]");
      if (heroVideo) {
        heroVideo.play().catch(() => {
          /* Autoplay verweigert: das Poster bleibt stehen. */
        });
      }

      const mm = gsap.matchMedia();

      /* ---------- 1 · Ouvertüre: Blende öffnet das laufende Bild ---------- */
      const ouvertuere = (pinned: boolean) => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".ouv",
            start: "top top",
            end: pinned ? "+=115%" : "+=72%",
            scrub: 0.6,
            pin: pinned,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        tl.fromTo(".ouv__media video", { scale: 1.12 }, { scale: 1, duration: 0.9 }, 0)
          .fromTo(".ouv__media", { opacity: 0.5 }, { opacity: 1, duration: 0.5 }, 0.05)
          .fromTo(".ouv__slit", { opacity: 1, scaleX: 1 }, { opacity: 0, scaleX: 30, duration: 0.34 }, 0.08)
          .fromTo(".ouv__shutter--left", { xPercent: 0 }, { xPercent: -103, duration: 0.5 }, 0.08)
          .fromTo(".ouv__shutter--right", { xPercent: 0 }, { xPercent: 103, duration: 0.5 }, 0.08)
          .to(".ouv__line--1", { yPercent: -12, duration: 0.5 }, 0.42)
          .to(".ouv__line--2", { yPercent: -26, duration: 0.5 }, 0.42)
          .to(".ouv__line--3", { yPercent: -42, duration: 0.5 }, 0.42)
          .to(".ouv__scroll", { autoAlpha: 0, duration: 0.1 }, 0.05);
        if (pinned) {
          /* Weicher Übergang: das Bild löst sich zurück in die Dunkelheit,
             aus der das Manifest sein Licht aufbaut. */
          tl.to(".ouv__content", { autoAlpha: 0, y: -48, duration: 0.2 }, 0.78)
            .to(".ouv__media", { opacity: 0.12, duration: 0.22 }, 0.78)
            .to(".ouv__media video", { scale: 1.05, duration: 0.22 }, 0.78);
        }
        return tl;
      };

      /* ---------- 2 · Manifest: Wörter leuchten im Licht auf ---------- */
      const manifest = () => {
        const words = gsap.utils.toArray<HTMLElement>(".manifest__word");
        const accent = root.querySelector<HTMLElement>(".manifest__word--accent");
        if (words.length === 0) return;
        const step = 0.72 / words.length;
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".manifest",
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
        /* Kegel und Glow entstehen erst, wenn die Szene wirklich steht —
           kein Lichtsaum an der Grenze zum auslaufenden Hero. */
        tl.fromTo(".manifest__cone", { opacity: 0, rotate: -7, xPercent: -6 }, { opacity: 1, rotate: -2, xPercent: 4, duration: 0.82 }, 0.18)
          .fromTo(".manifest__glow", { opacity: 0, scale: 0.7, yPercent: 18 }, { opacity: 1, scale: 1.1, yPercent: -10, duration: 0.82 }, 0.18)
          .fromTo(".manifest__floor", { scaleX: 0.1, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.7 }, 0.15)
          .to({}, { duration: 0.14 });
      };

      /* ---------- 3 · Projektreise (Desktop horizontal) ---------- */
      const reiseDesktop = () => {
        const track = root.querySelector<HTMLElement>(".reise__track");
        const counter = root.querySelector<HTMLElement>("[data-reise-current]");
        const frames = gsap.utils.toArray<HTMLElement>(".reise__frame");
        if (!track || frames.length === 0) return;
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

        /* Fokus-Vignette: das Projekt nahe der Bildschirmmitte bleibt hell,
           die Nachbarn dunkeln ab. */
        const updateDim = () => {
          const mid = window.innerWidth / 2;
          frames.forEach((frame) => {
            const rect = frame.getBoundingClientRect();
            const center = rect.left + rect.width / 2;
            const dist = Math.min(1, Math.abs(center - mid) / (window.innerWidth * 0.72));
            frame.style.setProperty("--dim", (dist * 0.55).toFixed(3));
          });
        };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".reise",
            start: "top top",
            end: "+=240%",
            scrub: 0.9,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              updateDim();
              if (!counter) return;
              const index = Math.min(frames.length, Math.round(self.progress * (frames.length - 1)) + 1);
              counter.textContent = String(index).padStart(2, "0");
            },
            onRefresh: () => updateDim(),
          },
        });
        /* Sanft anfahren, sanft ausrollen: die Ease liegt IN der Timeline,
           der Scrub glättet zusätzlich. */
        tl.to(track, { x: () => -distance(), duration: 1, ease: "power1.inOut" }, 0);
        frames.forEach((frame) => {
          const image = frame.querySelector("img");
          if (image) tl.fromTo(image, { xPercent: -4 }, { xPercent: 4, duration: 1, ease: "power1.inOut" }, 0);
        });
        tl.fromTo(".reise__progress i", { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "power1.inOut" }, 0);
        updateDim();
      };

      /* ---------- 3 · Projektreise (Mobil vertikal) ---------- */
      const reiseMobil = () => {
        const frames = gsap.utils.toArray<HTMLElement>(".reise__frame");
        const counter = root.querySelector<HTMLElement>("[data-reise-current]");
        frames.forEach((frame) => {
          const image = frame.querySelector("img");
          if (image) {
            gsap.fromTo(
              image,
              { yPercent: -5 },
              {
                yPercent: 5,
                ease: "none",
                scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true },
              }
            );
          }
          gsap.fromTo(
            frame,
            { autoAlpha: 0.001, y: 36 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: { trigger: frame, start: "top 88%", once: true },
            }
          );
        });
        gsap.fromTo(".reise__progress i", { scaleX: 0 }, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".reise__track",
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
            onUpdate: (self) => {
              if (!counter) return;
              const index = Math.min(frames.length, Math.round(self.progress * (frames.length - 1)) + 1);
              counter.textContent = String(index).padStart(2, "0");
            },
          },
        });
      };

      /* ---------- 4 · Kinosaal (Desktop): Leinwand wächst aus der Tiefe ---------- */
      const kinosaalDesktop = () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          /* Direktes Scrub ohne Nachlauf: kein Auf- und Abpumpen der Leinwand
             beim schnellen Hineinscrollen. */
          scrollTrigger: { trigger: ".reel", start: "top top", end: "bottom bottom", scrub: true },
        });
        tl.fromTo(".reel__frame", { scale: 0.55, y: "9vh" }, { scale: 1, y: 0, duration: 0.45, ease: "power1.out" }, 0)
          .fromTo(".reel__beam", { opacity: 0 }, { opacity: 0.45, duration: 0.3 }, 0.04)
          .fromTo(".reel__bar--top", { scaleY: 1 }, { scaleY: 0, duration: 0.18 }, 0.42)
          .fromTo(".reel__bar--bottom", { scaleY: 1 }, { scaleY: 0, duration: 0.18 }, 0.42)
          .fromTo(".reel__note", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.12 }, 0.56)
          /* Danach bleibt der Saal lange ruhig stehen: Raum zum Abspielen. */
          .to({}, { duration: 0.4 });
        return tl;
      };

      /* ---------- 4 · Kinosaal (Mobil): Letterbox öffnet beim Eintreten ---------- */
      const kinosaalMobil = () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: ".reel__frame", start: "top 88%", end: "top 38%", scrub: true },
        });
        tl.fromTo(".reel__frame", { scale: 0.94 }, { scale: 1, duration: 1 }, 0)
          .fromTo(".reel__bar--top", { scaleY: 1 }, { scaleY: 0, duration: 0.6 }, 0.3)
          .fromTo(".reel__bar--bottom", { scaleY: 1 }, { scaleY: 0, duration: 0.6 }, 0.3)
          .fromTo(".reel__beam", { opacity: 0 }, { opacity: 0.45, duration: 1 }, 0)
          .fromTo(".reel__note", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, 0.7);
      };

      /* ---------- 5 · Bühne: klebende Medienstage (Desktop) ---------- */
      const buehneDesktop = () => {
        const media = gsap.utils.toArray<HTMLElement>(".buehne__medium");
        const chapters = gsap.utils.toArray<HTMLElement>(".buehne__chapter");
        const label = root.querySelector<HTMLElement>("[data-stage-label]");
        const count = root.querySelector<HTMLElement>("[data-stage-count]");
        if (media.length === 0 || chapters.length === 0) return;
        const activate = (chapter: HTMLElement) => {
          const slug = chapter.dataset.chapter;
          media.forEach((layer) => layer.classList.toggle("is-active", layer.dataset.medium === slug));
          chapters.forEach((item) => {
            if (item === chapter) item.removeAttribute("data-dimmed");
            else item.setAttribute("data-dimmed", "");
          });
          if (label) label.textContent = `K ${chapter.dataset.chapterIndex} · ${chapter.dataset.chapterTitle}`;
          if (count) count.textContent = `${chapter.dataset.chapterIndex} / ${String(chapters.length).padStart(2, "0")}`;
        };
        activate(chapters[0]);
        chapters.forEach((chapter) => {
          ScrollTrigger.create({
            trigger: chapter,
            start: "top 58%",
            end: "bottom 58%",
            onToggle: (self) => {
              if (self.isActive) activate(chapter);
            },
          });
        });
      };

      /* ---------- 7 · Schnitt-Timeline ---------- */
      const schnitt = () => {
        const steps = gsap.utils.toArray<HTMLElement>(".cut__step");
        const clips = gsap.utils.toArray<HTMLElement>(".cut__clip");
        const fills = gsap.utils.toArray<HTMLElement>(".cut__fill");
        const playhead = root.querySelector<HTMLElement>(".cut__playhead");
        if (steps.length === 0 || !playhead) return;
        const total = steps.length;
        ScrollTrigger.create({
          trigger: ".cut",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const p = self.progress;
            const position = Math.min(total - 0.0001, p * total);
            const index = Math.floor(position);
            gsap.set(playhead, { left: `${p * 100}%` });
            steps.forEach((stepEl, i) => stepEl.classList.toggle("is-active", i === index));
            clips.forEach((clip, i) => clip.classList.toggle("is-active", i === index));
            fills.forEach((fill, i) => {
              gsap.set(fill, { scaleX: Math.max(0, Math.min(1, position - i)) });
            });
          },
        });
      };

      /* ---------- Gemeinsame Szenen ---------- */
      const gemeinsam = () => {
        // 5 · Kapitel-Reveal
        gsap.utils.toArray<HTMLElement>(".buehne__chapter").forEach((chapter) => {
          gsap.fromTo(
            chapter,
            { autoAlpha: 0.001, y: 26 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: { trigger: chapter, start: "top 88%", once: true },
            }
          );
        });

        // 6 · Porträt: Masken-Reveal + durchgehende Bewegung beim Scrollen
        const frame = root.querySelector<HTMLElement>(".portraet__frame");
        if (frame) {
          gsap.to(frame, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: { trigger: ".portraet", start: "top 68%", once: true },
          });
          /* Der Rahmen bleibt in Bewegung: er wandert und richtet sich beim
             Durchscrollen leicht auf, das Bild schiebt gegenläufig. */
          gsap.fromTo(frame, { y: 70, rotation: 3.2 }, {
            y: -70,
            rotation: 0.6,
            ease: "none",
            scrollTrigger: { trigger: ".portraet", start: "top bottom", end: "bottom top", scrub: true },
          });
          const image = frame.querySelector("img");
          if (image) {
            gsap.fromTo(image, { yPercent: -5 }, {
              yPercent: 5,
              ease: "none",
              scrollTrigger: { trigger: ".portraet", start: "top bottom", end: "bottom top", scrub: true },
            });
          }
        }
        /* Auch die Textseite lebt: Credits driften minimal gegenläufig. */
        gsap.fromTo(".portraet__copy", { y: -14 }, {
          y: 26,
          ease: "none",
          scrollTrigger: { trigger: ".portraet", start: "top bottom", end: "bottom top", scrub: true },
        });
        gsap.fromTo(".portraet__ghost", { xPercent: -3 }, {
          xPercent: 3,
          ease: "none",
          scrollTrigger: { trigger: ".portraet", start: "top bottom", end: "bottom top", scrub: true },
        });
        gsap.fromTo(".portraet__glow", { yPercent: 14 }, {
          yPercent: -14,
          ease: "none",
          scrollTrigger: { trigger: ".portraet", start: "top bottom", end: "bottom top", scrub: true },
        });

        /* Abspann: Credits erscheinen Zeile für Zeile, die Lichtlinien ziehen nach */
        const credits = gsap.utils.toArray<HTMLElement>(".portraet__credit");
        if (credits.length) {
          const creditsTl = gsap.timeline({
            scrollTrigger: { trigger: ".portraet__credits", start: "top 82%", once: true },
          });
          credits.forEach((credit, index) => {
            const line = credit.querySelector("i");
            creditsTl.fromTo(credit, { autoAlpha: 0.001, x: -18 }, { autoAlpha: 1, x: 0, duration: 0.5, ease: "power2.out" }, index * 0.14);
            if (line) creditsTl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.55, ease: "power2.out" }, index * 0.14 + 0.1);
          });
        }

        // 8 · Region: Lichtspuren und Ortsnamen
        gsap.utils.toArray<HTMLElement>(".region__group").forEach((group) => {
          const beam = group.querySelector(".region__beam");
          const cities = group.querySelectorAll(".region__cities a");
          const tl = gsap.timeline({
            scrollTrigger: { trigger: group, start: "top 86%", once: true },
          });
          if (beam) tl.fromTo(beam, { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power2.out" }, 0);
          if (cities.length) {
            tl.fromTo(
              cities,
              { autoAlpha: 0.001, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" },
              0.1
            );
          }
        });
        gsap.fromTo(".region__basis", { autoAlpha: 0.001, y: 28 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ".region__basis", start: "top 88%", once: true },
        });

        // 9 · Finale: das Licht aus der Ouvertüre kehrt zurück
        const finaleVideo = root.querySelector<HTMLVideoElement>("[data-finale-video]");
        if (finaleVideo) {
          ScrollTrigger.create({
            trigger: ".finale",
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
          scrollTrigger: { trigger: ".finale", start: "top 82%", end: "center 48%", scrub: 0.5 },
        });
        finaleTl
          .fromTo(".finale__media", { opacity: 0 }, { opacity: 1, duration: 0.9 }, 0)
          .fromTo(".finale__media video", { scale: 1.1 }, { scale: 1, duration: 1 }, 0)
          .fromTo(".finale__slit", { width: "8vw", opacity: 0.4 }, { width: "min(30vw, 320px)", opacity: 0.9, duration: 0.5 }, 0)
          .fromTo(".finale__portal", { scaleY: 0.1, opacity: 0.15 }, { scaleY: 1, opacity: 0.85, duration: 1 }, 0.1)
          .fromTo(".finale__horizon", { scaleX: 0.16, opacity: 0 }, { scaleX: 1, opacity: 0.75, duration: 1 }, 0.05)
          .fromTo(".finale__content", { autoAlpha: 0.15, y: 36 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.15);
      };

      /* Leicht magnetische Primäraktion (nur Zeiger-Geräte) */
      const magnetisch = () => {
        const cta = root.querySelector<HTMLElement>("[data-magnetic]");
        if (!cta || !window.matchMedia("(pointer: fine)").matches) return;
        const setX = gsap.quickTo(cta, "x", { duration: 0.4, ease: "power3.out" });
        const setY = gsap.quickTo(cta, "y", { duration: 0.4, ease: "power3.out" });
        cta.addEventListener("mousemove", (event) => {
          const rect = cta.getBoundingClientRect();
          const dx = event.clientX - (rect.left + rect.width / 2);
          const dy = event.clientY - (rect.top + rect.height / 2);
          setX(dx * 0.18);
          setY(dy * 0.3);
        });
        cta.addEventListener("mouseleave", () => {
          setX(0);
          setY(0);
        });
      };

      mm.add("(min-width: 861px)", () => {
        ouvertuere(true);
        reiseDesktop();
        kinosaalDesktop();
        buehneDesktop();
      });

      mm.add("(max-width: 860px)", () => {
        ouvertuere(false);
        reiseMobil();
        kinosaalMobil();
      });

      manifest();
      schnitt();
      gemeinsam();
      magnetisch();

      window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
    })
    .catch(() => {
      document.documentElement.classList.remove("motion");
    });
} else if (!motionActive || reduceMotion) {
  document.documentElement.classList.remove("motion");
}
