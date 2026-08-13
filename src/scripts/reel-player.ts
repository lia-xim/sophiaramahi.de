/* Purple Frame — Showreel-Player (geteilt zwischen Startseite und
   Showreel-Seite). Eigenes minimales Interface: Play/Pause, Scrubber,
   Zeit, Vollbild. Ohne JS bleiben die nativen Controls vollständig
   bedienbar; mit JS führt das Overlay, und der Zustand wird bei jedem
   Frame hart synchronisiert. */

export function initReelPlayer(): void {
  const reelFrame = document.querySelector<HTMLElement>("[data-reel]");
  if (!reelFrame) return;

  const video = reelFrame.querySelector<HTMLVideoElement>("video");
  const play = reelFrame.querySelector<HTMLButtonElement>("[data-reel-play]");
  const ui = reelFrame.querySelector<HTMLElement>("[data-reel-ui]");
  const toggle = reelFrame.querySelector<HTMLButtonElement>("[data-reel-toggle]");
  const scrub = reelFrame.querySelector<HTMLElement>("[data-reel-scrub]");
  const fill = reelFrame.querySelector<HTMLElement>("[data-reel-fill]");
  const knob = reelFrame.querySelector<HTMLElement>("[data-reel-knob]");
  const time = reelFrame.querySelector<HTMLElement>("[data-reel-time]");
  const full = reelFrame.querySelector<HTMLButtonElement>("[data-reel-full]");

  if (!video || !play || !ui || !toggle || !scrub || !fill || !knob || !time) return;

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
    play.hidden = false;
    ui.hidden = true;
    video.currentTime = 0;
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

  const toggleFullscreen = () => {
    const host = reelFrame as HTMLElement & { requestFullscreen?: () => Promise<void> };
    if (document.fullscreenElement) void document.exitFullscreen();
    else if (host.requestFullscreen) void host.requestFullscreen();
  };

  if (full) full.addEventListener("click", toggleFullscreen);
  video.addEventListener("dblclick", toggleFullscreen);

  /* Tastatur im Player: Leertaste/K spielt und pausiert, F wechselt in den
     Vollbildmodus, Pfeile spulen — Buttons und der Scrubber behalten ihr
     eigenes Verhalten. */
  reelFrame.addEventListener("keydown", (event) => {
    const target = event.target as HTMLElement | null;
    const key = event.key.toLowerCase();
    if (event.key === " " || key === "k") {
      if (event.key === " " && target?.closest("button")) return;
      event.preventDefault();
      if (!play.hidden) {
        start();
        return;
      }
      if (video.paused) void video.play();
      else video.pause();
    } else if (key === "f") {
      event.preventDefault();
      toggleFullscreen();
    } else if ((event.key === "ArrowRight" || event.key === "ArrowLeft") && target !== scrub) {
      event.preventDefault();
      const delta = event.key === "ArrowRight" ? 5 : -5;
      video.currentTime = Math.min(video.duration || 48, Math.max(0, video.currentTime + delta));
      render();
    }
  });
}

initReelPlayer();
