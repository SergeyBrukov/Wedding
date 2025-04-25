"use client";
import { memo, useEffect, useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const pathnameWithOutScrollToTop = ["gallery/add-photos-of-guasts"];

const ScrollPage = () => {
  const pathname = usePathname();
  const sectionIds = ["about", "schedule", "gallery", "contact", "map"];

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleScroll = () => {
      if (pathnameWithOutScrollToTop.some((path) => pathname.includes(path))) {
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    };

    handleScroll();

  }, [pathname]);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;

        if (!sectionIds.includes(target.id)) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
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
  }, [pathname]);

  useEffect(() => {
    const anchor = window.location.hash.split("#")[1];
    if (anchor) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [pathname]);

  return null;
};

export default memo(ScrollPage);
