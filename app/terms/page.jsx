export const metadata = {
  title: "Terms & Conditions | Life Line Pet Care",
};

export default function TermsPage() {
  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "auto",
        lineHeight: "1.7",
      }}
    >
      <h1>Terms & Conditions</h1>

      <p>
        <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-IN")}
      </p>

      <p>
        Welcome to <strong>Life Line Pet Care</strong>. By accessing or using our
        website, booking services, or contacting us through any medium (website,
        phone, email, or social media), you agree to comply with and be bound by
        the following Terms & Conditions. Please read them carefully before using
        our services.
      </p>

      <h3>1. About Life Line Pet Care</h3>
      <p>
        Life Line Pet Care provides pet-related services including but not
        limited to veterinary consultations, pet grooming, vaccination
        assistance, general pet care guidance, and appointment booking services.
        Our goal is to ensure the well-being, safety, and comfort of pets while
        offering reliable support to pet owners.
      </p>

      <h3>2. Acceptance of Terms</h3>
      <p>
        By using our website or booking any service, you acknowledge that you
        have read, understood, and agreed to these Terms & Conditions. If you do
        not agree with any part of these terms, you should discontinue use of our
        website and services immediately.
      </p>

      <h3>3. Services & Appointments</h3>
      <ul>
        <li>All services are provided based on availability and prior appointment confirmation.</li>
        <li>
          Appointment booking through the website or other channels does not
          guarantee service until confirmation is provided by Life Line Pet Care.
        </li>
        <li>
          We reserve the right to reschedule, cancel, or refuse any appointment
          in case of emergencies, staff unavailability, incorrect information,
          or safety concerns.
        </li>
        <li>
          Services provided are for animal care and assistance purposes only and
          do not replace emergency veterinary treatment unless explicitly stated.
        </li>
      </ul>

      <h3>4. User Responsibilities</h3>
      <ul>
        <li>Provide accurate and complete information while booking appointments.</li>
        <li>
          Ensure that your pet is handled safely and does not pose a threat to
          staff, other animals, or property.
        </li>
        <li>
          Inform us in advance about any known medical conditions, aggressive
          behavior, allergies, or special care requirements of your pet.
        </li>
        <li>
          Follow the instructions and guidance provided by our staff during
          service delivery.
        </li>
      </ul>

      <h3>5. Payments & Charges</h3>
      <ul>
        <li>Service charges, if applicable, will be communicated clearly.</li>
        <li>
          Any future payment integrations (UPI, cards, online gateways) will
          follow secure and standard payment practices.
        </li>
        <li>
          Life Line Pet Care reserves the right to modify service pricing at any
          time without prior notice.
        </li>
        <li>
          No refunds will be provided once a service has been delivered, except
          in cases of service failure from our end.
        </li>
      </ul>

      <h3>6. Cancellations & No-Show Policy</h3>
      <ul>
        <li>Users are requested to inform us in advance for cancellations.</li>
        <li>
          Repeated no-shows or last-minute cancellations may result in refusal
          of future bookings.
        </li>
        <li>
          Life Line Pet Care holds the right to cancel appointments if false or
          misleading information is provided.
        </li>
      </ul>

      <h3>7. Limitation of Liability</h3>
      <p>
        Life Line Pet Care shall not be held responsible for any injury, illness,
        loss, or damage caused due to unforeseen circumstances, natural behavior
        of animals, or incomplete information provided by the pet owner.
      </p>
      <p>
        While we take all reasonable safety measures, animal behavior can be
        unpredictable, and users acknowledge this inherent risk.
      </p>
      <p>
        Our liability, if any, shall be limited strictly to the service fee paid.
      </p>

      <h3>8. Website Usage & Content</h3>
      <p>
        All content on this website, including text, logos, images, and design,
        is the intellectual property of Life Line Pet Care. Unauthorized copying,
        modification, distribution, or commercial use is strictly prohibited.
      </p>

      <h3>9. Privacy & Data Protection</h3>
      <p>
        Personal information collected through the website is used only for
        service-related communication. We do not sell, rent, or misuse user
        data. More details are available in our Privacy Policy.
      </p>

      <h3>10. Third-Party Links</h3>
      <p>
        Our website may contain links to third-party platforms. Life Line Pet
        Care is not responsible for the content or practices of such websites.
      </p>

      <h3>11. Changes to Terms</h3>
      <p>
        Life Line Pet Care reserves the right to update or modify these Terms &
        Conditions at any time without prior notice. Continued use implies
        acceptance of updated terms.
      </p>

      <h3>12. Governing Law</h3>
      <p>
        These Terms & Conditions shall be governed and interpreted in accordance
        with the laws of India. Any disputes shall be subject to local
        jurisdiction.
      </p>

      <h3>13. Contact Information</h3>
      <p>
        For any questions or clarifications, contact us at:
        <br />
        📧 <strong>lifelinepetcares@gmail.com</strong>
      </p>
    </main>
  );
}
