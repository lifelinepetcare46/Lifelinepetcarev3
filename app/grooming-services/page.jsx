"use client";

import { useState } from "react";
import Link from "next/link";
import BookingModal from "@/components/BookingModal";

export default function GroomingServicesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans antialiased">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <Link href="/" className="font-extrabold text-xl text-[#00685f]">Lifeline Pet Care</Link>
        <Link href="/" className="text-xs font-bold text-[#00685f] border border-[#00685f] px-4 py-1.5 rounded-full">
          ← Back to Home
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 space-y-12">
        {/* HERO */}
        <div className="glass-card rounded-[36px] p-6 sm:p-12 relative overflow-hidden shadow-2xl bg-white/80">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 font-bold text-xs sm:text-sm border border-orange-200">
              <span>✂️ Doorstep Pet Grooming & Luxury Spa</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Professional Pet Grooming <span className="text-[#F97316]">at Your Home 🧼</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our certified pet groomers provide safe, hygienic, and stress-free grooming sessions right inside your home using pet-safe organic products. Post-grooming area sanitization is included!
            </p>

            <div className="p-6 rounded-3xl bg-orange-50/80 border border-orange-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase text-gray-500">Transparent Packages</p>
                <p className="text-3xl font-black text-[#F97316] mt-0.5">Starts ₹799</p>
                <p className="text-xs text-gray-600 font-medium mt-1">
                  Full Haircut, Bath, Blow Dry, Nail Trimming & Ear Cleaning.
                </p>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="w-full sm:w-auto bg-[#F97316] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:scale-105 transition-all"
              >
                Book Doorstep Grooming Spa
              </button>
            </div>
          </div>
        </div>

        {/* PRICING BREAKDOWN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Full Grooming Package", price: "₹1,799", desc: "Full haircut, bath, blow dry, nail trim, ear & eye cleaning, paw sanitization." },
            { title: "Mini Grooming Package", price: "₹1,100", desc: "Warm bath, blow dry, coat brushing, nail clipping, and ear cleaning." },
            { title: "Breed Specific Haircut", price: "₹999", desc: "Professional breed haircut & styling by expert groomer." },
            { title: "Medicated Bath & Dry", price: "₹899", desc: "Pet-safe coat bath with blow dry and coat conditioning." },
            { title: "Tick & Flea Treatment", price: "₹500", desc: "Add-on anti-tick medicated bath & spray treatment." }
          ].map((item, idx) => (
            <div key={idx} className="glass-card rounded-[28px] p-6 space-y-3 bg-white/75 border border-orange-100">
              <span className="text-2xl font-black text-[#F97316]">{item.price}</span>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {open && (
        <BookingModal
          service="Grooming"
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
