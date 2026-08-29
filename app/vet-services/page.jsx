"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function VetServicesPage() {
  return (
    <ServiceLayout
      title="Veterinary Doctor Home Visit 🩺"
      subtitle="Expert BVSc & AH certified veterinary doctors visit your home anywhere in Delhi NCR within 30 to 60 minutes."
    >
      <div className="space-y-8 text-slate-700">
        <div>
          <h2 className="text-2xl font-black text-slate-900 mb-3">
            Why Choose Doorstep Vet Home Consultation?
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            Bringing a sick, stressed, or feverish pet to a busy clinic can worsen their symptoms. Our doorstep veterinary service brings complete diagnostic tools, stethoscopes, otoscopes, thermometers, and emergency medication directly to your doorstep.
          </p>
        </div>

        {/* PRICE BANNER */}
        <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Transparent Consultation Fee
            </span>
            <p className="text-3xl font-black text-emerald-950 mt-1">₹449 / Visit</p>
            <p className="text-xs text-slate-600 font-medium mt-1">
              Includes clinical head-to-tail examination, prescription, and 7-day WhatsApp follow-up.
            </p>
          </div>
        </div>

        {/* WHAT IS INCLUDED */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900">What’s Included in a Visit</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Complete clinical physical exam (eyes, ears, heart, lungs)",
              "Fever, stomach infection, vomiting & diarrhea diagnosis",
              "Skin infection, tick allergy & wound dressing",
              "Ear cleaning & ear mite treatment",
              "Signed digital prescription sent on WhatsApp",
              "Free 7-day post-visit doctor chat guidance",
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                <span className="text-emerald-600 font-bold">✓</span>
                <span className="text-xs font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="text-xs font-black text-slate-900">How quickly does the doctor arrive?</h4>
              <p className="text-xs text-slate-600">Average arrival time across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad is 30–45 minutes.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="text-xs font-black text-slate-900">Are medicine charges included?</h4>
              <p className="text-xs text-slate-600">The visit fee covers clinical examination and prescription. If medications or injections are required, exact MRP prices are shared before administration.</p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
