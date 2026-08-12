"use client";

import { useState } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const services = [
  {
    icon: "🩺", accent: "#059669", accentBg: "#ecfdf5", border: "#a7f3d0",
    label: "Vet Visit", title: "Veterinary Home Visit", price: "₹449", tag: "Most Booked",
    desc: "Our licensed vets travel directly to your home for a comprehensive examination, diagnosis and prescription.",
    features: ["Full head-to-tail physical examination", "Fever, vomiting & diarrhea diagnosis", "Skin, coat, eye & ear assessment", "Officially signed digital prescription", "WhatsApp follow-up support", "Available 7 days a week"],
    booking: "Veterinary Home Visit",
  },
  {
    icon: "💉", accent: "#ea580c", accentBg: "#fff7ed", border: "#fed7aa",
    label: "Vaccination", title: "Core Vaccination", price: "from ₹999", tag: "Cold-Chain Certified",
    desc: "Genuine cold-chain vaccines delivered to your pet at home — no travel, no stress, no compromise.",
    features: ["Anti-Rabies Shot — ₹999", "Adult Dog Annual Booster (9-in-1) — ₹3,899", "Puppy 5-Vaccine Schedule — ₹6,799", "Cat Triple FVRCP — ₹2,499", "Digital vaccination record issued", "2°C–8°C cold chain always maintained"],
    booking: "Vaccination",
  },
  {
    icon: "✂️", accent: "#7c3aed", accentBg: "#f5f3ff", border: "#ddd6fe",
    label: "Grooming", title: "Doorstep Spa", price: "from ₹799", tag: "Organic & Safe",
    desc: "Celebrity-grade pet grooming in your home — no cages, no strangers, just expert certified groomers.",
    features: ["Bath & Blow Dry — ₹799", "Medicated Therapeutic Bath — ₹899", "Mini Groom (Bath+Nails+Ears) — ₹1,100", "Full Breed Haircut & Style — ₹1,799", "Tick & Flea treatment available", "Post-groom sanitation included"],
    booking: "Grooming Spa",
  },
  {
    icon: "🚑", accent: "#dc2626", accentBg: "#fef2f2", border: "#fecaca",
    label: "Emergency", title: "Emergency ICU Care", price: "On Call", tag: "24/7 SOS",
    desc: "Round-the-clock emergency veterinary care dispatched within 30–60 minutes for life-threatening situations.",
    features: ["Rapid vet dispatch Delhi NCR", "IV fluid therapy administration", "Seizure & shock stabilization", "Trauma & accident first response", "On-site oxygen support", "Hospital referral if required"],
    booking: "Emergency ICU",
  },
  {
    icon: "🧪", accent: "#2563eb", accentBg: "#eff6ff", border: "#bfdbfe",
    label: "Lab Tests", title: "Lab Tests at Home", price: "from ₹399", tag: "NABL Certified",
    desc: "Full blood panel, urinalysis and cytology samples collected at home and processed in certified labs.",
    features: ["Complete Blood Count (CBC)", "Liver & Kidney Function Tests", "Blood Glucose & Thyroid Panel", "Urinalysis & Stool Tests", "Sample pickup within 2 hours", "Digital WhatsApp reports"],
    booking: "Lab Test at Home",
  },
  {
    icon: "🏨", accent: "#0d9488", accentBg: "#f0fdfa", border: "#99f6e4",
    label: "Boarding", title: "Pet Boarding", price: "from ₹499/night", tag: "Vet-Supervised",
    desc: "Safe, medically supervised overnight pet boarding with 24/7 vet monitoring and daily care.",
    features: ["Vet-certified boarding facility", "Individual air-conditioned kennels", "3 meals + exercise daily", "24/7 health monitoring", "Live WhatsApp photo updates", "Emergency care on-site"],
    booking: "Pet Boarding",
  },
];

