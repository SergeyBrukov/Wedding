"use client";
import { memo, useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollPage = () => {
  const pathname = usePathname();
  const sectionIds = ["about", "schedule", "gallery", "contact"];

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleScroll = () => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    };

    handleScroll();

  }, [pathname]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (!sectionIds.includes(target.id)) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          console.log("Intersecting", entry.target);
          target.classList.add("animate-opacity-in", "opacity-1");
          target.classList.remove("opacity-0");
          observer.unobserve(target);
        }
      });
    }, { threshold: [0, 0.3, 0.5, 0.7, 1] });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (sectionIds.includes(section.id)) {
        intersectionObserver.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        intersectionObserver.unobserve(section);
      });
    };
  }, []);

  return null;
};

export default memo(ScrollPage);
