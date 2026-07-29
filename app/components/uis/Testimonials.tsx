"use client";

import { TESTIMONIALS } from "@/app/lib/constants";
import { useState, useCallback } from "react";
import { SectionLabel } from "./SectionLabel";
import { cn } from "@/app/lib/utils";


export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % TESTIMONIALS.length), []);

  /* Show 3 on desktop, 1 on mobile */
  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(TESTIMONIALS[(current + i) % TESTIMONIALS.length]);
    }
    return items;
  };

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-head font-bold text-navy text-3xl sm:text-4xl leading-tight mb-4">
            What Our Community Says
          </h2>
          <p className="text-gray-500 max-w-120 mx-auto leading-relaxed">
            Hear directly from the parents, students, and alumni who have experienced the Greenfield difference.
          </p>
        </div>

        {/* Cards — desktop: 3-up, mobile: 1 */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mobile: show only current */}
          <div className="md:hidden">
            <TestimonialCard t={TESTIMONIALS[current]} />
          </div>
          {/* Desktop: show 3 */}
          {getVisible().map((t, i) => (
            <div key={`${t.name}-${i}`} className="hidden md:block">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center
                       text-lg hover:border-navy hover:bg-navy hover:text-white transition-all"
          >
            ‹
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === current ? "w-6 bg-navy" : "w-2 bg-gray-200"
                )}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center
                       text-lg hover:border-navy hover:bg-navy hover:text-white transition-all"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-card h-full flex flex-col">
      <div className="text-gold tracking-widest mb-4 text-sm">★★★★★</div>
      <p className="text-gray-700 text-[0.95rem] leading-relaxed italic flex-1 mb-6">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-11 h-11 rounded-full flex items-center justify-center font-head font-bold text-white text-[1rem] shrink-0",
          t.avatarBg,
          "avatarText" in t ? t.avatarText : ""
        )}>
          {t.initials}
        </div>
        <div>
          <p className="font-head font-bold text-navy text-[0.9rem]">{t.name}</p>
          <p className="text-gray-500 text-[0.78rem]">{t.role}</p>
        </div>
      </div>
    </div>
  );
}