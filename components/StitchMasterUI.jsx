"use client";

import { useState } from "react";
import Link from "next/link";
import { useGSAP } from "@/hooks/useGSAP";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingModal from "./BookingModal";
import QuickLeadBar from "./QuickLeadBar";
import PetPriceCalculator from "./PetPriceCalculator";

/* ─── DATA ───────────────────────────────────────────────── */
const reviews = [
  { name: "Ananya Sharma", location: "South Delhi", text: "Dr. Rohit came within 35 minutes for my Golden Retriever's emergency fever. Thorough, gentle, and extremely professional!", pet: "Golden Retriever 🐕" },
  { name: "Priya Kapoor", location: "Gurgaon Phase 5", text: "My Persian cat Mochi hates clinic visits. Lifeline's doorstep spa & grooming was a lifesaver. Pure luxury!", pet: "Persian Cat 🐱" },
  { name: "Rohan Mehta", location: "Noida Sector 50", text: "Puppy vaccination at home — zero stress. Genuine cold-chain vaccines and prescription sent on WhatsApp instantly.", pet: "Labrador Pup 🐕" },
  { name: "Vikram Malhotra", location: "West Delhi", text: "Called 24/7 SOS helpline at 2 AM. Vet dispatched immediately for my Beagle. Truly saved his life!", pet: "Beagle 🐕" },
];

const whyUs = [
  { icon: "🏠", title: "100% Doorstep Dog & Cat Care", desc: "Certified doctors visit your home anywhere in Delhi NCR, 7 days a week." },
  { icon: "🎓", title: "Canine & Feline BVSc Vets", desc: "Degree-qualified, background-verified veterinary specialists only." },
  { icon: "❄️", title: "Cold-Chain Core Vaccines", desc: "Genuine vaccines maintained at 2°C–8°C directly from manufacturer." },
  { icon: "📱", title: "Instant WhatsApp Reports", desc: "Digital prescriptions & blood test lab reports delivered in minutes." },
  { icon: "💳", title: "Transparent Pricing", desc: "Pay after service completion via UPI, Cash, or Card. Zero hidden fees." },
  { icon: "🕐", title: "Same-Day Booking", desc: "Book before noon and get guaranteed same-day doctor or grooming visit." },
];

/* DOGS & CATS FIRST AND FEATURED */
const primaryPets = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc9LWmMM08px7CB1tFJossP1smXHH2DGGWRseN8U15pjcpGLaZvzkUEjnJQKHP2vEIZnA-zM0nQ-iPUtHY8mWxD5--Uuojs47qFWjjnv3E_Xw2-Jy_Pf_jyB7e5IVvF97Zs9gfYZKaH-VAyoJBqulaP02SAHydoTWMYTYNKxVNhHZCYyorVgygyTTOWaScJ0yV0rMmvuj8859r904dxIDDaEdTvcvhk9A4HjwNlnqWLEEf7RPLIq9D",
    label: "Canine Care (Dogs) 🐕",
    sub: "9-in-1 Vaccines, Clinical Exam, Breed Haircuts & Anti-Tick Spa",
    booking: "Canine Care (Dogs)",
    tag: "Primary Focus",
    color: "#059669",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3epoSNHaQgHPWcSrhdDaatNsKRMNPLvMf6uFc-qbSkbfuOVgVJawXLj3KGGqfXgZT-4lCZDY2ewdE2-dklSqyK2kbtd74MaEBLhDh65-fIQmm-ZAlb7GqJM0Z9AweuQ_O7D8wC6HN3mnq8MNJM0SX3pTPESH60QXu48qyZ_KydcdkTOCOgnYEoENdRrxZkTWVRB0cMk976vV6XTib64xqAvONWJFNsQ_0kw1OpB58f5sALLdEDTpQ",
    label: "Feline Care (Cats) 🐱",
    sub: "FVRCP Vaccines, Stress-Free Home Spa & Gentle Feline Checkup",
    booking: "Feline Care (Cats)",
    tag: "Popular",
    color: "#ea580c",
  },
];

const secondaryPets = [
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn6yuSTBLZI7luWPuF4PFsdKYYRmRiVta9IMcpEqMid21rdbnTvGKyk8SnUDMuUjXBGbBW9q7QdYVk4GIOpgQQKPFGH0PYeLO7B2aBkHLg__hw2_uafxCbVfP9Fy7SsNmYL-gRz6qVixAOndx26HktkF-4dBeysCvhNeW28TplFC8L20FPL6TFfK6pxUWqL0QvEj7aBDaxf-eSnOY1GPU8LSE_6JzPKCM2-KE_su-w1xlN-y8DyLI2", label: "Birds 🦜", sub: "Avian Health & Wing Specialist", booking: "Avian Care" },
  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3I1cbucbuU4w4rFrSAaKOZV7ggfr_1vxJ8vLFfBEd2paISnaJ0z0BsCL0TnxNBA6cPVlcuBmjk1hO2GFEAzHCorUK7tPYgOj0JtcJBILhjdQAMsDmHEfAt5Jxee1wbNfHsL2KXfiA5LCQiiJspx6SBCJstmKSD4rDfxgfsnWkonR7o3hwXTSc-esO4ztzu-rJjYoxu8VrvMxtpEMQgGaQZzakjzzK_r5fuM6EDDPwV5OXbPuXQ7hI", label: "Exotics 🐇", sub: "Rabbits, Ferrets & Rodents", booking: "Exotic Care" },
];

