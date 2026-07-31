import { LIFE_ACTIVITIES } from "@/app/lib/constants";
import { SectionLabel } from "../uis/SectionLabel";


export function SchoolLife() {
  return (
    <section id="life" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text + activities */}
          <div className="reveal-left">
            <SectionLabel>Student Life</SectionLabel>
            <h2 className="font-head font-bold text-navy text-3xl sm:text-4xl leading-tight mb-4">
              More Than Academics — A Life of Rich Experiences
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our students grow as leaders, artists, athletes, and innovators through a vibrant
              co-curricular programme that complements every lesson.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {LIFE_ACTIVITIES.map((a) => (
                <div
                  key={a.title}
                  className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4
                             hover:border-gold hover:shadow-card transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center text-2xl shrink-0">
                    {a.icon}
                  </div>
                  <div>
                    <h4 className="font-head font-bold text-navy text-[0.875rem]">{a.title}</h4>
                    <p className="text-gray-500 text-[0.76rem]">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual panel */}
          <div className="reveal">
            <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-navy to-navy-light min-h-110 flex items-center justify-center">
              <span className="text-9xl opacity-20" aria-hidden="true">🎓</span>

              {/* Glass overlay card */}
              <div className="glass absolute bottom-6 left-6 right-6 rounded-xl p-5">
                <h3 className="font-head font-bold text-white text-[1rem] mb-1">
                  Cultural Day &amp; Inter-House Sports
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Our annual celebrations bring the entire school community together — celebrating
                  diversity, talent, and achievement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}