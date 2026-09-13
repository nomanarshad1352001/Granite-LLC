"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function SiteMotion() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main > section, main > div > section"));
    sections.forEach((section, index) => {
      section.classList.add("lux-reveal");
      if (index === 0) section.classList.add("is-visible");
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -50px 0px" });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return <div className="fixed left-0 top-0 z-[100] h-[2px] bg-gradient-to-r from-[#c9ad70] via-[#c9ad70] to-[#c9ad70] transition-[width] duration-100" style={{ width: `${progress}%` }} />;
}
