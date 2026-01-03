"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      {/* ✅ SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LegalPage", "PrivacyPolicy"],
            "name": "Privacy Policy - Lifeline Pet Care",
            "url": "https://www.lifelinepetcare.in/privacy",
            "publisher": {
              "@type": "Organization",
              "name": "Lifeline Pet Care",
              "url": "https://www.lifelinepetcare.in",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.lifelinepetcare.in/logo3.png",
              },
            },
            "inLanguage": "en-IN",
            "dateModified": new Date().toISOString(),
            "description":
              "Privacy Policy of Lifeline Pet Care explaining how personal information is collected, used, and protected for veterinary, vaccination, grooming, and home visit services in India.",
          }),
        }}
      />

      <section
        className="container"
        style={{
          padding: "90px 24px",
          maxWidth: "900px",
        }}
      >
        <h1 style={title}>Privacy Policy</h1>

        <p style={muted}>
          Last Updated: {new Date().toLocaleDateString("en-IN")}
        </p>

        <p style={para}>
          Life Line Pet Care respects your privacy and is committed to protecting
          the personal information of pet owners who visit our website or use
          our veterinary, vaccination, grooming, and home visit services. This
          Privacy Policy explains how we collect, use, safeguard, and disclose
          information when you interact with our platform through our website,
          phone, WhatsApp, or in-person consultations.
        </p>

        <h3 style={heading}>1. Information We Collect</h3>
        <p style={para}>
          We may collect personal and non-personal information when you
          voluntarily provide it to us. This includes your name, phone number,
          email address, pet details, service preferences, medical history
          shared during consultation, and appointment-related information.
        </p>
        <ul style={list}>
          <li>Booking appointments through our website or phone</li>
          <li>Contacting us via WhatsApp, email, or social platforms</li>
          <li>Requesting emergency or home visit services</li>
        </ul>
        <p style={para}>
          We do not collect or store sensitive financial information unless
          explicitly required for future secure payment integrations.
        </p>

        <h3 style={heading}>2. How We Use Your Information</h3>
        <p style={para}>
          Information collected is used strictly for legitimate operational and
          service-related purposes, including:
        </p>
        <ul style={list}>
          <li>Managing and confirming veterinary appointments</li>
          <li>Providing vaccination, grooming, and medical services</li>
          <li>Emergency communication and follow-up care</li>
          <li>Improving service quality and user experience</li>
          <li>Internal record keeping and legal compliance</li>
        </ul>
        <p style={para}>
          We do not sell, misuse, or exploit your personal information for
          unrelated marketing or spam.
        </p>

        <h3 style={heading}>3. Veterinary & Medical Data Disclaimer</h3>
        <p style={para}>
          Any medical or health-related information shared about your pet is
          used solely for providing accurate veterinary care. Such data is
          handled confidentially and is never shared without consent unless
          required by law or critical medical emergencies.
        </p>

        <h3 style={heading}>4. Cookies & Analytics</h3>
        <p style={para}>
          Our website may use cookies and analytics tools such as Google
          Analytics to understand visitor behavior, improve performance, and
          optimize marketing campaigns. These tools collect anonymized data and
          do not personally identify users.
        </p>

        <h3 style={heading}>5. Data Protection & Security</h3>
        <p style={para}>
          We implement reasonable technical and administrative safeguards to
          protect your information from unauthorized access, misuse, or loss.
          However, no digital platform is completely secure, and users
          acknowledge inherent online risks.
        </p>

        <h3 style={heading}>6. Data Sharing & Disclosure</h3>
        <p style={para}>
          Life Line Pet Care does not sell, rent, or trade your personal data.
          Information may only be shared to comply with legal obligations, to
          protect safety, or with trusted communication tools required to
          operate our services.
        </p>

        <h3 style={heading}>7. Third-Party Platforms</h3>
        <p style={para}>
          Our website may contain links to third-party services such as
          WhatsApp, Instagram, or Google platforms. We are not responsible for
          the privacy practices or content of these external websites.
        </p>

        <h3 style={heading}>8. User Rights</h3>
        <p style={para}>
          You have the right to request access, correction, or deletion of your
          personal data at any time by contacting us directly.
        </p>

        <h3 style={heading}>9. Policy Updates</h3>
        <p style={para}>
          We reserve the right to update this Privacy Policy without prior
          notice. Continued use of our website or services implies acceptance
          of the updated policy.
        </p>

        <h3 style={heading}>10. Contact Information</h3>
        <p style={para}>
          For any privacy-related concerns or questions, you may contact us at:
        </p>

        <p style={contact}>
          📧 lifelinepetcares@gmail.com <br />
          📞 +91 88008 13462
        </p>
      </section>

      <Footer />
    </>
  );
}

/* ================= STYLES ================= */

const title = {
  fontSize: "42px",
  fontWeight: "700",
  color: "#2c237d",
  marginBottom: "16px",
};

const para = {
  fontSize: "17px",
  lineHeight: "1.8",
  color: "#374151",
  marginBottom: "18px",
};

const heading = {
  fontSize: "22px",
  fontWeight: "600",
  color: "#2c237d",
  marginTop: "32px",
  marginBottom: "12px",
};

const muted = {
  color: "#6b7280",
  fontSize: "14px",
  marginBottom: "30px",
};

const list = {
  paddingLeft: "20px",
  marginBottom: "18px",
  color: "#374151",
  lineHeight: "1.7",
};

const contact = {
  marginTop: "10px",
  fontSize: "17px",
  fontWeight: "500",
  color: "#1f2937",
};
