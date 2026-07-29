import { WHY_CARDS } from "@/app/lib/constants";
import { SectionLabel } from "../uis/SectionLabel";
import { cn } from "@/app/lib/utils";


export function WhyChooseUs() {
  return (
    <section id="why" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <SectionLabel>Why Greenfield</SectionLabel>
          <h2 className="font-head font-bold text-navy text-3xl sm:text-4xl leading-tight mb-4">
            Built for Every Dimension of Your Child&apos;s Growth
          </h2>
          <p className="text-gray-500 max-w-130 mx-auto leading-relaxed">
            We go beyond textbooks — our approach develops the whole child: mind, character, creativity, and confidence.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {WHY_CARDS.map((card, i) => (
            <div
              key={card.title}
              className={cn(
                "reveal bg-white border border-gray-100 rounded-xl p-6 group",
                "hover:-translate-y-1.5 hover:shadow-card-hover hover:border-gold transition-all duration-300 cursor-default",
                i % 4 === 1 && "delay-1",
                i % 4 === 2 && "delay-2",
                i % 4 === 3 && "delay-3",
              )}
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-navy flex items-center justify-center text-2xl mb-4 transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="font-head font-bold text-navy text-[0.9rem] mb-1.5">{card.title}</h3>
              <p className="text-gray-500 text-[0.82rem] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}