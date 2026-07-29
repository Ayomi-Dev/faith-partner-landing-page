import { TRUST_BADGES } from "@/app/lib/constants";

export function TrustBar() {
  return (
    <section aria-label="Accreditations and features" className="bg-navy py-7">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {TRUST_BADGES.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 bg-(--navy-dark) border border-white/12
                rounded-lg px-4 py-2 font-head text-[0.8rem] font-semibold text-white/90"
            >
              <span role="img" aria-label={b.label}>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}