"use client";
import { memo, useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollPage = () => {
  const pathname = usePathname();
  const sectionIds = ["about", "schedule", "gallery", "contact"];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (!sectionIds.some(item => item === target.id)) {
          return;
        }
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          console.log("Intersecting", entry.target);
          target.classList.add("animate-opacity-in");
          target.classList.remove("opacity-0");
          target.classList.add("opacity-1");
          observer.unobserve(target);
        }
      });
    }, {
      threshold: [0, 0.2, 0.3, 0.5, 1],
    });


    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (sectionIds.some(item => item === section.id)) {
        intersectionObserver.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (sectionIds.some(item => item === section.id)) {
          intersectionObserver.observe(section);
        }
      });
    };
  }, [pathname]);

  return <></>;
};

export default memo(ScrollPage);
