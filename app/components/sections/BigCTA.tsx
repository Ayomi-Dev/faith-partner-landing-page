import { Button } from "@/app/components/uis/Button";

export function BigCTA() {
  return (
    <section
      id="cta"
      className="relative py-24 text-center overflow-hidden bg-(--navy)"
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-[-60%] left-1/2 -translate-x-1/2 w-175 h-175 rounded-full
            bg-[radial-gradient(circle,rgba(244,180,0,0.1)_0%,transparent_70%)]"
      />

      <div className="relative max-w-3xl mx-auto px-6 reveal">
        <h2 className="font-head font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
          Give Your Child the Best Start.
        </h2>
        <p className="text-white/70 text-lg mb-10">
          Enrolment for the 2026/2027 academic session is now open. Places are limited — don&apos;t wait.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="#contact" size="lg">Apply Now</Button>
          <Button href="#contact" variant="secondary" size="lg">Contact Admissions</Button>
        </div>
      </div>
    </section>
  );
}