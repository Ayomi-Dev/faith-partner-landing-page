import { FACILITIES } from "@/app/lib/constants";
import { SectionLabel } from "../uis/SectionLabel";
import { cn } from "@/app/lib/utils";


export function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 reveal">
          <SectionLabel>Facilities</SectionLabel>
          <h2 className="font-head font-bold text-navy text-3xl sm:text-4xl leading-tight mb-3">
             Condusive Environment for Well Structured Learning
          </h2>
          <p className="text-gray-500 max-w-120 leading-relaxed">
            Every environment is purpose-built to inspire, challenge, and support your child&apos;s best work.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 reveal">
          {FACILITIES.map((f) => (
            <div
              key={f.label}
              className={cn(
                "relative rounded-xl overflow-hidden flex items-end group cursor-default",
                f.wide ? "col-span-2 aspect-16/7" : "aspect-4/3"
              )}
            >
              {/* Background */}
              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-center text-5xl",
                  "bg-linear-to-br transition-transform duration-500 group-hover:scale-105",
                  f.bg
                )}
              >
                {f.emoji}
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-navy-dark/90 via-navy-dark/30 to-transparent
                              transition-opacity duration-300 group-hover:opacity-95" />

              {/* Label */}
              <div className="relative z-10 p-4">
                <p className="font-head font-bold text-white text-[0.95rem]">{f.label}</p>
                <p className="text-white/65 text-[0.75rem] mt-0.5">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}