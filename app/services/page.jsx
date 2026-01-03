"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { useState } from "react";

export default function Services() {
  // ✅ SAME booking modal logic as home page
  const [showBooking, setShowBooking] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  function openBooking(service) {
    setSelectedService(service);
    setShowBooking(true);
  }

  function closeBooking() {
    setShowBooking(false);
    setSelectedService("");
  }

  return (
    <>
      {/* ✅ SAME NAVBAR AS HOME */}
      <Navbar onBook={openBooking} />

      {/* ================= SERVICES SECTION ================= */}
      <section
        id="services"
        suppressHydrationWarning
        style={{
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        {/* SECTION HEADER */}
        <h2 style={heading}>Services we're Offering</h2>

        <p style={subText}>
          Complete pet healthcare solutions designed to keep your furry companions
          healthy, happy, and protected — all delivered with compassion and
          professional care.
        </p>

        {/* SERVICES GRID */}
        <div
          style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            maxWidth: "1200px",
            marginInline: "auto",
          }}
        >
          {/* VACCINATION */}
          <div style={card}>
            <h3 style={cardTitle}>Vaccination Services</h3>
            <p style={cardText}>
              Comprehensive immunisation programmes protecting pets against
              rabies, parvovirus, distemper, and other preventable diseases.
            </p>

            <button
              className="btn-primary"
              style={{ marginTop: 20 }}
              onClick={() => openBooking("Vaccination")}
            >
              Book Vaccination
            </button>
          </div>

          {/* MEDICAL */}
          <div style={card}>
            <h3 style={cardTitle}>Medical Treatment</h3>
            <p style={cardText}>
              Professional consultations, diagnostics, laboratory testing,
              and treatment using modern veterinary practices.
            </p>

            <button
              className="btn-primary"
              style={{ marginTop: 20 }}
              onClick={() => openBooking("Veterinary")}
            >
              Book Consultation
            </button>
          </div>

          {/* GROOMING */}
          <div style={card}>
            <h3 style={cardTitle}>Grooming Services</h3>
            <p style={cardText}>
              Bathing, nail trimming, ear cleaning, coat maintenance,
              and breed-specific grooming services.
            </p>

            <button
              className="btn-primary"
              style={{ marginTop: 20 }}
              onClick={() => openBooking("Grooming")}
            >
              Book Grooming
            </button>
          </div>
        </div>

        {/* EXTRA DESCRIPTION */}
        <p style={footerText}>
          Each service is accessible through an intuitive booking interface that
          allows pet owners to understand offerings and book appointments
          seamlessly with expert veterinary support.
        </p>
      </section>

      {/* ✅ BOOKING MODAL (SAME AS HOME) */}
      {showBooking && (
        <div className="modalOverlay">
          <div className="modalBox">
            <button className="modalClose" onClick={closeBooking}>
              ✕
            </button>
            <BookingForm selectedService={selectedService} />
          </div>
        </div>
      )}

      {/* ✅ SAME FOOTER AS HOME */}
      <Footer />
    </>
  );
}

/* ================= STYLES (UNCHANGED) ================= */

const heading = {
  fontSize: "42px",
  fontWeight: "700",
  color: "#2c237d",
};

const subText = {
  marginTop: "18px",
  fontSize: "20px",
  color: "#4b5563",
  maxWidth: "820px",
  marginInline: "auto",
  lineHeight: "1.7",
};

const card = {
  background: "#ffffff",
  padding: "36px 28px",
  borderRadius: "18px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  textAlign: "center",
};

const cardTitle = {
  fontSize: "24px",
  color: "#2c237d",
  marginBottom: "16px",
  fontWeight: "600",
};

const cardText = {
  fontSize: "16px",
  color: "#4b5563",
  lineHeight: "1.7",
};

const footerText = {
  marginTop: "60px",
  fontSize: "18px",
  color: "#374151",
  maxWidth: "900px",
  marginInline: "auto",
  lineHeight: "1.8",
};