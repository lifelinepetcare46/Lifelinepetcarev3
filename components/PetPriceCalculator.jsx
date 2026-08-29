"use client";

import { useState } from "react";

export default function PetPriceCalculator({ onBook }) {
  const [petType, setPetType] = useState("dog");
  const [petSize, setPetSize] = useState("medium");
  const [selectedServices, setSelectedServices] = useState(["vet_checkup"]);

  const pricingMap = {
    vet_checkup: { name: "Doctor Clinical Visit", base: 449 },
    grooming_spa: { name: "Doorstep Bath & Spa", base: 799, largeMult: 1.3 },
    vaccination: { name: "Core Vaccination Shot", base: 999 },
    anti_tick: { name: "Anti-Tick & Flea Treatment", base: 499 },
    blood_test: { name: "Complete Blood Count (CBC)", base: 850 },
  };

  const toggleService = (key) => {
    if (selectedServices.includes(key)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== key));
      }
    } else {
      setSelectedServices([...selectedServices, key]);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    selectedServices.forEach((key) => {
      let cost = pricingMap[key].base;
      if (petSize === "large" && pricingMap[key].largeMult) {
        cost = Math.round(cost * pricingMap[key].largeMult);
      }
      total += cost;
    });

    if (selectedServices.length >= 3) {
      total = Math.round(total * 0.9); // 10% Bundle Discount
    }
    return total;
  };

  const totalCost = calculateTotal();

  return (
    <div className="glass-panel rounded-[2.5rem] p-6 sm:p-10 border border-[rgba(26,26,26,0.08)] shadow-2xl relative overflow-hidden my-12 bg-[#FAF9F5]">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider border border-[#006E1C]/30 inline-block">
          🐕 Dog & Cat Healthcare Estimator 🐱
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B1C1A] tracking-tight">
          Calculate Your Dog or Cat Care Cost Instantly 🐾
        </h2>
        <p className="text-xs sm:text-sm text-[#3F4A3C] font-normal">
          No hidden visit charges or surprise clinic fees. See exact prices before booking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* Pet Type - Dog & Cat Only */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#6F7A6B] mb-2.5">
              1. Select Pet Companion
            </label>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: "dog", icon: "🐕", label: "Dog / Canine", badge: "Primary" },
                { id: "cat", icon: "🐱", label: "Cat / Feline", badge: "Popular" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPetType(item.id)}
                  className={`p-5 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 relative ${
                    petType === item.id
                      ? "bg-[#006E1C] text-white border-[#006E1C] shadow-xl scale-[1.02]"
                      : "bg-white text-[#1B1C1A] border-gray-200 hover:border-[#006E1C]/40"
                  }`}
                >
                  {item.badge && (
                    <span className="absolute -top-2.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[9px] uppercase tracking-wider shadow-xs">
                      {item.badge}
                    </span>
                  )}
                  <span className="text-4xl">{item.icon}</span>
                  <span className="text-sm font-extrabold">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Weight / Size */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#6F7A6B] mb-2.5">
              2. Select Weight / Breed Size
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "small", label: "Small (< 10 kg)" },
                { id: "medium", label: "Medium (10–25 kg)" },
                { id: "large", label: "Large (> 25 kg)" },
              ].map((size) => (
                <button
                  key={size.id}
                  type="button"
                  onClick={() => setPetSize(size.id)}
                  className={`p-3.5 rounded-2xl border text-xs font-extrabold transition-all ${
                    petSize === size.id
                      ? "bg-[#E8F5E9] text-[#006E1C] border-[#006E1C] shadow-sm"
                      : "bg-white text-[#1B1C1A] border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Checklist */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#6F7A6B] mb-2.5">
              3. Choose Desired Services (Select Multiple)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.keys(pricingMap).map((key) => {
                const isSelected = selectedServices.includes(key);
                const item = pricingMap[key];
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleService(key)}
                    className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? "bg-[#E8F5E9] border-[#006E1C] shadow-sm"
                        : "bg-white border-gray-200 hover:border-[#006E1C]/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-extrabold shrink-0 ${
                        isSelected ? "bg-[#006E1C] text-white" : "bg-gray-200 text-transparent"
                      }`}>
                        ✓
                      </span>
                      <span className="text-xs font-extrabold text-[#1B1C1A]">{item.name}</span>
                    </div>
                    <span className="text-xs font-black text-[#006E1C]">₹{item.base}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: High-Contrast Glass Dark Summary Card */}
        <div className="lg:col-span-5 bg-[#1B1C1A] text-white rounded-[2.5rem] p-6 sm:p-8 space-y-6 flex flex-col justify-between border-2 border-[#006E1C] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#006E1C]/20 rounded-full blur-xl pointer-events-none" />

          <div className="space-y-5 relative z-10">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#94F990]">
                Doorstep Care Estimate
              </span>
              <span className="text-[11px] bg-[#006E1C] text-white px-3 py-1 rounded-full font-bold">
                Dog & Cat Specialist
              </span>
            </div>

            {/* Selected items list */}
            <ul className="space-y-3 text-xs">
              {selectedServices.map((key) => (
                <li key={key} className="flex justify-between items-center py-0.5 border-b border-white/5 pb-2">
                  <span className="text-[#BECAB9] font-medium">• {pricingMap[key].name}</span>
                  <span className="font-extrabold text-white text-sm">₹{pricingMap[key].base}</span>
                </li>
              ))}
            </ul>

            {selectedServices.length >= 3 && (
              <div className="mt-3 p-3 rounded-2xl bg-[#006E1C]/40 border border-[#94F990] text-[#94F990] text-xs font-extrabold text-center shadow-md">
                🎉 10% Dog/Cat Bundle Discount Applied!
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/15 space-y-5 relative z-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#BECAB9]">
                Estimated Total Cost
              </p>
              <p className="text-4xl sm:text-5xl font-extrabold text-[#94F990] mt-1 tracking-tight">
                ₹{totalCost}
              </p>
              <p className="text-[11px] text-[#BECAB9] font-medium mt-1">
                Zero travel charge. Pay after service completion.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onBook && onBook(`Calculated Dog/Cat Package (₹${totalCost})`)}
              className="w-full bg-[#006E1C] hover:bg-[#005313] text-white font-extrabold py-4 rounded-full text-xs uppercase tracking-wider shadow-xl shadow-[#006E1C]/50 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              Book Estimated Package 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
