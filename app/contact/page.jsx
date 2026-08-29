"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import QuickLeadBar from "@/components/QuickLeadBar";

const faqs = [
  { q: "Do you serve all areas in Delhi NCR?", a: "Yes! We cover all zones in South, West, East & North Delhi, Noida, Greater Noida, Gurgaon, Faridabad, and Ghaziabad." },
  { q: "How quickly does the doctor arrive after booking?", a: "For scheduled visits, doctors arrive in your chosen time slot. For 24/7 emergency calls, average dispatch time is 30–45 minutes." },
  { q: "Are your vaccines genuine and cold-chain maintained?", a: "Yes. Sourced directly from Zoetis, Virbac, and Intervet. Maintained at 2°C–8°C in insulated cold-boxes with temperature logs." },
  { q: "What payment methods do you accept?", a: "UPI (GPay, PhonePe, Paytm), Cards, Net Banking, and Cash. You pay after service completion." },
  { q: "Do you provide a signed prescription?", a: "Yes. Every visit includes a signed digital doctor prescription delivered directly on WhatsApp." },
];

const contactInfo = [
  { icon: "📞", label: "24/7 Vet SOS", value: "+91 88008 13462", sub: "Always live for emergency dispatch", href: "tel:+918800813462", color: "#dc2626" },
  { icon: "💬", label: "WhatsApp Chat", value: "+91 88008 13462", sub: "Instant 2-min response", href: "https://wa.me/918800813462", color: "#059669" },
  { icon: "📷", label: "Instagram", value: "@_lifeline_pet_care", sub: "Follow for pet tips", href: "https://instagram.com/_lifeline_pet_care/", color: "#7c3aed" },
  { icon: "📍", label: "Service Area", value: "Delhi NCR", sub: "Delhi, Noida, Gurgaon, Ghaziabad", color: "#2563eb" },
];

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", pet: "", service: "Veterinary Home Visit (₹449)", msg: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans text-slate-700 antialiased">
      <Navbar />

      <main className="pt-16">
        {/* HERO */}
        <section className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/30 backdrop-blur-md">
              We're Here 24/7 For Your Pet
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Get in Touch with Us 📞
            </h1>
            <p className="text-sm text-emerald-100 font-medium">
              Call, WhatsApp, or fill out the lead request below. For emergency calls, dial +91 88008 13462 directly.
            </p>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((c, i) => (
              <div key={i} className="glass-luxury rounded-[28px] p-6 text-center border border-slate-200 space-y-2">
                <span className="text-3xl block">{c.icon}</span>
                <p className="text-[11px] font-black uppercase text-slate-400">{c.label}</p>
                <a href={c.href} className="text-base font-black text-slate-900 hover:text-emerald-600 block">
                  {c.value}
                </a>
                <p className="text-xs text-slate-500 font-medium">{c.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ & FORM GRID */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ ACCORDION */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase">
                Got Questions?
              </span>
              <h2 className="text-3xl font-black text-slate-900">
                Frequently Asked Questions 💡
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="glass-luxury rounded-2xl p-5 border border-slate-200 cursor-pointer space-y-2"
                >
                  <div className="flex justify-between items-center gap-4 font-bold text-sm text-slate-900">
                    <span>{faq.q}</span>
                    <span className="text-emerald-600 text-lg">{openFaq === i ? "−" : "+"}</span>
                  </div>
                  {openFaq === i && (
                    <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* QUICK INQUIRY FORM */}
          <div className="glass-luxury rounded-[36px] p-8 border border-emerald-100 shadow-xl space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-700 uppercase">
                Fast Response Form
              </span>
              <h2 className="text-2xl font-black text-slate-900">
                Send Us a Quick Lead Inquiry 📩
              </h2>
            </div>

            {sent ? (
              <div className="text-center py-8 space-y-4">
                <span className="text-4xl block">✅</span>
                <h3 className="text-xl font-black text-slate-900">Message Received!</h3>
                <p className="text-xs text-slate-600">
                  Our veterinary team will contact you on WhatsApp within 10 minutes.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="bg-emerald-600 text-white font-bold text-xs px-6 py-3 rounded-full"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Full Name *"
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                />

                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="WhatsApp Mobile Number *"
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                />

                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Veterinary Home Visit (₹449)">🩺 Vet Home Visit — ₹449</option>
                  <option value="Anti-Rabies Core Vaccine (₹999)">💉 Anti-Rabies Shot — ₹999</option>
                  <option value="Doorstep Grooming Bath (₹799)">✂️ Doorstep Spa — ₹799</option>
                  <option value="24/7 Emergency ICU Support">🚑 Emergency SOS</option>
                  <option value="Complete Blood Count CBC (₹850)">🧪 Lab Blood Test — ₹850</option>
                </select>

                <textarea
                  rows={3}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  placeholder="Tell us about your pet (species, symptoms, location)..."
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                />

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01]"
                >
                  Send Inquiry Now 🚀
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <QuickLeadBar onBookClick={() => setModalOpen(true)} />

      {modalOpen && (
        <BookingModal
          service="Veterinary Home Visit (₹449)"
          onClose={() => setModalOpen(false)}
        />
      )}

      <Footer />
    </div>
  );
}
