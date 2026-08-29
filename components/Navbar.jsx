"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/services", label: "Services", icon: "🩺" },
  { href: "/packages", label: "Pricing & Packages", icon: "💰" },
  { href: "/about", label: "About Us", icon: "🐾" },
  { href: "/gallery", label: "Gallery", icon: "📸" },
  { href: "/blog", label: "Care Guides", icon: "📖" },
  { href: "/contact", label: "Contact & SOS", icon: "📞" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <>
      {/* ── DESKTOP FLOATING PILL NAVBAR (PERFECTLY CENTERED) ── */}
      <nav
        className="fixed top-4 left-0 right-0 mx-auto w-[90%] max-w-7xl rounded-full px-8 py-3.5 bg-white/85 backdrop-blur-xl border border-[rgba(26,26,26,0.08)] shadow-md hover:shadow-lg transition-all duration-500 z-50 justify-between items-center hidden md:flex"
        style={{ left: 0, right: 0, marginLeft: "auto", marginRight: "auto" }}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-[#E8F5E9] border border-[#006E1C]/20 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
            🐾
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-[#1B1C1A] group-hover:text-[#006E1C] transition-colors">
              Lifeline <span className="text-[#006E1C] italic font-serif">Pet Care</span>
            </span>
            <span className="text-[10px] font-semibold text-[#6F7A6B] uppercase tracking-widest -mt-1">
              Care Comes Home
            </span>
          </div>
        </Link>

        {/* CENTER NAV LINKS */}
        <ul className="flex items-center gap-6 font-semibold text-sm">
          {links.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className={`transition-all hover:scale-[1.02] flex flex-col items-center whitespace-nowrap ${
                    isActive
                      ? "text-[#006E1C] font-bold"
                      : "text-[#5F5E5E] hover:text-[#006E1C]"
                  }`}
                >
                  <span>{label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006E1C] mt-0.5 animate-pulse" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* RIGHT CTAs */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+918800813462"
            className="flex items-center gap-2 text-xs font-bold text-[#BA1A1A] bg-[#FFEBEE] px-4 py-2.5 rounded-full border border-red-200 hover:bg-red-100 transition-colors whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-[#BA1A1A] animate-ping" />
            <span>24/7 Vet SOS</span>
          </a>

          <Link
            href="/contact"
            className="bg-[#006E1C] hover:bg-[#005313] text-white px-6 py-2.5 rounded-full text-xs font-extrabold shadow-md hover:scale-[1.05] active:scale-95 transition-all duration-300 whitespace-nowrap"
          >
            Book a Vet 🩺
          </Link>
        </div>
      </nav>

      {/* ── MOBILE TOP HEADER PILL (PERFECTLY CENTERED) ── */}
      <header
        className="md:hidden fixed top-3 left-0 right-0 mx-auto w-[92%] z-50 glass-panel rounded-full px-5 py-2.5 flex justify-between items-center border border-[rgba(26,26,26,0.08)] shadow-md"
        style={{ left: 0, right: 0, marginLeft: "auto", marginRight: "auto" }}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#E8F5E9] border border-[#006E1C]/20 flex items-center justify-center text-lg">
            🐾
          </div>
          <span className="text-base font-extrabold tracking-tight text-[#1B1C1A]">
            Lifeline <span className="text-[#006E1C] italic font-serif">Pet Care</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="tel:+918800813462"
            className="bg-[#FFEBEE] text-[#BA1A1A] px-3 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1 border border-red-200"
          >
            <span>🚨</span>
            <span>SOS</span>
          </a>

          <button
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="w-9 h-9 rounded-full bg-[#F4F4F0] flex items-center justify-center text-[#1B1C1A] font-bold text-lg border border-black/5"
            aria-label="Toggle Menu"
          >
            {mobileDrawerOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* ── MOBILE FULL MENU DRAWER ── */}
      {mobileDrawerOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-[#1B1C1A]/95 backdrop-blur-2xl p-6 flex flex-col justify-between text-white animate-fadeIn">
          <div className="flex justify-between items-center pt-2 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#006E1C] flex items-center justify-center text-xl">
                🐾
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Lifeline Pet Care</h3>
                <p className="text-xs text-[#BECAB9]">Delhi NCR Doorstep Vet</p>
              </div>
            </div>
            <button
              onClick={() => setMobileDrawerOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl"
            >
              ✕
            </button>
          </div>

          {/* DRAWER LINKS */}
          <div className="space-y-3 py-6 overflow-y-auto max-h-[60vh]">
            {links.map(({ href, label, icon }) => {
              const isActive =
                pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileDrawerOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-base font-bold transition-all ${
                    isActive
                      ? "bg-[#006E1C] text-white shadow-lg"
                      : "bg-white/5 text-[#BECAB9] hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{icon}</span>
                    <span>{label}</span>
                  </div>
                  <span>→</span>
                </Link>
              );
            })}
          </div>

          {/* DRAWER FOOTER CTAS */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <a
              href="tel:+918800813462"
              className="w-full bg-[#BA1A1A] hover:bg-[#93000A] text-white font-extrabold py-3.5 rounded-full text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <span>🚨 Emergency Helpline: +91 88008 13462</span>
            </a>
            <a
              href="https://wa.me/918800813462"
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#006E1C] hover:bg-[#005313] text-white font-extrabold py-3.5 rounded-full text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <span>💬 Instant WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      )}

      {/* ── MOBILE BOTTOM NAVIGATION ANCHOR (PERFECTLY CENTERED) ── */}
      <div
        className="md:hidden fixed bottom-3 left-0 right-0 mx-auto w-[92%] z-50 glass-panel rounded-full px-4 py-2 flex justify-around items-center ambient-shadow border border-[rgba(26,26,26,0.08)] bg-white/90 backdrop-blur-xl"
        style={{ left: 0, right: 0, marginLeft: "auto", marginRight: "auto" }}
      >
        <Link
          href="/"
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full transition-all ${
            pathname === "/" ? "bg-[#E8F5E9] text-[#006E1C] font-bold" : "text-[#5F5E5E]"
          }`}
        >
          <span className="text-lg">🏠</span>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link
          href="/services"
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full transition-all ${
            pathname.startsWith("/services") ? "bg-[#E8F5E9] text-[#006E1C] font-bold" : "text-[#5F5E5E]"
          }`}
        >
          <span className="text-lg">🩺</span>
          <span className="text-[10px] font-bold">Services</span>
        </Link>
        <Link
          href="/packages"
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full transition-all ${
            pathname.startsWith("/packages") ? "bg-[#E8F5E9] text-[#006E1C] font-bold" : "text-[#5F5E5E]"
          }`}
        >
          <span className="text-lg">💰</span>
          <span className="text-[10px] font-bold">Pricing</span>
        </Link>
        <Link
          href="/blog"
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full transition-all ${
            pathname.startsWith("/blog") ? "bg-[#E8F5E9] text-[#006E1C] font-bold" : "text-[#5F5E5E]"
          }`}
        >
          <span className="text-lg">📖</span>
          <span className="text-[10px] font-bold">Guides</span>
        </Link>
        <Link
          href="/contact"
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full transition-all ${
            pathname.startsWith("/contact") ? "bg-[#006E1C] text-white font-bold" : "text-[#5F5E5E]"
          }`}
        >
          <span className="text-lg">📅</span>
          <span className="text-[10px] font-bold">Book</span>
        </Link>
      </div>
    </>
  );
}
