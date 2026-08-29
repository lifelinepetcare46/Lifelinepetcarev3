"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function BoardingServicesPage() {
  return (
    <ServiceLayout
      title="Luxury Pet Boarding & Homestay 🏡"
      subtitle="Cage-free, climate-controlled pet resort & homestay with 24/7 CCTV access and daily vet supervision."
    >
      <div className="space-y-8 text-slate-700">
        <div>
          <h2 className="text-2xl font-black text-slate-900 mb-3">
            Cage-Free Home Environment
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            While you are traveling, give your pet a vacation of their own! Our premium boarding facility provides spacious individual rooms, AC climate control, daily play sessions, custom home-cooked meals, and 24/7 live video updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Dog Luxury Suite", price: "₹899 / night", desc: "Spacious room, 3 walks daily, home-cooked food, 24/7 video updates." },
            { title: "Cat Cozy Condo", price: "₹699 / night", desc: "Quiet cat-only room, scratching posts, litter box sanitization, gourmet cat food." },
            { title: "Long Stay Package (>7 Days)", price: "₹749 / night", desc: "Includes complimentary doorstep grooming bath + free vet health checkup." },
          ].map((b, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <span className="text-2xl font-black text-emerald-700">{b.price}</span>
              <h4 className="text-base font-bold text-slate-900">{b.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ServiceLayout>
  );
}
