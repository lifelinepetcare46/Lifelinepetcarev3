"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 h-[64px] flex items-center"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: "0 1px 0 0 rgba(0,0,0,0.04)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 w-full flex items-center justify-between gap-6">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-emerald-200 shadow-sm">
              <img
                alt="Lifeline Pet Care"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDStsY34FedzZuhoOZ-1EluQ2amO8xDEr8tA7M_-1OhUlYHpkIsAq36_nV2esyootO5_wm5ZwS8KElMk3uF5VoU4RyA_pTXIwIpOXcfpL0Mvk2ofBu-TrCz4GFxG_hqQ_YDLjgbA-lfd7JvLPozD7PFUP2AX0eeWlpWkcdj0vH8XtT1tyZANfkccrtf5XFSUuW3YhEHFuDbtwtdEBEyvvaPfa2QsM3Uf_NRRdOqtBU4MKc3M4zWfMAJ"
              />
            </div>
            <span
              className="hidden sm:block text-base font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "#065f46", letterSpacing: "-0.02em" }}
            >
              Lifeline Pet Care
            </span>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(({ href, label }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: isActive ? "#059669" : "#475569",
                    background: isActive ? "#ecfdf5" : "transparent",
                    fontWeight: isActive ? 700 : 600,
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "#f8fafc"; e.currentTarget.style.color = "#059669"; }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#475569"; } }}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-emerald-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── RIGHT CTAs ── */}
          <div className="flex items-center gap-3">
            {/* Emergency pill */}
            <a
              href="tel:+918800813462"
              className="hidden md:flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full transition-all"
              style={{
                background: "#fee2e2",
                color: "#b91c1c",
                border: "1px solid #fecaca",
                fontFamily: "var(--font-display)",
              }}
            >
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              Emergency 24/7
            </a>

            {/* Book button */}
            <Link
              href="/contact"
              className="btn-primary text-sm hidden sm:flex"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}
            >
              Book Now
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5 w-5">
                <span className={`block h-0.5 bg-slate-600 rounded-full transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-slate-600 rounded-full transition-all ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-slate-600 rounded-full transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <nav
            className="absolute top-[64px] inset-x-0 bg-white border-b border-slate-200 shadow-xl p-4 space-y-1"
            onClick={e => e.stopPropagation()}
          >
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: isActive ? "#059669" : "#334155",
                    background: isActive ? "#ecfdf5" : "transparent",
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href="tel:+918800813462"
              className="flex items-center gap-2 mt-3 px-4 py-3 rounded-xl font-bold text-sm"
              style={{ background: "#fee2e2", color: "#b91c1c", fontFamily: "var(--font-display)" }}
            >
              📞 Emergency: +91 88008 13462
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
