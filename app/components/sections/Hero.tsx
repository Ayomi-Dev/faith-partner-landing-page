import { Button } from "@/app/components/uis/Button";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-svh items-center overflow-hidden bg-(--navy-dark) "
    >
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-20">
        Eyebrow
        <div
          className="mb-7 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.78rem] font-semibold uppercase tracking-widest"
          style={{
            background: "rgba(244,180,0,.15)",
            borderColor: "rgba(244,180,0,.35)",
            color: "var(--gold)",
            fontFamily: "var(--font-head)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--gold)" }}
          />
          WAEC &amp; NECO Approved School
        </div>

        {/* Heading */}
        <h1
          className="mb-5 max-w-212.5 text-4xl leading-[1.1] font-extrabold text-white sm:text-5xl lg:text-[3.6rem]"
          style={{ fontFamily: "var(--font-head)" }}
        >
          Building{" "}
          <span style={{ color: "var(--gold)" }}>
            Godly{" "}
          </span>
          People,
          <br />
          Building The Nation
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-180 text-base leading-relaxed text-white/75 sm:text-lg">
          We are building leaders, thinkers, and builders of a better Nigeria.
        </p>

        {/* Buttons */}
        <div className="mb-14 flex flex-wrap gap-3.5">
          <Button href="#admissions" variant="secondary" className="text-(--gold)" size="lg">
            <Arrow />
            Apply for Admission
          </Button>

          <Button href="#contact" variant="secondary" size="lg">
            <CalendarIcon />
            Book a School Tour
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-7">
          {[
            { icon: "✅", strong: "15+ Years", label: "of Excellence" },
            { icon: "🎓", strong: "2,000+", label: "Students" },
            { icon: "👩‍🏫", strong: "150+", label: "Qualified Teachers" },
            { icon: "📊", strong: "98%", label: "WAEC Success Rate" },
          ].map((s) => (
            <div
              key={s.strong}
              className="flex items-center gap-2.5"
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg text-base"
                style={{ background: "rgba(244,180,0,.15)" }}
              >
                {s.icon}
              </div>

              <div className="text-sm leading-tight font-medium text-white/80">
                <strong
                  className="block text-white"
                  style={{ fontFamily: "var(--font-head)" }}
                >
                  {s.strong}
                </strong>

                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cards */}
      <div
        aria-hidden="true"
        className="absolute right-[6%] bottom-[12%] z-20 hidden flex-col gap-3.5 xl:flex"
      >
        <FloatCard
          icon="🏆"
          title="25+ Awards"
          sub="National Recognition"
          delay="float-card-1"
        />

        <FloatCard
          icon="📚"
          title="WAEC Certified"
          sub="Approved Curriculum"
          delay="float-card-2"
        />
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