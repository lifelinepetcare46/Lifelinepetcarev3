"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ServiceLayout from "@/components/ServiceLayout";
import { OfferBadge, BookBtn } from "@/components/ServiceUI";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />

      <ServiceLayout title="Pet Grooming at Home">
        <OfferBadge />

        <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#444" }}>
          Our professional pet groomers provide <b>safe, hygienic & stress-free
          grooming services at your home</b>. We use pet-friendly products and
          ensure your pet’s comfort throughout the session.
        </p>

        <h3 style={{ marginTop: "24px" }}>🐾 Grooming Services Include</h3>

        <ul>
          <li>✔ Bath with pet-safe shampoo</li>
          <li>✔ Blow dry & coat brushing</li>
          <li>✔ Hair cutting & styling (breed specific)</li>
          <li>✔ Nail trimming</li>
          <li>✔ Ear cleaning</li>
          <li>✔ Eye cleaning</li>
          <li>✔ Paw & sanitary area cleaning</li>
          <li>✔ Tick & flea treatment (if selected)</li>
        </ul>

        <h3 style={{ marginTop: "28px" }}>💰 Grooming Prices</h3>

        <ul>
          <li><b>Full Grooming Package</b> – ₹1,799</li>
          <li><b>Mini Grooming</b> (Bath + Nail + Ear + Blow Dry) – ₹1,100</li>
          <li><b>Only Hair Cutting</b> – ₹999</li>
          <li><b>Only Bath</b> – ₹899</li>
          <li><b>Tick Medication Bath</b> – ₹500 + Normal Bath Charges</li>
        </ul>

        <p style={{ marginTop: "16px", fontSize: "14px", color: "#555" }}>
          <b>Note:</b> Grooming ke baad jis bhi area me grooming ki jaati hai,
          hum us jagah ko <b>proper clean & sanitize</b> karke hi leave karte
          hain.
        </p>

        <BookBtn label="Book Grooming Now" onClick={() => setOpen(true)} />
      </ServiceLayout>

      <Footer />

      {open && (
        <BookingModal
          service="Grooming"
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
