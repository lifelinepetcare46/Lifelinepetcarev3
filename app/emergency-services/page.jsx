"use client";

import Link from "next/link";

export default function EmergencyServicesPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans antialiased">
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-slate-900 text-white border-b border-slate-800">
        <Link href="/" className="font-extrabold text-xl text-red-400">Lifeline Pet Care</Link>
        <Link href="/" className="text-xs font-bold text-white border border-slate-700 px-4 py-1.5 rounded-full">
          ← Back to Home
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 space-y-12">
        {/* EMERGENCY HERO */}
        <div className="glass-card rounded-[36px] p-6 sm:p-12 relative overflow-hidden shadow-2xl bg-[#0F172A] text-white border border-red-500/30">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 font-bold text-xs sm:text-sm border border-red-500/40 animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              🚨 24/7 Critical Veterinary Emergency Active
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              24/7 Emergency Veterinary <span className="text-red-400">Hospital & ICU Care</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Immediate emergency response for accidents, trauma, sudden collapse, severe vomiting, poisoning, or breathing difficulty. Fast response team available across Delhi NCR!
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:+918800813462"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>📞 Call Emergency Vet (+91 88008 13462)</span>
              </a>

              <a
                href="https://wa.me/918800813462?text=EMERGENCY%20PET%20CARE%20NEEDED"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>💬 WhatsApp Emergency Dispatch</span>
              </a>
            </div>

            <p className="text-xs text-slate-400">
              📍 <strong>Full NCR Coverage:</strong> Delhi, Noida, Gurgaon, Ghaziabad & Faridabad.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
