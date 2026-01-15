"use client";
import { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import styles from "../styles/bookingModal.module.css";

/* ✅ ALREADY IMPORTED – KEEP */
import { servicesData } from "@/lib/servicesData";

export default function BookingModal({ onClose, service = "" }) {
  /* ✅ SINGLE SOURCE OF TRUTH */
  const [category, setCategory] = useState("");
  const [subService, setSubService] = useState("");

  /* ✅ CRITICAL FIX: sync prop → state */
  useEffect(() => {
    if (service) {
      setCategory(service);
      setSubService("");
    }
  }, [service]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* CLOSE BUTTON */}
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close booking modal"
        >
          ×
        </button>

        {/* BOOKING FORM */}
        <BookingForm
          /* ✅ EXISTING */
          selectedService={service}

          /* ✅ PASSED SAFELY */
          servicesData={servicesData}
          category={category}
          setCategory={setCategory}
          subService={subService}
          setSubService={setSubService}
        />
      </div>
    </div>
  );
}