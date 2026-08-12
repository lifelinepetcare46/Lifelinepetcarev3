"use client";

import { useState } from "react";
import Link from "next/link";
import { useGSAP } from "@/hooks/useGSAP";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingModal from "./BookingModal";

/* ─── DATA ───────────────────────────────────────────────── */
const reviews = [
  { name: "Ananya S.", location: "South Delhi", text: "Dr. Rohit came within 45 minutes for my Golden's emergency. Thorough, caring — my dog recovered fully. Best vet service in Delhi!", pet: "Golden Retriever" },
  { name: "Rohan M.", location: "Noida Sec. 50", text: "Puppy vaccination at home — zero stress. Genuine cold-chain vaccines, digital record on WhatsApp. Highly recommend!", pet: "Labrador Pup" },
  { name: "Priya K.", location: "Gurgaon", text: "My cat Mochi hates clinics. Lifeline's home grooming was a game-changer — professional, gentle & gorgeous results!", pet: "Persian Cat" },
  { name: "Vikram T.", location: "West Delhi", text: "Called emergency at 2 AM — they picked up and dispatched a vet. Unbelievable. Literally saved my Beagle's life.", pet: "Beagle" },
];

const whyUs = [
  { icon: "🏠", title: "100% Doorstep", desc: "We come to you, anywhere in Delhi NCR, 7 days a week." },
  { icon: "🎓", title: "BVSc Certified Vets", desc: "Degree-qualified, background-verified veterinary doctors only." },
  { icon: "❄️", title: "Cold-Chain Vaccines", desc: "Genuine vaccines at 2°C–8°C, manufacturer straight to your pet." },
  { icon: "📱", title: "WhatsApp Reports", desc: "Prescription & lab results delivered on WhatsApp in minutes." },
  { icon: "💳", title: "Flexible Payments", desc: "UPI, cash, cards — pay after the service is done." },
  { icon: "🕐", title: "Same-Day Booking", desc: "Book before noon, get an appointment the very same day." },
];

const pets = [
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc9LWmMM08px7CB1tFJossP1smXHH2DGGWRseN8U15pjcpGLaZvzkUEjnJQKHP2vEIZnA-zM0nQ-iPUtHY8mWxD5--Uuojs47qFWjjnv3E_Xw2-Jy_Pf_jyB7e5IVvF97Zs9gfYZKaH-VAyoJBqulaP02SAHydoTWMYTYNKxVNhHZCYyorVgygyTTOWaScJ0yV0rMmvuj8859r904dxIDDaEdTvcvhk9A4HjwNlnqWLEEf7RPLIq9D", label: "Dogs 🐕", sub: "Vaccines, Checkup & Spa", booking: "Canine Care" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3epoSNHaQgHPWcSrhdDaatNsKRMNPLvMf6uFc-qbSkbfuOVgVJawXLj3KGGqfXgZT-4lCZDY2ewdE2-dklSqyK2kbtd74MaEBLhDh65-fIQmm-ZAlb7GqJM0Z9AweuQ_O7D8wC6HN3mnq8MNJM0SX3pTPESH60QXu48qyZ_KydcdkTOCOgnYEoENdRrxZkTWVRB0cMk976vV6XTib64xqAvONWJFNsQ_0kw1OpB58f5sALLdEDTpQ", label: "Cats 🐱", sub: "Stress-Free Feline Care", booking: "Feline Care" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn6yuSTBLZI7luWPuF4PFsdKYYRmRiVta9IMcpEqMid21rdbnTvGKyk8SnUDMuUjXBGbBW9q7QdYVk4GIOpgQQKPFGH0PYeLO7B2aBkHLg__hw2_uafxCbVfP9Fy7SsNmYL-gRz6qVixAOndx26HktkF-4dBeysCvhNeW28TplFC8L20FPL6TFfK6pxUWqL0QvEj7aBDaxf-eSnOY1GPU8LSE_6JzPKCM2-KE_su-w1xlN-y8DyLI2", label: "Birds 🦜", sub: "Avian & Wing Specialist", booking: "Avian Care" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3I1cbucbuU4w4rFrSAaKOZV7ggfr_1vxJ8vLFfBEd2paISnaJ0z0BsCL0TnxNBA6cPVlcuBmjk1hO2GFEAzHCorUK7tPYgOj0JtcJBILhjdQAMsDmHEfAt5Jxee1wbNfHsL2KXfiA5LCQiiJspx6SBCJstmKSD4rDfxgfsnWkonR7o3hwXTSc-esO4ztzu-rJjYoxu8VrvMxtpEMQgGaQZzakjzzK_r5fuM6EDDPwV5OXbPuXQ7hI", label: "Exotics 🐇", sub: "Rabbits, Ferrets & More", booking: "Exotic Care" },
];

