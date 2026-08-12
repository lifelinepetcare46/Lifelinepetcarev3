"use client";

import Link from "next/link";

export default function BoardingServicesPage() {
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
            <span>🏡 Luxury Pet Boarding & Daycare</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Safe & Hygienic <span className="text-[#0D9488]">Pet Boarding 🐾</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            We provide safe, hygienic & comfortable pet boarding services where your pet is cared for personally in a stress-free environment. 3 fresh meals, regular walks, and 2 daily WhatsApp video calls included!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-center">
              <p className="text-xs text-gray-500 font-bold">Adult Dog</p>
              <p className="text-2xl font-black text-[#0D9488]">₹849 / day</p>
            </div>
            <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-center">
              <p className="text-xs text-gray-500 font-bold">Puppy</p>
              <p className="text-2xl font-black text-[#0D9488]">₹649 / day</p>
            </div>
            <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-center">
              <p className="text-xs text-gray-500 font-bold">Adult Cat</p>
              <p className="text-2xl font-black text-[#0D9488]">₹500 / day</p>
            </div>
            <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-center">
              <p className="text-xs text-gray-500 font-bold">Kitten</p>
              <p className="text-2xl font-black text-[#0D9488]">₹449 / day</p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href="tel:+918800813462"
              className="bg-[#0D9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-all"
            >
              📞 Book Boarding Stay (+91 88008 13462)
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
