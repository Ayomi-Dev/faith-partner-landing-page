"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";

/** Mounts the global scroll-reveal observer. Drop inside the root page. */
export function ScrollRevealProvider() {
  useScrollReveal();
  return null;
}