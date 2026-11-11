"use client";

import { useEffect } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>(".project"));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("reveal-entered");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

    for (const section of sections) {
      // O conteúdo que já está visível nunca deve piscar ou desaparecer.
      if (section.getBoundingClientRect().top < window.innerHeight - 24) continue;
      section.classList.add("reveal-pending");
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