const services = [
  {
    icon: "🩺", label: "Veterinary Doctor", title: "Vet Home Visit", price: "₹449", unit: "/visit",
    accent: "#059669", accentBg: "#ecfdf5", border: "#a7f3d0",
    features: ["Full clinical examination at home", "Fever, illness & infection diagnosis", "Signed digital prescription on WhatsApp", "Free 7-day follow-up chat support"],
    booking: "Veterinary Home Visit (₹449)",
  },
  {
    icon: "💉", label: "Vaccinations", title: "Dog & Cat Vaccines", price: "from ₹999", unit: "",
    accent: "#ea580c", accentBg: "#fff7ed", border: "#fed7aa",
    features: ["Anti-Rabies Shot — ₹999", "Adult Dog Booster (9-in-1) — ₹3,899", "Cat FVRCP Triple Vaccine — ₹2,499", "Puppy 5-Shot Package — ₹6,799"],
    booking: "Anti-Rabies Core Vaccine (₹999)",
  },
  {
    icon: "✂️", label: "Doorstep Spa", title: "Dog & Cat Grooming", price: "from ₹799", unit: "",
    accent: "#7c3aed", accentBg: "#f5f3ff", border: "#ddd6fe",
    features: ["Bath & Blow Dry — ₹799", "Mini Groom (Bath + Nails) — ₹1,100", "Full Breed Haircut — ₹1,799", "Organic shampoo & area sanitization"],
    booking: "Doorstep Grooming Bath (₹799)",
  },
];

const comparisonData = [
  { feature: "Travel & Clinic Waiting", traditional: "1–2 hours in traffic & crowded clinic", lifeline: "Zero travel. Doctor arrives at your door." },
  { feature: "Pet Anxiety & Stress", traditional: "High stress, barking dogs, cat panic", lifeline: "100% relaxed in pet's comfortable home environment." },
  { feature: "Infection Exposure Risk", traditional: "High risk of catching parvo or flu from sick pets", lifeline: "Zero infection risk. Sterile single-use gear." },
  { feature: "Vaccine Cold-Chain Integrity", traditional: "Varies; often left out on counter", lifeline: "Guaranteed 2°C–8°C insulated cold-chain transport." },
  { feature: "Follow-Up & Prescriptions", traditional: "Paper slip, hard to reach doctor again", lifeline: "WhatsApp digital records + direct doctor chat." },
];

