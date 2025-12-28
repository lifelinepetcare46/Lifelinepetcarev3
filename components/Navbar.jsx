import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      {/* LOGO + NAME */}
      <div className={styles.brand}>
        <img
          src="/logo3.png"
          alt="Lifeline Pet Care"
          className={styles.logo}
        />
        <h1>Lifeline Pet Care</h1>
      </div>

      {/* LINKS */}
      <div className={styles.links}>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>

        {/* BOOK APPOINTMENT BUTTON */}
        <a href="#book" className={styles.bookBtn}>
          Book Appointment
        </a>
      </div>
    </nav>
  );
}
