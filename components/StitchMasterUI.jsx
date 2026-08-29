"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingModal from "./BookingModal";
import QuickLeadBar from "./QuickLeadBar";
import PetPriceCalculator from "./PetPriceCalculator";

/* ─── STITCH DATA ────────────────────────────────────────── */
const testimonials = [
  {
    name: "Milo's Mom",
    service: "Vaccination Drive",
    quote: "The vet was so gentle with Milo. He didn't even realize he was getting a shot! So much better than dragging him to a noisy clinic.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAulyz4AZuo6o1PyqjQiRlBuUo9pvTlDRaPPgWLIJY0tvBu7FR7NNOzBtKFukXrg75GWlkd9fgSbZlCB6tBdfbw03GwU__gYuTcFyDvp7B3Bh5_BS-01rxti8imqYH46WCZE11cKWN4czIK5fWhbAVGMZICX9FLfqipCR2O3d18FQ_8RIu5BwZuIx3Gcnp4pHHAhKxErUTiz5r4wRBHSaea-RzuliPp4anaB-dRxz5kBKxHrd-lobE5",
    rating: 5,
  },
  {
    name: "Luna's Dad",
    service: "Home Consultation",
    quote: "Exceptional service. The doctor took their time to explain everything thoroughly. Luna was completely relaxed on her favorite rug.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdK-CQr1OrO9pvE4mPZdI4WuLYBOKWKdR-ER5na2Ga8KPzHCqJgf_tYpDpYLIV8bliiWzXbwCPhR4w9of5GTKrRuAThnOirq-aSVzTlbVb3xfG3gAX97NneGpSKQYD47wsywZNxZ3fS6XSqjW4JI68U7lgmT34i0mvfA8oM3vb7UpCiLZ7BmK1n91ggmY9kKHHsCe7Oe-szHjzZOS80GMNEBDZxHM9iTODMjD6BfYt8JJUh5MbciGB",
    rating: 5,
  },
  {
    name: "Simba's Family",
    service: "Medical Grooming",
    quote: "Our Persian cat usually hates grooming, but the trained professional from Lifeline handled him perfectly. Highly recommend!",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoEp3W31JButKEKDDS-t-J8T51qfF2xI614qagCT7LJI9-tfB7_iFdaoO3vNA0niF1lYEBsBtijYIxDTe_nWXtdGylOMJneVw-1yt6ue-TDLkwr2yC2PFmcQR9bDs83Q3XEw8Sft4n0r6qq336mL1baEyT6CFVZitAYsqi6fjBTWX0O9Al6aRDTEgLKhqKlVQ9OI1MfRDg8LWF8VMuUpMOdLLNYffviEy0I4f4Dyv0LtkY-fGlRUpq",
    rating: 5,
  },
];

const articles = [
  {
    title: "Monsoon Paw Care",
    tag: "Seasonal",
    desc: "Essential tips to protect your pet's paws from fungal infections during the rainy season.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCadBLzapCQxwIlS8mEDg6Dv-dbXp2MCjPRQOUbPoUxt7DV3edSwGxoChP6lj0YsR6cfeNPPsm_0GSqhJMEMWjNjh2Iw3gCCg66v_6avjNx-_NK4vYJB9P1opX2KMOqVsyZZBJY1Tanf_ceotqfvu5J6UUEKRfZuzpCOH6rdUoXVtZTWcJ_FzB3Sdt6kffNrcKKEb_0d1xbZ1HUyf29FzlKVCi8a5sBmc_08j2zWT-3QaFlV5ewQhPy",
  },
  {
    title: "Nutrition for Senior Dogs",
    tag: "Nutrition",
    desc: "How to adapt your aging dog's diet for optimal joint health, digestion, and longevity.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrWsPyhSESBrJjVW4fHPjRRDSsrqjxkH0maVYbqaMKj6LanoHy1BQx4HE_0SttOjfc-ugjBc40PR5ljwzPmHUNb3tydYwGrmsujxPjcAwGHDwXHbb0cnGUnopwrCIV50wCcq4XYQXvaM_TPQqVMI1bKNGj2bxm8FLFQ3iLAjlEgcRQQc49aLSauw98GbjnoHnWk9lqxoMeoqcao7yqh_oUe3vWVSmdHAN52GTFYn5mz_jCPoacbQt3",
  },
  {
    title: "Vaccination Schedules",
    tag: "Health",
    desc: "A comprehensive guide to core and non-core vaccines for puppies and kittens.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_zxBP5JAgGA4_yfQbg8Z68NjQs9gC8kr0NddlCETpJH9hmJ8NUOBzPFSGlTHyw-kWP40X_XBaduGLSKXUSdzHM18A31DAbTWn9ZUkCIC5Our95bUsC90QYWS55F3BXFnhhdSKh2yHk9hS7bJRh4OlHkE1Y9IBBTYIL9W4MBLjlKjtscqppVrArbddBAk1BRQqHktcKEtUEMyoNfaiegekepKSL_neq5CkKpmpH3lT3bM_dd6bVmj0",
  },
];

