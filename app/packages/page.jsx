"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import QuickLeadBar from "@/components/QuickLeadBar";
import PetPriceCalculator from "@/components/PetPriceCalculator";

const cats = [
  {
    title: "Veterinary Doctor Home Visits", icon: "🩺", color: "#059669", bg: "#ecfdf5", bdr: "#a7f3d0",
    rows: [
      { name: "Clinical Doctor Visit & Exam", price: "₹449", desc: "Physical clinical examination, fever/illness diagnosis & signed prescription." },
      { name: "Follow-Up Doctor Review (within 7 days)", price: "₹299", desc: "Post-treatment review and recovery check." },
      { name: "24/7 Night Emergency SOS Visit", price: "₹699", desc: "Night emergency vet dispatch with critical care equipment." },
    ],
  },
  {
    title: "Vaccination Packages", icon: "💉", color: "#ea580c", bg: "#fff7ed", bdr: "#fed7aa",
    rows: [
      { name: "Anti-Rabies Core Shot", price: "₹999", desc: "Mandatory annual rabies vaccine with digital card." },
      { name: "Adult Dog Annual Booster (9-in-1)", price: "₹3,899", desc: "Protects against Parvovirus, Distemper, Hepatitis & Leptospirosis." },
      { name: "Puppy 5-Vaccine Series Package", price: "₹6,799", desc: "Complete puppy vaccination series from 6 weeks to 18 weeks." },
      { name: "Cat FVRCP Triple Vaccine", price: "₹2,499", desc: "Protects cats against Rhinotracheitis, Calicivirus & Panleukopenia." },
    ],
  },
  {
    title: "Doorstep Grooming Spa", icon: "✂️", color: "#7c3aed", bg: "#f5f3ff", bdr: "#ddd6fe",
    rows: [
      { name: "Bath & Blow Dry Spa", price: "₹799", desc: "Shampoo bath, blow dry, coat brushing & fragrance spray." },
      { name: "Mini Grooming Package", price: "₹1,100", desc: "Spa bath, blow dry, nail clipping, ear & eye cleaning." },
      { name: "Full Breed Haircut & Styling", price: "₹1,799", desc: "Complete breed styling/haircut with scissor finish." },
    ],
  },
  {
    title: "Lab Diagnostics at Home", icon: "🧪", color: "#2563eb", bg: "#eff6ff", bdr: "#bfdbfe",
    rows: [
      { name: "Complete Blood Count (CBC)", price: "₹850", desc: "Hemoglobin, WBC, platelet count & infection screening." },
      { name: "Liver & Kidney Function Panel (LFT/KFT)", price: "₹1,499", desc: "Detailed biochemical organ health report." },
      { name: "Comprehensive Senior Health Panel", price: "₹2,499", desc: "CBC, LFT, KFT, Blood Sugar, Thyroid & Urine Analysis." },
    ],
  },
];

export default function PackagesPage() {
  const [openModal, setOpenModal] = useState(false);
  const [sel, setSel] = useState("Veterinary Home Visit (₹449)");

  const book = (n) => {
    setSel(n);
    setOpenModal(true);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans text-slate-700 antialiased">
      <Navbar />

      <main className="pt-16">
        {/* HERO */}
        <section className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-6 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-4 relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              Transparent Pricing • Zero Hidden Fees
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Pricing & Service Packages 💰
            </h1>
            <p className="text-sm text-slate-300 max-w-xl mx-auto font-medium">
              Transparent rates for all doorstep services across Delhi NCR. Pay after your appointment via UPI, Card, or Cash.
            </p>
          </div>
        </section>

        {/* INTERACTIVE PRICE CALCULATOR */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <PetPriceCalculator onBook={(p) => book(p)} />
        </section>

        {/* CATEGORY TABLES */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-8">
          {cats.map((cat, ci) => (
            <div
              key={ci}
              className="glass-luxury rounded-[32px] overflow-hidden border shadow-xl"
              style={{ borderColor: cat.bdr }}
            >
              <div className="px-8 py-5 flex items-center gap-3 text-white" style={{ background: cat.color }}>
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl font-black">{cat.title}</h2>
              </div>

              <div className="divide-y divide-slate-100">
                {cat.rows.map((row, ri) => (
                  <div
                    key={ri}
                    className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                  >
                    <div className="space-y-1">
                      <h3 className="text-base font-black text-slate-900">{row.name}</h3>
                      <p className="text-xs text-slate-500">{row.desc}</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-xl font-black" style={{ color: cat.color }}>
                        {row.price}
                      </span>
                      <button
                        onClick={() => book(`${row.name} (${row.price})`)}
                        className="text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md transition-all hover:scale-105"
                        style={{ background: cat.color }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      <QuickLeadBar onBookClick={(s) => book(s)} />

      {openModal && (
        <BookingModal service={sel} onClose={() => setOpenModal(false)} />
      )}

      <Footer />
    </div>
  );
}
