"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function Page() {
  return (
    <ServiceLayout
      title="Professional Pet Walking & Sitting 🐕"
      subtitle="Dedicated personal pet walkers & sitters for busy pet parents in Delhi NCR."
    >
      <div className="space-y-8 text-slate-700">
        <div>
          <h2 className="text-2xl font-black text-slate-900 mb-3">
            Active Walks & Reliable Companionship
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            Our background-checked pet handlers ensure your dog gets timely daily walks, proper feeding, fresh water, and engaging playtime even when you are working or traveling.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Key Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "1-on-1 personal handling (no group pack walking hazards)",
              "Timely feeding, fresh water & basic hygiene care",
              "Daily active walks & GPS track updates on WhatsApp",
              "Photos & video updates after every walking session",
              "Flexible morning & evening walk timings",
              "Monthly discounted packages available",
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                <span className="text-emerald-600 font-bold">✓</span>
                <span className="text-xs font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-xl font-bold text-slate-900">Walking & Sitting Charges</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "One Time Walk", price: "₹100 / walk", desc: "Single 30-minute energetic walk session." },
              { title: "Morning + Evening Walk", price: "₹199 / day", desc: "Two daily walks (morning & evening)." },
              { title: "Monthly Unlimited Package", price: "₹5,500 / month", desc: "Daily 2 walks for full month with dedicated walker." },
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
                <span className="text-2xl font-black text-emerald-700">{p.price}</span>
                <h4 className="text-base font-bold text-slate-900">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
