"use client";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");

  const openBooking = (serviceName) => {
    setService(serviceName);
    setOpen(true);
  };

  return (
    <>
      <Navbar onBook={() => openBooking("General Consultation")} />
      <Hero onBook={() => openBooking("General Consultation")} />
      <About />
      <Services onBook={openBooking} />
      <Contact />
      <Footer />

      {open && (
        <BookingModal
          service={service}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