const services = [
  {
    icon: "🩺", label: "Veterinary Doctor", title: "Vet Home Visit", price: "₹449", unit: "/visit",
    accent: "#059669", accentBg: "#ecfdf5", border: "#a7f3d0",
    features: ["Head-to-tail clinical examination", "Fever, illness & symptom diagnosis", "Official signed prescription", "WhatsApp follow-up support"],
    booking: "Veterinary Home Visit",
  },
  {
    icon: "💉", label: "Vaccinations", title: "Core Vaccines", price: "from ₹999", unit: "",
    accent: "#ea580c", accentBg: "#fff7ed", border: "#fed7aa",
    features: ["Anti-Rabies Shot — ₹999", "Adult Booster 9-in-1 — ₹3,899", "Puppy 5-Shot Package — ₹6,799", "Genuine cold-chain, digital record"],
    booking: "Vaccination",
  },
  {
    icon: "✂️", label: "Doorstep Spa", title: "Grooming", price: "from ₹799", unit: "",
    accent: "#7c3aed", accentBg: "#f5f3ff", border: "#ddd6fe",
    features: ["Bath & Blow Dry — ₹799", "Mini Groom (Bath+Nails) — ₹1,100", "Full Breed Haircut — ₹1,799", "Organic shampoo, zero cage stress"],
    booking: "Grooming Spa",
  },
];

const stats = [
  ["15,000+", "Pets Treated"],
  ["24/7", "Emergency Support"],
  ["25+", "Specialist Doctors"],
  ["4.9★", "Average Rating"],
];

