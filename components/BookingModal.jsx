"use client";

import { useState } from "react";

export default function BookingModal({ service = "Veterinary Home Visit (₹449)", onClose }) {
  const [step, setStep] = useState(1);
  const [petType, setPetType] = useState("Dog 🐕");
  const [selectedService, setSelectedService] = useState(service);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [isEmergency, setIsEmergency] = useState(false);
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = typeof window !== "undefined" ? `${window.location.origin}/api/book` : "/api/book";
      // Call backend booking endpoint
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: parentName,
          phone,
          address,
          service: selectedService,
          petType,
          date: date || "Today / Urgent",
          time: isEmergency ? "Emergency SOS" : time,
          notes,
        }),
      });
    } catch (err) {
      console.warn("Modal API fetch error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hi Lifeline Pet Care! 🐾 I just submitted a booking request:\n` +
      `👤 Name: ${parentName}\n` +
      `📞 Phone: ${phone}\n` +
      `🐕 Pet: ${petType}\n` +
      `🩺 Service: ${selectedService}\n` +
      `📍 Location: ${address}\n` +
      `📅 Preferred Timing: ${date || "Urgent"} (${time})\n` +
      `${isEmergency ? "🚨 EMERGENCY SOS DISPATCH REQUESTED" : ""}`
    );
    window.open(`https://wa.me/918800813462?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-lg flex items-center justify-center p-4">
      <div className="bg-white rounded-[36px] max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-emerald-100 overflow-hidden">
        {/* Decorative ambient blur */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center hover:bg-slate-200 transition-colors z-10"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            {/* HEADER */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                  Step {step} of 3
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Doorstep Appointment
                </span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Book Pet Doctor & Spa 🐾
              </h2>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* STEP 1: PET & SERVICE */}
            {step === 1 && (
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    1. Select Pet Species
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {["Dog 🐕", "Cat 🐱", "Bird 🦜", "Exotic 🐇"].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPetType(p)}
                        className={`py-3 rounded-2xl font-bold text-xs border transition-all ${
                          petType === p
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-md scale-[1.02]"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    2. Select Required Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Veterinary Home Visit (₹449)">🩺 Veterinary Home Visit — ₹449</option>
                    <option value="Anti-Rabies Core Vaccine (₹999)">💉 Anti-Rabies Core Vaccine — ₹999</option>
                    <option value="Adult Dog Annual Booster (₹3,899)">🐕 Adult Booster (9-in-1) — ₹3,899</option>
                    <option value="Puppy 5-Vaccine Package (₹6,799)">🐶 Puppy 5-Vaccine Package — ₹6,799</option>
                    <option value="Doorstep Grooming Bath (₹799)">✂️ Doorstep Spa Bath — ₹799</option>
                    <option value="Full Breed Grooming & Styling (₹1,799)">✂️ Full Breed Grooming — ₹1,799</option>
                    <option value="24/7 Emergency ICU Support">🚑 24/7 Emergency Vet ICU</option>
                    <option value="Complete Blood Count CBC (₹850)">🧪 Complete Blood Count CBC — ₹850</option>
                  </select>
                </div>

                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🚨</span>
                    <span className="text-xs font-bold text-amber-900">Urgent Emergency?</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsEmergency(!isEmergency)}
                    className={`px-3 py-1 rounded-full text-xs font-black transition-all ${
                      isEmergency ? "bg-red-600 text-white shadow-md" : "bg-white text-slate-700 border border-slate-300"
                    }`}
                  >
                    {isEmergency ? "Emergency SOS ON" : "Turn ON"}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01]"
                >
                  Continue to Schedule →
                </button>
              </div>
            )}

            {/* STEP 2: DATE & TIME */}
            {step === 2 && (
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                    Preferred Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "08:00 PM", "Urgent / ASAP"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTime(t)}
                        className={`py-3 rounded-2xl font-bold text-xs border transition-all ${
                          time === t
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-2xl text-xs transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-2/3 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01]"
                  >
                    Continue to Address →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CONTACT & SUBMIT */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Complete Address (Delhi NCR)
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Flat No., Colony/Sector, City (Delhi, Noida, Gurgaon...)"
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-2xl text-xs transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-2/3 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01]"
                  >
                    {loading ? "Confirming..." : "Confirm Booking ⚡"}
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          /* SUCCESS SCREEN */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black mx-auto flex items-center justify-center border border-emerald-300 animate-bounce">
              ✓
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-900">
                Booking Received! 🎉
              </h3>
              <p className="text-xs text-slate-600">
                Our veterinary team is reviewing your appointment. We will confirm your doctor's arrival time on WhatsApp within 10 minutes.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left space-y-1 text-xs text-emerald-950">
              <p><b>Service:</b> {selectedService}</p>
              <p><b>Pet:</b> {petType}</p>
              <p><b>Contact:</b> {parentName} ({phone})</p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
              >
                <span>💬 Open WhatsApp Confirmation</span>
              </button>

              <button
                onClick={onClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-2xl text-xs transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