export default function ServicesPage() {
  const [openModal, setOpenModal] = useState(false);
  const [sel, setSel] = useState("");

  const book = (s) => { setSel(s); setOpenModal(true); };

  useGSAP([
    { selector: ".anim-hero", from: { opacity: 0, y: 40 }, duration: 0.8, ease: "power3.out" },
    { selector: ".anim-svc",  from: { opacity: 0, y: 50 }, duration: 0.65, ease: "power3.out", stagger: 0.1 },
    { selector: ".anim-why",  from: { opacity: 0, y: 30 }, duration: 0.55, ease: "power2.out", stagger: 0.08 },
  ]);

  return (
    <div style={{ background: "var(--grad-services)", minHeight: "100vh", fontFamily: "var(--ff-body)" }}>
      <Navbar />
      <main style={{ paddingTop: 64 }}>

        {/* HERO */}
        <section style={{ background: "linear-gradient(135deg, #047857 0%, #059669 50%, #0d9488 100%)", padding: "5rem 2rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 500, height: 500, top: "-150px", right: "-100px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)" }} />
          <div className="anim-hero" style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <span className="chip" style={{ background: "rgba(255,255,255,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>Complete Veterinary Care at Home</span>
            <h1 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(2.2rem,5vw,3.6rem)", color: "#fff", margin: "1.25rem 0 1rem", letterSpacing: "-0.03em" }}>
              Our Services 🐾
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
              From routine checkups to life-saving emergencies — certified vets deliver every service to your doorstep across Delhi NCR.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginTop: "2rem" }}>
              {["✅ 15,000+ Pets Served", "⭐ 4.9 Rating", "🕐 Same-Day Booking"].map(t => (
                <span key={t} style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", padding: "0.5rem 1.25rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 600, fontFamily: "var(--ff-display)" }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="chip">Everything Your Pet Needs</span>
            <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--clr-ink-900)", marginTop: "1rem" }}>
              All Services & Pricing
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {services.map((svc, i) => (
              <div key={i} className="anim-svc card" style={{ padding: "2.25rem", border: `1.5px solid ${svc.border}`, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                  <div style={{ width: 56, height: 56, background: svc.accentBg, borderRadius: "var(--r-lg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem" }}>{svc.icon}</div>
                  <span style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", background: svc.accentBg, color: svc.accent, border: `1px solid ${svc.border}`, padding: "4px 12px", borderRadius: 999 }}>{svc.tag}</span>
                </div>
                <p style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: svc.accent, marginBottom: "0.3rem" }}>{svc.label}</p>
                <h3 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "1.35rem", color: "var(--clr-ink-900)", marginBottom: "0.3rem" }}>{svc.title}</h3>
                <p style={{ fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "1.8rem", color: svc.accent, marginBottom: "0.75rem", lineHeight: 1 }}>{svc.price}</p>
                <p style={{ fontSize: "0.875rem", color: "var(--clr-ink-300)", lineHeight: 1.65, marginBottom: "1.5rem" }}>{svc.desc}</p>
                <ul style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem" }}>
                  {svc.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.6rem", fontSize: "0.85rem", color: "var(--clr-ink-500)" }}>
                      <span style={{ color: svc.accent, fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => book(svc.booking)} style={{
                  width: "100%", background: svc.accent, color: "#fff",
                  fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.875rem",
                  padding: "0.875rem 1.5rem", borderRadius: "var(--r-pill)", border: "none",
                  cursor: "pointer", boxShadow: `0 6px 20px ${svc.accent}35`,
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 30px ${svc.accent}45`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `0 6px 20px ${svc.accent}35`; }}>
                  Book {svc.label}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* WHY SECTION */}
        <section style={{ background: "rgba(255,255,255,0.85)", padding: "5rem 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
            <h2 className="anim-hero" style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--clr-ink-900)", textAlign: "center", marginBottom: "3rem" }}>
              Why Pet Parents Trust Lifeline
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
              {[
                { icon: "🏠", title: "Doorstep Service", desc: "No travel stress. We come to you anywhere in Delhi NCR." },
                { icon: "🎓", title: "Qualified Vets", desc: "BVSc & AH licensed, background-verified veterinary doctors." },
                { icon: "❄️", title: "Cold-Chain Vaccines", desc: "2°C–8°C temperature maintained from manufacturer to your home." },
                { icon: "📱", title: "WhatsApp Updates", desc: "Real-time updates, prescription & lab reports on WhatsApp." },
              ].map((item, i) => (
                <div key={i} className="anim-why card" style={{ padding: "1.75rem", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                  <h4 style={{ fontFamily: "var(--ff-display)", fontWeight: 800, color: "var(--clr-ink-900)", marginBottom: "0.4rem" }}>{item.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--clr-ink-300)", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {openModal && <BookingModal service={sel} onClose={() => setOpenModal(false)} />}
    </div>
  );
}
