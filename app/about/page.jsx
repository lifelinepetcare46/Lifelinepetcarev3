"use client";
import { useGSAP } from "@/hooks/useGSAP";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const team = [
  { name: "Dr. Rohit Sharma", title: "Senior Veterinary Surgeon", spec: "Soft tissue surgery, internal medicine", exp: "12 yrs", emoji: "👨‍⚕️" },
  { name: "Dr. Priya Mehta", title: "Feline & Exotic Specialist", spec: "Cats, rabbits, ferrets & avian care", exp: "8 yrs", emoji: "👩‍⚕️" },
  { name: "Dr. Arjun Kapur", title: "Vaccination & Preventive Care", spec: "Immunology & cold-chain vaccine protocols", exp: "10 yrs", emoji: "👨‍⚕️" },
  { name: "Dr. Neha Gupta", title: "Dermatology & Nutrition", spec: "Skin allergies, therapeutic diets, coat health", exp: "7 yrs", emoji: "👩‍⚕️" },
];

const timeline = [
  { year: "2016", event: "Founded in South Delhi with 2 vets & a van" },
  { year: "2018", event: "Expanded to 5 zones across Delhi NCR" },
  { year: "2020", event: "Launched 24/7 Emergency Vet SOS during COVID-19" },
  { year: "2022", event: "Crossed 10,000 pets served milestone" },
  { year: "2024", event: "Opened dedicated Pet Boarding & ICU facility" },
  { year: "2025", event: "15,000+ happy pet families across NCR" },
];

const pillars = [
  { icon: "🎓", title: "Certified Doctors Only", color: "#059669", bg: "#ecfdf5", desc: "Every vet holds a BVSc & AH degree. We run thorough background verification, in-house training & re-certification every 2 years." },
  { icon: "❄️", title: "Genuine Cold-Chain Vaccines", color: "#2563eb", bg: "#eff6ff", desc: "We partner directly with Intervet, Zoetis & Virbac. 2°C–8°C from factory to your pet's skin — never broken, never compromised." },
  { icon: "🌿", title: "Stress-Free Organic Grooming", color: "#7c3aed", bg: "#f5f3ff", desc: "Certified organic, paraben-free shampoos. Every session in your pet's safe home — no cage dryers, no stressful transport." },
];

