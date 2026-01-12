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
import PetCareTips from "../components/PetCareTips";
import FAQs from "../components/FAQs";

/* CLIENT ONLY */
const GalleryStories = dynamic(() => import("../components/GalleryStories"), { ssr: false });
const SeasonalBanner = dynamic(() => import("../components/SeasonalBanner"), { ssr: false });
const SeasonalPopup = dynamic(() => import("../components/SeasonalPopup"), { ssr: false });

export default function HomeClient() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");
  const [isAds, setIsAds] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    setIsAds(searchParams.get("ads") === "1");
  }, [searchParams]);

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
