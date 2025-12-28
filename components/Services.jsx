"use client";

export default function Services() {
  return (
    <section
      id="services"
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
            Our vaccinations follow proper scheduling with complete record
            maintenance to ensure long-term protection and compliance.
          </p>
        </div>

        {/* MEDICAL / VETERINARY */}
        <div style={card}>
          <h3 style={cardTitle}>Medical Treatment</h3>
          <p style={cardText}>
            Complete diagnostic and treatment services including professional
            consultations, physical examinations, laboratory testing, and
            medication management. We handle a wide range of pet health
            conditions with modern medical practices.
          </p>
        </div>

        {/* GROOMING */}
        <div style={card}>
          <h3 style={cardTitle}>Grooming Services</h3>
          <p style={cardText}>
            Professional grooming services ranging from basic bathing to
            complete styling packages. Includes nail trimming, ear cleaning,
            coat maintenance, and specialised breed-specific grooming
            techniques for comfort and hygiene.
          </p>
        </div>
      </div>

      {/* EXTRA DESCRIPTION */}
      <p style={footerText}>
        Each service is accessible through an intuitive booking interface that
        allows pet owners to understand offerings, view pricing, and book
        appointments seamlessly. Our dynamic service showcase highlights
        detailed treatment information, expected duration, and preparation
        guidelines for pet owners.
      </p>
    </section>
  );
}

/* ================= STYLES ================= */

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
