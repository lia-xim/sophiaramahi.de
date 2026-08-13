/* Journal-Artikel: schmale Leseleiste unter dem Header. Rein
   positionsgetrieben (kein GSAP nötig) — ohne JS bleibt die Leiste
   unsichtbar, mit reduzierter Bewegung zeigt sie schlicht den Stand. */

export {};

const bar = document.querySelector<HTMLElement>("[data-article-progress]");
const body = document.querySelector<HTMLElement>("[data-article]");

if (bar && body) {
  let ticking = false;
  const update = () => {
    ticking = false;
    const rect = body.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
    bar.style.transform = `scaleX(${progress})`;
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}
