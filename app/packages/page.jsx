"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import QuickLeadBar from "@/components/QuickLeadBar";
import PetPriceCalculator from "@/components/PetPriceCalculator";

const cats = [
  {
    title: "Veterinary Doctor Home Visits",
    icon: "stethoscope",
    color: "#006E1C",
    bg: "bg-[#E8F5E9]",
    rows: [
      { name: "Clinical Doctor Visit & Exam", price: "₹449", desc: "Physical clinical examination, fever/illness diagnosis & signed prescription." },
      { name: "Follow-Up Doctor Review (within 7 days)", price: "₹299", desc: "Post-treatment review and recovery check." },
      { name: "24/7 Night Emergency SOS Visit", price: "₹699", desc: "Night emergency vet dispatch with critical care equipment." },
    ],
  },
  {
    title: "Vaccination Packages",
    icon: "vaccines",
    color: "#006E1C",
    bg: "bg-[#E8F5E9]",
    rows: [
      { name: "Anti-Rabies Core Shot", price: "₹999", desc: "Mandatory annual rabies vaccine with digital card." },
      { name: "Adult Dog Annual Booster (9-in-1)", price: "₹3,899", desc: "Protects against Parvovirus, Distemper, Hepatitis & Leptospirosis." },
      { name: "Puppy 5-Vaccine Series Package", price: "₹6,799", desc: "Complete puppy vaccination series from 6 weeks to 18 weeks." },
      { name: "Cat FVRCP Triple Vaccine", price: "₹2,499", desc: "Protects cats against Rhinotracheitis, Calicivirus & Panleukopenia." },
    ],
  },
  {
    title: "Doorstep Grooming Spa",
    icon: "content_cut",
    color: "#1B1C1A",
    bg: "bg-[#FFFDE7]",
    rows: [
      { name: "Bath & Blow Dry Spa", price: "₹799", desc: "Shampoo bath, blow dry, coat brushing & fragrance spray." },
      { name: "Mini Grooming Package", price: "₹1,100", desc: "Spa bath, blow dry, nail clipping, ear & eye cleaning." },
      { name: "Full Breed Haircut & Styling", price: "₹1,799", desc: "Complete breed styling/haircut with scissor finish." },
    ],
  },
  {
    title: "Lab Diagnostics at Home",
    icon: "science",
    color: "#0284C7",
    bg: "bg-[#E3F2FD]",
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
    <div className="bg-[#FAF9F5] text-[#1B1C1A] font-sans antialiased min-h-screen relative flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full space-y-12">
        {/* EDITORIAL HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider border border-[#006E1C]/30">
            Transparent Pricing • Zero Hidden Fees
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1B1C1A] tracking-tight leading-none">
            Pricing & <span className="text-[#006E1C] italic font-serif">Packages</span> 💰
          </h1>
          <p className="text-base sm:text-lg text-[#3F4A3C] leading-relaxed">
            Transparent rates for all doorstep services across Delhi NCR. Pay after your appointment via UPI, Card, or Cash.
          </p>
        </div>

        {/* INTERACTIVE PRICE CALCULATOR */}
        <section>
          <PetPriceCalculator onBook={(p) => book(p)} />
        </section>

        {/* CATEGORY TABLES (STITCH GLASS PANELS) */}
        <section className="space-y-8">
          {cats.map((cat, ci) => (
            <div
              key={ci}
              className="glass-panel rounded-[3rem] overflow-hidden border border-[rgba(26,26,26,0.08)] shadow-lg"
            >
              <div
                className="px-8 py-5 flex items-center gap-3 text-white"
                style={{ background: cat.color }}
              >
                <span className="material-symbols-outlined text-2xl">
                  {cat.icon}
                </span>
                <h2 className="text-xl font-bold tracking-tight">{cat.title}</h2>
              </div>

              <div className="divide-y divide-black/5">
                {cat.rows.map((row, ri) => (
                  <div
                    key={ri}
                    className="p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-black/2 transition-colors"
                  >
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-[#1B1C1A]">
                        {row.name}
                      </h3>
                      <p className="text-xs text-[#3F4A3C]">{row.desc}</p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <span
                        className="text-2xl font-extrabold"
                        style={{ color: cat.color }}
                      >
                        {row.price}
                      </span>
                      <button
                        onClick={() => book(`${row.name} (${row.price})`)}
                        className="text-white font-extrabold text-xs px-6 py-3 rounded-full shadow-md hover:scale-105 transition-all"
                        style={{ background: cat.color }}
                      >
                        Book Now ⚡
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* HIGH CONVERTING LEAD CTA BANNER */}
        <div className="mt-16 bg-[#E8F5E9] rounded-[3rem] p-8 md:p-12 border border-[#006E1C]/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3.5 py-1 rounded-full bg-[#006E1C] text-white text-[11px] font-extrabold uppercase tracking-wider">
              ⚡ Transparent Doorstep Packages
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1B1C1A]">
              Get Custom Package Quote
            </h3>
            <p className="text-xs sm:text-sm text-[#3F4A3C]">
              Need a custom vaccination series or multi-pet consultation package? Chat directly with our vet coordinator.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => book("Custom Package Quote")}
              className="bg-[#006E1C] hover:bg-[#005313] text-white font-extrabold text-xs px-7 py-3.5 rounded-full shadow-lg shadow-[#006E1C]/30 hover:scale-105 transition-all"
            >
              Book Package Now 🚀
            </button>
            <a
              href="https://wa.me/918800813462"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#006E1C] border border-[#006E1C]/30 font-extrabold text-xs px-6 py-3.5 rounded-full hover:bg-emerald-50 transition-all flex items-center gap-1.5"
            >
              <span>💬</span>
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </main>

      <QuickLeadBar onBookClick={(s) => book(s)} />

      {openModal && (
        <BookingModal service={sel} onClose={() => setOpenModal(false)} />
      )}

      <Footer />
    </div>
  );
}
