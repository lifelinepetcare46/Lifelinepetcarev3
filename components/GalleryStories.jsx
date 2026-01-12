"use client";

export default function GalleryStories() {
  const stories = [
    {
      img: "/image1.png.jpeg",
      title: "Gentle Home Visit Care",
      text:
        "Our veterinarians provide calm and stress-free home visits, ensuring pets feel safe in their own environment. From routine checkups to minor treatments, every visit is handled with patience, empathy, and professional care.",
    },
    {
      img: "/image2.png.jpeg",
      title: "Caring for Stray Dogs",
      text:
        "We actively support stray animals by offering medical help at minimal or no cost whenever possible. Our team believes every life matters, and compassion should never depend on ownership.",
    },
    {
      img: "/image3.png.jpeg",
      title: "Vaccination & Prevention",
      text:
        "Timely vaccinations protect pets from life-threatening diseases. We maintain proper records, follow safe protocols, and educate pet parents so long-term health is never compromised.",
    },
    {
      img: "/image8.png.jpeg",
      title: "Emergency Response",
      text:
        "In urgent situations, our vets respond quickly with practical guidance and immediate support. Fast decisions and calm handling can save lives — and that’s what we train for.",
    },
    {
      img: "/image7.png.jpeg",
      title: "Hygiene & Grooming with Care",
      text:
        "Grooming is not just about looks. We focus on hygiene, comfort, and health while keeping pets relaxed throughout the process. Clean pets are healthier and happier.",
    },
    {
      img: "/image6.png.jpeg",
      title: "Serving with Honest Pricing",
      text:
        "We believe veterinary care should be accessible. Our pricing remains transparent and minimal, ensuring quality treatment without unnecessary financial burden on pet parents.",
    },
  ];

  return (
    <section
      style={{
        padding: "90px 24px",
        background: "#ffffff",
      }}
    >
      <div className="container">
        {/* SECTION HEADER */}
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "700",
            color: "#2c237d",
            textAlign: "center",
            marginBottom: "14px",
          }}
        >
          Our Work in Action 🐾
        </h2>

        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#4b5563",
            maxWidth: "820px",
            margin: "0 auto 60px",
            lineHeight: "1.8",
          }}
        >
          Every picture tells a story. From home visits to emergency care and
          helping stray animals, these moments reflect our commitment to
          compassionate, honest, and accessible veterinary services.
        </p>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "36px",
          }}
        >
          {stories.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#ffffff",
                borderRadius: "22px",
                overflow: "hidden",
                boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
              }}
            >
              {/* IMAGE */}
              <div
                style={{
                  height: "220px",
                  background: "#eef2ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                {/* Replace with real image */}
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.innerText = "📸 Image coming soon";
                  }}
                />
              </div>

              {/* CONTENT */}
              <div style={{ padding: "26px" }}>
                <h3
                  style={{
                    fontSize: "22px",
                    color: "#2c237d",
                    marginBottom: "12px",
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "16px",
                    color: "#4b5563",
                    lineHeight: "1.7",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
