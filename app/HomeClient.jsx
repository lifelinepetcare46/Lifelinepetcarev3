"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import GalleryStories from "../components/GalleryStories";
import PetCareTips from "../components/PetCareTips";
import FAQs from "../components/FAQs";
import SeasonalBanner from "../components/SeasonalBanner";
import SeasonalPopup from "../components/SeasonalPopup";

export default function HomeClient() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");

  const searchParams = useSearchParams();
  const isAds = searchParams.get("ads") === "1";

  const openBooking = (serviceName) => {
    setService(serviceName);
    setOpen(true);
  };

  return (
    <>
      <Navbar onBook={() => openBooking("General Consultation")} />

      <SeasonalBanner onBook={openBooking} />

      <Hero onBook={openBooking} ads={isAds} />

      <About />

      <PetCareTips />

      <FAQs />

      <GalleryStories />

      <Services onBook={openBooking} />

      <Contact />

      <Footer />

      <SeasonalPopup onBook={openBooking} />

      {open && (
        <BookingModal
          service={service}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
