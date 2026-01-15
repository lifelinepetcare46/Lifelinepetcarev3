"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ServiceLayout from "@/components/ServiceLayout";
import { OfferBadge, PriceNote, BookBtn } from "@/components/ServiceUI";
import "./vaccination.css";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />

      <ServiceLayout title="Pet Vaccination at Home">
        <OfferBadge text="First Visit Flat 30% OFF on Packages" />

        <p className="service-intro">
          We provide <strong>safe, genuine & branded pet vaccines</strong> at
          your home by certified veterinarians. All vaccines are
          temperature-controlled and administered following proper veterinary
          protocols.
        </p>

        <h3 className="section-title">🐶 Dog Vaccination Services</h3>

        <ul className="service-list">
          <li>✔ Puppy DP (Distemper + Parvo)</li>
          <li>✔ DHPPi / 9-in-1 Vaccine</li>
          <li>✔ Canine Coronavirus</li>
          <li>✔ Kennel Cough</li>
          <li>✔ Anti-Rabies Vaccine</li>
        </ul>

        <h3 className="section-title">📦 Vaccination Packages</h3>

        <div className="package-box">
          <h4>Puppy Vaccination Package</h4>
          <p className="price">₹6,799 <span>+ Vet Visit</span></p>
          <p className="offer">🎉 First Visit 30% OFF</p>
          <ul>
            <li>• Puppy DP Complete</li>
            <li>• 9-in-1 (DHPPi)</li>
            <li>• Canine Coronavirus</li>
            <li>• Kennel Cough</li>
            <li>• Anti-Rabies</li>
          </ul>
        </div>

        <div className="package-box">
          <h4>Adult Dog Vaccination Package</h4>
          <p className="price">₹3,899 <span>+ Vet Visit</span></p>
          <p className="offer">🎉 First Visit 30% OFF</p>
          <ul>
            <li>• Annual Booster</li>
            <li>• 9-in-1 (DHPPi)</li>
            <li>• Anti-Rabies</li>
          </ul>
        </div>

        <h3 className="section-title">💉 Single Vaccination</h3>

        <ul className="service-list">
          <li>✔ Any Single Vaccine – ₹999 each</li>
          <li>✔ Vet Home Visit – ₹449</li>
        </ul>

        <PriceNote price="Single Vaccine ₹999 | Vet Visit ₹449" />

        <BookBtn label="Book Vaccination Now" onClick={() => setOpen(true)} />
      </ServiceLayout>

      <Footer />

      {open && (
        <BookingModal
          service="Vaccination"
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
