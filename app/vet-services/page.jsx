"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { useState } from "react";

export default function VetServicesPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar onBook={() => setOpen(true)} />

      <section className="container" style={{ padding: "80px 24px" }}>
        <h1 style={title}>Veterinary Home Visit Services</h1>

        <div style={offer}>🎉 FLAT 30% OFF on First Visit</div>

        <p style={desc}>
          Lifeline Pet Care provides experienced veterinary doctors for home
          visits across Delhi NCR. We handle consultations, illness checks,
          follow-ups and basic treatments in a stress-free home environment.
        </p>

        <ul style={list}>
          <li>✔ General health checkup</li>
          <li>✔ Fever, vomiting, diarrhea assessment</li>
          <li>✔ Skin & ear issues</li>
          <li>✔ Senior pet care</li>
          <li>✔ Puppy & kitten consultation</li>
        </ul>

        <div style={priceBox}>
          <strong>₹449 Vet Visit</strong>
          <p style={note}>
            Includes visiting charges, health checkup & consultation.<br />
            <b>Medicines charged separately.</b>
          </p>
        </div>

        <button style={btn} onClick={() => setOpen(true)}>
          Book Vet Home Visit
        </button>
      </section>

      <Footer />

      {open && (
        <BookingModal
          service="Veterinary Home Visit"
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

/* ===== styles ===== */
const title = { fontSize: "42px", color: "#2c237d", marginBottom: 12 };
const desc = { fontSize: "18px", lineHeight: 1.7, marginBottom: 24 };
const list = { lineHeight: 2, marginBottom: 24 };
const offer = {
  background: "#dcfce7",
  color: "#166534",
  padding: "10px 14px",
  display: "inline-block",
  borderRadius: 8,
  marginBottom: 20,
  fontWeight: 600,
};
const priceBox = {
  background: "#f5f7ff",
  padding: 16,
  borderRadius: 12,
  marginBottom: 20,
};
const note = { fontSize: "14px", color: "#374151" };
const btn = {
  background: "#2c237d",
  color: "#fff",
  padding: "14px 28px",
  borderRadius: 8,
  fontSize: 16,
  border: "none",
};
