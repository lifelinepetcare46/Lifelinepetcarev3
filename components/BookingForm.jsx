"use client";
import { useState, useEffect } from "react";
import styles from "../styles/booking.module.css";

/* ✅ NON-BREAKING PROPS */
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

  /* ✅ AUTO SET SERVICE FROM HERO / SERVICES (SAFE) */
  useEffect(() => {
    if (selectedService && typeof setCategory === "function") {
      setCategory(selectedService);
    }
  }, [selectedService, setCategory]);

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("");
    setSuccess(false);

    /* ✅ HARD SAFETY VALIDATION (ADDED) */
    if (!category || !subService) {
      setMsg("Please select service and service type");
      setLoading(false);
      return;
    }

    setLoading(true);

    const data = new FormData(e.target);

    const formData = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      service: category,
      subService: subService,
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

        /* ✅ RESET DROPDOWNS */
        if (typeof setSubService === "function") {
          setSubService("");
        }

        /* ✅ GTM EVENT */
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

      {/* PRICE / OFFER INFO */}
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

        {/* SERVICE CATEGORY */}
        <div className={styles.field}>
          <select
            name="service"
            required
            value={category || ""}
            onChange={(e) => {
              if (typeof setCategory === "function") {
                setCategory(e.target.value);
              }
              if (typeof setSubService === "function") {
                setSubService("");
              }
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

        {/* ✅ FIXED SUB SERVICE (ARRAY GUARD ADDED) */}
        {Array.isArray(servicesData[category]) && (
          <div className={styles.field}>
            <select
              required
              value={subService || ""}
              onChange={(e) =>
                typeof setSubService === "function" &&
                setSubService(e.target.value)
              }
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

        {/* SUBMIT */}
        <button
          type="submit"
          className={styles.submitBtn}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* SUCCESS / ERROR UI */}
      {msg && (
        <div className={success ? styles.successAnim : styles.error}>
          {success ? (
            <>
              <div className={styles.checkmarkWrapper}>
                <svg className={styles.checkmark} viewBox="0 0 52 52">
                  <circle
                    className={styles.checkmarkCircle}
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    className={styles.checkmarkCheck}
                    fill="none"
                    d="M14 27l7 7 17-17"
                  />
                </svg>
              </div>

              <h4>Booking Confirmed 🎉</h4>
              <p>
                Our team will contact you shortly to confirm your appointment.
              </p>

              <p className={styles.smallNote}>
                Need help urgently? Call or WhatsApp us anytime.
              </p>
            </>
          ) : (
            msg
          )}
        </div>
      )}
    </section>
  );
}
