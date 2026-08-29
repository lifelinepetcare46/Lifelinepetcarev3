"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import QuickLeadBar from "@/components/QuickLeadBar";
import Link from "next/link";

const team = [
  { name: "Dr. Rohit Sharma", title: "Senior Veterinary Surgeon", spec: "Soft tissue surgery & internal medicine", exp: "12 yrs", emoji: "👨‍⚕️" },
  { name: "Dr. Priya Mehta", title: "Feline & Canine Specialist", spec: "Cat behavior & dog preventive medicine", exp: "8 yrs", emoji: "👩‍⚕️" },
  { name: "Dr. Arjun Kapur", title: "Vaccination & Immunology", spec: "Cold-chain vaccine protocols", exp: "10 yrs", emoji: "👨‍⚕️" },
  { name: "Dr. Neha Gupta", title: "Dermatology & Nutrition", spec: "Therapeutic diets & coat restoration", exp: "7 yrs", emoji: "👩‍⚕️" },
];

const timeline = [
  { year: "2016", event: "Founded in South Delhi with 2 dedicated vets & a mobile care van." },
  { year: "2018", event: "Expanded to 5 zones across Delhi, Noida & Gurgaon." },
  { year: "2020", event: "Launched 24/7 Emergency Vet SOS during lockdown." },
  { year: "2022", event: "Crossed 10,000 happy pets treated milestone." },
  { year: "2024", event: "Opened dedicated Pet Boarding & ICU facility." },
  { year: "2026", event: "15,000+ happy pet families across Delhi NCR." },
];

const pillars = [
  { icon: "stethoscope", title: "Certified BVSc Doctors Only", desc: "Every vet holds a BVSc & AH degree, background verified and trained in stress-free handling." },
  { icon: "vaccines", title: "Genuine Cold-Chain Vaccines", desc: "Sourced directly from Zoetis, Virbac & Intervet. Stored strictly at 2°C–8°C." },
  { icon: "home", title: "Zero Clinic Stress", desc: "Complete clinical treatments & spa baths inside your pet's safe home." },
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] font-sans antialiased min-h-screen relative flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full space-y-16">
        {/* EDITORIAL HERO (STITCH SPEC) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider border border-[#006E1C]/30">
            Our Story & Mission
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1B1C1A] tracking-tight leading-none">
            About Lifeline <span className="text-[#006E1C] italic font-serif">Pet Care</span> 🐾
          </h1>
          <p className="text-base sm:text-lg text-[#3F4A3C] leading-relaxed">
            Founded in 2016, we are Delhi NCR's spatial laboratory for veterinary excellence — bringing certified doctors, cold-chain vaccines, and compassionate care straight to your doorstep.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Our Mission", text: "To eliminate clinic travel stress for pets and families by delivering world-class veterinary care — diagnoses, vaccinations, grooming, and 24/7 emergency response — directly at the doorstep." },
            { title: "Our Vision", text: "To become India's most trusted & loved pet healthcare brand by 2030 — where every pet receives compassionate, hospital-grade care in the comfort of their home." },
          ].map((mv, i) => (
            <div key={i} className="glass-panel rounded-[3rem] p-8 sm:p-10 border border-[rgba(26,26,26,0.08)] shadow-lg space-y-4">
              <h2 className="text-2xl font-bold text-[#1B1C1A] tracking-tight">{mv.title}</h2>
              <p className="text-sm text-[#3F4A3C] leading-relaxed">{mv.text}</p>
            </div>
          ))}
        </div>

        {/* CORE PILLARS */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider">
              Clinical Non-Negotiables
            </span>
            <h2 className="text-3xl font-bold text-[#1B1C1A] tracking-tight">
              Our Core Medical Standards 🛡️
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="glass-panel rounded-[3rem] p-8 border border-[rgba(26,26,26,0.08)] space-y-4 ambient-shadow">
                <div className="w-14 h-14 rounded-2xl bg-[#E8F5E9] text-[#006E1C] flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1B1C1A]">{p.title}</h3>
                <p className="text-xs text-[#3F4A3C] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VETERINARY TEAM */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider">
              Expert Vets
            </span>
            <h2 className="text-3xl font-bold text-[#1B1C1A] tracking-tight">
              Meet Our BVSc Veterinary Team 🩺
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((v, i) => (
              <div key={i} className="glass-panel rounded-[2.5rem] p-6 text-center border border-[rgba(26,26,26,0.08)] space-y-3 hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-3xl flex items-center justify-center mx-auto border border-[#006E1C]/20">
                  {v.emoji}
                </div>
                <h4 className="text-lg font-bold text-[#1B1C1A]">{v.name}</h4>
                <p className="text-xs font-extrabold text-[#006E1C]">{v.title}</p>
                <p className="text-[11px] text-[#3F4A3C]">{v.spec}</p>
                <span className="inline-block bg-[#F4F4F0] text-[#1B1C1A] text-[10px] font-bold px-3 py-1 rounded-full border border-black/5">
                  {v.exp} experience
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* JOURNEY TIMELINE */}
        <div className="glass-panel-dark text-white rounded-[3rem] p-8 md:p-12 space-y-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-white tracking-tight">
            Our Journey Over The Years 🚀
          </h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 items-start border-b border-white/10 pb-6">
                <span className="text-base font-extrabold text-[#94F990] min-w-16">{t.year}</span>
                <p className="text-xs text-[#BECAB9] leading-relaxed">{t.event}</p>
              </div>
            ))}
          </div>
        </div>
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
