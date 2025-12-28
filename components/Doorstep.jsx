export default function Doorstep() {
  return (
    <section style={{ padding: "90px 40px" }}>
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          gap: "80px",
          alignItems: "center",
          flexWrap: "wrap-reverse",   // 🔹 mobile pe text upar
        }}
      >
        {/* IMAGE BOX */}
        <div style={{ flex: "1 1 500px" }}>
          <div style={imageCard}>
            <img
              src="/left.png"   // 👈 image public folder
              alt="Pet Care at Doorstep"
              style={image}
            />
          </div>
        </div>

        {/* TEXT */}
        <div style={{ flex: "1 1 500px", paddingRight: "20px" }}>
          <h2 style={title}>Pet Care at Your Doorstep</h2>

          <p style={text}>
            Visiting clinics with anxious pets, managing busy schedules, and
            dealing with traffic can be stressful. We understand these challenges
            and aim to make pet care simple and convenient.
          </p>

          <p style={text}>
            Our mobile veterinary and grooming services bring expert care
            directly to your home — ensuring comfort for pets and peace of mind
            for pet parents.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- same styles reused ---------- */
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
