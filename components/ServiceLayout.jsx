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
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans antialiased flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        {/* BREADCRUMB */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
          >
            ← Back to Home
          </Link>
        </div>

        {/* HERO BANNER & GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-luxury rounded-[36px] p-6 sm:p-10 border border-emerald-100 shadow-xl space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider border border-emerald-300">
                <span>🐾 100% Doorstep Service in Delhi NCR</span>
              </span>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {title}
              </h1>

              {subtitle && (
                <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                  {subtitle}
                </p>
              )}

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                  <span className="text-emerald-600">✓</span> BVSc Certified Vets
                </span>
                <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                  <span className="text-emerald-600">✓</span> Zero Clinic Stress
                </span>
                <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                  <span className="text-emerald-600">✓</span> Same Day Available
                </span>
              </div>
            </div>

            {/* PAGE SPECIFIC DETAILS */}
            <div className="glass-luxury rounded-[36px] p-6 sm:p-10 border border-slate-100 shadow-xl prose max-w-none">
              {children}
            </div>
          </div>

          {/* STICKY SIDEBAR BOOKING CARD */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 glass-luxury-dark text-white rounded-[32px] p-6 sm:p-8 space-y-6 shadow-2xl border border-emerald-500/30">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-extrabold uppercase tracking-wider border border-emerald-500/30">
                  Fast Doorstep Slot
                </span>
                <h3 className="text-2xl font-black text-white">
                  Book Doctor or Spa Now 🩺
                </h3>
                <p className="text-xs text-slate-300">
                  Select your timing & doctor will arrive with complete medical kit.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => openBooking(title)}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.02]"
                >
                  Book {title} Now ⚡
                </button>

                <a
                  href="https://wa.me/918800813462"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-400 font-extrabold py-3.5 rounded-2xl text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <span>💬 Instant WhatsApp Chat</span>
                </a>

                <a
                  href="tel:+918800813462"
                  className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-extrabold py-3.5 rounded-2xl text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <span>📞 Call Vet: +91 88008 13462</span>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-[11px] text-slate-300">
                <div className="flex items-center justify-between font-bold">
                  <span>🟢 Active Doctor Status</span>
                  <span className="text-emerald-400">Available</span>
                </div>
                <p className="text-slate-400 leading-normal">
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
