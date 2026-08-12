"use client";
import { useState } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const cats = [
  {
    title: "Veterinary Home Visit", icon: "🩺", color: "#059669", bg: "#ecfdf5", bdr: "#a7f3d0",
    rows: [
      { name: "Doctor Consultation & Visit", price: "₹449", desc: "Physical examination, diagnosis & prescription" },
      { name: "Follow-up Visit (within 7 days)", price: "₹299", desc: "Post-treatment review by same doctor" },
      { name: "Emergency Night Visit (after 10 PM)", price: "₹699", desc: "Night emergency vet dispatch" },
    ],
  },
  {
    title: "Vaccination Packages", icon: "💉", color: "#ea580c", bg: "#fff7ed", bdr: "#fed7aa",
    rows: [
      { name: "Anti-Rabies Core Shot", price: "₹999", desc: "Annual mandatory anti-rabies vaccination" },
      { name: "Adult Dog Annual Booster (9-in-1)", price: "₹3,899", desc: "Parvovirus, Distemper, Leptospirosis & more" },
      { name: "Puppy 5-Vaccine Package", price: "₹6,799", desc: "Full schedule at 6, 9, 12, 15, 18 weeks" },
      { name: "Cat Triple (FVRCP)", price: "₹2,499", desc: "Rhinotracheitis, Calicivirus, Panleukopenia" },
      { name: "Cat Rabies Combo", price: "₹3,299", desc: "FVRCP + Anti-Rabies bundle" },
    ],
  },
  {
    title: "Grooming Spa", icon: "✂️", color: "#7c3aed", bg: "#f5f3ff", bdr: "#ddd6fe",
    rows: [
      { name: "Bath & Blow Dry", price: "₹799", desc: "Shampoo, conditioner & professional blow dry" },
      { name: "Medicated Therapeutic Bath", price: "₹899", desc: "Prescribed medicated shampoo for skin conditions" },
      { name: "Mini Grooming Package", price: "₹1,100", desc: "Bath + nail clipping + ear cleaning" },
      { name: "Full Breed Haircut & Styling", price: "₹1,799", desc: "Breed-standard grooming with scissor finish" },
      { name: "Premium Spa (Full + Cologne + Bandana)", price: "₹2,299", desc: "Luxury spa experience with accessories" },
    ],
  },
  {
    title: "Lab Tests at Home", icon: "🧪", color: "#2563eb", bg: "#eff6ff", bdr: "#bfdbfe",
    rows: [
      { name: "Complete Blood Count (CBC)", price: "₹399", desc: "Full blood cell analysis" },
      { name: "Liver & Kidney Function Test", price: "₹799", desc: "LFT + KFT panel" },
      { name: "Blood Glucose Test", price: "₹199", desc: "Fasting blood sugar level check" },
      { name: "Thyroid Panel (T3, T4, TSH)", price: "₹1,299", desc: "Complete thyroid function assessment" },
      { name: "Comprehensive Health Panel", price: "₹2,499", desc: "CBC + LFT + KFT + Glucose + Thyroid bundle" },
    ],
  },
  {
    title: "Pet Boarding", icon: "🏨", color: "#0d9488", bg: "#f0fdfa", bdr: "#99f6e4",
    rows: [
      { name: "Standard Overnight Boarding", price: "₹499/night", desc: "AC kennel with 3 meals & exercise" },
      { name: "Premium Boarding (AC Suite)", price: "₹799/night", desc: "Private suite with orthopedic bed & extra playtime" },
      { name: "Weekly Boarding Package", price: "₹2,999/week", desc: "7-night boarding with vet check included" },
    ],
  },
];

