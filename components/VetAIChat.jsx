"use client";
import { useState, useEffect } from "react";

/* ✅ EXISTING */
import { detectEmergency } from "@/lib/emergencyDetector";

export default function VetAIChat({ onClose }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    species: "",
    age: "",
    breed: "",
    symptoms: "",
  });

  /* ✅ EXISTING */
  const [isEmergency, setIsEmergency] = useState(false);

  /* ✅ AI STATE */
  const [aiReply, setAiReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false); // 🛑 prevent double call

  const questions = [
    "Is your pet a Dog or a Cat?",
    "What is your pet’s age?",
    "What is your pet’s breed?",
    "Please describe the symptoms you are noticing.",
  ];

  function handleAnswer(value) {
    const keys = ["species", "age", "breed", "symptoms"];
    const updated = { ...answers, [keys[step]]: value };
    setAnswers(updated);

    /* ✅ Emergency detection only on symptoms */
    if (keys[step] === "symptoms") {
      const emergencyFound = detectEmergency(value);
      setIsEmergency(emergencyFound);
    }

    setStep((prev) => prev + 1);
  }

  /* ===========================
     ✅ HUGGING FACE AI CALL
  ============================ */
  useEffect(() => {
    if (step === questions.length && !hasFetched) {
      setHasFetched(true);
      setLoading(true);

      fetch("/api/vet-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      })
        .then((res) => res.json())
        .then((data) => {
          setAiReply(
            data.reply ||
              "I understand your concern. These symptoms may need professional attention."
          );
          setLoading(false);
        })
        .catch(() => {
          setAiReply(
            "I’m unable to analyze right now. Please contact Lifeline Pet Care for proper guidance."
          );
          setLoading(false);
        });
    }
  }, [step, answers, hasFetched]);

  return (
    <div style={box}>
      <div style={header}>
        <strong>Vetrix AI 🩺</strong>
        <span onClick={onClose} style={{ cursor: "pointer" }}>
          ✕
        </span>
      </div>

      <div style={body}>
        {step < questions.length ? (
          <>
            <p style={question}>{questions[step]}</p>
            <input
              placeholder="Type here and press Enter..."
              style={input}
              disabled={loading}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  handleAnswer(e.target.value);
                  e.target.value = "";
                }
              }}
            />
          </>
        ) : (
          <>
            {/* 🚨 EMERGENCY ALERT */}
            {isEmergency && (
              <div style={emergencyBox}>
                🚨 These symptoms may be urgent.
                <br />
                Please contact a veterinarian immediately.
              </div>
            )}

           {/* ✅ AI RESPONSE */}
{loading ? (
  <p style={answer}>Analyzing your pet’s symptoms…</p>
) : isEmergency ? (
  <>
    <p style={{ ...answer, fontWeight: "600", color: "#991b1b" }}>
      ⚠️ Yeh symptoms emergency ki taraf indicate kar sakte hain.
    </p>

    <p style={answer}>
      Aise cases me delay dangerous ho sakta hai.  
      Please wait na karein.
    </p>

    <p style={cta}>
      👉 Abhi turant vet se baat karein.
    </p>
  </>
) : (
  aiReply.split("\n").map((line, i) => (
    <p key={i} style={answer}>{line}</p>
  ))
)}


            <p style={cta}>
              This is not a diagnosis. For proper treatment, please book a vet
              visit.
            </p>

            <a href="tel:+918800813462" style={callBtn}>
              📞 Call Vet Now
            </a>

            <a
              href="https://wa.me/918800813462"
              target="_blank"
              style={waBtn}
            >
              💬 WhatsApp Booking
            </a>
          </>
        )}
      </div>
    </div>
  );
}

/* ===== styles (UNCHANGED) ===== */

const box = {
  position: "fixed",
  bottom: "160px",
  right: "20px",
  width: "300px",
  background: "#fff",
  borderRadius: "18px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  zIndex: 9999,
};

const header = {
  padding: "14px 16px",
  background: "#2c237d",
  color: "#fff",
  borderRadius: "18px 18px 0 0",
  display: "flex",
  justifyContent: "space-between",
};

const body = {
  padding: "16px",
};

const question = {
  fontSize: "15px",
  marginBottom: "10px",
};

const input = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const answer = {
  fontSize: "14px",
  marginBottom: "10px",
  color: "#374151",
};

const cta = {
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "12px",
};

const callBtn = {
  display: "block",
  textAlign: "center",
  padding: "10px",
  background: "#2c237d",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  marginBottom: "8px",
};

const waBtn = {
  display: "block",
  textAlign: "center",
  padding: "10px",
  background: "#22c55e",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
};

const emergencyBox = {
  background: "#fee2e2",
  color: "#991b1b",
  padding: "10px",
  borderRadius: "8px",
  fontSize: "13px",
  fontWeight: "600",
  marginBottom: "12px",
};
