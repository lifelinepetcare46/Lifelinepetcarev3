"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import BookingModal from "@/components/BookingModal";
import { useState } from "react";

export default function ServicesPage() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");

  const openBooking = (serviceName) => {
    setService(serviceName);
    setOpen(true);
  };

  return (
    <>
      <Navbar onBook={() => openBooking("General Consultation")} />

      <Services onBook={openBooking} />

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
