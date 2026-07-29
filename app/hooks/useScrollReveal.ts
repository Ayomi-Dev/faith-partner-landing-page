"use client";
import { useEffect } from "react";
 
/**
 * Attaches an IntersectionObserver to all elements that have
 * class="reveal", "reveal-left", or "reveal-right".
 * Adds "visible" when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right"
    );
 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
 
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
 