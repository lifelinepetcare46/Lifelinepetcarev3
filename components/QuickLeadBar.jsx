"use client";

import { useState } from "react";

export default function QuickLeadBar({ onBookClick }) {
  const [pet, setPet] = useState("Dog 🐕");
  const [service, setService] = useState("Vet Visit (₹449)");

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Lifeline Pet Care! 🐾 I want to book a doorstep service for my ${pet}.\nService: ${service}\nPlease share doctor arrival timing & details.`
    );
    window.open(`https://wa.me/918800813462?text=${text}`, "_blank");
  };

  return (
    <div
      className="fixed bottom-[4.5rem] md:bottom-6 left-0 right-0 mx-auto w-[92%] max-w-5xl z-40 bg-[#1B1C1A]/95 text-white backdrop-blur-2xl p-3 md:p-3.5 rounded-full border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-center justify-between gap-3 transition-all hover:scale-[1.01]"
      style={{ left: 0, right: 0, marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start px-2 md:px-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#006E1C]/40 border border-[#006E1C] flex items-center justify-center text-base shrink-0 animate-bounce">
            🩺
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#94F990] animate-ping" />
              <p className="text-[11px] md:text-xs font-extrabold text-white tracking-wide uppercase">
                Fast 30-Sec Lead Booking
              </p>
            </div>
            <p className="text-[10px] md:text-xs text-[#BECAB9] hidden sm:block">
              Delhi NCR Doorstep Vet Specialist
            </p>
          </div>
        </div>

        {/* Quick WhatsApp on Mobile */}
        <button
          onClick={handleWhatsApp}
          className="md:hidden bg-[#006E1C] text-white font-bold text-[11px] px-3.5 py-1.5 rounded-full flex items-center gap-1 border border-[#94F990]/30"
        >
          <span>💬 WhatsApp</span>
        </button>
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
        <select
          value={pet}
          onChange={(e) => setPet(e.target.value)}
          className="bg-[#2F312E] text-white text-[11px] md:text-xs font-bold px-3 py-2 rounded-full border border-white/10 focus:outline-none focus:border-[#94F990] cursor-pointer flex-1 md:flex-none"
        >
          <option>Dog 🐕</option>
          <option>Cat 🐱</option>
        </select>

        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="bg-[#2F312E] text-white text-[11px] md:text-xs font-bold px-3 py-2 rounded-full border border-white/10 focus:outline-none focus:border-[#94F990] cursor-pointer flex-1 md:flex-none"
        >
          <option>Vet Visit (₹449)</option>
          <option>Vaccination (₹999+)</option>
          <option>Doorstep Spa (₹799+)</option>
          <option>Emergency SOS 🚨</option>
        </select>

        <button
          onClick={() => onBookClick && onBookClick(service)}
          className="bg-[#006E1C] hover:bg-[#005313] text-white font-extrabold text-[11px] md:text-xs px-4 md:px-5 py-2.5 rounded-full shadow-lg shadow-[#006E1C]/30 transition-all hover:scale-105 active:scale-95 shrink-0"
        >
          Book ⚡
        </button>

        <button
          onClick={handleWhatsApp}
          className="hidden md:flex bg-emerald-950 hover:bg-emerald-900 border border-[#006E1C]/40 text-[#94F990] font-bold text-xs px-4 py-2.5 rounded-full transition-all items-center gap-1.5"
        >
          <span>💬</span>
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
