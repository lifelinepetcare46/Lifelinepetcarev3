"use client";
import { useState } from "react";

export default function FAQs() {
  const faqs = [
    {
      q: "Do you provide home visit veterinary services?",
      a: "Yes. Lifeline Pet Care specializes in doorstep veterinary services including consultations, vaccinations, grooming, and basic treatments. Home visits reduce stress for pets and save time for pet parents.",
    },
    {
      q: "How fast can a vet reach my home?",
      a: "In most cases, our vets reach within a few hours on the same day, depending on location and availability. For emergencies, we recommend calling or WhatsApping us immediately for fastest assistance.",
    },
    {
      q: "Is emergency pet care available 24×7?",
      a: "Yes. Emergency veterinary guidance is available 24×7. Physical visits depend on vet availability, but we always assist urgently via call or WhatsApp.",
    },
    {
      q: "Is there a ₹99 home checkup available?",
      a: "Yes. We offer a limited ₹99 home checkup via WhatsApp booking for basic consultation and assessment. This helps pet parents get quick expert guidance at minimal cost.",
    },
    {
      q: "Are there any hidden charges?",
      a: "No. Lifeline Pet Care follows transparent pricing. All charges are clearly explained before the visit. There are no surprise or hidden costs.",
    },
    {
      q: "Do you provide vaccination records?",
      a: "Yes. After vaccination, we provide proper vaccination records and guidance on future booster schedules to keep your pet protected.",
    },
    {
      q: "How do I book an appointment?",
      a: "You can book easily via our website booking form, by calling us, or through WhatsApp. Our team confirms the appointment before the visit.",
    },
    {
      q: "Which areas do you serve?",
      a: "We currently serve across Delhi NCR. Availability may vary by location, so please contact us for confirmation before booking.",
    },
    {
      q: "Are your veterinarians qualified and experienced?",
      a: "Absolutely. All our veterinarians are licensed, experienced professionals who follow ethical medical practices and prioritize pet safety and comfort.",
    },
    {
      q: "What pets do you treat?",
      a: "We primarily treat dogs and cats. For other pets or special cases, please contact us in advance to confirm service availability.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section style={section}>
      <div className="container" style={{ maxWidth: 900 }}>
        <h2 style={title}>Frequently Asked Questions ❓</h2>

        <p style={intro}>
          We understand that pet parents may have doubts before booking veterinary
          services. These answers are designed to clear confusion, build trust,
          and help you take quick action with confidence.
        </p>

        {/* FAQ LIST */}
        {faqs.map((item, index) => (
          <div key={index} style={faqCard}>
            <button
              style={question}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {item.q}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <p style={answer}>{item.a}</p>
            )}
          </div>
        ))}

        {/* ✅ FINAL CTA BELOW FAQ (ADDED, NON-BREAKING) */}
        <div style={ctaWrap}>
          <p style={{ fontWeight: 600 }}>
            Still have questions? Talk to a vet now.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="https://wa.me/918800813462?text=Hi%20I%20want%20a%20₹99%20vet%20checkup"
              target="_blank"
              style={waBtn}
            >
              💬 WhatsApp – ₹99 Checkup
            </a>

            <a
              href="tel:+918800813462"
              style={callBtn}
            >
              📞 Call Vet Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const section = {
  padding: "90px 24px",
  background: "#f5f7ff",
};

const title = {
  fontSize: "40px",
  fontWeight: "700",
  textAlign: "center",
  color: "#2c237d",
  marginBottom: "18px",
};

const intro = {
  textAlign: "center",
  fontSize: "18px",
  color: "#4b5563",
  maxWidth: "800px",
  margin: "0 auto 50px",
  lineHeight: "1.8",
};

const faqCard = {
  background: "#ffffff",
  borderRadius: "16px",
  marginBottom: "16px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
};

const question = {
  width: "100%",
  padding: "20px 24px",
  fontSize: "18px",
  fontWeight: "600",
  background: "none",
  border: "none",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  color: "#2c237d",
};

const answer = {
  padding: "0 24px 22px",
  fontSize: "16px",
  color: "#4b5563",
  lineHeight: "1.7",
};

const ctaWrap = {
  marginTop: "60px",
  textAlign: "center",
};

const waBtn = {
  background: "#22c55e",
  color: "#ffffff",
  padding: "14px 26px",
  borderRadius: "30px",
  fontWeight: "600",
  textDecoration: "none",
};

const callBtn = {
  background: "#ffffff",
  color: "#2c237d",
  padding: "14px 26px",
  borderRadius: "30px",
  fontWeight: "600",
  border: "2px solid #2c237d",
  textDecoration: "none",
};