export default function PackagesPage() {
  const [openModal, setOpenModal] = useState(false);
  const [sel, setSel] = useState("");
  const book = (n) => { setSel(n); setOpenModal(true); };

  useGSAP([
    { selector: ".anim-hero", from: { opacity: 0, y: 40 }, duration: 0.8, ease: "power3.out" },
    { selector: ".anim-cat",  from: { opacity: 0, y: 50 }, duration: 0.7, ease: "power3.out", stagger: 0.15 },
    { selector: ".anim-pay",  from: { opacity: 0, scale: 0.9 }, duration: 0.5, ease: "back.out(1.3)", stagger: 0.08 },
  ]);

  return (
    <div style={{ background: "var(--grad-packages)", minHeight: "100vh", fontFamily: "var(--ff-body)" }}>
      <Navbar />
      <main style={{ paddingTop: 64 }}>

        {/* HERO */}
        <section style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)", padding: "5rem 2rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 500, height: 500, top: "-150px", left: "-100px", borderRadius: "50%", background: "radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 65%)" }} />
          <div className="anim-hero" style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <span className="chip" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>Transparent Pricing — Zero Hidden Fees</span>
            <h1 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(2.2rem,5vw,3.6rem)", color: "#fff", margin: "1.25rem 0 1rem", letterSpacing: "-0.03em" }}>
              Pricing & Packages 💰
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
              Complete pricing for every service — vet visits, vaccinations, grooming, lab tests & boarding. What you see is what you pay.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginTop: "2rem" }}>
              {["🚫 No Clinic Travel", "📄 Invoice Provided", "💳 UPI / Cash / Card"].map(t => (
                <span key={t} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)", padding: "0.45rem 1.1rem", borderRadius: 999, fontSize: "0.8rem", fontWeight: 600, fontFamily: "var(--ff-display)" }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {cats.map((cat, ci) => (
            <div key={ci} className="anim-cat" style={{ background: "#fff", borderRadius: "var(--r-2xl)", overflow: "hidden", boxShadow: "var(--shadow-md)", border: `1.5px solid ${cat.bdr}` }}>
              {/* Header */}
              <div style={{ background: cat.color, padding: "1.25rem 2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "1.75rem" }}>{cat.icon}</span>
                <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "1.2rem", color: "#fff", letterSpacing: "-0.01em" }}>{cat.title}</h2>
              </div>
              {/* Rows */}
              <div>
                {cat.rows.map((row, ri) => (
                  <div key={ri} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "1.1rem 2rem", gap: "1rem", flexWrap: "wrap",
                    borderBottom: ri < cat.rows.length - 1 ? "1px solid var(--clr-border)" : "none",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = cat.bg}
                    onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <p style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.95rem", color: "var(--clr-ink-900)" }}>{row.name}</p>
                      <p style={{ fontSize: "0.78rem", color: "var(--clr-ink-300)", marginTop: 2 }}>{row.desc}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
                      <span style={{ fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "1.3rem", color: cat.color }}>{row.price}</span>
                      <button onClick={() => book(`${row.name} (${row.price})`)} style={{
                        background: cat.color, color: "#fff", fontFamily: "var(--ff-display)", fontWeight: 700,
                        fontSize: "0.78rem", padding: "0.5rem 1.25rem", borderRadius: 999, border: "none",
                        cursor: "pointer", whiteSpace: "nowrap", transition: "opacity 0.2s",
                      }}
                        onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                        onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* PAYMENT */}
        <section style={{ background: "rgba(255,255,255,0.85)", padding: "4rem 2rem", textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "1.8rem", color: "var(--clr-ink-900)", marginBottom: "2.5rem" }}>Payment Methods Accepted</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", justifyContent: "center" }}>
            {[["📱", "UPI / GPay / PhonePe"], ["💳", "Credit / Debit Cards"], ["💵", "Cash on Service"], ["🏦", "Net Banking / NEFT"]].map(([ic, nm]) => (
              <div key={nm} className="anim-pay card" style={{ padding: "1.5rem 2rem", textAlign: "center", minWidth: 160 }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{ic}</div>
                <p style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.85rem", color: "var(--clr-ink-700)" }}>{nm}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      {openModal && <BookingModal service={sel} onClose={() => setOpenModal(false)} />}
    </div>
  );
}
