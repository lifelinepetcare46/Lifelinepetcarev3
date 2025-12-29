"use client";

export default function Hero({ onBook }) {
  return (
    <section
      style={{
        padding: "90px 40px",
        background: "linear-gradient(135deg,#eef2ff,#f6f7ff)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: "1 1 520px" }}>
          <h1
            style={{
              fontSize: "48px",
              lineHeight: "1.2",
              color: "#2c237d",
              fontWeight: "700",
            }}
          >
            Compassionate Care for Your
            <br />
            Beloved Pets 🐶🐱
          </h1>

          <p
            style={{
              marginTop: "18px",
              fontSize: "18px",
              color: "#4b5563",
              lineHeight: "1.7",
              maxWidth: "480px",
            }}
          >
            Lifeline Pet Care provides trusted veterinary services,
            vaccinations, and grooming — right at your doorstep.
          </p>

          {/* CTA BUTTONS */}
          <div
            style={{
              marginTop: "28px",
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => onBook("General Consultation")}
              style={{
                background: "#2c237d",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
              }}
            >
              Book Appointment
            </button>

            <a   
            href="tel:+918800813462"
            onClick={() => {
                 if (typeof window !== "undefined" && window.gtag_report_conversion) {
                  window.gtag_report_conversion();
                }
              }}
               className="callBtn"
              
              style={{
                background: "#ffffff",
                color: "#2c237d",
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: "600",
                border: "2px solid #2c237d",
                textDecoration: "none",
              }}
            >
              Call Now
            </a>
          </div>

          {/* TRUST BADGES */}
          <div
            style={{
              marginTop: "26px",
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              fontSize: "14px",
              color: "#374151",
            }}
          >
            <span>✅ Experienced Vets</span>
            <span>✅ Home Visit</span>
            <span>✅ 24×7 Support</span>
          </div>
        </div>

        {/* RIGHT LOGO AREA (RED MARKED ZONE) */}
        <div
          style={{
            flex: "1 1 420px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              padding: "40px",
              borderRadius: "28px",
              boxShadow: "0 30px 70px rgba(0,0,0,0.12)",
              animation: "float 4s ease-in-out infinite",
            }}
          >
            <img
             src="/logo3.png" 
              alt="Lifeline Pet Care Logo"
              style={{
                width: "260px",
                maxWidth: "100%",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      {/* FLOAT ANIMATION */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
