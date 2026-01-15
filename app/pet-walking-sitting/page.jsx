"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceLayout from "@/components/ServiceLayout";

export default function Page() {
  return (
    <>
      <Navbar />

      <ServiceLayout title="Pet Walking & Sitting">
        <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#444" }}>
          Our pet walking & sitting service is designed for <b>busy and working
          pet parents</b>. We ensure your pet gets timely walks, proper feeding,
          and companionship even when you’re not at home.
        </p>

        <ul style={{ marginTop: "16px" }}>
          <li>✔ One-on-one personal handling</li>
          <li>✔ Timely feeding & fresh water</li>
          <li>✔ Daily walks & play time</li>
          <li>✔ Hygiene & basic cleanliness care</li>
          <li>✔ Stress-free companionship</li>
          <li>✔ Updates via WhatsApp (photos/videos)</li>
        </ul>

        <h3 style={{ marginTop: "28px" }}>🚶 Walking & Sitting Charges</h3>

        <ul>
          <li><b>One Time Walk</b> – ₹100</li>
          <li><b>Both Time Walk (Morning + Evening)</b> – ₹199</li>
          <li><b>Monthly Walking Package</b> – ₹5,500</li>
        </ul>

        <p style={{ marginTop: "16px", fontSize: "14px", color: "#555" }}>
          <b>Note:</b> Walking timings and routine can be customized as per your
          pet’s needs. Sitting service includes feeding, companionship, and
          basic supervision.
        </p>
      </ServiceLayout>

      <Footer />
    </>
  );
}
