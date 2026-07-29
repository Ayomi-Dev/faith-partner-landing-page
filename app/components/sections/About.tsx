import { Button } from "../uis/Button";
import { SectionLabel } from "../uis/SectionLabel";


const CORE_VALUES = ["Integrity", "Excellence", "Innovation", "Faith", "Community", "Service"];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Image column */}
          <div className="relative reveal-left">
            <div className="rounded-2xl overflow-hidden bg-linear-to-br from-navy to-navy-light aspect-4/5 flex items-center justify-center">
              {/* Placeholder — swap with <Image /> when real photo is available */}
              <span className="text-8xl opacity-20" aria-hidden="true">🏫</span>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-gold text-navy-dark rounded-2xl px-6 py-5 text-center font-head font-bold shadow-card-hover">
              <p className="text-3xl leading-none">15+</p>
              <p className="text-[0.72rem] font-semibold opacity-80 mt-1 uppercase tracking-wide">Years of Excellence</p>
            </div>
          </div>

          {/* Content column */}
          <div className="reveal-right pt-6">
            <SectionLabel>About Us</SectionLabel>
            <h2 className="font-head font-bold text-navy text-3xl sm:text-4xl leading-tight mb-4">
              Shaping Futures Since 2009
            </h2>
            <p className="text-gray-500 leading-relaxed mb-7">
              Founded with a passion for transforming young minds, Greenfield Academy has grown into one
              of Nigeria&apos;s most respected educational institutions — combining rigorous academics with
              strong moral values and a vibrant school community.
            </p>

            {/* Mission / Vision */}
            <div className="space-y-4 mb-7">
              {[
                {
                  heading: "Our Mission",
                  body: "To provide a world-class, holistic education that develops intellectual, moral, and social excellence in every child.",
                },
                {
                  heading: "Our Vision",
                  body: "To be West Africa's most innovative and values-driven school, producing global leaders of outstanding character.",
                },
              ].map((item) => (
                <div key={item.heading} className="pl-5 border-l-[3px] border-gold bg-gray-50 rounded-r-xl py-4 pr-5">
                  <h4 className="font-head text-[0.8rem] font-bold text-navy uppercase tracking-widest mb-1">
                    {item.heading}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Core values chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {CORE_VALUES.map((v) => (
                <span key={v} className="px-3.5 py-1 bg-navy text-white font-head text-[0.78rem] font-medium rounded-full">
                  {v}
                </span>
              ))}
            </div>

            <Button href="#programs" variant="outline">
              Explore Our Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}