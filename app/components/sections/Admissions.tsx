import { STEPS } from "@/app/lib/constants";
import { SectionLabel } from "../uis/SectionLabel";
import { Button } from "../uis/Button";




export function Admissions() {
  return (
    <section id="admissions" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <SectionLabel>Admissions</SectionLabel>
          <h2 className="font-head font-bold text-navy text-3xl sm:text-4xl leading-tight mb-4">
            Three Simple Steps to Join Our Family
          </h2>
          <p className="text-gray-500 max-w-120 mx-auto leading-relaxed">
            Our admissions process is straightforward, transparent, and designed with families in mind.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Connector line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-9 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-0.5
                       bg-linear-to-r from-gold to-emerald"
          />

          {STEPS.map((step, i) => (
            <div key={step.num} className={`reveal text-center ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""}`}>
              <div
                className={`w-18 h-18 rounded-full mx-auto mb-5 flex items-center justify-center
                             font-head font-extrabold text-2xl border-4 border-gray-50 shadow-card relative z-10
                             ${step.color}`}
              >
                {step.num}
              </div>
              <h3 className="font-head font-bold text-navy text-[1.1rem] mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <Button href="#contact" size="lg">
            Start Your Application Today
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Applications open year-round. Enquiries:{" "}
            <a href="tel:+2348000000000" className="text-navy font-semibold hover:underline">
              +234 800 000 0000
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}