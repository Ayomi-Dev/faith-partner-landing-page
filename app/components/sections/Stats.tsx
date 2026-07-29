"use client";

import { useCounter } from "@/app/hooks/useCounter";
import { STATS } from "@/app/lib/constants";


export function Stats() {
  return (
    <section id="stats" className="bg-navy py-20" aria-label="School statistics">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ icon, target, suffix, label }: (typeof STATS)[number]) {
  const { count, ref } = useCounter(target);

  return (
    <div className="reveal">
      <div className="text-2xl mb-2" aria-hidden="true">{icon}</div>
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="block font-head font-extrabold text-gold text-4xl lg:text-5xl counter-num tabular-nums"
        aria-label={`${target}${suffix}`}
      >
        {count}{suffix}
      </span>
      <p className="text-white/65 text-sm mt-1.5 font-medium">{label}</p>
    </div>
  );
}