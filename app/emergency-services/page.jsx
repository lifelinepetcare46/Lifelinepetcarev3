"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function EmergencyServicesPage() {
  return (
    <ServiceLayout
      title="24/7 Emergency Vet SOS & ICU Support 🚑"
      subtitle="Critical pet care, trauma response, oxygen therapy, and emergency vet dispatch across Delhi NCR."
    >
      <div className="space-y-8 text-slate-700">
        <div className="p-6 rounded-3xl bg-red-50 border border-red-200 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-600 rounded-full animate-ping" />
            <span className="text-xs font-black text-red-700 uppercase tracking-wider">
              24/7 Emergency Hotline
            </span>
          </div>
          <h2 className="text-2xl font-black text-red-950">
            Need Immediate Help? Call +91 88008 13462
          </h2>
          <p className="text-xs text-red-800 leading-relaxed">
            For critical cases like severe trauma, sudden paralysis, heat stroke, poisoning, or continuous vomiting — our emergency veterinary team is available 24/7 with emergency triage.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Emergency Services Handled</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Acute Poisoning & Toxic Ingestion Triage",
              "Severe Trauma, Accidental Injury & Fractures",
              "Bloat (GDV) & Severe Gastric Distress",
              "High Fever, Seizures & Sudden Collapse",
              "Difficulty Breathing & Emergency Oxygen Support",
              "Continuous Vomiting, Diarrhea & Dehydration IV",
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                <span className="text-red-600 font-bold">🚨</span>
                <span className="text-xs font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
