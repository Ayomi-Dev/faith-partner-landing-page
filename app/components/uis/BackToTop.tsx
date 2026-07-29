"use client";

import { useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-7 right-7 z-50 w-11 h-11 rounded-full bg-navy text-white shadow-card",
        "flex items-center justify-center text-lg",
        "transition-all duration-300 hover:bg-navy-dark hover:-translate-y-1",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      )}
    >
      ↑
    </button>
  );
}