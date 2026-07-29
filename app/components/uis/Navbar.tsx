"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { NAV_LINKS, PORTAL_LINKS } from "@/app/lib/constants";

const SAAS_BASE = "https://app.schoolms.io/login";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const portalRef = useRef<HTMLDivElement>(null);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close portal dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (portalRef.current && !portalRef.current.contains(e.target as Node)) {
        setPortalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy-dark shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300"
          style={{ padding: scrolled ? "13px 24px" : "18px 24px" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Greenfield Academy home">
            <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center font-head font-extrabold text-lg text-navy-dark select-none">
              G
            </div>
            <div className="leading-tight">
              <p className="font-head font-bold text-white text-[1rem]">Greenfield Academy</p>
              <p className="text-white/60 text-[0.65rem] tracking-wide">Excellence in Education</p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[0.875rem] font-medium text-white/80 px-3 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="#admissions"
              className="bg-gold text-navy-dark font-head font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-gold-dark transition-colors"
            >
              Apply Now
            </a>

            {/* Portal dropdown */}
            <div ref={portalRef} className="relative">
              <button
                onClick={() => setPortalOpen((v) => !v)}
                aria-expanded={portalOpen}
                aria-haspopup="true"
                className="flex items-center gap-1.5 bg-white/10 border border-white/25 text-white font-head font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                Portal
                <svg
                  className={cn("w-3.5 h-3.5 transition-transform duration-200", portalOpen && "rotate-180")}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                role="menu"
                className={cn(
                  "absolute right-0 top-[calc(100%+8px)] w-52 bg-white rounded-xl shadow-card-hover border border-gray-100 py-2 z-50",
                  "transition-all duration-200 origin-top-right",
                  portalOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                )}
              >
                {PORTAL_LINKS.map((p) => (
                  <a
                    key={p.role}
                    href={`${SAAS_BASE}?role=${p.role}`}
                    role="menuitem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors"
                  >
                    <span className={cn("w-7 h-7 rounded-lg flex items-center justify-center text-base", p.bg)}>
                      {p.emoji}
                    </span>
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.25 p-1.5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={cn("block w-5.5 h-0.5 bg-white rounded transition-transform duration-200", mobileOpen && "rotate-45 translate-y-1.75")} />
            <span className={cn("block w-5.5 h-0.5 bg-white rounded transition-opacity duration-200", mobileOpen && "opacity-0")} />
            <span className={cn("block w-5.5 h-0.5 bg-white rounded transition-transform duration-200", mobileOpen && "-rotate-45 -translate-y-1.75")} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-navy-dark flex flex-col transition-transform duration-350",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col pt-24 px-7 pb-10 gap-1 flex-1 overflow-y-auto">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMobile}
              className="text-lg font-medium text-white/80 py-3.5 border-b border-white/10 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-6">
            <a href="#admissions" onClick={closeMobile}
              className="bg-gold text-navy-dark font-head font-bold text-center py-3.5 rounded-xl hover:bg-gold-dark transition-colors">
              Apply Now
            </a>
            <a href={SAAS_BASE} target="_blank" rel="noopener noreferrer"
              className="border-2 border-white/50 text-white font-head font-semibold text-center py-3.5 rounded-xl hover:bg-white/10 transition-colors">
              Portal Login
            </a>
          </div>

          {/* Portal role list on mobile */}
          <div className="mt-6">
            <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3 font-head">Portals</p>
            {PORTAL_LINKS.map((p) => (
              <a
                key={p.role}
                href={`${SAAS_BASE}?role=${p.role}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-2.5 text-sm text-white/70 hover:text-gold transition-colors"
              >
                <span className="text-lg">{p.emoji}</span> {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}