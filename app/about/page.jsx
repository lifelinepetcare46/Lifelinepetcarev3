"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import QuickLeadBar from "@/components/QuickLeadBar";
import Link from "next/link";

const principles = [
  {
    icon: "health_and_safety",
    tag: "Protocol 01",
    title: "Hospital-Grade Protocols At Home",
    desc: "Strict 2°C–8°C cold-chain vaccine management using insulated digital carriers, sterile equipment & Zoetis/Virbac core vaccines.",
    bg: "bg-[#E8F5E9]",
    color: "#006E1C",
  },
  {
    icon: "psychology",
    tag: "Protocol 02",
    title: "Zero Stress Diagnostics",
    desc: "Eliminating terrorizing clinic trips. Low-stress gentle handling in your pet's safe living room rug environment.",
    bg: "bg-[#FFFDE7]",
    color: "#1B1C1A",
  },
  {
    icon: "description",
    tag: "Protocol 03",
    title: "Transparent Digital Records",
    desc: "Instant digitally signed doctor prescriptions & vaccine certificates delivered straight to your WhatsApp after every visit.",
    bg: "bg-[#E3F2FD]",
    color: "#0284C7",
  },
];

const stats = [
  { value: "15,000+", label: "Doorstep Visits Completed" },
  { value: "99.4%", label: "On-Time Doctor Arrival" },
  { value: "4.9★", label: "Parent Satisfaction Rating" },
  { value: "24/7", label: "Emergency SOS Support Desk" },
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] font-sans antialiased min-h-screen relative flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full space-y-20">
        {/* STITCH EDITORIAL HERO HEADER */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider border border-[#006E1C]/30 inline-block">
            Our Philosophy & Foundation
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1B1C1A] tracking-tight leading-[1.08]">
            Pioneering the Next Era of <br className="hidden sm:block" />
            <span className="text-[#006E1C] italic font-serif">Doorstep Veterinary</span> Medicine.
          </h1>
          <p className="text-base sm:text-xl text-[#3F4A3C] leading-relaxed max-w-3xl mx-auto font-normal">
            Founded in 2024, Lifeline Pet Care was born from a simple conviction: clinical medical excellence and profound compassion belong right at home.
          </p>
        </div>

        {/* STITCH BENTO STATS BAR */}
        <div className="glass-panel-dark rounded-[3rem] p-8 sm:p-12 border border-white/10 shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s, i) => (
            <div key={i} className="space-y-1">
              <p className="text-3xl sm:text-5xl font-extrabold text-[#94F990] tracking-tight">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm text-[#BECAB9] font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* MISSION & VISION DUAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-[3rem] p-8 sm:p-12 border border-[rgba(26,26,26,0.08)] shadow-lg space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-[#E8F5E9] text-[#006E1C] text-[11px] font-extrabold uppercase tracking-wider">
              Core Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B1C1A] tracking-tight">
              Our Clinical Mission
            </h2>
            <p className="text-sm sm:text-base text-[#3F4A3C] leading-relaxed">
              To eliminate travel anxiety and stressful clinic waiting rooms for pets by dispatching licensed BVSc doctors, Zoetis 2°C–8°C cold-chain vaccines & organic spa care directly to your living room floor.
            </p>
          </div>

          <div className="glass-panel rounded-[3rem] p-8 sm:p-12 border border-[rgba(26,26,26,0.08)] shadow-lg space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-[#FFFDE7] text-[#1B1C1A] text-[11px] font-extrabold uppercase tracking-wider">
              Future Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B1C1A] tracking-tight">
              Our 2030 Vision
            </h2>
            <p className="text-sm sm:text-base text-[#3F4A3C] leading-relaxed">
              To build India's gold-standard doorstep veterinary institution — where every dog & cat receives hospital-grade diagnostic care, preventive immunizations, and emergency SOS support at home.
            </p>
          </div>
        </div>

        {/* STITCH THREE CORE PRINCIPLES BENTO */}
        <div className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider border border-[#006E1C]/30">
              Clinical Non-Negotiables
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1B1C1A] tracking-tight">
              Our Three Medical Principles 🛡️
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-[3rem] p-8 sm:p-10 border border-[rgba(26,26,26,0.08)] space-y-6 ambient-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl ${p.bg} flex items-center justify-center text-[#006E1C]`}>
                      <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#6F7A6B]">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B1C1A]">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-[#3F4A3C] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STITCH COMMUNITY IMPACT: THE STRAY ANIMAL INITIATIVE */}
        <section className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden bg-[#E8F5E9] p-8 md:p-16 border border-[#006E1C]/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-[#006E1C] text-white text-xs font-extrabold uppercase tracking-wider rounded-full">
                Community Impact
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1B1C1A] tracking-tight">
                The Stray Animal Initiative
              </h2>
              <p className="text-sm sm:text-base text-[#3F4A3C] leading-relaxed">
                Our commitment extends beyond registered home patients. Through our experimental outreach program across Delhi NCR, we dedicate 15% of our clinical resources to providing free emergency care and vaccines for vulnerable community animals.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-[#1B1C1A] font-semibold">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#006E1C]">health_and_safety</span>
                  <span>Free field triage & emergency wound care for street dogs & cats.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#006E1C]">vaccines</span>
                  <span>Anti-Rabies vaccination drives across Delhi NCR localities.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#006E1C]">volunteer_activism</span>
                  <span>Rehabilitation and rehoming support with trusted local shelters.</span>
                </li>
              </ul>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#006E1C] hover:bg-[#005313] text-white font-extrabold text-xs px-8 py-4 rounded-full shadow-lg shadow-[#006E1C]/30 hover:scale-105 transition-all"
              >
                Support the Initiative 🐾
              </button>
            </div>

            <div className="relative aspect-square sm:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAiA780AgYZBVbumsih1aCRaqEbtotRmcKev89-sst3vKcdRHeePT2iBeuVWsdxog9jal4OWx4-AmmJqRhVLNj_ozA3DRFWPfFfm7H4eTgSfHdH7Hh0R7-lpgHoJ6sVMAFjlRFqI3QjJ_IyBLWGEhxZgr4TL9BxP6_3I0KZmxLfiz76l1A083Y2Lx8slBgvwra1AUqBGa9W7X2u9QvCcNIa8v6Fuc9axtelbIh9lLZ7zmIucGZ2ycF"
                alt="Veterinary technician caring for stray puppy"
              />
            </div>
          </div>
        </section>
      </main>

      <QuickLeadBar onBookClick={() => setModalOpen(true)} />

      {modalOpen && (
        <BookingModal
          service="Veterinary Home Visit (₹449)"
          onClose={() => setModalOpen(false)}
        />
      )}

      <Footer />
    </div>
  );
}
