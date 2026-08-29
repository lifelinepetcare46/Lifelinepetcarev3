"use client";

import Link from "next/link";
import { useState } from "react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "All Services" },
  { href: "/packages", label: "Pricing & Packages" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Pet Care Blog" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  { name: "🩺 Vet Home Visit", price: "₹449", href: "/vet-services" },
  { name: "💉 Anti-Rabies Shot", price: "₹999", href: "/vaccination-services" },
  { name: "🐶 Puppy Vaccine Package", price: "₹6,799", href: "/vaccination-services" },
  { name: "✂️ Doorstep Grooming Spa", price: "from ₹799", href: "/grooming-services" },
  { name: "🚑 24/7 Emergency Care", price: "Immediate", href: "/emergency-services" },
  { name: "🧪 Lab Blood Tests at Home", price: "from ₹850", href: "/lab-test-services" },
];

const coverage = [
  "Delhi — All South, West, North & East Zones",
  "Noida & Greater Noida Expressway",
  "Gurgaon Cyber City, Golf Course & Sohna Road",
  "Ghaziabad & Faridabad Sector Belts",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-slate-800/80 relative overflow-hidden">
      {/* Glow Orbs in Footer */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* TOP NEWSLETTER LEAD BANNER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12 border-b border-slate-800/80">
        <div className="glass-luxury-dark rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              🐾 Free Pet Parenting Tips & Offers
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Join 12,000+ Happy Pet Parents in Delhi NCR
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Get monthly vaccination reminders, pet health advice & exclusive doorstep spa discount codes.
            </p>
          </div>

          <form onSubmit={handleNewsletter} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            {subscribed ? (
              <div className="px-6 py-3.5 rounded-2xl bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 text-center">
                ✓ Thank you! You're on the VIP pet list.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="bg-slate-900 border border-slate-700 text-white placeholder-slate-500 px-5 py-3.5 rounded-2xl text-xs focus:outline-none focus:border-emerald-400 w-full sm:w-72"
                />
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs px-6 py-3.5 rounded-2xl shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 shrink-0"
                >
                  Subscribe Free 📩
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* MAIN FOOTER GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* BRAND & SOCIALS */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl overflow-hidden ring-2 ring-emerald-400/40">
              <img
                alt="Lifeline Pet Care Logo"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDStsY34FedzZuhoOZ-1EluQ2amO8xDEr8tA7M_-1OhUlYHpkIsAq36_nV2esyootO5_wm5ZwS8KElMk3uF5VoU4RyA_pTXIwIpOXcfpL0Mvk2ofBu-TrCz4GFxG_hqQ_YDLjgbA-lfd7JvLPozD7PFUP2AX0eeWlpWkcdj0vH8XtT1tyZANfkccrtf5XFSUuW3YhEHFuDbtwtdEBEyvvaPfa2QsM3Uf_NRRdOqtBU4MKc3M4zWfMAJ"
              />
            </div>
            <span className="font-black text-xl text-white tracking-tight">
              Lifeline Pet Care <span className="text-emerald-400">🐾</span>
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Delhi NCR’s premier doorstep veterinary, vaccination & luxury pet spa service. BVSc certified doctors, genuine cold-chain vaccines & zero clinic stress.
          </p>

          {/* Socials & WhatsApp */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://wa.me/918800813462"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-110"
              aria-label="WhatsApp"
            >
              💬
            </a>
            <a
              href="https://instagram.com/_lifeline_pet_care/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-500 text-white flex items-center justify-center font-bold text-sm transition-all hover:scale-110"
              aria-label="Instagram"
            >
              📸
            </a>
            <a
              href="tel:+918800813462"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold text-sm border border-slate-700 transition-all hover:scale-110"
              aria-label="Phone"
            >
              📞
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  → {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400">
            Doorstep Services
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            {services.map((s, idx) => (
              <li key={idx}>
                <Link
                  href={s.href}
                  className="flex items-center justify-between text-slate-400 hover:text-white transition-all group"
                >
                  <span className="group-hover:text-emerald-300">{s.name}</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    {s.price}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 24/7 HELPLINE & COVERAGE */}
        <div className="space-y-5">
          <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400">
            24/7 Vet SOS Helpline
          </h4>
          <div>
            <a
              href="tel:+918800813462"
              className="text-2xl font-black text-white hover:text-emerald-400 transition-colors block tracking-tight"
            >
              +91 88008 13462
            </a>
            <p className="text-[11px] text-slate-400 mt-1">
              Emergency doctor dispatch within 30–60 minutes in Delhi NCR.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h5 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300">
              Service Locations
            </h5>
            <ul className="space-y-1 text-[11px] text-slate-400">
              {coverage.map((c, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-400 shrink-0">📍</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM LEGAL BAR */}
      <div className="border-t border-slate-900 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Lifeline Pet Care. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/admin/login" className="hover:text-emerald-400 transition-colors">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
