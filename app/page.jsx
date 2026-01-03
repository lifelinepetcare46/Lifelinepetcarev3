"use client";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";

/* ✅ NEW SECTIONS */
import PetCareTips from "../components/PetCareTips";
import FAQs from "../components/FAQs";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");

  const openBooking = (serviceName) => {
    setService(serviceName);
    setOpen(true);
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar onBook={() => openBooking("General Consultation")} />

      {/* HERO */}
      <Hero onBook={() => openBooking("General Consultation")} />

      {/* ABOUT */}
      <About />

      {/* 🐾 PET CARE TIPS (NEW) */}
      <PetCareTips />

      {/* ❓ FAQs (NEW) */}
      <FAQs />

      {/* SERVICES */}
      <Services onBook={openBooking} />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />

      {/* BOOKING MODAL */}
      {open && (
        <BookingModal
          service={service}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
