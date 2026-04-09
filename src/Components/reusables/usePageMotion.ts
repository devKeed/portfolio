import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageMotion<T extends HTMLElement>() {
  const scopeRef = useRef<T | null>(null);

  useLayoutEffect(() => {
    const scope = scopeRef.current;

    if (!scope) {
      return;
    }

    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
          duration: 1,
        },
      });

      const heroLines = gsap.utils.toArray<HTMLElement>("[data-hero-line]");
      const heroFades = gsap.utils.toArray<HTMLElement>("[data-hero-fade]");
      const heroMedia = gsap.utils.toArray<HTMLElement>("[data-hero-media]");
      const heroScale = gsap.utils.toArray<HTMLElement>("[data-hero-scale]");

      if (heroLines.length > 0) {
        heroTimeline.to(
          heroLines,
          {
            yPercent: 0,
            stagger: 0.08,
          },
          0
        );
      }

      if (heroFades.length > 0) {
        heroTimeline.fromTo(
          heroFades,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.9,
          },
          0.12
        );
      }

      if (heroMedia.length > 0) {
        heroTimeline.fromTo(
          heroMedia,
          {
            opacity: 0,
            scale: 1.06,
            y: 24,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.3,
          },
          0.1
        );
      }

      if (heroScale.length > 0) {
        heroTimeline.fromTo(
          heroScale,
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 1,
          },
          0.25
        );
      }

      gsap.utils
        .toArray<HTMLElement>("[data-animate='up']")
        .forEach((element) => {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              y: 36,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 86%",
              },
            }
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-animate='image']")
        .forEach((element) => {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              scale: 1.08,
              y: 18,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
              },
            }
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-animate='line']")
        .forEach((element) => {
          gsap.fromTo(
            element,
            {
              scaleX: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
              },
            }
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-parallax='soft']")
        .forEach((element) => {
          gsap.to(element, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
    }, scope);

    return () => {
      ctx.revert();
    };
  }, []);

  return scopeRef;
}
