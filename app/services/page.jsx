"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import QuickLeadBar from "@/components/QuickLeadBar";

const services = [
  {
    icon: "stethoscope",
    bg: "bg-[#006E1C]/10",
    color: "#006E1C",
    tag: "Most Booked",
    label: "Vet Visit",
    title: "Home Consultation",
    price: "₹449",
    desc: "Comprehensive nose-to-tail clinical examination in the comfort of your living room.",
    features: [
      "Full head-to-tail physical examination",
      "Fever, vomiting & diarrhea diagnosis",
      "Skin, coat, eye & ear assessment",
      "Officially signed digital prescription",
      "WhatsApp follow-up support",
      "Available 7 days a week",
    ],
    booking: "Veterinary Home Visit (₹449)",
  },
  {
    icon: "vaccines",
    bg: "bg-[#E8F5E9]",
    color: "#006E1C",
    tag: "Cold-Chain Certified",
    label: "Vaccination",
    title: "Core Vaccination Drive",
    price: "from ₹999",
    desc: "Genuine cold-chain vaccines delivered to your pet at home — no travel, no stress.",
    features: [
      "Anti-Rabies Shot — ₹999",
      "Adult Dog Annual Booster (9-in-1) — ₹3,899",
      "Puppy 5-Vaccine Schedule — ₹6,799",
      "Cat Triple FVRCP — ₹2,499",
      "Digital vaccination record issued",
      "2°C–8°C cold chain always maintained",
    ],
    booking: "Anti-Rabies Core Vaccine (₹999)",
  },
  {
    icon: "content_cut",
    bg: "bg-[#FFFDE7]",
    color: "#1B1C1A",
    tag: "Organic & Safe",
    label: "Grooming",
    title: "Doorstep Medical Grooming",
    price: "from ₹799",
    desc: "Prescription baths, nail clipping & breed trims by certified professionals.",
    features: [
      "Bath & Blow Dry — ₹799",
      "Medicated Therapeutic Bath — ₹899",
      "Mini Groom (Bath+Nails+Ears) — ₹1,100",
      "Full Breed Haircut & Style — ₹1,799",
      "Tick & Flea treatment available",
      "Post-groom sanitation included",
    ],
    booking: "Doorstep Grooming Bath (₹799)",
  },
  {
    icon: "emergency",
    bg: "bg-[#FFEBEE]",
    color: "#BA1A1A",
    tag: "24/7 SOS",
    label: "Emergency",
    title: "Emergency ICU Triage",
    price: "On Call 🚨",
    desc: "Round-the-clock emergency veterinary care dispatched within 35 minutes.",
    features: [
      "Rapid vet dispatch Delhi NCR",
      "IV fluid therapy administration",
      "Seizure & shock stabilization",
      "Trauma & accident first response",
      "On-site oxygen support",
      "Hospital referral if required",
    ],
    booking: "Emergency ICU Support",
  },
  {
    icon: "science",
    bg: "bg-[#E3F2FD]",
    color: "#0284C7",
    tag: "NABL Certified",
    label: "Lab Tests",
    title: "Doorstep Lab Sample Pickup",
    price: "from ₹399",
    desc: "Full blood panel, urinalysis & cytology samples collected safely at home.",
    features: [
      "Complete Blood Count (CBC)",
      "Liver & Kidney Function Tests",
      "Blood Glucose & Thyroid Panel",
      "Urinalysis & Stool Tests",
      "Sample pickup within 2 hours",
      "Digital WhatsApp reports",
    ],
    booking: "Lab Test at Home (₹399)",
  },
  {
    icon: "apartment",
    bg: "bg-[#F4F4F0]",
    color: "#1B1C1A",
    tag: "Vet-Supervised",
    label: "Boarding",
    title: "Luxury Pet Boarding",
    price: "from ₹499/night",
    desc: "Medically supervised overnight pet boarding with 24/7 vet monitoring.",
    features: [
      "Vet-certified boarding facility",
      "Individual air-conditioned kennels",
      "3 meals + exercise daily",
      "24/7 health monitoring",
      "Live WhatsApp photo updates",
      "Emergency care on-site",
    ],
    booking: "Pet Boarding Stay (₹499)",
  },
];

export default function ServicesPage() {
  const [openModal, setOpenModal] = useState(false);
  const [sel, setSel] = useState("Veterinary Home Visit (₹449)");

  const book = (s) => {
    setSel(s);
    setOpenModal(true);
  };

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] font-sans antialiased min-h-screen relative flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
        {/* EDITORIAL HEADER (STITCH SPEC) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider border border-[#006E1C]/30">
            Comprehensive Veterinary Care
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1B1C1A] tracking-tight leading-none">
            Delivered to your <span className="text-[#006E1C] italic font-serif">door</span>.
          </h1>
          <p className="text-base sm:text-lg text-[#3F4A3C] leading-relaxed">
            Experience veterinary excellence with our spatial-first approach. Advanced diagnostics, certified doctors, and compassionate care in your home.
          </p>
        </div>

        {/* BENTO SERVICES GRID (STITCH SPEC) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <div
              key={i}
              className="glass-panel rounded-[3rem] p-8 md:p-10 space-y-6 flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 ambient-shadow"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div
                    className={`w-16 h-16 rounded-3xl ${svc.bg} flex items-center justify-center`}
                  >
                    <span className="material-symbols-outlined text-3xl" style={{ color: svc.color }}>
                      {svc.icon}
                    </span>
                  </div>
                  <span className="bg-white/80 border border-black/5 px-4 py-1.5 rounded-full text-xs font-bold text-[#1B1C1A] shadow-xs">
                    {svc.tag}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-[#6F7A6B] uppercase tracking-widest">
                    {svc.label}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1B1C1A] mt-1">
                    {svc.title}
                  </h3>
                  <p className="text-2xl font-extrabold text-[#006E1C] mt-2">
                    {svc.price}
                  </p>
                  <p className="text-xs text-[#3F4A3C] mt-3 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-black/5">
                  {svc.features.map((f, j) => (
                    <li key={j} className="text-xs text-[#1B1C1A] flex items-center gap-2">
                      <span className="text-[#006E1C] font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => book(svc.booking)}
                className="w-full bg-[#006E1C] hover:bg-[#005313] text-white font-extrabold py-3.5 rounded-full text-xs shadow-md hover:scale-[1.02] active:scale-95 transition-all"
              >
                Book {svc.label} ⚡
              </button>
            </div>
          ))}
        </div>
      </main>

      <QuickLeadBar onBookClick={(s) => book(s)} />

      {openModal && (
        <BookingModal
          service={sel}
          onClose={() => setOpenModal(false)}
        />
      )}

      <Footer />
    </div>
  );
}