const serviceCards = [
  {
    title: "Home Consultation",
    price: "From ₹449",
    desc: "Complete nose-to-tail clinical examination in the comfort of your living room.",
    icon: "stethoscope",
    bg: "bg-[#006E1C]/10",
    color: "#006E1C",
    booking: "Veterinary Home Visit (₹449)",
  },
  {
    title: "Vaccination Drive",
    price: "From ₹999",
    desc: "Annual shots & boosters administered safely at home, eliminating clinic anxiety.",
    icon: "vaccines",
    bg: "bg-[#E8F5E9]",
    color: "#006E1C",
    booking: "Anti-Rabies Core Vaccine (₹999)",
  },
  {
    title: "Medical Grooming",
    price: "From ₹799",
    desc: "Prescription baths, nail clipping & breed trims by certified professionals.",
    icon: "content_cut",
    bg: "bg-[#FFFDE7]",
    color: "#1B1C1A",
    booking: "Doorstep Grooming Bath (₹799)",
  },
];

export default function StitchMasterUI() {
  const [openModal, setOpenModal] = useState(false);
  const [modalService, setModalService] = useState("Veterinary Home Visit (₹449)");

  const book = (s = "Veterinary Home Visit (₹449)") => {
    setModalService(s);
    setOpenModal(true);
  };

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] font-sans antialiased min-h-screen relative">
      <Navbar />

      <main>
        {/* ═══════════════════ STITCH HERO SECTION ═══════════════════ */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
          {/* Spatial Orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#4CAF50]/15 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E3F2FD] rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10 flex flex-col items-center text-center">
            {/* STITCH EDITORIAL HEADLINE */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#1B1C1A] max-w-4xl mx-auto mb-8 tracking-tight leading-[1.05]">
              Their safest place is <br className="hidden md:block" />
              <span className="text-[#006E1C] italic font-serif">home</span>.{" "}
              <br className="hidden md:block" />
              So is their vet.
            </h1>

            <p className="text-base sm:text-xl text-[#3F4A3C] max-w-2xl mx-auto font-normal leading-relaxed mb-10">
              Delhi NCR's spatial laboratory for veterinary excellence. BVSc certified doctors, genuine cold-chain vaccines & organic spa care at your doorstep.
            </p>

            {/* HERO IMAGE CONTAINER WITH ORGANIC RADIUS & SPATIAL TILT */}
            <div className="relative w-full max-w-5xl mx-auto mt-4">
              <div className="aspect-[16/9] md:aspect-[21/9] rounded-[3rem] md:rounded-[4rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,110,28,0.12)] organic-mask-1 transform -rotate-1 border-4 border-white">
                <img
                  className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyws5kJuyMk_uM5xm3ElvGJBAr7yL0h--vpDcuxIRgdi_2aX5CwEZhjX5mt_2YvgjITQdvcbsYnj_oZzFZ9RkrGeRIDZuA62Jj6AkoITo1RX40u18gKDORbcnMwWlFs5MUtKNdkCXDzJf4aExDDy4YF27-B9Gtqcm71_wwVDYVXHFi69p6oGiVyG7aNL_EcK6kNDFDsTFEU9MKqxSm_WCuDVE2xOKRxWZ5s3YMi68AIilF2fnsicp0"
                  alt="Veterinarian examining Golden Retriever in warm Indian home"
                />
              </div>

              {/* Floating Glass Pills Overlay */}
              <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 glass-panel px-6 py-3 rounded-full text-xs font-bold text-[#1B1C1A] flex items-center gap-3 ambient-shadow hover:-translate-y-1 transition-transform">
                <span className="w-3 h-3 rounded-full bg-[#006E1C] animate-pulse" />
                <span>₹449 Doorstep Visit</span>
              </div>

              <div className="absolute top-6 right-6 md:top-12 md:right-12 glass-panel px-6 py-3 rounded-full text-xs font-bold text-[#1B1C1A] flex items-center gap-3 ambient-shadow hover:-translate-y-1 transition-transform">
                <span className="material-symbols-outlined text-[#006E1C] text-lg">
                  schedule
                </span>
                <span>35 min Arrival</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ SERVICES HORIZONTAL TRACK ═══════════════════ */}
        <section className="py-20 bg-[#F4F4F0] border-y border-[rgba(26,26,26,0.06)] relative">
          <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-12">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1B1C1A] tracking-tight">
                What does your pet need?
              </h2>
              <p className="text-base sm:text-lg text-[#3F4A3C] font-normal">
                Comprehensive veterinary care, delivered to your doorstep across Delhi NCR.
              </p>
            </div>

            {/* SERVICE CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCards.map((card, idx) => (
                <div
                  key={idx}
                  onClick={() => book(card.booking)}
                  className="glass-panel rounded-[3rem] p-8 sm:p-10 group hover:-translate-y-2 transition-all duration-500 ambient-shadow cursor-pointer relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div
                      className={`w-16 h-16 rounded-3xl ${card.bg} flex items-center justify-center text-[#006E1C]`}
                    >
                      <span className="material-symbols-outlined text-3xl">
                        {card.icon}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#1B1C1A] mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[#3F4A3C] leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 flex items-center justify-between font-bold text-sm text-[#006E1C]">
                    <span className="bg-white/80 px-5 py-2 rounded-full border border-black/5 shadow-xs">
                      {card.price}
                    </span>
                    <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ DOG & CAT PRICE CALCULATOR ═══════════════════ */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 py-8">
          <PetPriceCalculator onBook={(p) => book(p)} />
        </section>

        {/* ═══════════════════ TESTIMONIALS CAROUSEL ═══════════════════ */}
        <section className="py-20 bg-[#FAF9F5] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-12">
            <div className="max-w-xl space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1B1C1A] tracking-tight">
                What Pet Parents Say
              </h2>
              <p className="text-base sm:text-lg text-[#3F4A3C]">
                Real stories from our Delhi NCR community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="glass-panel rounded-[3rem] p-8 ambient-shadow relative overflow-hidden space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#006E1C]/30 shrink-0">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-[#1B1C1A]">{item.name}</h4>
                      <p className="text-xs text-[#3F4A3C]">{item.service}</p>
                    </div>
                  </div>

                  <p className="text-sm text-[#1B1C1A] italic leading-relaxed">
                    "{item.quote}"
                  </p>

                  <div className="flex text-amber-400 gap-1 text-sm pt-2">
                    {"★".repeat(item.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ PROACTIVE PET CARE GUIDES ═══════════════════ */}
        <section className="py-20 bg-white border-t border-[rgba(26,26,26,0.06)]">
          <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1B1C1A] tracking-tight">
                  Proactive Pet Care
                </h2>
                <p className="text-base sm:text-lg text-[#3F4A3C] mt-2">
                  Expert veterinary advice for a healthy, happy companion.
                </p>
              </div>
              <Link
                href="/blog"
                className="text-[#006E1C] font-bold text-sm flex items-center gap-2 hover:translate-x-2 transition-transform"
              >
                <span>View All Guides</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((art, idx) => (
                <div key={idx} className="group cursor-pointer space-y-4">
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden relative shadow-md">
                    <img
                      src={art.img}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 glass-panel px-4 py-1.5 rounded-full text-xs font-bold text-[#1B1C1A]">
                      {art.tag}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B1C1A] group-hover:text-[#006E1C] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#3F4A3C] leading-relaxed">
                    {art.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ DUAL CTA & EMERGENCY SECTION ═══════════════════ */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Primary CTA */}
            <div className="bg-[#E8F5E9] rounded-[3rem] md:rounded-[4rem] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between border border-[#006E1C]/20 shadow-xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1C1A] tracking-tight">
                  Expert care, right in your living room.
                </h2>
                <p className="text-sm text-[#3F4A3C] leading-relaxed">
                  Schedule a stress-free home visit with our certified veterinary experts today.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => book("Veterinary Home Visit (₹449)")}
                  className="bg-[#006E1C] hover:bg-[#005313] text-white px-8 py-4 rounded-full font-bold text-xs shadow-lg shadow-[#006E1C]/30 hover:scale-105 transition-all"
                >
                  Book a Home Visit 🩺
                </button>
                <a
                  href="https://wa.me/918800813462"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel px-7 py-4 rounded-full font-bold text-xs text-[#006E1C] hover:bg-white transition-colors"
                >
                  Talk to a Vet 💬
                </a>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="bg-[#FFEBEE] rounded-[3rem] md:rounded-[4rem] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between border border-[#BA1A1A]/20 shadow-xl space-y-8">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#BA1A1A]/10 text-[#BA1A1A] flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">emergency</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1C1A] tracking-tight">
                  Pet Emergency?
                </h2>
                <p className="text-sm text-[#3F4A3C] leading-relaxed">
                  Immediate veterinary support when you need it most. Our emergency team is live 24/7.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="tel:+918800813462"
                  className="inline-flex items-center justify-center gap-3 bg-[#BA1A1A] hover:bg-[#93000A] text-white px-8 py-4 rounded-full font-extrabold text-xs shadow-lg shadow-red-600/30 hover:scale-105 transition-all"
                >
                  <span className="material-symbols-outlined text-lg">call</span>
                  <span>Call 24/7 Helpline: +91 88008 13462</span>
                </a>
              </div>
            </div>
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
