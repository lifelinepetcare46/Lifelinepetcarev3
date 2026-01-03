"use client";
import { useState } from "react";

export default function FAQs() {
  const faqs = [
    {
      q: "Do you provide home visit veterinary services?",
      a: "Yes. Lifeline Pet Care specializes in doorstep veterinary services including consultations, vaccinations, grooming, and basic treatments. This reduces stress for pets and offers convenience for owners.",
    },
    {
      q: "Is emergency pet care available 24×7?",
      a: "Yes, emergency services are available depending on vet availability. For urgent cases, we recommend calling us immediately so we can assist or guide you quickly.",
    },
    {
      q: "How do I book an appointment?",
      a: "Appointments can be booked through our website using the booking form, by calling us directly, or via WhatsApp. Once booked, our team confirms the appointment before the visit.",
    },
    {
      q: "Which areas do you serve?",
      a: "We currently provide services across allover NCR. Availability may vary by location, so please contact us for confirmation before booking.",
    },
    {
      q: "Are your veterinarians qualified and experienced?",
      a: "Absolutely. Our veterinarians are trained, experienced, and licensed professionals who follow ethical medical practices and prioritize animal safety and well-being.",
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
          We understand that pet owners often have concerns before booking
          veterinary services. Here are answers to some of the most common
          questions to help you make informed decisions with confidence.
        </p>

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

