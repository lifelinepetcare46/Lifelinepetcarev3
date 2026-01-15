"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceLayout from "@/components/ServiceLayout";

export default function Page() {
  return (
    <>
      <Navbar />

      <ServiceLayout title="Pet Boarding Services">
        <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#444" }}>
          We provide <b>safe, hygienic & comfortable pet boarding services</b>
          where your pet is cared for personally in a stress-free environment.
          Your pet’s routine, hygiene, and emotional comfort are our top
          priorities.
        </p>

        <ul style={{ marginTop: "16px" }}>
          <li>✔ Personal handling & supervision</li>
          <li>✔ 3 times fresh meals (as per pet routine)</li>
          <li>✔ Clean & hygienic stay area</li>
          <li>✔ Regular walk & play time (for dogs)</li>
          <li>✔ Separate space for puppies, adults & cats</li>
          <li>✔ Basic health & behavior monitoring</li>
          <li>✔ Daily updates via WhatsApp</li>
          <li>✔ <b>2 video calls per day</b> for pet parents</li>
        </ul>

        <h3 style={{ marginTop: "28px" }}>💰 Boarding Charges (Per Day)</h3>

        <ul>
          <li><b>Adult Dog</b> – ₹849 / day</li>
          <li><b>Puppy</b> – ₹649 / day</li>
          <li><b>Adult Cat</b> – ₹500 / day</li>
          <li><b>Kitten</b> – ₹449 / day</li>
        </ul>

        <p style={{ marginTop: "16px", fontSize: "14px", color: "#555" }}>
          <b>Note:</b> Meals can be adjusted as per your pet’s diet instructions.
          Vaccination records are recommended for boarding safety.
        </p>
      </ServiceLayout>

      <Footer />
    </>
  );
}