export default function StitchMasterUI() {
  const [openModal, setOpenModal] = useState(false);
  const [modalService, setModalService] = useState("General Consultation");

  const book = (s = "General Consultation") => { setModalService(s); setOpenModal(true); };

  /* ─── GSAP SCROLL ANIMATIONS ──────────────────────────── */
  useGSAP([
    { selector: ".anim-hero-badge",  from: { opacity: 0, y: -20 }, duration: 0.6, ease: "back.out(1.4)", start: "top 95%" },
    { selector: ".anim-hero-h1",     from: { opacity: 0, y: 60, skewY: 3 }, duration: 0.9, ease: "power4.out", stagger: 0 },
    { selector: ".anim-hero-p",      from: { opacity: 0, y: 30 }, duration: 0.7, ease: "power3.out", start: "top 95%", to: { delay: 0.2 } },
    { selector: ".anim-hero-stat",   from: { opacity: 0, y: 20, scale: 0.9 }, duration: 0.5, ease: "back.out(1.2)", stagger: 0.08 },
    { selector: ".anim-hero-cta",    from: { opacity: 0, y: 20 }, duration: 0.6, ease: "power3.out", stagger: 0.1 },
    { selector: ".anim-hero-img",    from: { opacity: 0, x: 60, scale: 0.95 }, duration: 1, ease: "power3.out" },
    { selector: ".anim-pet-card",    from: { opacity: 0, y: 50 }, duration: 0.6, ease: "power3.out", stagger: 0.1 },
    { selector: ".anim-svc-card",    from: { opacity: 0, y: 60 }, duration: 0.7, ease: "power3.out", stagger: 0.15 },
    { selector: ".anim-why-card",    from: { opacity: 0, y: 40 }, duration: 0.6, ease: "power2.out", stagger: 0.08 },
    { selector: ".anim-review-card", from: { opacity: 0, y: 40, scale: 0.96 }, duration: 0.6, ease: "power2.out", stagger: 0.1 },
    { selector: ".anim-stat",        from: { opacity: 0, y: 30, scale: 0.85 }, duration: 0.55, ease: "back.out(1.4)", stagger: 0.1 },
    { selector: ".anim-section-h",   from: { opacity: 0, y: 30 }, duration: 0.7, ease: "power3.out" },
  ]);

  return (
    <div style={{ background: "var(--grad-home)", minHeight: "100vh", fontFamily: "var(--ff-body)", color: "var(--clr-ink-500)" }}>
      <Navbar />

      <main>
        {/* ═══════════════════ HERO ═══════════════════ */}
        <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          {/* Decorative orbs */}
          <div className="orb orb-green" style={{ width: 600, height: 600, top: "-100px", left: "-200px" }} />
          <div className="orb orb-teal"  style={{ width: 500, height: 500, bottom: "0px", right: "-150px" }} />
          <div className="orb orb-blue"  style={{ width: 400, height: 400, top: "30%", right: "20%" }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "6rem 2rem 4rem", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
            className="max-w-7xl px-6 md:px-12 grid-cols-1 lg:grid-cols-2">

            {/* LEFT */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {/* Emergency badge */}
              <div className="anim-hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, background: "#fee2e2", border: "1px solid #fecaca", width: "fit-content" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444", animation: "pulse 1.5s infinite" }} />
                <span style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#b91c1c" }}>
                  Emergency Vet Active · Delhi NCR · 24/7
                </span>
              </div>

              {/* H1 */}
              <div className="anim-hero-h1">
                <h1 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(2.8rem, 5vw, 4.2rem)", lineHeight: 1.06, letterSpacing: "-0.035em", color: "var(--clr-ink-900)" }}>
                  Premium Vet Care,{" "}
                  <span style={{ background: "linear-gradient(135deg, #059669 0%, #0d9488 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Right at Your Door 🐾
                  </span>
                </h1>
              </div>

              {/* Subtext */}
              <p className="anim-hero-p" style={{ fontSize: "1.1rem", color: "var(--clr-ink-400)", lineHeight: 1.75, maxWidth: 500 }}>
                Certified vets, genuine cold-chain vaccines & organic grooming — delivered to your home across Delhi NCR.
                Starting just <strong style={{ color: "var(--clr-green-600)", fontWeight: 700 }}>₹449</strong>.
              </p>

              {/* Stat pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {[["15K+", "Pets Served"], ["4.9★", "Rating"], ["24/7", "Emergency"], ["₹449", "Starts At"]].map(([s, l]) => (
                  <div key={s} className="anim-hero-stat card" style={{ padding: "0.75rem 1.25rem", textAlign: "center", minWidth: 90 }}>
                    <p style={{ fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "1.2rem", color: "var(--clr-green-600)", lineHeight: 1 }}>{s}</p>
                    <p style={{ fontSize: "0.7rem", color: "var(--clr-ink-300)", fontWeight: 600, marginTop: 3 }}>{l}</p>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
                <button onClick={() => book("Veterinary Home Visit")} className="anim-hero-cta btn btn-green">
                  🩺 Book Vet Visit — ₹449
                </button>
                <a href="tel:+918800813462" className="anim-hero-cta btn btn-danger pulse-sos">
                  📞 Emergency: +91 88008 13462
                </a>
              </div>
            </div>

            {/* RIGHT — hero image */}
            <div className="anim-hero-img hidden lg:block" style={{ position: "relative" }}>
              <div style={{ borderRadius: "var(--r-2xl)", overflow: "hidden", boxShadow: "var(--shadow-xl)", border: "3px solid rgba(255,255,255,0.9)" }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc9LWmMM08px7CB1tFJossP1smXHH2DGGWRseN8U15pjcpGLaZvzkUEjnJQKHP2vEIZnA-zM0nQ-iPUtHY8mWxD5--Uuojs47qFWjjnv3E_Xw2-Jy_Pf_jyB7e5IVvF97Zs9gfYZKaH-VAyoJBqulaP02SAHydoTWMYTYNKxVNhHZCYyorVgygyTTOWaScJ0yV0rMmvuj8859r904dxIDDaEdTvcvhk9A4HjwNlnqWLEEf7RPLIq9D"
                  alt="Happy dog with Lifeline vet"
                  style={{ width: "100%", height: 500, objectFit: "cover" }}
                />
              </div>
              {/* Floating badge */}
              <div style={{
                position: "absolute", bottom: -20, left: -20,
                background: "#fff", borderRadius: "var(--r-lg)", boxShadow: "var(--shadow-lg)",
                border: "1.5px solid var(--clr-border)", padding: "1rem 1.5rem",
                display: "flex", alignItems: "center", gap: 12
              }}>
                <div style={{ width: 44, height: 44, background: "#ecfdf5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>⭐</div>
                <div>
                  <p style={{ fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "0.95rem", color: "var(--clr-ink-900)" }}>4.9 / 5 Stars</p>
                  <p style={{ fontSize: "0.72rem", color: "var(--clr-ink-200)" }}>1,200+ Verified Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ PET SPECIES ═══════════════════ */}
        <section style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", padding: "5rem 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
            <div className="text-center anim-section-h" style={{ marginBottom: "3rem" }}>
              <span className="chip">For Every Companion</span>
              <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", marginTop: "1rem", color: "var(--clr-ink-900)" }}>
                Tailored Care for Every Pet
              </h2>
              <p style={{ color: "var(--clr-ink-300)", fontSize: "1rem", marginTop: "0.75rem", maxWidth: 480, margin: "0.75rem auto 0" }}>
                Dogs, cats, birds & exotics — each with its own specialized clinical protocol.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
              {pets.map((pet, i) => (
                <button key={i} onClick={() => book(pet.booking)}
                  className="anim-pet-card card"
                  style={{ padding: 0, overflow: "hidden", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ height: 220, overflow: "hidden" }}>
                    <img src={pet.img} alt={pet.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
                  </div>
                  <div style={{ padding: "1.25rem 1.5rem" }}>
                    <p style={{ fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "1.05rem", color: "var(--clr-ink-900)" }}>{pet.label}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--clr-ink-300)", marginTop: 3 }}>{pet.sub}</p>
                    <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--clr-green-600)", marginTop: 10 }}>Book Now →</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ SERVICES / PRICING ═══════════════════ */}
        <section style={{ padding: "5rem 0", background: "linear-gradient(160deg, #f0fdfa 0%, #ecfdf5 40%, #f8fafc 100%)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
            <div className="text-center anim-section-h" style={{ marginBottom: "3rem" }}>
              <span className="chip">Transparent Pricing</span>
              <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", marginTop: "1rem", color: "var(--clr-ink-900)" }}>
                Most Popular Services
              </h2>
              <p style={{ color: "var(--clr-ink-300)", fontSize: "1rem", marginTop: "0.75rem" }}>Zero hidden fees. What you see is what you pay.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "2rem" }}>
              {services.map((svc, i) => (
                <div key={i} className="anim-svc-card card" style={{ padding: "2.25rem", border: `1.5px solid ${svc.border}`, display: "flex", flexDirection: "column" }}>
                  <div style={{ width: 56, height: 56, background: svc.accentBg, borderRadius: "var(--r-lg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", marginBottom: "1.25rem" }}>
                    {svc.icon}
                  </div>
                  <p style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: svc.accent, marginBottom: "0.4rem" }}>
                    {svc.label}
                  </p>
                  <h3 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "1.4rem", color: "var(--clr-ink-900)", marginBottom: "0.4rem" }}>{svc.title}</h3>
                  <p style={{ fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "2rem", color: svc.accent, lineHeight: 1, marginBottom: "1.5rem" }}>
                    {svc.price}
                    {svc.unit && <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--clr-ink-200)", marginLeft: 4 }}>{svc.unit}</span>}
                  </p>
                  <ul style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                    {svc.features.map((f, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.88rem", color: "var(--clr-ink-500)" }}>
                        <span style={{ color: svc.accent, fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => book(svc.booking)} style={{
                    width: "100%", background: svc.accent, color: "#fff",
                    fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.9rem",
                    padding: "0.9rem 1.5rem", borderRadius: "var(--r-pill)",
                    border: "none", cursor: "pointer",
                    boxShadow: `0 6px 24px ${svc.accent}40`,
                    transition: "all 0.2s ease",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}>
                    Book {svc.label}
                  </button>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/packages" style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.9rem", color: "var(--clr-green-600)" }}>
                View All Packages & Pricing →
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════ WHY US ═══════════════════ */}
        <section style={{ background: "rgba(255,255,255,0.9)", padding: "5rem 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
            <div className="text-center anim-section-h" style={{ marginBottom: "3rem" }}>
              <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "var(--clr-ink-900)" }}>
                Why 15,000+ Pet Parents Choose Lifeline
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {whyUs.map((f, i) => (
                <div key={i} className="anim-why-card card" style={{ padding: "2rem" }}>
                  <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{f.icon}</div>
                  <h4 style={{ fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "1.05rem", color: "var(--clr-ink-900)", marginBottom: "0.5rem" }}>{f.title}</h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--clr-ink-300)", lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ REVIEWS ═══════════════════ */}
        <section style={{ padding: "5rem 0", background: "linear-gradient(160deg, #f8fafc 0%, #f0fdfa 50%, #ecfdf5 100%)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
            <div className="text-center anim-section-h" style={{ marginBottom: "3rem" }}>
              <span className="chip">Testimonials</span>
              <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.5rem)", marginTop: "1rem", color: "var(--clr-ink-900)" }}>
                What Pet Parents Say ❤️
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {reviews.map((r, i) => (
                <div key={i} className="anim-review-card card" style={{ padding: "1.75rem" }}>
                  <div style={{ color: "#f59e0b", fontSize: "1.1rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>★★★★★</div>
                  <p style={{ fontSize: "0.88rem", color: "var(--clr-ink-400)", lineHeight: 1.75, fontStyle: "italic", marginBottom: "1.25rem" }}>"{r.text}"</p>
                  <div style={{ paddingTop: "0.75rem", borderTop: "1px solid var(--clr-border)" }}>
                    <p style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.875rem", color: "var(--clr-ink-900)" }}>{r.name}</p>
                    <p style={{ fontSize: "0.75rem", color: "var(--clr-ink-200)", marginTop: 2 }}>{r.location} · {r.pet}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ STATS BAND ═══════════════════ */}
        <section style={{ background: "linear-gradient(135deg, #047857 0%, #059669 40%, #0d9488 100%)", padding: "4.5rem 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem", textAlign: "center" }}>
            {stats.map(([s, l]) => (
              <div key={s} className="anim-stat">
                <p style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", lineHeight: 1, letterSpacing: "-0.03em" }}>{s}</p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", marginTop: "0.5rem", fontWeight: 500 }}>{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ EMERGENCY CTA ═══════════════════ */}
        <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e293b 100%)", padding: "5.5rem 0", position: "relative", overflow: "hidden" }}>
          {/* Decorative orb */}
          <div style={{ position: "absolute", width: 600, height: 600, top: "-200px", right: "-150px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
          
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 2rem", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div className="anim-section-h" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", marginBottom: "1.5rem" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f87171", animation: "pulse 1.5s infinite" }} />
              <span style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#f87171" }}>
                Emergency Line Active — 24 Hours · 7 Days
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(2rem,4.5vw,3.2rem)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Is Your Pet In Distress?<br />
              <span style={{ color: "#f87171" }}>Call Us Right Now</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 480, margin: "0 auto 2.5rem" }}>
              Our emergency vets dispatch across Delhi NCR within 30–60 minutes, around the clock.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href="tel:+918800813462" className="btn btn-danger pulse-sos" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}>
                📞 +91 88008 13462
              </a>
              <button onClick={() => book("General Checkup")} style={{
                background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.15)",
                color: "#e2e8f0", fontFamily: "var(--ff-display)", fontWeight: 700,
                fontSize: "0.95rem", padding: "1rem 2rem", borderRadius: "var(--r-pill)", cursor: "pointer",
                transition: "background 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}>
                Book Appointment
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {openModal && <BookingModal service={modalService} onClose={() => setOpenModal(false)} />}
    </div>
  );
}
