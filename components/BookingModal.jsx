"use client";
import BookingForm from "./BookingForm";
import styles from "../styles/bookingModal.module.css";

export default function BookingModal({ onClose, service = "" }) {
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
        <BookingForm selectedService={service} />
      </div>
    </div>
  );
}
