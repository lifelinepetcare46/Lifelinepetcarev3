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

/* ✅ NEW SECTIONS */
import PetCareTips from "../components/PetCareTips";
import FAQs from "../components/FAQs";

/* ✅ SEASONAL COMPONENTS (ADDED) */
import SeasonalBanner from "@/components/SeasonalBanner";
import SeasonalPopup from "@/components/SeasonalPopup";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");

  /* ✅ ADS QUERY DETECTION (EXISTING) */
  const searchParams = useSearchParams();
  const isAds = searchParams.get("ads") === "1";

  const openBooking = (serviceName) => {
    setService(serviceName);
    setOpen(true);
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar onBook={() => openBooking("General Consultation")} />

      {/* ✅ SEASONAL BANNER (HERO KE UPAR) */}
      <SeasonalBanner onBook={openBooking} />

      {/* HERO (ADS MODE PASSED) */}
      <Hero onBook={openBooking} ads={isAds} />

      {/* ABOUT */}
      <About />

      {/* 🐾 PET CARE TIPS */}
      <PetCareTips />

      {/* ❓ FAQs */}
      <FAQs />

      {/* 📸 GALLERY STORIES */}
      <GalleryStories />

      {/* SERVICES */}
      <Services onBook={openBooking} />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />

      {/* ✅ SEASONAL POPUP (PAGE LOAD ME EK BAAR) */}
      <SeasonalPopup onBook={openBooking} />

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
