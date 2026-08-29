"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 700);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#FAF9F5] transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Spatial Blur Orbs */}
      <div className="absolute w-96 h-96 bg-[#4CAF50]/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute w-80 h-80 bg-[#E8F5E9] rounded-full blur-2xl top-1/4 right-1/4 pointer-events-none" />

      {/* Main Preloader Glass Cluster */}
      <div className="relative flex flex-col items-center gap-6 p-10 rounded-[3rem] bg-white/70 backdrop-blur-2xl border border-[rgba(26,26,26,0.08)] shadow-[0_20px_40px_-10px_rgba(0,110,28,0.12)]">
        {/* Animated Paw & Stethoscope Icon Ring */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer Liquid Wave Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-[#006E1C]/20 border-t-[#006E1C] animate-spin" />
          <div className="absolute inset-2 rounded-full border-4 border-[#4CAF50]/30 border-b-[#4CAF50] animate-spin duration-1000 reverse" />
          
          <div className="w-16 h-16 rounded-full bg-[#E8F5E9] flex items-center justify-center p-2.5 shadow-inner animate-pulse overflow-hidden border border-[#006E1C]/20">
            <img src="/logo3.png" alt="Lifeline Pet Care Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Brand Name & Tagline */}
        <div className="text-center space-y-1.5">
          <h2 className="text-2xl font-extrabold text-[#1B1C1A] tracking-tighter font-sans">
            Lifeline <span className="text-[#006E1C] italic font-serif">Pet Care</span>
          </h2>
          <p className="text-xs font-semibold text-[#6F7A6B] tracking-wide uppercase">
            Care that comes home...
          </p>
        </div>

        {/* Liquid Progress Bar */}
        <div className="w-48 bg-[#EFEEEA] h-2 rounded-full overflow-hidden relative border border-black/5">
          <div className="bg-[#006E1C] h-full rounded-full animate-[shimmer-slide_1.5s_infinite] w-full" />
        </div>
      </div>
    </div>
  );
}
