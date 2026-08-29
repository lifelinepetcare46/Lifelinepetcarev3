"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function LabTestServicesPage() {
  return (
    <ServiceLayout
      title="Doorstep Pet Lab Tests & Diagnostics 🧪"
      subtitle="Blood collection, urine analysis, skin scraping, and diagnostic organ panels collected at your home."
    >
      <div className="space-y-8 text-slate-700">
        <div>
          <h2 className="text-2xl font-black text-slate-900 mb-3">
            Painless Sample Collection at Home
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            No need to drag your pet to a diagnostic lab. Certified veterinary phlebotomists collect blood, urine, or skin samples in under 10 minutes with sterile single-use needles. Reports are delivered directly on WhatsApp within 12–24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Complete Blood Count (CBC)", price: "₹850", desc: "Checks hemoglobin, WBC count, platelets, infection levels, and anemia." },
            { title: "Liver & Kidney Function (LFT/KFT)", price: "₹1,499", desc: "Comprehensive biochemical organ panel for senior or sick pets." },
            { title: "Full Senior Health Panel", price: "₹2,499", desc: "Includes CBC, LFT, KFT, Thyroid, Blood Sugar, and Urine Examination." },
          ].map((l, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <span className="text-2xl font-black text-emerald-700">{l.price}</span>
              <h4 className="text-base font-bold text-slate-900">{l.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ServiceLayout>
  );
}
