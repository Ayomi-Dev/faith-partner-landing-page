import { NEWS_ITEMS } from "@/app/lib/constants";
import { Button } from "../uis/Button";
import { SectionLabel } from "../uis/SectionLabel";
import { cn } from "@/app/lib/utils";


export function News() {
  return (
    <section id="news" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header row */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12 reveal">
          <div>
            <SectionLabel>News &amp; Events</SectionLabel>
            <h2 className="font-head font-bold text-navy text-3xl sm:text-4xl leading-tight">
              Latest from Campus
            </h2>
          </div>
          <Button href="#" variant="outline" size="sm">View All News</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((item, i) => (
            <article
              key={item.title}
              className={cn(
                "reveal bg-white border border-gray-100 rounded-xl overflow-hidden",
                "hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300",
                i === 1 && "delay-1", i === 2 && "delay-2",
              )}
            >
              {/* Image */}
              <div className={cn("h-44 flex items-center justify-center text-5xl bg-linear-to-br", item.bg)}>
                {item.emoji}
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <time className="text-[0.75rem] text-gray-500 font-medium">{item.date}</time>
                  <span className={cn("text-[0.7rem] font-bold uppercase tracking-wide px-2 py-0.5 rounded", item.tagStyle)}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-head font-bold text-navy text-[0.95rem] leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.excerpt}</p>
                <a
                  href="#"
                  className="flex items-center gap-1 text-[0.82rem] font-bold font-head text-navy hover:text-yellow-700 transition-colors"
                >
                  Read More <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}