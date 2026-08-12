"use client";

import { useState } from "react";
import Link from "next/link";
import BookingModal from "@/components/BookingModal";

export default function VaccinationServicesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans antialiased">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-[#0D9488] font-bold text-xs sm:text-sm border border-teal-200">
              <span>💉 Certified Pet Vaccination at Home</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Certified Pet Vaccination <span className="text-[#0D9488]">at Doorstep 🐾</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Genuine, temperature-controlled vaccines administered by certified doctors following proper cold-chain protocols. Official vaccination card provided for every pet!
            </p>

            <div className="p-6 rounded-3xl bg-teal-50/80 border border-teal-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase text-gray-500">Single Vaccine Price</p>
                <p className="text-3xl font-black text-[#0D9488] mt-0.5">Starts ₹999</p>
                <p className="text-xs text-gray-600 font-medium mt-1">
                  Single Vaccine: ₹999 | Doctor Home Visit & Consult: ₹449
                </p>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="w-full sm:w-auto bg-[#0D9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:scale-105 transition-all"
              >
                Book Vaccination Visit
              </button>
            </div>
          </div>
        </div>

        {/* PACKAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-[32px] p-8 space-y-4 bg-white/80 border border-teal-200 shadow-lg">
            <span className="px-3 py-1 rounded-full bg-teal-100 text-[#0D9488] text-xs font-bold">Puppy Complete</span>
            <h3 className="text-2xl font-black text-gray-900">Puppy Vaccination Package</h3>
            <p className="text-3xl font-black text-[#0D9488]">₹6,799 <span className="text-xs font-medium text-gray-500">+ Vet Visit</span></p>
            <ul className="space-y-2 text-sm text-gray-700 font-medium">
              <li>✓ Puppy DP (Distemper + Parvo)</li>
              <li>✓ 9-in-1 Combo (DHPPi)</li>
              <li>✓ Canine Coronavirus Vaccine</li>
              <li>✓ Kennel Cough Vaccine</li>
              <li>✓ Anti-Rabies Core Shot</li>
              <li>✓ Official Vaccine Card Included</li>
            </ul>
          </div>

          <div className="glass-card rounded-[32px] p-8 space-y-4 bg-white/80 border border-teal-200 shadow-lg">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">Annual Booster</span>
            <h3 className="text-2xl font-black text-gray-900">Adult Dog Vaccination Package</h3>
            <p className="text-3xl font-black text-[#F97316]">₹3,899 <span className="text-xs font-medium text-gray-500">+ Vet Visit</span></p>
            <ul className="space-y-2 text-sm text-gray-700 font-medium">
              <li>✓ Annual Booster Dose</li>
              <li>✓ 9-in-1 (DHPPi) Vaccination</li>
              <li>✓ Anti-Rabies Core Vaccine</li>
              <li>✓ Full Health Physical Checkup</li>
              <li>✓ Official Vaccine Card Included</li>
            </ul>
          </div>
        </div>
      </main>

      {open && (
        <BookingModal
          service="Vaccination"
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
