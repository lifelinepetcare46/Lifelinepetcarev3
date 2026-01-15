"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceLayout from "@/components/ServiceLayout";

export default function Page() {
  return (
    <>
      <Navbar />

      <ServiceLayout title="Pet Lab Tests at Home">
        <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#444" }}>
          We offer <b>accurate, reliable & vet-approved pet lab tests</b> with
          <b> home sample collection</b>. Samples are handled by trained
          professionals and tested at certified veterinary labs. Reports are
          shared digitally for fast diagnosis and treatment.
        </p>

        <h3 style={{ marginTop: "24px" }}>🧪 Available Pet Lab Tests</h3>

        <ul>
          <li>✔ CBC (Complete Blood Count)</li>
          <li>✔ LFT (Liver Function Test)</li>
          <li>✔ KFT (Kidney Function Test)</li>
          <li>✔ Blood Sugar (Glucose)</li>
          <li>✔ Electrolyte Panel</li>
          <li>✔ Calcium & Phosphorus</li>
          <li>✔ Thyroid Test</li>
          <li>✔ Parvo Rapid Test</li>
          <li>✔ Distemper Rapid Test</li>
          <li>✔ Tick Fever Profile</li>
          <li>✔ Urine Routine & Microscopy</li>
          <li>✔ Stool Examination</li>
        </ul>

        <h3 style={{ marginTop: "28px" }}>📦 Disease-Based Test Packages</h3>

        <ul>
          <li>
            <b>General Health Package</b> – CBC + KFT + LFT  
            <br />
            <span style={{ color: "#dc2626" }}>
              ₹3,500 (Flat 30% OFF Applied)
            </span>
          </li>

          <li>
            <b>Parvo / Viral Infection Screening</b> – CBC + Parvo Rapid Test
          </li>

          <li>
            <b>Tick Fever Profile</b> – CBC + Platelet Count + Tick Fever Test
          </li>

          <li>
            <b>Liver Care Panel</b> – LFT + Bilirubin + Enzymes
          </li>

          <li>
            <b>Kidney Care Panel</b> – KFT + Electrolytes
          </li>
        </ul>

        <h3 style={{ marginTop: "28px" }}>💰 Pricing</h3>

        <ul>
          <li>
            <b>CBC + KFT + LFT Complete Package</b> – ₹3,500  
            <span style={{ color: "#dc2626" }}> (30% OFF)</span>
          </li>
          <li><b>Individual Test</b> – ₹1,200 per test</li>
        </ul>

        <p style={{ marginTop: "16px", fontSize: "14px", color: "#555" }}>
          <b>Note:</b> Home sample collection is included.  
          Reports are shared digitally via WhatsApp / Email.  
          Doctor consultation can be done after reports if required.
        </p>
      </ServiceLayout>

      <Footer />
    </>
  );
}
