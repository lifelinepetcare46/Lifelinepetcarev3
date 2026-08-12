"use client";

import { useState } from "react";
import Link from "next/link";
import BookingModal from "@/components/BookingModal";

export default function VetServicesPage() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Veterinary Home Visit");

  const openBooking = (serviceName = "Veterinary Home Visit") => {
    setSelectedService(serviceName);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans antialiased overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <Link href="/" className="font-extrabold text-xl text-[#00685f]">Lifeline Pet Care</Link>
        <Link href="/" className="text-xs font-bold text-[#00685f] border border-[#00685f] px-4 py-1.5 rounded-full">
          ← Back to Home
        </Link>
      </nav>

      {/* HERO / MAIN CONTENT SECTION */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 space-y-12">
        
        {/* GLASS HERO CARD */}
        <div className="glass-card rounded-[36px] p-6 sm:p-12 relative overflow-hidden shadow-2xl bg-white/80">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0D9488]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs sm:text-sm border border-emerald-200">
              <span>🎉 FLAT 30% OFF on First Vet Home Visit</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Veterinary Doctor <span className="text-[#0D9488]">Home Visit Services 🩺</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Lifeline Pet Care provides certified, experienced veterinary doctors for home visits across Delhi NCR. We handle illness consultations, physical checkups, vaccinations, and basic treatments in a comfortable, stress-free home environment.
            </p>

            {/* PRICING HIGHLIGHT BOX */}
            <div className="p-6 rounded-3xl bg-teal-50/80 border border-teal-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase text-gray-500">Transparent Pricing</p>
                <p className="text-3xl font-black text-[#0D9488] mt-0.5">₹449 Vet Visit</p>
                <p className="text-xs text-gray-600 font-medium mt-1">
                  Includes visiting charges, complete physical health checkup & doctor consultation.<br />
                  <span className="text-gray-500">Medicines and lab tests are charged separately with prescription.</span>
                </p>
              </div>

              <button
                onClick={() => openBooking("Veterinary Home Visit")}
                className="w-full sm:w-auto bg-[#0D9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:scale-105 transition-all whitespace-nowrap"
              >
                Book Vet Home Visit
              </button>
            </div>
          </div>
        </div>

        {/* SERVICES CHECKLIST GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "General Health Checkup",
              desc: "Comprehensive physical examination covering heart, lungs, eyes, ears, coat, weight, and joint health.",
              icon: "🩺"
            },
            {
              title: "Fever & Illness Treatment",
              desc: "Immediate diagnostic assessment for fever, vomiting, diarrhea, lethargy, or loss of appetite.",
              icon: "🤒"
            },
            {
              title: "Skin & Ear Infections",
              desc: "Treatment for fungal infections, allergic dermatitis, ear mites, tick issues, and hot spots.",
              icon: "🐾"
            },
            {
              title: "Puppy & Kitten Consultation",
              desc: "Growth monitoring, deworming schedules, diet planning, and initial health screening for young pets.",
              icon: "🐶"
            },
            {
              title: "Senior Pet Care",
              desc: "Specialized geriatric checkups focusing on arthritis mobility, renal health, and pain management.",
              icon: "🐈"
            },
            {
              title: "Follow-up & Wound Dressing",
              desc: "Post-surgery care, dressing changes, suture removal, and progress checks at home.",
              icon: "🩹"
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-card rounded-[28px] p-6 space-y-3 bg-white/75 border border-teal-100">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CALL TO ACTION BANNER */}
        <div className="p-8 rounded-[32px] bg-[#0F172A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-extrabold">Need Urgent Vet Advice Right Now?</h3>
            <p className="text-xs text-slate-300 mt-1">Our emergency veterinary doctors are available 24/7 across Delhi NCR.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:+918800813462"
              className="bg-[#0D9488] hover:bg-[#0f766e] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all"
            >
              📞 Call Doctor (+91 88008 13462)
            </a>
            <a
              href="https://wa.me/918800813462?text=Hi%20I%20need%20a%20vet%20home%20visit"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

      </main>

      {/* MODAL */}
      {open && (
        <BookingModal
          service={selectedService}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