export default function AboutPage() {
  useGSAP([
    { selector: ".anim-hero",     from: { opacity: 0, y: 40 }, duration: 0.8, ease: "power3.out" },
    { selector: ".anim-mv",       from: { opacity: 0, y: 40 }, duration: 0.7, ease: "power3.out", stagger: 0.15 },
    { selector: ".anim-pillar",   from: { opacity: 0, y: 50, scale: 0.95 }, duration: 0.65, ease: "power3.out", stagger: 0.12 },
    { selector: ".anim-stat",     from: { opacity: 0, y: 30, scale: 0.85 }, duration: 0.55, ease: "back.out(1.4)", stagger: 0.1 },
    { selector: ".anim-team",     from: { opacity: 0, y: 40 }, duration: 0.6, ease: "power2.out", stagger: 0.1 },
    { selector: ".anim-timeline", from: { opacity: 0, x: -30 }, duration: 0.5, ease: "power2.out", stagger: 0.1 },
  ]);

  return (
    <div style={{ background: "var(--grad-about)", minHeight: "100vh", fontFamily: "var(--ff-body)" }}>
      <Navbar />
      <main style={{ paddingTop: 64 }}>

        {/* HERO */}
        <section style={{ background: "linear-gradient(135deg, #047857 0%, #059669 50%, #0d9488 100%)", padding: "5.5rem 2rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)" }} />
          <div className="anim-hero" style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <span className="chip" style={{ background: "rgba(255,255,255,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>Our Story & Mission</span>
            <h1 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(2.2rem,5vw,3.6rem)", color: "#fff", margin: "1.25rem 0 1rem", letterSpacing: "-0.03em" }}>
              About Lifeline Pet Care 🐾
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>
              Founded in 2016, we are Delhi NCR's most trusted home veterinary service — built on the belief that quality pet healthcare should come to you, not the other way around.
            </p>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {[
            { icon: "🎯", title: "Our Mission", color: "#059669", bg: "#ecfdf5", text: "To eliminate clinic travel anxiety for pets and families by delivering world-class veterinary care — diagnoses, vaccinations, grooming, and emergency response — directly at the doorstep across Delhi NCR." },
            { icon: "🌟", title: "Our Vision", color: "#7c3aed", bg: "#f5f3ff", text: "To become India's most loved pet healthcare brand by 2030 — where every pet parent feels confident, supported, and heard, and every pet lives its healthiest, happiest life." },
          ].map((mv, i) => (
            <div key={i} className="anim-mv card" style={{ padding: "2.5rem" }}>
              <div style={{ width: 56, height: 56, background: mv.bg, borderRadius: "var(--r-lg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", marginBottom: "1.25rem" }}>{mv.icon}</div>
              <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "1.5rem", color: "var(--clr-ink-900)", marginBottom: "0.75rem" }}>{mv.title}</h2>
              <p style={{ fontSize: "0.9rem", color: "var(--clr-ink-400)", lineHeight: 1.75 }}>{mv.text}</p>
            </div>
          ))}
        </section>

        {/* CORE PILLARS */}
        <section style={{ background: "rgba(255,255,255,0.85)", padding: "5rem 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="chip">Our Non-Negotiables</span>
              <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--clr-ink-900)", marginTop: "1rem" }}>Core Clinical Pillars</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              {pillars.map((p, i) => (
                <div key={i} className="anim-pillar card" style={{ padding: "2.25rem" }}>
                  <div style={{ width: 60, height: 60, background: p.bg, borderRadius: "var(--r-lg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem", marginBottom: "1.25rem", boxShadow: "var(--shadow-xs)" }}>{p.icon}</div>
                  <h3 style={{ fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "1.15rem", color: "var(--clr-ink-900)", marginBottom: "0.6rem" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--clr-ink-400)", lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={{ background: "linear-gradient(135deg, #047857 0%, #059669 50%, #0d9488 100%)", padding: "4.5rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem", textAlign: "center" }}>
            {[["15,000+", "Pets Treated"], ["25+", "Expert Vets & Groomers"], ["24/7", "Emergency SOS"], ["4.9★", "Customer Rating"]].map(([s, l]) => (
              <div key={s} className="anim-stat">
                <p style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", lineHeight: 1, letterSpacing: "-0.03em" }}>{s}</p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", marginTop: "0.4rem" }}>{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="chip">Meet The Team</span>
            <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--clr-ink-900)", marginTop: "1rem" }}>Our Veterinary Experts</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.75rem" }}>
            {team.map((v, i) => (
              <div key={i} className="anim-team card" style={{ padding: "2rem", textAlign: "center" }}>
                <div style={{ width: 72, height: 72, background: "#ecfdf5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.2rem", margin: "0 auto 1rem" }}>{v.emoji}</div>
                <h4 style={{ fontFamily: "var(--ff-display)", fontWeight: 800, color: "var(--clr-ink-900)", fontSize: "1rem" }}>{v.name}</h4>
                <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--clr-green-600)", marginTop: 2 }}>{v.title}</p>
                <p style={{ fontSize: "0.78rem", color: "var(--clr-ink-300)", marginTop: "0.5rem" }}>{v.spec}</p>
                <span style={{ display: "inline-block", background: "var(--clr-bg)", border: "1px solid var(--clr-border)", borderRadius: 999, padding: "3px 12px", fontSize: "0.72rem", fontWeight: 700, color: "var(--clr-ink-400)", marginTop: "0.75rem" }}>{v.exp} experience</span>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e293b 100%)", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#fff", textAlign: "center", marginBottom: "3rem" }}>Our Journey</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {timeline.map((t, i) => (
                <div key={i} className="anim-timeline" style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "0.875rem", color: "#34d399", minWidth: 40, flexShrink: 0, paddingTop: "0.1rem" }}>{t.year}</span>
                  <div style={{ flex: 1, paddingBottom: "1.25rem", borderBottom: i < timeline.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                    <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.6 }}>{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "rgba(255,255,255,0.9)", padding: "5rem 2rem", textAlign: "center" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--clr-ink-900)", marginBottom: "1rem" }}>Ready to Experience the Lifeline Difference?</h2>
            <p style={{ color: "var(--clr-ink-300)", fontSize: "0.95rem", marginBottom: "2rem" }}>Book a vet home visit starting at ₹449. Same-day appointments available.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Link href="/services" className="btn btn-green">Explore All Services</Link>
              <Link href="/contact" className="btn btn-outline-green">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
