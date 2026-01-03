"use client";

export default function PetCareTips() {
  return (
    <section style={section}>
      <div className="container">
        <h2 style={title}>Essential Pet Care Tips 🐾</h2>

        <p style={intro}>
          Caring for pets is not just about feeding them — it’s about ensuring
          their physical health, emotional well-being, and long-term safety.
          These essential tips help pet parents prevent common health issues,
          detect problems early, and give their pets a happy, stress-free life.
        </p>

        <div style={grid}>
          <div style={card}>
            <h3 style={cardTitle}>🥗 Balanced Nutrition</h3>
            <p style={cardText}>
              A healthy diet is the foundation of a pet’s life. Always provide
              age-appropriate, species-specific food. Avoid feeding pets human
              leftovers, chocolates, onions, grapes, or bones, as they can be
              toxic. Fresh water must be available at all times.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>💉 Regular Vaccination</h3>
            <p style={cardText}>
              Vaccinations protect pets from deadly diseases like rabies,
              distemper, and parvovirus. Follow a proper vaccination schedule
              recommended by a veterinarian and keep records updated to ensure
              lifelong protection.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>🩺 Routine Health Checkups</h3>
            <p style={cardText}>
              Regular vet visits help detect issues before they become serious.
              Annual checkups, deworming, flea control, and dental care are
              essential for maintaining overall health and preventing chronic
              problems.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>✂️ Grooming & Hygiene</h3>
            <p style={cardText}>
              Grooming keeps pets clean, comfortable, and infection-free.
              Regular bathing, nail trimming, ear cleaning, and coat brushing
              reduce skin problems and improve your pet’s comfort and hygiene.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>🏃 Exercise & Mental Stimulation</h3>
            <p style={cardText}>
              Pets need daily exercise to stay fit and mentally healthy.
              Regular walks, playtime, and interaction prevent obesity,
              anxiety, destructive behavior, and boredom-related stress.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>🚑 Emergency Awareness</h3>
            <p style={cardText}>
              Know emergency warning signs such as sudden vomiting, seizures,
              breathing difficulty, or injuries. Immediate veterinary attention
              during emergencies can save lives and prevent complications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const section = {
  padding: "90px 24px",
};

const title = {
  fontSize: "40px",
  fontWeight: "700",
  textAlign: "center",
  color: "#2c237d",
  marginBottom: "20px",
};

const intro = {
  textAlign: "center",
  fontSize: "18px",
  color: "#4b5563",
  maxWidth: "900px",
  margin: "0 auto 60px",
  lineHeight: "1.8",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "28px",
};

const card = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "20px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
};

const cardTitle = {
  fontSize: "22px",
  fontWeight: "600",
  color: "#2c237d",
  marginBottom: "12px",
};

const cardText = {
  fontSize: "16px",
  color: "#4b5563",
  lineHeight: "1.7",
};

