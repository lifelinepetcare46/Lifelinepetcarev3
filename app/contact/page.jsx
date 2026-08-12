"use client";
import { useState } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const faqs = [
  { q: "Do you serve all areas in Delhi NCR?", a: "Yes. We currently cover all Delhi zones, Noida, Greater Noida, Gurgaon, Faridabad and Ghaziabad. Type your area in the form and we'll confirm availability." },
  { q: "How quickly does the vet arrive after booking?", a: "For scheduled bookings, our vet arrives within the selected 2-hour time window. For emergency calls, dispatch happens within 30–60 minutes depending on your location." },
  { q: "Are your vaccines genuine and cold-chain maintained?", a: "Absolutely. We partner with Intervet, Zoetis and Virbac directly. Every vaccine is stored at 2°C–8°C from manufacturer to your pet. We carry digital temperature logs." },
  { q: "What payment methods do you accept?", a: "UPI (GPay, PhonePe, Paytm), credit/debit cards, net banking, and cash — all accepted. Payment is collected after the service is completed." },
  { q: "Do you provide a prescription or health certificate?", a: "Yes. Every vet visit includes an official signed digital prescription sent on WhatsApp within minutes of the consultation." },
  { q: "Can I book for my cat or bird, not just dogs?", a: "Yes! We have specialist vets for cats, birds (avian), rabbits, ferrets and other exotic pets. Mention your pet type in the booking form." },
];

const contactInfo = [
  { icon: "📞", label: "Emergency Helpline", value: "+91 88008 13462", sub: "Answered 24/7 — call anytime", color: "#dc2626", bg: "#fef2f2" },
  { icon: "💬", label: "WhatsApp Chat", value: "+91 88008 13462", sub: "Tap to open WhatsApp", href: "https://wa.me/918800813462", color: "#059669", bg: "#ecfdf5" },
  { icon: "📷", label: "Instagram", value: "@_lifeline_pet_care", sub: "DM us for quick queries", href: "https://instagram.com/_lifeline_pet_care/", color: "#7c3aed", bg: "#f5f3ff" },
  { icon: "📍", label: "Service Area", value: "Delhi NCR", sub: "Delhi · Noida · Gurgaon · Faridabad · Ghaziabad", color: "#2563eb", bg: "#eff6ff" },
];

const services = ["Veterinary Home Visit", "Anti-Rabies Vaccination", "Adult Booster Vaccination", "Puppy Vaccine Package", "Grooming Spa", "Emergency ICU", "Lab Test at Home", "Pet Boarding", "Other"];

