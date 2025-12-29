"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" style={section}>
      <div
        ref={ref}
        className="container fade-up"
        style={{
          maxWidth: "900px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2 style={title}>Contact Lifeline Pet Care</h2>

        <p style={text}>
          We’re always here to help your pets stay healthy and happy.
          Reach out to us anytime for appointments, emergency care, or
          general enquiries.
        </p>

        {/* CONTACT DETAILS */}
        <div style={card}>
          <p style={item}>
            📧 Email:
            <a href="mailto:lifelinepetcares@gmail.com" style={link}>
              lifelinepetcares@gmail.com
            </a>
          </p>

          <p style={item}>
            📞 Call:
            <a
              href="tel:+918800813462"
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ event: "call_click" });
               }}
            >
               Call Now
            </a>

          </p>

          <p style={item}>
            💬 WhatsApp:
            <a
              href="https://wa.me/918800813462"
              target="_blank"
              style={link}
            >
              Chat on WhatsApp
            </a>
          </p>

          {/* INSTAGRAM */}
          <div style={{ marginTop: "26px" }}>
            <a
              href="https://www.instagram.com/_lifeline_pet_care/"
              target="_blank"
              style={instaBtn}
            >
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const section = {
  padding: "90px 40px",
};

const title = {
  fontSize: "36px",
  color: "#2c237d",
  marginBottom: "18px",
  fontWeight: "700",
};

const text = {
  fontSize: "18px",
  color: "#4b5563",
  lineHeight: "1.8",
  marginBottom: "40px",
};

const card = {
  background: "#ffffff",
  padding: "40px 30px",
  borderRadius: "24px",
  boxShadow: "0 25px 60px rgba(0,0,0,0.08)",
};

const item = {
  fontSize: "18px",
  color: "#374151",
  marginBottom: "16px",
};

const link = {
  marginLeft: "8px",
  color: "#2c237d",
  fontWeight: "600",
  textDecoration: "none",
};

const instaBtn = {
  display: "inline-block",
  padding: "14px 28px",
  background: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)",
  color: "#ffffff",
  borderRadius: "30px",
  fontWeight: "600",
  textDecoration: "none",
};
