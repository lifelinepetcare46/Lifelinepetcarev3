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
    <div className="glass-luxury rounded-[36px] p-6 sm:p-10 border border-emerald-100 shadow-2xl relative overflow-hidden my-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
        <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300">
          💡 Transparent Pricing Estimator
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
          Calculate Your Pet Care Cost Instantly 🐾
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">
          No hidden visit charges or surprise clinic fees. See exact prices before booking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Step 1 & 2 */}
        <div className="lg:col-span-2 space-y-6">
          {/* Pet Type */}
          <div>
            <label className="block text-xs font-extrabold uppercase text-gray-500 mb-2">
              1. Select Pet Type
            </label>
            <div className="grid grid-cols-4 gap-3">
              {[
                { id: "dog", icon: "🐕", label: "Dog" },
                { id: "cat", icon: "🐱", label: "Cat" },
                { id: "bird", icon: "🦜", label: "Bird" },
                { id: "exotic", icon: "🐇", label: "Exotic" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPetType(item.id)}
                  className={`p-3 sm:p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-1 ${
                    petType === item.id
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-lg scale-[1.03]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-bold">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <label className="block text-xs font-extrabold uppercase text-gray-500 mb-2">
              2. Select Size / Breed Weight
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "small", label: "Small (< 10 kg)" },
                { id: "medium", label: "Medium (10–25 kg)" },
                { id: "large", label: "Large (> 25 kg)" },
              ].map((size) => (
                <button
                  key={size.id}
                  onClick={() => setPetSize(size.id)}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                    petSize === size.id
                      ? "bg-emerald-50 text-emerald-800 border-emerald-500 shadow-sm"
                      : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <label className="block text-xs font-extrabold uppercase text-gray-500 mb-2">
              3. Choose Desired Services (Select Multiple)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.keys(pricingMap).map((key) => {
                const isSelected = selectedServices.includes(key);
                const item = pricingMap[key];
                return (
                  <button
                    key={key}
                    onClick={() => toggleService(key)}
                    className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? "bg-emerald-50 border-emerald-500 shadow-sm"
                        : "bg-white border-gray-200 hover:border-emerald-200"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                        isSelected ? "bg-emerald-600 text-white" : "bg-gray-200 text-transparent"
                      }`}>
                        ✓
                      </span>
                      <span className="text-xs font-bold text-gray-800">{item.name}</span>
                    </div>
                    <span className="text-xs font-black text-emerald-700">₹{item.base}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Calculation Result Summary Card */}
        <div className="glass-luxury-dark rounded-[28px] p-6 text-white space-y-6 flex flex-col justify-between h-full border border-emerald-500/30">
          <div>
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-4">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                Estimated Summary
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                Doorstep Visit
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-gray-300">
              {selectedServices.map((key) => (
                <li key={key} className="flex justify-between items-center">
                  <span>• {pricingMap[key].name}</span>
                  <span className="font-semibold text-white">₹{pricingMap[key].base}</span>
                </li>
              ))}
            </ul>

            {selectedServices.length >= 3 && (
              <div className="mt-4 p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold text-center">
                🎉 10% Bundle Discount Applied!
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-700/80 space-y-4">
            <div>
              <p className="text-xs text-gray-400">Estimated Total Cost</p>
              <p className="text-4xl font-black text-white mt-1">₹{totalCost}</p>
              <p className="text-[11px] text-gray-400 mt-1">
                Zero travel charge. Pay after service completion.
              </p>
            </div>

            <button
              onClick={() => onBook && onBook(`Calculated Package (₹${totalCost})`)}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-emerald-500/40 transition-all hover:scale-[1.02] text-sm uppercase tracking-wide"
            >
              Book Estimated Package 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
