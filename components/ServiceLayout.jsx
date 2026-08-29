"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingModal from "./BookingModal";
import QuickLeadBar from "./QuickLeadBar";

export default function ServiceLayout({ title, subtitle, children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState(title || "General Consultation");

  const openBooking = (s) => {
    if (s) setModalService(s);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1B1C1A] font-sans antialiased flex flex-col justify-between relative">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-20 w-full">
        {/* BREADCRUMB PILL */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#006E1C] bg-[#E8F5E9] border border-[#006E1C]/20 px-5 py-2.5 rounded-full hover:bg-[#006E1C] hover:text-white transition-all shadow-xs"
          >
            <span>← Back to Home</span>
          </Link>
        </div>

        {/* HERO BANNER & BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-panel rounded-[3rem] p-8 sm:p-12 border border-[rgba(26,26,26,0.08)] shadow-[0_8px_32px_rgba(0,110,28,0.04)] space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider border border-[#006E1C]/30">
                <span>🐾 100% Doorstep Service in Delhi NCR</span>
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1B1C1A] tracking-tight leading-tight">
                {title}
              </h1>

              {subtitle && (
                <p className="text-base sm:text-lg text-[#3F4A3C] font-normal leading-relaxed">
                  {subtitle}
                </p>
              )}

              <div className="pt-6 border-t border-black/5 flex flex-wrap gap-4 text-xs font-bold text-[#1B1C1A]">
                <span className="flex items-center gap-1.5 bg-[#F4F4F0] px-4 py-2 rounded-full border border-black/5">
                  <span className="text-[#006E1C]">✓</span> BVSc Certified Vets
                </span>
                <span className="flex items-center gap-1.5 bg-[#F4F4F0] px-4 py-2 rounded-full border border-black/5">
                  <span className="text-[#006E1C]">✓</span> Zero Clinic Stress
                </span>
                <span className="flex items-center gap-1.5 bg-[#F4F4F0] px-4 py-2 rounded-full border border-black/5">
                  <span className="text-[#006E1C]">✓</span> 35 Min Response
                </span>
              </div>
            </div>

            {/* PAGE SPECIFIC CONTENT */}
            <div className="glass-panel rounded-[3rem] p-8 sm:p-12 border border-[rgba(26,26,26,0.08)] shadow-lg space-y-6">
              {children}
            </div>
          </div>

          {/* STICKY SIDEBAR BOOKING CARD */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 glass-panel-dark text-white rounded-[3rem] p-8 space-y-6 shadow-2xl border border-white/10">
              <div className="space-y-2">
                <span className="px-4 py-1.5 rounded-full bg-[#006E1C]/30 text-[#94F990] text-xs font-extrabold uppercase tracking-wider border border-[#006E1C]/40">
                  Fast Doorstep Slot
                </span>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Book Doctor or Spa 🩺
                </h3>
                <p className="text-xs text-[#BECAB9]">
                  Select your timing & doctor will arrive with complete medical kit.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => openBooking(title)}
                  className="w-full bg-[#006E1C] hover:bg-[#005313] text-white font-extrabold py-4 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-[#006E1C]/30 transition-all hover:scale-[1.02] active:scale-95"
                >
                  Book {title} Now ⚡
                </button>

                <a
                  href="https://wa.me/918800813462"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#2F312E] hover:bg-[#3F4A3C] border border-white/10 text-[#94F990] font-extrabold py-3.5 rounded-full text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <span>💬 Instant WhatsApp Chat</span>
                </a>

                <a
                  href="tel:+918800813462"
                  className="w-full bg-[#BA1A1A] hover:bg-[#93000A] text-white font-extrabold py-3.5 rounded-full text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>📞 Call Vet: +91 88008 13462</span>
                </a>

                <a
                  href="tel:+916387474595"
                  className="w-full bg-[#1B1C1A] hover:bg-black border border-white/20 text-[#94F990] font-extrabold py-3.5 rounded-full text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>📞 Call Vet: +91 63874 74595</span>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-[11px] text-[#BECAB9]">
                <div className="flex items-center justify-between font-bold">
                  <span>🟢 Active Doctor Status</span>
                  <span className="text-[#94F990]">Available</span>
                </div>
                <p className="text-xs leading-normal">
                  Average doctor arrival time across Delhi, Noida & Gurgaon is 35 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <QuickLeadBar onBookClick={(s) => openBooking(s)} />

      {modalOpen && (
        <BookingModal
          service={modalService}
          onClose={() => setModalOpen(false)}
        />
      )}

      <Footer />
    </div>
  );
}
