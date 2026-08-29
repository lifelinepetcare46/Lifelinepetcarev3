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
      className="hidden md:flex fixed bottom-6 left-0 right-0 mx-auto w-[90%] max-w-5xl z-40 bg-[#1B1C1A]/95 text-white backdrop-blur-2xl p-3.5 rounded-full border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)] items-center justify-between gap-4 transition-all hover:scale-[1.01]"
      style={{ left: 0, right: 0, marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#006E1C]/40 border border-[#006E1C] flex items-center justify-center text-xl shrink-0 animate-bounce">
          🩺
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#94F990] animate-ping" />
            <p className="text-xs font-extrabold text-white tracking-wide uppercase">
              Fast 30-Sec Lead Booking
            </p>
          </div>
          <p className="text-xs text-[#BECAB9]">
            Delhi NCR Doorstep Vet & Spa Specialist
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={pet}
          onChange={(e) => setPet(e.target.value)}
          className="bg-[#2F312E] text-white text-xs font-bold px-3.5 py-2 rounded-full border border-white/10 focus:outline-none focus:border-[#94F990] cursor-pointer"
        >
          <option>Dog 🐕</option>
          <option>Cat 🐱</option>
        </select>

        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="bg-[#2F312E] text-white text-xs font-bold px-3.5 py-2 rounded-full border border-white/10 focus:outline-none focus:border-[#94F990] cursor-pointer"
        >
          <option>Vet Visit (₹449)</option>
          <option>Vaccination (₹999+)</option>
          <option>Doorstep Spa (₹799+)</option>
          <option>Emergency SOS 🚨</option>
        </select>

        <button
          onClick={() => onBookClick && onBookClick(service)}
          className="bg-[#006E1C] hover:bg-[#005313] text-white font-extrabold text-xs px-5 py-2.5 rounded-full shadow-lg shadow-[#006E1C]/30 transition-all hover:scale-105 active:scale-95"
        >
          Book Now ⚡
        </button>

        <button
          onClick={handleWhatsApp}
          className="bg-emerald-950 hover:bg-emerald-900 border border-[#006E1C]/40 text-[#94F990] font-bold text-xs px-4 py-2.5 rounded-full transition-all flex items-center gap-1.5"
        >
          <span>💬</span>
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
