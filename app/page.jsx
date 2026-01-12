"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";

/* ✅ STATIC SECTIONS (SAFE) */
import PetCareTips from "../components/PetCareTips";
import FAQs from "../components/FAQs";

/* ✅ CLIENT-ONLY COMPONENTS (SSR OFF – VERY IMPORTANT) */
const GalleryStories = dynamic(
  () => import("../components/GalleryStories"),
  { ssr: false }
);

const SeasonalBanner = dynamic(
  () => import("@/components/SeasonalBanner"),
  { ssr: false }
);

const SeasonalPopup = dynamic(
  () => import("@/components/SeasonalPopup"),
  { ssr: false }
);

export default function Home() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");

  /* ✅ ADS MODE (SAFE DETECTION) */
  const searchParams = useSearchParams();
  const [isAds, setIsAds] = useState(false);

  useEffect(() => {
    if (!searchParams) return;
    setIsAds(searchParams.get("ads") === "1");
  }, [searchParams]);

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

      {/* HERO (ADS MODE SAFE) */}
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

      {/* ✅ SEASONAL POPUP (PAGE LOAD PER SHOW) */}
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
