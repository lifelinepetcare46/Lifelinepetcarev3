"use client";

import { useState } from "react";

export default function QuickLeadBar({ onBookClick }) {
  const [pet, setPet] = useState("Dog 🐕");
  const [service, setService] = useState("Vet Visit (₹449)");

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Lifeline Pet Care! 🐾 I want to book a doorstep service for my ${pet}.\nService: ${service}\nPlease share doctor arrival timing & details.`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
  };

  return (
    <div className="lead-bar-floating hidden sm:flex items-center justify-between gap-4 transition-all hover:scale-[1.01]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-xl shrink-0 animate-bounce">
          🩺
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <p className="text-xs font-bold text-white tracking-wide uppercase">
              Fast 30-Sec Lead Booking
            </p>
          </div>
          <p className="text-xs text-gray-300">
            Delhi NCR Doorstep Vet & Spa Specialist
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={pet}
          onChange={(e) => setPet(e.target.value)}
          className="bg-slate-800 text-white text-xs font-semibold px-3 py-2 rounded-full border border-slate-700 focus:outline-none focus:border-emerald-400 cursor-pointer"
        >
          <option>Dog 🐕</option>
          <option>Cat 🐱</option>
        </select>

        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="bg-slate-800 text-white text-xs font-semibold px-3 py-2 rounded-full border border-slate-700 focus:outline-none focus:border-emerald-400 cursor-pointer"
        >
          <option>Vet Visit (₹449)</option>
          <option>Vaccination (₹999+)</option>
          <option>Doorstep Spa (₹799+)</option>
          <option>Emergency SOS 🚨</option>
        </select>

        <button
          onClick={() => onBookClick && onBookClick(service)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95"
        >
          Book Now ⚡
        </button>

        <button
          onClick={handleWhatsApp}
          className="bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-400 font-bold text-xs px-4 py-2.5 rounded-full transition-all flex items-center gap-1.5"
        >
          <span>💬</span>
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
