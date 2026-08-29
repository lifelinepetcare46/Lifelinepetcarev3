"use client";

import Link from "next/link";

export default function ServiceLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans antialiased">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-bold text-[#00685f] border border-[#00685f] px-4 py-1.5 rounded-full hover:bg-[#00685f] hover:text-white transition-all"
          >
            ← Back to Home
          </Link>
        </div>
        <div className="bg-white/90 backdrop-blur-md rounded-[32px] p-6 sm:p-10 shadow-2xl border border-gray-100">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
            {title}
          </h1>
          <div className="prose max-w-none">{children}</div>
        </div>
      </main>
    </div>
  );
}
