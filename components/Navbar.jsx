"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 h-[72px] flex items-center glass-navbar transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-2xl overflow-hidden ring-2 ring-emerald-500/30 shadow-md group-hover:scale-105 transition-all">
              <img
                alt="Lifeline Pet Care Logo"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDStsY34FedzZuhoOZ-1EluQ2amO8xDEr8tA7M_-1OhUlYHpkIsAq36_nV2esyootO5_wm5ZwS8KElMk3uF5VoU4RyA_pTXIwIpOXcfpL0Mvk2ofBu-TrCz4GFxG_hqQ_YDLjgbA-lfd7JvLPozD7PFUP2AX0eeWlpWkcdj0vH8XtT1tyZANfkccrtf5XFSUuW3YhEHFuDbtwtdEBEyvvaPfa2QsM3Uf_NRRdOqtBU4MKc3M4zWfMAJ"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black text-emerald-950 tracking-tight leading-none group-hover:text-emerald-600 transition-colors">
                Lifeline Pet Care 🐾
              </span>
              <span className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest mt-0.5">
                Delhi NCR Doorstep Vet & Spa
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/60 p-1.5 rounded-full border border-slate-200/80 backdrop-blur-md shadow-sm">
            {links.map(({ href, label }) => {
              const isActive =
                pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                      : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT CTAs */}
          <div className="flex items-center gap-3">
            {/* Live Vet Available Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-900">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>14 Vets Active</span>
            </div>

            {/* Emergency hotline */}
            <a
              href="tel:+918800813462"
              className="hidden sm:flex items-center gap-1.5 text-xs font-black px-3.5 py-2 rounded-full bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-all shadow-xs"
            >
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <span>24/7 Vet SOS</span>
            </a>

            {/* Book Visit Button */}
            <Link
              href="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold px-5 py-2.5 rounded-full shadow-lg shadow-emerald-600/30 hover:scale-105 transition-all flex items-center gap-1"
            >
              <span>Book Doorstep Visit</span>
              <span>→</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5 w-5">
                <span
                  className={`block h-0.5 bg-slate-800 rounded-full transition-all ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-slate-800 rounded-full transition-all ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-slate-800 rounded-full transition-all ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV DRAWER */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" />
          <nav
            className="absolute top-[72px] inset-x-0 bg-white border-b border-slate-200 shadow-2xl p-6 space-y-2 animate-in slide-in-from-top duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-900 mb-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Vets On Duty: 14 Doctors
              </span>
              <span className="text-[10px] uppercase tracking-wider text-emerald-700">
                Delhi NCR
              </span>
            </div>

            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <span>{label}</span>
                  <span className="opacity-50">→</span>
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href="tel:+918800813462"
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl font-black text-sm bg-red-50 text-red-700 border border-red-200"
              >
                🚨 Emergency Vet SOS: +91 88008 13462
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
