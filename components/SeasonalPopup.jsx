"use client";
import { useEffect, useState } from "react";

/* =========================
   SEASON DETECTOR
========================= */
function getSeason() {
  const m = new Date().getMonth();
  if (m >= 2 && m <= 5) return "summer";
  if (m >= 6 && m <= 9) return "monsoon";
  return "winter";
}

const SEASON_DATA = {
  summer: {
    title: "☀️ Summer Pet Health Alert",
    issues: [
      "Heat stroke",
      "Dehydration",
      "Excessive panting",
      "Loss of appetite",
    ],
    emergency: "Heavy panting, collapse, vomiting",
  },
  monsoon: {
    title: "🌧️ Monsoon Pet Health Alert",
    issues: [
      "Skin infection",
      "Fungal itching",
      "Ticks & fleas",
      "Paw infection",
    ],
    emergency: "Continuous scratching, wounds, fever",
  },
  winter: {
    title: "❄️ Winter Pet Health Alert",
    issues: [
      "Joint pain",
      "Cough & cold",
      "Low immunity",
      "Lethargy",
    ],
    emergency: "Breathing difficulty, shivering",
  },
};

export default function SeasonalPopup({ onBook }) {
  const [open, setOpen] = useState(false);
  const season = getSeason();
  const data = SEASON_DATA[season];

  /* ✅ Har reload par open */
  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div style={overlay}>
      <div style={popup} className="seasonalPopup">
        <span style={close} onClick={() => setOpen(false)}>✕</span>

        <h3 style={title}>{data.title}</h3>

        <p style={text}>
          Is season me pets me commonly ye problems dekhi jaati hain:
        </p>

        <ul style={list}>
          {data.issues.map((i, idx) => (
            <li key={idx}>• {i}</li>
          ))}
        </ul>

        <div style={emergencyBox}>
          🚨 <strong>Emergency signs:</strong> {data.emergency}
        </div>

        <p style={note}>
          ⚠️ Ye diagnosis nahi hai. Early vet visit se serious problem avoid hoti
          hai.
        </p>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button
            className="btn-primary"
            onClick={() => {
              setOpen(false);
              onBook("Seasonal Health Check");
            }}
          >
            Book Seasonal Vet Check
          </button>

          <a href="tel:+918800813462" style={callBtn}>
            📞 Call Vet Now
          </a>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const popup = {
  background: "#ffffff",
  padding: "26px",
  borderRadius: "20px",
  width: "94%",
  maxWidth: "440px",
  position: "relative",
  boxShadow: "0 30px 70px rgba(0,0,0,0.3)",
};

const close = {
  position: "absolute",
  top: "12px",
  right: "14px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "600",
};

const title = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#2c237d",
  marginBottom: "12px",
};

const text = {
  fontSize: "15px",
  color: "#374151",
  marginBottom: "10px",
};

const list = {
  paddingLeft: "16px",
  fontSize: "14px",
  color: "#374151",
  marginBottom: "12px",
  lineHeight: "1.6",
};

const emergencyBox = {
  background: "#fee2e2",
  color: "#991b1b",
  padding: "10px",
  borderRadius: "10px",
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "12px",
};

const note = {
  fontSize: "13px",
  color: "#6b7280",
  marginBottom: "16px",
};

const callBtn = {
  display: "inline-block",
  padding: "12px 16px",
  background: "#ffffff",
  color: "#2c237d",
  border: "2px solid #2c237d",
  borderRadius: "10px",
  fontWeight: "600",
  textDecoration: "none",
};
