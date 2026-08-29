"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function GroomingServicesPage() {
  return (
    <ServiceLayout
      title="Doorstep Luxury Pet Grooming & Spa ✂️"
      subtitle="Certified pet groomers bring warm water baths, organic shampoos, breed haircuts, and blow-dry spa treatments to your home."
    >
      <div className="space-y-8 text-slate-700">
        <div>
          <h2 className="text-2xl font-black text-slate-900 mb-3">
            Zero Cage Stress • 100% Organic Products
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            Commercial grooming salons often cage pets for hours and use harsh chemicals. Our doorstep groomers give 1-on-1 personal attention right inside your home using pet-safe hypoallergenic shampoos and sanitized tools.
          </p>
        </div>

        {/* PRICING BREAKDOWN */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Grooming Packages & Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Basic Spa Bath",
                price: "₹799",
                desc: "Warm water bath, blow dry, coat brushing, fragrance spray & post-grooming area cleaning.",
                accent: "#059669",
              },
              {
                name: "Mini Groom Package",
                price: "₹1,100",
                desc: "Spa bath, blow dry, nail trimming, ear cleaning, paw massage & eye cleaning.",
                accent: "#ea580c",
              },
              {
                name: "Full Breed Haircut",
                price: "₹1,799",
                desc: "Complete breed styling/haircut, bath, nail clip, ear cleaning, teeth brushing & fur conditioning.",
                accent: "#7c3aed",
              },
            ].map((pkg, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
                <span className="text-2xl font-black" style={{ color: pkg.accent }}>
                  {pkg.price}
                </span>
                <h4 className="text-base font-bold text-slate-900">{pkg.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ADD-ONS */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-xl font-bold text-slate-900">Popular Add-On Spa Treatments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Anti-Tick & Flea Medicated Dip Bath — ₹500",
              "De-Shedding Coat Treatment — ₹450",
              "Teeth Brushing & Breath Freshener — ₹250",
              "Paw Spa Butter Protection Massage — ₹200",
            ].map((addon, i) => (
              <div key={i} className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-950 flex items-center justify-between">
                <span>✨ {addon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
