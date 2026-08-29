"use client";

import { useState } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import QuickLeadBar from "@/components/QuickLeadBar";
import Link from "next/link";

const team = [
  { name: "Dr. Rohit Sharma", title: "Senior Veterinary Surgeon", spec: "Soft tissue surgery, internal medicine", exp: "12 yrs", emoji: "👨‍⚕️" },
  { name: "Dr. Priya Mehta", title: "Feline & Exotic Specialist", spec: "Cats, rabbits, ferrets & avian care", exp: "8 yrs", emoji: "👩‍⚕️" },
  { name: "Dr. Arjun Kapur", title: "Vaccination & Preventive Care", spec: "Immunology & cold-chain vaccine protocols", exp: "10 yrs", emoji: "👨‍⚕️" },
  { name: "Dr. Neha Gupta", title: "Dermatology & Nutrition", spec: "Skin allergies, therapeutic diets, coat health", exp: "7 yrs", emoji: "👩‍⚕️" },
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
  { icon: "🎓", title: "Certified BVSc Doctors Only", desc: "Every vet holds a BVSc & AH degree. Background verified & trained in gentle handling." },
  { icon: "❄️", title: "Genuine Cold-Chain Vaccines", desc: "Sourced directly from Zoetis, Virbac & Intervet. Stored strictly at 2°C–8°C." },
  { icon: "🌿", title: "Zero Clinic Stress", desc: "Complete clinical treatments & spa baths inside your pet's safe home." },
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  useGSAP([
    { selector: ".anim-hero", from: { opacity: 0, y: 40 }, duration: 0.8, ease: "power3.out" },
    { selector: ".anim-mv", from: { opacity: 0, y: 40 }, duration: 0.7, ease: "power3.out", stagger: 0.15 },
    { selector: ".anim-pillar", from: { opacity: 0, y: 40 }, duration: 0.65, ease: "power3.out", stagger: 0.12 },
  ]);

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans text-slate-700 antialiased">
      <Navbar />

      <main className="pt-16">
        {/* HERO BANNER */}
        <section className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white py-20 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 anim-hero">
            <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/30 backdrop-blur-md">
              Our Story & Mission
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
              About Lifeline Pet Care 🐾
            </h1>
            <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed font-medium">
              Founded in 2016, we are Delhi NCR's premier doorstep veterinary & pet spa provider — bringing certified doctors, cold-chain vaccines, and gentle care straight to your home.
            </p>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: "🎯", title: "Our Mission", text: "To eliminate clinic travel stress for pets and families by delivering world-class veterinary care — diagnoses, vaccinations, grooming, and 24/7 emergency response — directly at the doorstep." },
            { icon: "🌟", title: "Our Vision", text: "To become India's most trusted & loved pet healthcare brand by 2030 — where every pet receives compassionate, hospital-grade care in the comfort of their home." },
          ].map((mv, i) => (
            <div key={i} className="anim-mv glass-luxury rounded-[32px] p-8 border border-emerald-100 shadow-xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-2xl flex items-center justify-center border border-emerald-200">
                {mv.icon}
              </div>
              <h2 className="text-2xl font-black text-slate-900">{mv.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{mv.text}</p>
            </div>
          ))}
        </section>

        {/* CORE PILLARS */}
        <section className="py-16 bg-white/80 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                Clinical Non-Negotiables
              </span>
              <h2 className="text-3xl font-black text-slate-900">
                Our Core Medical Standards 🛡️
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p, i) => (
                <div key={i} className="anim-pillar glass-luxury rounded-[32px] p-8 border border-slate-200 space-y-3">
                  <span className="text-3xl">{p.icon}</span>
                  <h3 className="text-lg font-black text-slate-900">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VETERINARY TEAM */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              Expert Doctors
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Meet Our BVSc Veterinary Team 🩺
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((v, i) => (
              <div key={i} className="glass-luxury rounded-[28px] p-6 text-center border border-slate-200 space-y-3 hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-3xl flex items-center justify-center mx-auto border border-emerald-300">
                  {v.emoji}
                </div>
                <h4 className="text-base font-black text-slate-900">{v.name}</h4>
                <p className="text-xs font-extrabold text-emerald-600">{v.title}</p>
                <p className="text-[11px] text-slate-500">{v.spec}</p>
                <span className="inline-block bg-slate-100 text-slate-700 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-200">
                  {v.exp} experience
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* JOURNEY TIMELINE */}
        <section className="bg-slate-950 text-white py-16 px-6 border-t border-slate-800">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-black text-center text-white">
              Our Journey Over The Years 🚀
            </h2>
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-6 items-start border-b border-slate-800 pb-6">
                  <span className="text-sm font-black text-emerald-400 min-w-12">{t.year}</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{t.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center max-w-xl mx-auto px-6 space-y-4">
          <h2 className="text-3xl font-black text-slate-900">
            Ready to Experience Doorstep Care?
          </h2>
          <p className="text-xs text-slate-600">
            Book a veterinary doctor visit starting at ₹449. Same-day available.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs px-6 py-3.5 rounded-full shadow-lg shadow-emerald-600/30"
            >
              Book Vet Visit Now ⚡
            </button>
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-xs px-6 py-3.5 rounded-full"
            >
              Contact Us
            </Link>
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
