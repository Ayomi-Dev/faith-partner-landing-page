import { Button } from "@/app/components/uis/Button";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-svh flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* Diagonal gold slash — signature element */}
      <div
        aria-hidden="true"
        className="hero-slash absolute top-[-10%] right-[-5%] w-[55%] h-[130%] bg-gold opacity-[0.06]"
      />

      {/* Dot grid */}
      <div aria-hidden="true" className="dot-grid absolute inset-0" />

      {/* Illustrated school scene (right panel) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[48%] overflow-hidden"
      >
        {/* Left-side fade */}
        <div className="fade-left absolute left-0 top-0 bottom-0 w-28 z-10" />
        <div className="w-full h-full bg-linear-to-br from-navy-light to-navy-dark flex items-center justify-center">
          <SchoolIllustration />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/35 text-gold
                        text-[0.78rem] font-semibold tracking-widest uppercase px-3.5 py-1.5
                        rounded-full mb-7 font-head">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          WAEC &amp; NECO Approved School
        </div>

        {/* Headline */}
        <h1 className="font-head font-extrabold text-white leading-[1.1] mb-5
                       text-4xl sm:text-5xl lg:text-[3.6rem] max-w-150">
          Building{" "}
          <span className="text-gold">Tomorrow&apos;s</span>
          <br />Leaders Through
          <br />Quality Education
        </h1>

        {/* Sub */}
        <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-10 max-w-115">
          We nurture excellence, character, creativity, and innovation from Nursery through
          Secondary School — shaping futures one student at a time.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3.5 mb-14">
          <Button href="#admissions" size="lg">
            <Arrow />
            Apply for Admission
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            <CalendarIcon />
            Book a School Tour
          </Button>
        </div>

        {/* Stats strip */}
        <div className="flex flex-wrap gap-7">
          {[
            { icon: "✅", strong: "15+ Years", label: "of Excellence" },
            { icon: "🎓", strong: "2,000+", label: "Students" },
            { icon: "👩‍🏫", strong: "150+", label: "Qualified Teachers" },
            { icon: "📊", strong: "98%", label: "WAEC Success Rate" },
          ].map((s) => (
            <div key={s.strong} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center text-base">
                {s.icon}
              </div>
              <div className="text-sm text-white/80 font-medium leading-tight">
                <strong className="block text-white font-head">{s.strong}</strong>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating achievement cards */}
      <div
        aria-hidden="true"
        className="hidden xl:flex flex-col gap-3.5 absolute right-[6%] bottom-[12%] z-20"
      >
        <FloatCard icon="🏆" title="25+ Awards" sub="National Recognition" delay="float-card-1" />
        <FloatCard icon="📚" title="WAEC Certified" sub="Approved Curriculum" delay="float-card-2" />
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <span className="text-[0.7rem] text-white/40 uppercase tracking-widest">Scroll</span>
        <div className="w-5.5 h-9 border-2 border-white/30 rounded-xl flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-sm scroll-dot" />
        </div>
      </div>
    </section>
  );
}

function FloatCard({ icon, title, sub, delay }: { icon: string; title: string; sub: string; delay: string }) {
  return (
    <div className={`glass rounded-2xl px-4 py-3.5 flex items-center gap-3 ${delay}`}>
      <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center text-xl shrink-0">
        {icon}
      </div>
      <div className="font-head font-semibold text-white/90 text-sm leading-tight">
        <span className="block text-base text-white">{title}</span>
        {sub}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function SchoolIllustration() {
  return (
    <svg viewBox="0 0 500 600" className="w-full h-full object-cover opacity-50" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="200" width="400" height="300" rx="12" fill="rgba(255,255,255,.08)" />
      <rect x="80" y="160" width="340" height="60" rx="8" fill="rgba(255,255,255,.06)" />
      <rect x="180" y="100" width="140" height="70" rx="6" fill="rgba(255,255,255,.06)" />
      <rect x="100" y="230" width="50" height="50" rx="4" fill="rgba(244,180,0,.25)" />
      <rect x="180" y="230" width="50" height="50" rx="4" fill="rgba(244,180,0,.2)" />
      <rect x="260" y="230" width="50" height="50" rx="4" fill="rgba(244,180,0,.25)" />
      <rect x="340" y="230" width="50" height="50" rx="4" fill="rgba(244,180,0,.2)" />
      <rect x="210" y="360" width="80" height="140" rx="6" fill="rgba(255,255,255,.12)" />
      <line x1="250" y1="100" x2="250" y2="30" stroke="rgba(255,255,255,.3)" strokeWidth="2" />
      <rect x="250" y="30" width="50" height="30" rx="2" fill="rgba(244,180,0,.5)" />
      <circle cx="140" cy="490" r="14" fill="rgba(255,255,255,.15)" />
      <rect x="130" y="504" width="20" height="30" rx="4" fill="rgba(255,255,255,.1)" />
      <circle cx="200" cy="485" r="14" fill="rgba(255,255,255,.15)" />
      <rect x="190" y="499" width="20" height="35" rx="4" fill="rgba(255,255,255,.1)" />
      <circle cx="330" cy="488" r="14" fill="rgba(255,255,255,.15)" />
      <rect x="320" y="502" width="20" height="32" rx="4" fill="rgba(255,255,255,.1)" />
      <circle cx="380" cy="493" r="14" fill="rgba(255,255,255,.15)" />
      <rect x="370" y="507" width="20" height="27" rx="4" fill="rgba(255,255,255,.1)" />
    </svg>
  );
}