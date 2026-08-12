"use client";

import Link from "next/link";

export default function LabTestServicesPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans antialiased">
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <Link href="/" className="font-extrabold text-xl text-[#00685f]">Lifeline Pet Care</Link>
        <Link href="/" className="text-xs font-bold text-[#00685f] border border-[#00685f] px-4 py-1.5 rounded-full">
          ← Back to Home
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 space-y-12">
        <div className="glass-card rounded-[36px] p-6 sm:p-12 space-y-6 bg-white/80 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-[#0D9488] font-bold text-xs sm:text-sm border border-teal-200">
            <span>🧪 Doorstep Sample Collection & Digital Reports</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Certified Pet Diagnostic <span className="text-[#0D9488]">Lab Tests at Home 🩸</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            Accurate, reliable & vet-approved pet blood tests, CBC, KFT, LFT, Parvo rapid tests, and tick fever profiles collected right at your home across Delhi NCR.
          </p>

          <div className="p-6 rounded-3xl bg-teal-50/80 border border-teal-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase text-gray-500">General Health Package</p>
              <p className="text-3xl font-black text-[#0D9488]">₹3,500 <span className="text-xs font-medium text-[#dc2626]">(30% OFF Applied)</span></p>
              <p className="text-xs text-gray-600 font-medium mt-1">Includes CBC + KFT + LFT + Home Sample Collection & Digital Report.</p>
            </div>

            <a
              href="tel:+918800813462"
              className="w-full sm:w-auto bg-[#0D9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-all text-center"
            >
              Book Home Sample Collection
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
