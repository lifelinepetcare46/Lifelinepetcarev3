"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function VaccinationServicesPage() {
  return (
    <ServiceLayout
      title="Doorstep Pet Vaccination & Immunization 💉"
      subtitle="100% genuine cold-chain vaccines delivered & administered by certified veterinary doctors at your home."
    >
      <div className="space-y-8 text-slate-700">
        <div>
          <h2 className="text-2xl font-black text-slate-900 mb-3">
            Strict 2°C–8°C Cold-Chain Maintenance
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            Vaccines lose potency if not stored at temperatures between 2°C and 8°C. Our doctors carry insulated medical cold boxes with real-time temperature indicators so your pet receives 100% effective immunization.
          </p>
        </div>

        {/* PRICING TABLE */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Vaccine Packages & Schedules</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Anti-Rabies Shot", price: "₹999", desc: "Annual Rabies vaccine protection for dogs & cats. Official health card included." },
              { title: "Adult Booster (9-in-1 / DHPPi)", price: "₹3,899", desc: "Complete 9-in-1 annual booster protecting against Parvovirus, Distemper, Hepatitis & Leptospirosis." },
              { title: "Puppy 5-Vaccine Series", price: "₹6,799", desc: "Complete puppy immunization schedule from 6 weeks to 16 weeks including Rabies, 9-in-1, and Deworming." },
            ].map((v, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
                <span className="text-2xl font-black text-emerald-700">{v.price}</span>
                <h4 className="text-base font-bold text-slate-900">{v.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DIGITAL RECORD */}
        <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 space-y-2">
          <h4 className="text-base font-bold text-emerald-950">📱 Digital Vaccination Card on WhatsApp</h4>
          <p className="text-xs text-slate-600">
            Every vaccination is recorded digitally with batch numbers, expiry dates, and signed doctor seal sent straight to your WhatsApp for easy airline, boarding & travel reference.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
}