export default function ContactPage() {
  const [openModal, setOpenModal] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", pet: "", service: "", msg: "" });
  const [sent, setSent] = useState(false);

  useGSAP([
    { selector: ".anim-hero",    from: { opacity: 0, y: 40 }, duration: 0.8, ease: "power3.out" },
    { selector: ".anim-card",    from: { opacity: 0, y: 40, scale: 0.95 }, duration: 0.65, ease: "power3.out", stagger: 0.1 },
    { selector: ".anim-faq",     from: { opacity: 0, x: -30 }, duration: 0.5, ease: "power2.out", stagger: 0.07 },
    { selector: ".anim-form",    from: { opacity: 0, x: 40 }, duration: 0.7, ease: "power3.out" },
  ]);

  const submit = async (e) => {
    e.preventDefault();
    await new Promise(r => setTimeout(r, 800));
    setSent(true);
  };

  return (
    <div style={{ background: "var(--grad-contact)", minHeight: "100vh", fontFamily: "var(--ff-body)" }}>
      <Navbar />
      <main style={{ paddingTop: 64 }}>

        {/* HERO */}
        <section style={{
          background: "linear-gradient(135deg, #047857 0%, #059669 50%, #0d9488 100%)",
          padding: "5rem 2rem", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 40%, rgba(255,255,255,0.08) 0%, transparent 55%)" }} />
          <div className="anim-hero" style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <span className="chip" style={{ background: "rgba(255,255,255,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>We're Always Here For You</span>
            <h1 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(2.2rem,5vw,3.6rem)", color: "#fff", margin: "1.25rem 0 1rem", letterSpacing: "-0.03em" }}>
              Contact Us 📞
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
              Reach us via call, WhatsApp, or fill the form below. For emergencies, call directly — we're live 24/7.
            </p>
          </div>
        </section>

        {/* EMERGENCY BAND */}
        <div style={{ background: "#0f172a", padding: "1.25rem 2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444", animation: "pulse 1.5s infinite", display: "block" }} />
            <span style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}>Emergency Line — Active 24 Hours</span>
          </div>
          <a href="tel:+918800813462" className="btn btn-danger pulse-sos" style={{ padding: "0.6rem 1.5rem", fontSize: "0.9rem" }}>
            📞 +91 88008 13462
          </a>
        </div>

        {/* CONTACT CARDS */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {contactInfo.map((c, i) => (
              <div key={i} className="anim-card card" style={{ padding: "2rem", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, background: c.bg, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", margin: "0 auto 1rem" }}>{c.icon}</div>
                <p style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--clr-ink-300)", marginBottom: "0.3rem" }}>{c.label}</p>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer" style={{ fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "1rem", color: c.color, display: "block", marginBottom: "0.3rem" }}>{c.value}</a>
                ) : (
                  <p style={{ fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "1rem", color: c.color, marginBottom: "0.3rem" }}>{c.value}</p>
                )}
                <p style={{ fontSize: "0.78rem", color: "var(--clr-ink-300)" }}>{c.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ + FORM */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "2.5rem 2rem 5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem" }}>

          {/* FAQ */}
          <div>
            <div style={{ marginBottom: "2rem" }}>
              <span className="chip">Common Questions</span>
              <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--clr-ink-900)", marginTop: "1rem" }}>FAQ</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {faqs.map((faq, i) => (
                <div key={i} className="anim-faq card" style={{ overflow: "hidden", cursor: "pointer" }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div style={{ padding: "1.1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                    <p style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.9rem", color: "var(--clr-ink-900)", flex: 1 }}>{faq.q}</p>
                    <span style={{ color: "var(--clr-green-600)", fontWeight: 700, fontSize: "1.1rem", flexShrink: 0, transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                  </div>
                  {openFaq === i && (
                    <div style={{ padding: "0 1.5rem 1.25rem" }}>
                      <p style={{ fontSize: "0.875rem", color: "var(--clr-ink-400)", lineHeight: 1.7 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="anim-form card" style={{ padding: "2.5rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <span className="chip">Book / Enquire</span>
              <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "1.75rem", color: "var(--clr-ink-900)", marginTop: "1rem" }}>Send Us a Message</h2>
            </div>

            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, color: "var(--clr-ink-900)", marginBottom: "0.5rem" }}>Message Sent!</h3>
                <p style={{ color: "var(--clr-ink-300)", fontSize: "0.9rem", lineHeight: 1.6 }}>Our team will call or WhatsApp you within 30 minutes.</p>
                <button onClick={() => setSent(false)} className="btn btn-green" style={{ marginTop: "1.5rem" }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { field: "name",  type: "text",  placeholder: "Your Full Name *", required: true },
                  { field: "phone", type: "tel",   placeholder: "Mobile Number (WhatsApp) *", required: true },
                  { field: "pet",   type: "text",  placeholder: "Pet Name & Breed", required: false },
                ].map(({ field, type, placeholder, required }) => (
                  <input key={field} type={type} placeholder={placeholder} required={required}
                    value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })}
                    style={{
                      width: "100%", padding: "0.875rem 1.25rem", borderRadius: "var(--r-md)",
                      border: "1.5px solid var(--clr-border)", fontFamily: "var(--ff-body)",
                      fontSize: "0.9rem", color: "var(--clr-ink-700)", background: "#f8fafc", outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={e => e.target.style.borderColor = "var(--clr-green-600)"}
                    onBlur={e => e.target.style.borderColor = "var(--clr-border)"}
                  />
                ))}

                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} required
                  style={{
                    width: "100%", padding: "0.875rem 1.25rem", borderRadius: "var(--r-md)",
                    border: "1.5px solid var(--clr-border)", fontFamily: "var(--ff-body)",
                    fontSize: "0.9rem", color: form.service ? "var(--clr-ink-700)" : "var(--clr-ink-200)",
                    background: "#f8fafc", outline: "none", cursor: "pointer",
                  }}>
                  <option value="" disabled>Select Service *</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>

                <textarea placeholder="Describe your concern or any additional info..." rows={4}
                  value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}
                  style={{
                    width: "100%", padding: "0.875rem 1.25rem", borderRadius: "var(--r-md)",
                    border: "1.5px solid var(--clr-border)", fontFamily: "var(--ff-body)",
                    fontSize: "0.9rem", color: "var(--clr-ink-700)", background: "#f8fafc",
                    outline: "none", resize: "vertical", transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = "var(--clr-green-600)"}
                  onBlur={e => e.target.style.borderColor = "var(--clr-border)"}
                />

                <button type="submit" className="btn btn-green" style={{ width: "100%", padding: "1rem", fontSize: "0.95rem" }}>
                  📩 Send Message
                </button>
                <p style={{ fontSize: "0.75rem", color: "var(--clr-ink-200)", textAlign: "center" }}>
                  We'll respond via WhatsApp within 30 minutes · Mon–Sun 6 AM–11 PM
                </p>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
      {openModal && <BookingModal service="General Consultation" onClose={() => setOpenModal(false)} />}
    </div>
  );
}
