"use client";

import { useState } from "react";

export default function BookingModal({ service = "General Checkup", onClose }) {
  const [step, setStep] = useState(1);
  const [petType, setPetType] = useState("Dog");
  const [selectedService, setSelectedService] = useState(service);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-[32px] max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-teal-100">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center hover:bg-slate-200"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#00685f] uppercase tracking-wider">Step {step} of 3</span>
              <h2 className="text-2xl font-black text-slate-900">Book Appointment 🐾</h2>
            </div>

            {/* STEP 1: PET & SERVICE SELECTOR */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Pet Type</label>
                  <div className="grid grid-cols-4 gap-2">
                    {["Dog", "Cat", "Bird", "Exotic"].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPetType(p)}
                        className={`py-3 rounded-2xl font-bold text-xs border transition-all ${
                          petType === p
                            ? "bg-[#00685f] text-white border-[#00685f] shadow-md"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#00685f]"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Select Care Service</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
                  >
                    <option value="Veterinary Home Visit (₹449)">Veterinary Home Visit – ₹449</option>
                    <option value="Anti-Rabies Core Vaccine (₹999)">Anti-Rabies Core Vaccine – ₹999</option>
                    <option value="Adult Dog Annual Booster (₹3,899)">Adult Dog Annual Booster – ₹3,899</option>
                    <option value="Puppy 5-Vaccine Package (₹6,799)">Puppy 5-Vaccine Package – ₹6,799</option>
                    <option value="Doorstep Grooming Bath (₹799)">Doorstep Grooming Bath – ₹799</option>
                    <option value="24/7 Emergency ICU Support">24/7 Emergency ICU Support</option>
                  </select>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-[#00685f] hover:bg-[#008378] text-white font-extrabold py-4 rounded-2xl text-xs shadow-lg shadow-[#00685f]/20"
                >
                  Continue to Date & Time →
                </button>
              </div>
            )}

            {/* STEP 2: DATE & TIME */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Preferred Visit Date</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Preferred Time Slot</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "08:00 PM", "Emergency"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTime(t)}
                        className={`py-3 rounded-2xl font-bold text-xs border transition-all ${
                          time === t
                            ? "bg-[#00685f] text-white border-[#00685f] shadow-md"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#00685f]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setStep(1)}
                    className="w-1/3 bg-slate-100 text-slate-700 font-bold py-4 rounded-2xl text-xs"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="w-2/3 bg-[#00685f] hover:bg-[#008378] text-white font-extrabold py-4 rounded-2xl text-xs shadow-lg shadow-[#00685f]/20"
                  >
                    Continue to Contact Details →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CONTACT FORM */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number (+91)</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Home Address / Location</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Sector, Society, City (Delhi NCR)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-1/3 bg-slate-100 text-slate-700 font-bold py-3.5 rounded-2xl text-xs"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 bg-[#00685f] hover:bg-[#008378] text-white font-extrabold py-3.5 rounded-2xl text-xs shadow-lg shadow-[#00685f]/20"
                  >
                    Confirm Booking 🎉
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          /* SUCCESS CONFIRMATION */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto">
              ✓
            </div>
            <h3 className="text-2xl font-black text-slate-900">Appointment Confirmed!</h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
              Thank you <b>{parentName}</b>. Our veterinary team has received your booking for <b>{selectedService}</b> on <b>{date || "today"}</b> at <b>{time}</b>.
            </p>
            <button
              onClick={onClose}
              className="bg-[#00685f] text-white font-bold px-8 py-3 rounded-full text-xs shadow-md"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
