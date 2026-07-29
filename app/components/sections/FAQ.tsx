"use client";

import { useState } from "react";
import { SectionLabel } from "@/app/components/uis/SectionLabel";
import { FAQS } from "@/app/lib/constants";
import { cn } from "@/app/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-head font-bold text-navy text-3xl sm:text-4xl leading-tight">
            Questions Parents Ask Most
          </h2>
        </div>

        <div className="max-w-140 mx-auto space-y-3 reveal">
          {FAQS.map((faq, i) => (
            <div key={i} className={cn("border rounded-xl overflow-hidden bg-white transition-colors", open === i ? "border-navy/30" : "border-gray-200")}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full flex items-center justify-between gap-3 px-6 py-5 text-left font-head font-semibold text-navy text-[0.975rem] hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                <span
                  className={cn(
                    "text-yellow-700 text-xl shrink-0 transition-transform duration-300",
                    open === i && "rotate-45"
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-400",
                  open === i ? "max-h-60" : "max-h-0"
                )}
              >
                <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}