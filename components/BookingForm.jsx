"use client";
import { useState, useEffect } from "react";
import styles from "../styles/booking.module.css";

export default function BookingForm({
  selectedService = "",
  servicesData = {},
  category,
  setCategory,
  subService,
  setSubService,
}) {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  /* ✅ HERO / SERVICE CLICK → FORM SYNC */
  useEffect(() => {
    if (selectedService && typeof setCategory === "function") {
      setCategory(selectedService);
      if (typeof setSubService === "function") {
        setSubService("");
      }
    }
  }, [selectedService, setCategory, setSubService]);

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("");
    setSuccess(false);

    /* ✅ HARD BUT CORRECT VALIDATION */
    if (!category) {
      setMsg("Please select a service");
      return;
    }

    const hasSubService = Array.isArray(servicesData[category]);

    if (hasSubService && !subService) {
      setMsg("Please select service type");
      return;
    }

    setLoading(true);

    const data = new FormData(e.target);

    const formData = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      service: category,
      subService: hasSubService ? subService : "",
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

        /* RESET STATES */
        if (typeof setSubService === "function") setSubService("");
        if (typeof setCategory === "function") setCategory("");

        /* GTM EVENT */
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "booking_success" });
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

      <p style={{ fontSize: "14px", marginBottom: "12px", color: "#374151" }}>
        🔥 <strong>30% OFF</strong> on first booking <br />
        🩺 Vet visit at <strong>₹449</strong> (includes visit + consultation) <br />
        💊 Medicines/tests charged separately
      </p>

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
          <select
            name="service"
            value={category || ""}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubService("");
            }}
          >
            <option value="" disabled hidden></option>
            {Object.keys(servicesData).map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <label>Service</label>
        </div>

        {/* SUB SERVICE — ONLY WHEN REQUIRED */}
        {Array.isArray(servicesData[category]) && (
          <div className={styles.field}>
            <select
              value={subService || ""}
              onChange={(e) => setSubService(e.target.value)}
            >
              <option value="" disabled hidden></option>
              {servicesData[category].map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name} — ₹{item.price}
                </option>
              ))}
            </select>
            <label>Service Type</label>
          </div>
        )}

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
        <div className={success ? styles.successAnim : styles.error}>
          {success ? (
            <>
              <h4>Booking Confirmed 🎉</h4>
              <p>Our team will contact you shortly.</p>
            </>
          ) : (
            msg
          )}
        </div>
      )}
    </section>
  );
}