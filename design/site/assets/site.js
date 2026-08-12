/* sophiaramahi.de — Konzept-Interaktionen (Phase 1)
   Bewusst minimal: reine Progressive Enhancement. Ohne JavaScript bleiben
   Navigation, Inhalte, Projektlinks und das Formular vollstaendig nutzbar.
   Die GSAP-Sequenzen aus docs/MOTION-STORYBOARD.md folgen erst in Phase 2. */

(function () {
  "use strict";

  /* Review-Chrome in eingebetteten Vorschauen ausblenden ------------------ */
  if (window.self !== window.top) {
    document.documentElement.setAttribute("data-embedded", "");
  }

  /* Mobile Navigation ---------------------------------------------------- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.toggleAttribute("data-open", !open);
      document.documentElement.style.overflow = open ? "" : "hidden";
    });

    nav.addEventListener("keydown", function (event) {
      if (event.key === "Escape") toggle.click();
    });
  }

  /* Filmstreifen: Blaettern ohne Scroll-Hijacking ------------------------- */
  var strip = document.querySelector("[data-strip]");

  if (strip) {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var progress = document.querySelector("[data-strip-progress]");

    document.querySelectorAll("[data-strip-nav]").forEach(function (button) {
      button.addEventListener("click", function () {
        var direction = button.getAttribute("data-strip-nav") === "prev" ? -1 : 1;
        var step = strip.clientWidth * 0.62;
        strip.scrollBy({
          left: step * direction,
          behavior: reduce ? "auto" : "smooth"
        });
      });
    });

    if (progress) {
      strip.addEventListener(
        "scroll",
        function () {
          var span = strip.scrollWidth - strip.clientWidth;
          var ratio = span > 0 ? strip.scrollLeft / span : 0;
          var visible = strip.clientWidth / strip.scrollWidth;
          progress.style.width = Math.max(visible, 0.12) * 100 + "%";
          progress.style.left = ratio * (100 - Math.max(visible, 0.12) * 100) + "%";
        },
        { passive: true }
      );
    }
  }

  /* Showreel-Player -------------------------------------------------------
     Startet nie von allein und nie mit Ton. Die Quelle wird erst beim ersten
     bewussten Start geladen, davor ist nur das Poster im Netz. */
  var video = document.querySelector("[data-player]");
  var playToggle = document.querySelector("[data-player-toggle]");

  if (video && playToggle) {
    var current = document.querySelector("[data-time-current]");
    var total = document.querySelector("[data-time-total]");
    var scrub = document.querySelector("[data-scrub]");
    var played = document.querySelector("[data-played]");
    var knob = document.querySelector("[data-knob]");
    var sound = document.querySelector("[data-sound]");
    var full = document.querySelector("[data-fullscreen]");

    var clock = function (seconds) {
      if (!isFinite(seconds)) return "--:--";
      var m = Math.floor(seconds / 60);
      var s = Math.floor(seconds % 60);
      return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    };

    var paint = function () {
      var ratio = video.duration ? video.currentTime / video.duration : 0;
      var percent = Math.max(0, Math.min(1, ratio)) * 100;
      if (played) played.style.width = percent + "%";
      if (knob) knob.style.left = percent + "%";
      if (current) current.textContent = clock(video.currentTime);
      if (scrub) scrub.setAttribute("aria-valuenow", Math.round(percent));
    };

    var setIcons = function (playing) {
      playToggle.setAttribute("data-playing", String(playing));
      playToggle.setAttribute(
        "aria-label",
        playing ? "Showreel pausieren" : "Showreel abspielen"
      );
      playToggle.querySelectorAll("[data-icon]").forEach(function (icon) {
        icon.hidden = (icon.getAttribute("data-icon") === "play") === playing;
      });
    };

    playToggle.addEventListener("click", function () {
      if (video.preload === "none") video.preload = "metadata";
      if (video.paused) video.play();
      else video.pause();
    });

    video.addEventListener("play", function () {
      setIcons(true);
    });
    video.addEventListener("pause", function () {
      setIcons(false);
    });
    video.addEventListener("ended", function () {
      setIcons(false);
    });
    video.addEventListener("timeupdate", paint, { passive: true });
    video.addEventListener("loadedmetadata", function () {
      if (total) total.textContent = clock(video.duration);
      paint();
    });

    var seek = function (clientX) {
      if (!video.duration) return;
      var box = scrub.getBoundingClientRect();
      var ratio = (clientX - box.left) / box.width;
      video.currentTime = Math.max(0, Math.min(1, ratio)) * video.duration;
      paint();
    };

    if (scrub) {
      scrub.addEventListener("click", function (event) {
        seek(event.clientX);
      });
      scrub.addEventListener("keydown", function (event) {
        if (!video.duration) return;
        if (event.key === "ArrowRight") video.currentTime += 5;
        else if (event.key === "ArrowLeft") video.currentTime -= 5;
        else return;
        event.preventDefault();
        paint();
      });
    }

    if (sound) {
      sound.addEventListener("click", function () {
        video.muted = !video.muted;
        sound.setAttribute("aria-pressed", String(!video.muted));
        sound.setAttribute(
          "aria-label",
          video.muted ? "Ton einschalten" : "Ton ausschalten"
        );
      });
    }

    if (full) {
      full.addEventListener("click", function () {
        var frame = video.parentElement;
        if (document.fullscreenElement) document.exitFullscreen();
        else if (frame.requestFullscreen) frame.requestFullscreen();
      });
    }
  }
})();
