"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceLayout from "@/components/ServiceLayout";

export default function Page() {
  return (
    <>
      <Navbar />

      <ServiceLayout title="Emergency Pet Services">
        <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#444" }}>
          We provide <b>urgent emergency support for pets</b> during critical
          situations such as accidents, sudden illness, breathing issues,
          poisoning, or severe weakness. Our goal is to connect you with
          immediate veterinary assistance as quickly as possible.
        </p>

        <ul style={{ marginTop: "16px" }}>
          <li>✔ Emergency vet consultation (subject to availability)</li>
          <li>✔ Guidance for first aid & immediate care</li>
          <li>✔ Support for critical conditions</li>
          <li>✔ Fast response coordination</li>
          <li>✔ Trusted veterinary network</li>
          <li>✔ <b>Service available across all NCR areas</b></li>
        </ul>

        <p style={{ marginTop: "14px", fontSize: "14px", color: "#555" }}>
          <b>Coverage:</b> Delhi, Noida, Greater Noida, Ghaziabad, Faridabad &
          Gurugram (All NCR Locations)
        </p>

        <a href="tel:+918800813462" style={btn}>
          📞 Call Emergency Vet Now
        </a>

        <p style={{ marginTop: "14px", fontSize: "13px", color: "#777" }}>
          <b>Note:</b> Emergency services are provided based on availability and
          location. Immediate hospital visit may be advised depending on the
          condition of the pet.
        </p>
      </ServiceLayout>

      <Footer />
    </>
  );
}

const btn = {
  display: "inline-block",
  background: "#dc2626",
  color: "#fff",
  padding: "14px 28px",
  borderRadius: 8,
  textDecoration: "none",
  marginTop: "15px"
};
