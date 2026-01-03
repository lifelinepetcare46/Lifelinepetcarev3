import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar({ onBook }) {
  return (
    <nav className={styles.nav}>
      {/* LOGO + NAME */}
      <div className={styles.brand}>
        <Link href={"https://lifelinepetcare.in"}>
          <img
            src="/logo3.png"
            alt="Lifeline Pet Care"
            className={styles.logo}
          />
        </Link>
        <h1>Lifeline Pet Care</h1>
      </div>

      {/* LINKS */}
      <div className={styles.links}>
        {/* SERVICES → NEW PAGE */}
        <Link href="/services" target="_blank">
          Services
        </Link>

        {/* CONTACT → NEW PAGE */}
        <Link href="/contact" target="_blank">
          Contact
        </Link>

        {/* BOOK APPOINTMENT → MODAL OPEN */}
        <button
          className={styles.bookBtn}
          onClick={() => {
            if (typeof onBook === "function") {
              onBook("General Consultation");
            }
          }}
        >
          Book Appointment
        </button>
      </div>
    </nav>
  );
}
