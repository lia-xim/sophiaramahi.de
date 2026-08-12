const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  document.documentElement.classList.add("motion-ready");
  Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
    const gsap = gsapModule.default;
    const ScrollTrigger = triggerModule.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray<HTMLElement>(".section [data-reveal], .band [data-reveal], .article-body [data-reveal]").forEach((element) => {
      gsap.fromTo(element, { autoAlpha: 0.001, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.62, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
    });
    gsap.utils.toArray<HTMLElement>("[data-media-reveal]").forEach((element) => {
      gsap.fromTo(element, { clipPath: "inset(14% 0 0 0)", autoAlpha: 0.001 }, { clipPath: "inset(0% 0 0 0)", autoAlpha: 1, duration: 0.72, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 86%", once: true } });
    });
  }).catch(() => document.documentElement.classList.remove("motion-ready"));
}
