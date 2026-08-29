"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Pricing & Packages" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Care Guides" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── DESKTOP FLOATING PILL NAVBAR (STITCH SPEC) ── */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full px-8 py-3.5 bg-white/80 backdrop-blur-xl border border-[rgba(26,26,26,0.08)] shadow-md hover:shadow-lg transition-all duration-500 z-50 justify-between items-center hidden md:flex">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-[#E8F5E9] border border-[#006E1C]/20 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
            🐾
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[#1B1C1A] group-hover:text-[#006E1C] transition-colors">
              Lifeline <span className="text-[#006E1C] italic font-serif">Pet Care</span>
            </span>
            <span className="text-[10px] font-semibold text-[#6F7A6B] uppercase tracking-widest -mt-1">
              Care Comes Home
            </span>
          </div>
        </Link>

        {/* NAV LINKS WITH ACTIVE DOT INDICATOR */}
        <ul className="flex items-center gap-6 font-semibold text-sm">
          {links.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className={`transition-all hover:scale-[1.02] flex flex-col items-center ${
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
        <div className="flex items-center gap-3">
          <a
            href="tel:+918800813462"
            className="flex items-center gap-2 text-xs font-bold text-[#BA1A1A] bg-[#FFEBEE] px-4 py-2.5 rounded-full border border-red-200 hover:bg-red-100 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#BA1A1A] animate-ping" />
            <span>24/7 Vet SOS</span>
          </a>

          <Link
            href="/contact"
            className="bg-[#006E1C] hover:bg-[#005313] text-white px-6 py-2.5 rounded-full text-xs font-extrabold shadow-md hover:scale-[1.05] active:scale-95 transition-all duration-300"
          >
            Book a Vet 🩺
          </Link>
        </div>
      </nav>

      {/* ── MOBILE BOTTOM NAVIGATION ANCHOR (STITCH SPEC) ── */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50 glass-panel rounded-full px-6 py-3.5 flex justify-around items-center ambient-shadow border border-[rgba(26,26,26,0.08)]">
        <Link href="/" className={`flex flex-col items-center gap-0.5 ${pathname === "/" ? "text-[#006E1C]" : "text-[#5F5E5E]"}`}>
          <span className="text-xl">🏠</span>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link href="/services" className={`flex flex-col items-center gap-0.5 ${pathname.startsWith("/services") ? "text-[#006E1C]" : "text-[#5F5E5E]"}`}>
          <span className="text-xl">🩺</span>
          <span className="text-[10px] font-bold">Services</span>
        </Link>
        <Link href="/packages" className={`flex flex-col items-center gap-0.5 ${pathname.startsWith("/packages") ? "text-[#006E1C]" : "text-[#5F5E5E]"}`}>
          <span className="text-xl">💰</span>
          <span className="text-[10px] font-bold">Pricing</span>
        </Link>
        <Link href="/contact" className={`flex flex-col items-center gap-0.5 ${pathname.startsWith("/contact") ? "text-[#006E1C]" : "text-[#5F5E5E]"}`}>
          <span className="text-xl">📅</span>
          <span className="text-[10px] font-bold">Book</span>
        </Link>
      </div>

      {/* ── FLOATING EMERGENCY SOS BUTTON (STITCH SPEC) ── */}
      <a
        href="tel:+918800813462"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-[#BA1A1A] hover:bg-[#93000A] text-white px-6 py-3.5 rounded-full font-bold text-xs flex items-center gap-2 shadow-2xl hover:scale-105 transition-all duration-300 group"
      >
        <span className="text-base group-hover:animate-pulse">🚨</span>
        <span className="hidden md:inline">24/7 Emergency Vet</span>
      </a>
    </>
  );
}