export default function StitchMasterUI() {
  const [openModal, setOpenModal] = useState(false);
  const [modalService, setModalService] = useState("Veterinary Home Visit (₹449)");

  const book = (s = "Veterinary Home Visit (₹449)") => {
    setModalService(s);
    setOpenModal(true);
  };

  /* ─── GSAP SCROLL ANIMATIONS ──────────────────────────── */
  useGSAP([
    { selector: ".anim-hero-badge", from: { opacity: 0, y: -20 }, duration: 0.6, ease: "back.out(1.4)", start: "top 95%" },
    { selector: ".anim-hero-h1", from: { opacity: 0, y: 50 }, duration: 0.8, ease: "power4.out" },
    { selector: ".anim-hero-p", from: { opacity: 0, y: 30 }, duration: 0.7, ease: "power3.out" },
    { selector: ".anim-pet-card", from: { opacity: 0, y: 40 }, duration: 0.6, ease: "power3.out", stagger: 0.1 },
    { selector: ".anim-svc-card", from: { opacity: 0, y: 50 }, duration: 0.7, ease: "power3.out", stagger: 0.15 },
    { selector: ".anim-why-card", from: { opacity: 0, y: 30 }, duration: 0.6, ease: "power2.out", stagger: 0.08 },
    { selector: ".anim-review-card", from: { opacity: 0, y: 30 }, duration: 0.6, ease: "power2.out", stagger: 0.1 },
  ]);

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans text-slate-700 antialiased relative">
      <Navbar />

      <main className="pt-16">
        {/* ═══════════════════ LIVE TICKER ═══════════════════ */}
        <div className="bg-emerald-950 text-white py-2.5 px-4 text-xs font-bold border-b border-emerald-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-hidden whitespace-nowrap">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span className="text-emerald-300 font-extrabold uppercase tracking-wider">
                Live Status:
              </span>
              <span>🟢 14 Dog & Cat Doctors Active in Delhi, Noida & Gurgaon • Avg arrival: 35 mins</span>
            </div>
            <a
              href="tel:+918800813462"
              className="hidden sm:inline-flex items-center gap-1 text-red-300 hover:text-red-200 underline font-black"
            >
              <span>🚨 24/7 SOS Helpline</span>
            </a>
          </div>
        </div>

        {/* ═══════════════════ HERO SECTION (DOG & CAT ORIENTED) ═══════════════════ */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden py-12 lg:py-20">
          {/* Ambient Orbs */}
          <div className="orb orb-green" style={{ width: 600, height: 600, top: "-100px", left: "-200px" }} />
          <div className="orb orb-teal" style={{ width: 500, height: 500, bottom: "0px", right: "-150px" }} />

          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
            {/* LEFT HERO TEXT */}
            <div className="space-y-6">
              <div className="anim-hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 text-emerald-900 border border-emerald-300 backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                <span className="text-xs font-extrabold uppercase tracking-wider">
                  🐕 #1 Dog & Cat Healthcare Specialist in Delhi NCR 🐱
                </span>
              </div>

              <h1 className="anim-hero-h1 text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Hospital-Grade Dog & Cat Care,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Delivered at Your Door 🐾
                </span>
              </h1>

              <p className="anim-hero-p text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Certified canine & feline BVSc doctors, genuine cold-chain vaccines & organic doorstep grooming spa. Zero clinic stress for your dogs and cats. Starting at just <strong className="text-emerald-700 font-extrabold">₹449</strong>.
              </p>

              {/* STATS STRIP */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  ["15,000+", "Dogs & Cats Treated"],
                  ["4.9★", "Google Rating"],
                  ["24/7", "Emergency Vets"],
                  ["₹449", "Starts At"],
                ].map(([num, label]) => (
                  <div key={num} className="glass-luxury p-3 rounded-2xl text-center border border-emerald-100">
                    <p className="text-xl font-black text-emerald-700">{num}</p>
                    <p className="text-[11px] font-bold text-slate-500">{label}</p>
                  </div>
                ))}
              </div>

              {/* HERO CTA BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => book("Veterinary Home Visit (₹449)")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm px-8 py-4 rounded-full shadow-xl shadow-emerald-600/30 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <span>🩺 Book Dog/Cat Vet Visit — ₹449</span>
                  <span>→</span>
                </button>

                <a
                  href="tel:+918800813462"
                  className="bg-red-600 hover:bg-red-700 text-white font-black text-sm px-7 py-4 rounded-full shadow-xl shadow-red-600/30 hover:scale-105 transition-all pulse-sos flex items-center gap-2"
                >
                  <span>📞 Emergency SOS</span>
                </a>
              </div>
            </div>

            {/* RIGHT HERO VISUAL */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-[40px] overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc9LWmMM08px7CB1tFJossP1smXHH2DGGWRseN8U15pjcpGLaZvzkUEjnJQKHP2vEIZnA-zM0nQ-iPUtHY8mWxD5--Uuojs47qFWjjnv3E_Xw2-Jy_Pf_jyB7e5IVvF97Zs9gfYZKaH-VAyoJBqulaP02SAHydoTWMYTYNKxVNhHZCYyorVgygyTTOWaScJ0yV0rMmvuj8859r904dxIDDaEdTvcvhk9A4HjwNlnqWLEEf7RPLIq9D"
                  alt="Doctor treating happy Golden Retriever dog at home"
                  className="w-full h-[520px] object-cover"
                />
              </div>

              {/* Floating Doctor Verification Badge */}
              <div className="absolute -bottom-6 -left-6 glass-luxury p-5 rounded-3xl border border-emerald-200 shadow-2xl flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-2xl shrink-0">
                  🐕
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900">Dog & Cat Specialists</p>
                  <p className="text-[11px] text-slate-500 font-medium">100% Gentle & Certified Vets</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ DOGS & CATS FIRST (FEATURED SECTION) ═══════════════════ */}
        <section className="py-16 bg-white/80 backdrop-blur-md border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                Primary Specialty
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Dog & Cat Healthcare Specialists 🐕🐱
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Specialized clinical protocols, gentle handling, and cold-chain vaccines tailored specifically for dogs & cats.
              </p>
            </div>

            {/* FEATURED DOG & CAT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {primaryPets.map((pet, i) => (
                <div
                  key={i}
                  className="glass-luxury rounded-[36px] overflow-hidden border border-emerald-200 shadow-xl flex flex-col sm:flex-row items-stretch group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="sm:w-1/2 h-64 sm:h-auto overflow-hidden relative">
                    <img
                      src={pet.img}
                      alt={pet.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-black uppercase tracking-wider shadow-md"
                      style={{ background: pet.color }}
                    >
                      {pet.tag}
                    </span>
                  </div>

                  <div className="sm:w-1/2 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-slate-900">{pet.label}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {pet.sub}
                      </p>
                    </div>

                    <button
                      onClick={() => book(pet.booking)}
                      className="w-full text-white font-black text-xs py-3.5 rounded-2xl shadow-lg transition-all hover:scale-[1.02]"
                      style={{ background: pet.color }}
                    >
                      Book {pet.label} Services →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* SECONDARY PETS (BIRDS & EXOTICS) */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider text-center">
                Also Servicing Birds & Exotic Pets
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {secondaryPets.map((pet, i) => (
                  <button
                    key={i}
                    onClick={() => book(pet.booking)}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 text-left flex items-center justify-between transition-all"
                  >
                    <div>
                      <p className="text-xs font-bold text-slate-900">{pet.label}</p>
                      <p className="text-[10px] text-slate-500">{pet.sub}</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">Book →</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ INTERACTIVE PRICE CALCULATOR ═══════════════════ */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <PetPriceCalculator onBook={(p) => book(p)} />
        </section>

        {/* ═══════════════════ POPULAR SERVICES & PACKAGES ═══════════════════ */}
        <section className="py-16 bg-gradient-to-b from-[#FDFBF7] to-emerald-50/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                Dog & Cat Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our Most Requested Doorstep Services 🏥
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((svc, i) => (
                <div
                  key={i}
                  className="anim-svc-card glass-luxury rounded-[32px] p-8 border flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
                  style={{ borderColor: svc.border }}
                >
                  <div className="space-y-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
                      style={{ background: svc.accentBg }}
                    >
                      {svc.icon}
                    </div>
                    <span
                      className="text-xs font-black uppercase tracking-wider block"
                      style={{ color: svc.accent }}
                    >
                      {svc.label}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">{svc.title}</h3>
                    <p className="text-3xl font-black" style={{ color: svc.accent }}>
                      {svc.price}
                    </p>

                    <ul className="space-y-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
                      {svc.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span style={{ color: svc.accent }} className="font-bold shrink-0">
                            ✓
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => book(svc.booking)}
                    className="w-full mt-8 font-black text-xs py-4 rounded-full text-white shadow-lg transition-all hover:scale-[1.02]"
                    style={{ background: svc.accent }}
                  >
                    Book {svc.label}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ COMPARISON MATRIX ═══════════════════ */}
        <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
          <div className="glass-luxury rounded-[36px] p-8 md:p-12 border border-emerald-100 shadow-2xl space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="px-4 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                Why Dog & Cat Parents Switch to Lifeline
              </span>
              <h2 className="text-3xl font-black text-slate-900">
                Lifeline Doorstep vs Traditional Clinic ⚔️
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-4 px-4 font-black text-slate-900">Feature</th>
                    <th className="py-4 px-4 font-bold text-slate-500">Traditional Vet Clinic</th>
                    <th className="py-4 px-4 font-black text-emerald-700 bg-emerald-50/80 rounded-t-2xl">
                      Lifeline Doorstep Care 🏆
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="py-4 px-4 font-bold text-slate-900">{row.feature}</td>
                      <td className="py-4 px-4 text-slate-500">{row.traditional}</td>
                      <td className="py-4 px-4 font-bold text-emerald-800 bg-emerald-50/50">
                        ✓ {row.lifeline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════ WHY CHOOSE US ═══════════════════ */}
        <section className="py-16 bg-white/80 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <h2 className="text-3xl font-black text-slate-900">
                Why 15,000+ Dog & Cat Parents Trust Us 🛡️
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUs.map((w, i) => (
                <div
                  key={i}
                  className="anim-why-card glass-luxury rounded-[28px] p-6 space-y-3 border border-slate-200 hover:border-emerald-300 transition-all"
                >
                  <span className="text-3xl">{w.icon}</span>
                  <h3 className="text-base font-black text-slate-900">{w.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ REVIEWS ═══════════════════ */}
        <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              Real Reviews
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Loved by Delhi NCR Dog & Cat Parents ❤️
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="anim-review-card glass-luxury rounded-[28px] p-6 space-y-4 border border-emerald-100 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-amber-400 text-sm font-bold">★★★★★</div>
                  <p className="text-xs text-slate-600 italic">"{r.text}"</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-black text-slate-900">{r.name}</p>
                    <p className="text-[10px] text-slate-400">{r.location}</p>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2 py-1 rounded-full">
                    {r.pet}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <QuickLeadBar onBookClick={(s) => book(s)} />

      {openModal && (
        <BookingModal
          service={modalService}
          onClose={() => setOpenModal(false)}
        />
      )}

      <Footer />
    </div>
  );
}
