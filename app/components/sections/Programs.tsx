import { PROGRAMS } from "@/app/lib/constants";
import { SectionLabel } from "../uis/SectionLabel";
import { cn } from "@/app/lib/utils";
import { Button } from "../uis/Button";


export function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <SectionLabel>Academic Programs</SectionLabel>
          <h2 className="font-head font-bold text-navy text-3xl sm:text-4xl leading-tight mb-4">
            Learning at Every Stage of Life
          </h2>
          <p className="text-gray-500 max-w-130 mx-auto leading-relaxed">
            From your child&apos;s very first classroom to university preparation — we are with them every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((p, i) => (
            <div
              key={p.title}
              className={cn(
                "reveal flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white",
                "hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300",
                i % 3 === 1 && "delay-1",
                i % 3 === 2 && "delay-2",
              )}
            >
              {/* Card image area */}
              <div className={cn("h-44 flex items-center justify-center text-6xl bg-linear-to-br", p.gradient)}>
                {p.emoji}
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <p className="font-head text-[0.7rem] font-bold uppercase tracking-widest text-yellow-700 mb-1">
                  {p.level}
                </p>
                <span className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-emerald bg-emerald-light px-2.5 py-0.5 rounded-full w-fit mb-3">
                  {p.ages}
                </span>
                <h3 className="font-head font-bold text-navy text-[1.05rem] mb-2">{p.title}</h3>
                <p className="text-gray-500 text-[0.875rem] leading-relaxed flex-1 mb-5">{p.desc}</p>
                <Button href="#contact" variant="outline" size="sm" className="w-fit">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}