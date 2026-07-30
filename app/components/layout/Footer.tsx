import Link from "next/link";
import { NAV_LINKS, PORTAL_LINKS } from "@/app/lib/constants";

const SAAS_BASE = "https://app.schoolms.io/login";

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center font-head font-extrabold text-navy-dark">
                G
              </div>
              <span className="font-head font-bold text-white text-[1rem]">Greenfield Academy</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-70">
              Building tomorrow&apos;s leaders through quality education, strong values, and a
              nurturing community since 2009.
            </p>
            <div className="flex gap-2.5">
              {[
                { label: "Facebook", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                { label: "Instagram", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                { label: "LinkedIn", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                { label: "YouTube", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg> },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/8 text-gray-400 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-head text-sm font-bold text-white uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-gray-400 hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-head text-sm font-bold text-white uppercase tracking-widest mb-4">Portals</h4>
            <ul className="space-y-2.5">
              {PORTAL_LINKS.map((p) => (
                <li key={p.role}>
                  <a href={`${SAAS_BASE}?role=${p.role}`} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-gold transition-colors">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-head text-sm font-bold text-white uppercase tracking-widest mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Get school news, events, and term dates delivered to your inbox.
            </p>
            <div className="flex rounded-lg overflow-hidden border border-white/10">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email for newsletter"
                className="flex-1 bg-white/7 text-white placeholder:text-gray-600 text-sm px-3.5 py-2.5 outline-none min-w-0"
              />
              <button className="bg-gold text-navy-dark font-head font-bold text-xs px-4 hover:bg-gold-dark transition-colors whitespace-nowrap">
                Join
              </button>
            </div>
            <p className="text-[0.72rem] text-gray-600 mt-2.5">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.8rem] text-gray-600">
            © {new Date().getFullYear()} Lordfaith Partners. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Safeguarding Policy"].map((l) => (
              <Link key={l} href="#" className="text-[0.8rem] text-gray-600 hover:text-gray-400 transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}