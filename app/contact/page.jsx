"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export default function ContactPage() {
  const [showBooking, setShowBooking] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add("show"),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="contactHero">
        <h1>Get in Touch with Lifeline Pet Care</h1>
        <p>
          Trusted veterinary care, home visits & emergency support —
          delivered with compassion.
        </p>

        <div className="heroBtns">
          <a
            href="tel:+918800813462"
            className="btn-primary"
            onClick={() =>
              window.gtag_report_conversion &&
              window.gtag_report_conversion()
            }
          >
            📞 Call Now
          </a>

          <button className="btn-whatsapp" onClick={() => setShowBooking(true)}>
            Book Appointment
          </button>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="whySection">
        <h2>Why Choose Lifeline Pet Care?</h2>

        <div className="whyGrid">
          <div className="whyCard">
            <h3>Experienced Veterinary Doctors</h3>
            <p>
              Our qualified vets bring years of hands-on experience in
              diagnostics, treatment, and emergency care — ensuring accurate
              decisions and trusted medical outcomes.
            </p>
          </div>

          <div className="whyCard">
            <h3>Doorstep Home Visits</h3>
            <p>
              Skip stressful clinic visits. We provide professional veterinary
              care directly at your home — ideal for senior, anxious, or
              recovering pets.
            </p>
          </div>

          <div className="whyCard">
            <h3>24×7 Emergency Support</h3>
            <p>
              Emergencies don’t wait. Our quick-response support ensures you can
              reach us anytime for urgent medical guidance and immediate help.
            </p>
          </div>

          <div className="whyCard">
            <h3>Compassionate & Transparent Care</h3>
            <p>
              We believe in honest communication, ethical treatment, and genuine
              compassion — keeping pet parents informed at every step.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CARD ================= */}
      <section className="contactInfo">
        <div ref={ref} className="contactCard fade-up">
          <h2>Contact Lifeline Pet Care</h2>

          <p>
            📧 <a href="mailto:lifelinepetcares@gmail.com">lifelinepetcares@gmail.com</a>
          </p>

          <p>
            📞 <a href="tel:+918800813462">+91 88008 13462</a>
          </p>

          <p>
            💬 <a href="https://wa.me/918800813462" target="_blank">
              Chat on WhatsApp
            </a>
          </p>

          <a
            href="https://www.instagram.com/_lifeline_pet_care/"
            target="_blank"
            className="instaBtn"
          >
            Follow on Instagram
          </a>
        </div>
      </section>

      {/* ================= BOOKING MODAL ================= */}
      {showBooking && (
        <div className="modalOverlay">
          <div className="modalBox">
            <button className="modalClose" onClick={() => setShowBooking(false)}>
              ✕
            </button>
            <BookingForm />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
