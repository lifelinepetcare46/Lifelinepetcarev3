"use client";
import { useState } from "react";

export default function SeasonalTips() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  const month = new Date().getMonth();

  const message =
    month >= 2 && month <= 5
      ? "☀️ Summer Alert: Heatstroke risk in pets. Keep water available and avoid hot walks."
      : month >= 6 && month <= 8
      ? "🌧️ Monsoon Alert: Tick & fungal infection risk. Regular checks recommended."
      : "❄️ Winter Alert: Keep pets warm and watch for joint stiffness.";

  return (
    <div style={banner}>
      <span>{message}</span>
      <button onClick={() => setShow(false)} style={close}>✕</button>
    </div>
  );
}

const banner = {
  position: "fixed",
  bottom: "0",
  width: "100%",
  background: "#2c237d",
  color: "#fff",
  padding: "12px 16px",
  display: "flex",
  justifyContent: "space-between",
  zIndex: 9998,
};

const close = {
  background: "none",
  border: "none",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
};
