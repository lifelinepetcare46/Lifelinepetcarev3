"use client";
import { useState } from "react";
import VetAIChat from "./VetAIChat";

export default function VetAIIcon() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTON */}
      <div
        onClick={() => setOpen(true)}
        style={icon}
      >
        🐾
      </div>

      {/* CHAT */}
      {open && <VetAIChat onClose={() => setOpen(false)} />}
    </>
  );
}

const icon = {
  position: "fixed",
  bottom: "90px",
  right: "20px",
  width: "58px",
  height: "58px",
  borderRadius: "50%",
  background: "#2c237d",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "26px",
  cursor: "pointer",
  zIndex: 9999,
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
};
