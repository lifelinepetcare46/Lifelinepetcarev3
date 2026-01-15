import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar({ onBook }) {
  return (
    <nav className={styles.nav}>
      {/* LOGO */}
      <div className={styles.brand}>
        <Link href="/">
          <img src="/logo3.png" alt="Lifeline Pet Care" className={styles.logo} />
        </Link>
        <h1>Lifeline Pet Care</h1>
      </div>

      {/* LINKS */}
      <div className={styles.links}>
        {/* SERVICES DROPDOWN */}
        <div className={styles.dropdown}>
          <span className={styles.dropTrigger}>
            Services ▾
          </span>

          <div className={styles.dropdownMenu}>
            <Link href="/vet-services">Vet Services</Link>
            <Link href="/vaccination-services">Vaccination</Link>
            <Link href="/grooming-services">Grooming</Link>
            <Link href="/lab-test-services">Lab Tests</Link>
            <Link href="/boarding-services">Boarding</Link>
            <Link href="/pet-walking-sitting">Pet Walking & Sitting</Link>
            <Link href="/emergency-services" className={styles.emergency}>
              🚨 Emergency Services
            </Link>
          </div>
        </div>

        <Link href="/contact">Contact</Link>

        <button
          className={styles.bookBtn}
          onClick={() => onBook?.("General Consultation")}
        >
          Book Appointment
        </button>
      </div>
    </nav>
  );
}
