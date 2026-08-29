"use client";

import Link from "next/link";
import { useState } from "react";

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
    <footer className="w-full pt-20 pb-12 rounded-t-[3rem] bg-[#1B1C1A] text-[#FAF9F5] font-sans relative z-30 overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#006E1C]/10 rounded-full blur-3xl pointer-events-none" />

      {/* TOP NEWSLETTER CARD */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-16">
        <div className="glass-panel-dark rounded-[3rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <span className="px-3.5 py-1.5 rounded-full bg-[#006E1C]/30 text-[#94F990] text-xs font-bold uppercase tracking-wider border border-[#006E1C]/40">
              🐾 VIP Pet Parenting Tips & Offers
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Join 15,000+ Happy Pet Parents in Delhi NCR
            </h3>
            <p className="text-xs sm:text-sm text-[#BECAB9]">
              Monthly vaccination reminders, care advice & exclusive doorstep spa vouchers.
            </p>
          </div>

          <form onSubmit={handleNewsletter} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            {subscribed ? (
              <div className="px-6 py-3.5 rounded-full bg-[#006E1C]/30 text-[#94F990] text-xs font-bold border border-[#006E1C]/40 text-center">
                ✓ Thank you! You're on our VIP list.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address..."
                  className="bg-[#2F312E] border border-white/10 text-white placeholder-[#BECAB9] px-5 py-3.5 rounded-full text-xs focus:outline-none focus:border-[#4CAF50] w-full sm:w-72"
                />
                <button
                  type="submit"
                  className="bg-[#006E1C] hover:bg-[#005313] text-white font-extrabold text-xs px-6 py-3.5 rounded-full shadow-lg hover:scale-105 transition-all shrink-0"
                >
                  Subscribe Free 📩
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* MAIN STITCH FOOTER GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 p-2 border border-white/15 overflow-hidden shrink-0">
              <img src="/logo3.png" alt="Lifeline Pet Care Logo" className="w-full h-full object-contain" />
            </div>
            <div className="font-extrabold text-3xl sm:text-5xl text-[#FAF9F5] tracking-tight font-sans">
              Lifeline <span className="text-[#94F990] italic font-serif">Pet Care</span>
            </div>
          </div>
          <p className="text-sm text-[#BECAB9] max-w-md leading-relaxed">
            Care that comes home. The modern spatial platform for doorstep veterinary excellence in Delhi NCR.
          </p>
        </div>

        <div className="flex flex-col gap-3 font-semibold text-sm">
          <h4 className="text-[#94F990] font-bold uppercase tracking-wider text-xs">
            Navigation & Legal
          </h4>
          <Link href="/" className="text-[#BECAB9] hover:text-white hover:translate-x-1 transition-all">
            Home
          </Link>
          <Link href="/services" className="text-[#BECAB9] hover:text-white hover:translate-x-1 transition-all">
            Services
          </Link>
          <Link href="/packages" className="text-[#BECAB9] hover:text-white hover:translate-x-1 transition-all">
            Pricing & Packages
          </Link>
          <Link href="/privacy" className="text-[#BECAB9] hover:text-white hover:translate-x-1 transition-all">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[#BECAB9] hover:text-white hover:translate-x-1 transition-all">
            Terms of Service
          </Link>
        </div>

        <div className="flex flex-col gap-3 font-semibold text-sm">
          <h4 className="text-[#94F990] font-bold uppercase tracking-wider text-xs">
            Connect & SOS
          </h4>
          <a href="tel:+918800813462" className="text-[#FFDAD6] font-extrabold text-xs sm:text-sm hover:underline block">
            📞 Hotline 1: +91 88008 13462
          </a>
          <a href="tel:+916387474595" className="text-[#94F990] font-extrabold text-xs sm:text-sm hover:underline block">
            📞 Hotline 2: +91 63874 74595
          </a>
          <a href="https://wa.me/918800813462" target="_blank" rel="noreferrer" className="text-[#BECAB9] hover:text-white hover:translate-x-1 transition-all">
            💬 WhatsApp Consultation
          </a>
          <a href="https://instagram.com/_lifeline_pet_care/" target="_blank" rel="noreferrer" className="text-[#BECAB9] hover:text-white hover:translate-x-1 transition-all">
            📸 Instagram (@_lifeline_pet_care)
          </a>
          <Link href="/admin/login" className="text-[#BECAB9] hover:text-white hover:translate-x-1 transition-all text-xs pt-2">
            🔐 Admin Portal
          </Link>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-[#BECAB9] gap-4">
        <p>© {new Date().getFullYear()} Lifeline Pet Care. All rights reserved.</p>
        <p className="text-[11px]">Delhi NCR • Delhi • Noida • Gurgaon • Ghaziabad • Faridabad</p>
      </div>
    </footer>
  );
}
