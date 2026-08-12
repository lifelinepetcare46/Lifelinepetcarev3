"use client";
import { useEffect } from "react";

/**
 * useGSAP — initialise GSAP ScrollTrigger animations.
 * Call once per page with a list of { selector, options } pairs.
 */
export function useGSAP(animations = []) {
  useEffect(() => {
    let gsap, ScrollTrigger, ctx;

    (async () => {
      try {
        const mod = await import("gsap");
        gsap = mod.gsap || mod.default;
        const stMod = await import("gsap/ScrollTrigger");
        ScrollTrigger = stMod.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          animations.forEach(({ selector, ...opts }) => {
            const els = document.querySelectorAll(selector);
            if (!els.length) return;
            gsap.fromTo(
              els,
              opts.from || { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                duration: opts.duration || 0.75,
                ease: opts.ease || "power3.out",
                stagger: opts.stagger || 0.1,
                scrollTrigger: {
                  trigger: els[0],
                  start: opts.start || "top 88%",
                  toggleActions: "play none none none",
                },
                ...opts.to,
              }
            );
          });
        });
      } catch (e) {
        // SSR safe — GSAP not available server-side
      }
    })();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);
}
