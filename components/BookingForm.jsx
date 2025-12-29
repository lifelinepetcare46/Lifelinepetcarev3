"use client";
import { useState } from "react";
import styles from "../styles/booking.module.css";

export default function BookingForm({ selectedService = "" }) {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    setSuccess(false);

    const data = new FormData(e.target);

    const formData = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      service: data.get("service"),
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setMsg("Booking submitted successfully!");
        e.target.reset();

        // ✅ GOOGLE ADS / GTM TRACKING (EXACT PLACE)
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "booking_success",
          });
        }

      } else {
        setMsg("Something went wrong. Please try again.");
      }
    } catch (err) {
      setMsg("Network error. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section className={styles.form}>
      <h3>Book an Appointment</h3>

      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <div className={styles.field}>
          <input name="name" type="text" required placeholder=" " />
          <label>Your Name</label>
        </div>

        {/* PHONE */}
        <div className={styles.field}>
          <input name="phone" type="tel" required placeholder=" " />
          <label>Phone Number</label>
        </div>

        {/* EMAIL */}
        <div className={styles.field}>
          <input name="email" type="email" required placeholder=" " />
          <label>Email Address</label>
        </div>

        {/* SERVICE */}
        <div className={styles.field}>
          <select name="service" required defaultValue={selectedService || ""}>
            <option value="" disabled hidden></option>
            <option value="Veterinary">Veterinary</option>
            <option value="Vaccination">Vaccination</option>
            <option value="Grooming">Grooming</option>
          </select>
          <label>Service</label>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className={styles.submitBtn}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* MESSAGE */}
      {msg && (
        <div className={success ? styles.success : styles.error}>
          {msg}
        </div>
      )}
    </section>
  );
}
