"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import QuickLeadBar from "@/components/QuickLeadBar";

const faqs = [
  { q: "Do you serve all areas in Delhi NCR?", a: "Yes! We cover all zones in South, West, East & North Delhi, Noida, Greater Noida, Gurgaon, Faridabad, and Ghaziabad." },
  { q: "How quickly does the doctor arrive after booking?", a: "For scheduled visits, doctors arrive in your chosen time slot. For 24/7 emergency calls, average dispatch time is 35 minutes." },
  { q: "Are your vaccines genuine and cold-chain maintained?", a: "Yes. Sourced directly from Zoetis, Virbac, and Intervet. Maintained at 2°C–8°C in insulated cold-boxes with temperature logs." },
  { q: "What payment methods do you accept?", a: "UPI (GPay, PhonePe, Paytm), Cards, Net Banking, and Cash. You pay after service completion." },
  { q: "Do you provide a signed prescription?", a: "Yes. Every visit includes a signed digital doctor prescription delivered directly on WhatsApp." },
];

const contactInfo = [
  { icon: "call", label: "24/7 Primary Helpline", value: "+91 88008 13462", sub: "Always live for emergency dispatch", href: "tel:+918800813462", color: "#BA1A1A" },
  { icon: "chat", label: "WhatsApp Desk", value: "+91 88008 13462", sub: "Instant 2-min response", href: "https://wa.me/918800813462", color: "#006E1C" },
  { icon: "photo_camera", label: "Instagram", value: "@_lifeline_pet_care", sub: "Follow for pet tips", href: "https://instagram.com/_lifeline_pet_care/", color: "#1B1C1A" },
];

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", pet: "", service: "Veterinary Home Visit (₹449)", msg: "" });
  const [sent, setSent] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          pet: form.pet,
          service: form.service,
          message: form.msg,
          slot: "Contact Page Form",
        }),
      });
    } catch (err) {
      console.warn("Contact form fetch notice:", err);
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] font-sans antialiased min-h-screen relative flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full space-y-16">
        {/* EDITORIAL HERO (STITCH SPEC) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider border border-[#006E1C]/30">
            We're Live 24/7 For Your Pet
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1B1C1A] tracking-tight leading-none">
            Get in <span className="text-[#006E1C] italic font-serif">Touch</span> 📞
          </h1>
          <p className="text-base sm:text-lg text-[#3F4A3C] leading-relaxed">
            Call us on <a href="tel:+918800813462" className="font-bold underline text-[#006E1C]">+91 88008 13462</a>, chat on WhatsApp, or fill out the quick form below.
          </p>
        </div>

        {/* CONTACT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((c, i) => (
            <div key={i} className="glass-panel rounded-[2.5rem] p-6 text-center border border-[rgba(26,26,26,0.08)] space-y-3 hover:-translate-y-1 transition-all ambient-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#F4F4F0] flex items-center justify-center mx-auto text-[#006E1C]">
                <span className="material-symbols-outlined text-2xl">{c.icon}</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#6F7A6B]">{c.label}</p>
              <a href={c.href} className="text-base font-extrabold text-[#1B1C1A] hover:text-[#006E1C] block">
                {c.value}
              </a>
              <p className="text-xs text-[#3F4A3C]">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* FAQ & FORM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ ACCORDION */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider">
                Got Questions?
              </span>
              <h2 className="text-3xl font-extrabold text-[#1B1C1A] tracking-tight">
                Frequently Asked Questions 💡
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="glass-panel rounded-[2rem] p-6 border border-[rgba(26,26,26,0.08)] cursor-pointer space-y-2 hover:bg-white/90 transition-colors"
                >
                  <div className="flex justify-between items-center gap-4 font-bold text-sm text-[#1B1C1A]">
                    <span>{faq.q}</span>
                    <span className="text-[#006E1C] text-xl font-extrabold">{openFaq === i ? "−" : "+"}</span>
                  </div>
                  {openFaq === i && (
                    <p className="text-xs text-[#3F4A3C] leading-relaxed pt-3 border-t border-black/5">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FAST RESPONSE FORM */}
          <div className="glass-panel rounded-[3rem] p-8 md:p-10 border border-[rgba(26,26,26,0.08)] shadow-xl space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#006E1C] uppercase tracking-wider">
                Fast 30-Sec Form
              </span>
              <h2 className="text-2xl font-bold text-[#1B1C1A] tracking-tight">
                Send Us an Inquiry 📩
              </h2>
            </div>

            {sent ? (
              <div className="text-center py-8 space-y-4">
                <span className="text-4xl block">✅</span>
                <h3 className="text-xl font-bold text-[#1B1C1A]">Inquiry Received!</h3>
                <p className="text-xs text-[#3F4A3C]">
                  Our veterinary team will contact you on WhatsApp within 10 minutes.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="bg-[#006E1C] text-white font-extrabold text-xs px-6 py-3 rounded-full"
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
                  className="w-full px-5 py-3.5 rounded-full bg-[#F4F4F0] border border-black/5 text-xs font-bold text-[#1B1C1A] focus:outline-none focus:border-[#006E1C]"
                />

                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="WhatsApp Mobile Number *"
                  className="w-full px-5 py-3.5 rounded-full bg-[#F4F4F0] border border-black/5 text-xs font-bold text-[#1B1C1A] focus:outline-none focus:border-[#006E1C]"
                />

                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-full bg-[#F4F4F0] border border-black/5 text-xs font-bold text-[#1B1C1A] focus:outline-none focus:border-[#006E1C]"
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
                  className="w-full px-5 py-3.5 rounded-3xl bg-[#F4F4F0] border border-black/5 text-xs font-bold text-[#1B1C1A] focus:outline-none focus:border-[#006E1C]"
                />

                <button
                  type="submit"
                  className="w-full bg-[#006E1C] hover:bg-[#005313] text-white font-extrabold py-4 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-[#006E1C]/30 hover:scale-[1.01] active:scale-95 transition-all"
                >
                  Send Inquiry Now 🚀
                </button>
              </form>
            )}
          </div>
        </div>
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
