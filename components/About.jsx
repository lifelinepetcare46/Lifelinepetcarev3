export default function About() {
  return (
    <section style={{ padding: "90px 40px" }}>
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          gap: "80px",               // 🔹 spacing increased
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* TEXT */}
        <div style={{ flex: "1 1 500px", paddingLeft: "20px" }}>
          <h2 style={title}>About Lifeline Pet Care</h2>

          <p style={text}>
            At Lifeline Pet Care, we are passionately dedicated to nurturing the
            health and happiness of your beloved companions. Our mission is to
            provide compassionate, reliable, and professional pet healthcare
            services.
          </p>

          <p style={text}>
            With experienced veterinarians and modern medical practices, we
            ensure personalized treatment for every pet — delivered with care,
            trust, and empathy right at your doorstep.
          </p>
        </div>

        {/* IMAGE BOX */}
        <div style={{ flex: "1 1 500px" }}>
          <div style={imageCard}>
            <img
              src="/right.png"   // 👈 image public folder me rakho
              alt="About Lifeline Pet Care"
              style={image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- styles ---------- */
const title = {
  fontSize: "36px",
  color: "#2c237d",
  marginBottom: "18px",
};

const text = {
  fontSize: "18px",
  color: "#4b5563",
  lineHeight: "1.8",
  marginBottom: "16px",
};

const imageCard = {
  background: "#ffffff",
  padding: "18px",
  borderRadius: "26px",
  boxShadow: "0 30px 70px rgba(0,0,0,0.08)",
};

const image = {
  width: "100%",
  borderRadius: "20px",
};
