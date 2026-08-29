"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingModal from "./BookingModal";
import QuickLeadBar from "./QuickLeadBar";
import PetPriceCalculator from "./PetPriceCalculator";

/* ─── STITCH DATA & EXTRACTED REPO CONTENT ─────────────────── */
const testimonials = [
  {
    name: "Milo's Mom (South Delhi)",
    service: "Puppy Vaccination Package",
    quote: "The vet was so gentle with Milo. Got his 9-in-1 and Anti-Rabies done right on our living room rug. Zero clinic anxiety!",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAulyz4AZuo6o1PyqjQiRlBuUo9pvTlDRaPPgWLIJY0tvBu7FR7NNOzBtKFukXrg75GWlkd9fgSbZlCB6tBdfbw03GwU__gYuTcFyDvp7B3Bh5_BS-01rxti8imqYH46WCZE11cKWN4czIK5fWhbAVGMZICX9FLfqipCR2O3d18FQ_8RIu5BwZuIx3Gcnp4pHHAhKxErUTiz5r4wRBHSaea-RzuliPp4anaB-dRxz5kBKxHrd-lobE5",
    rating: 5,
  },
  {
    name: "Luna's Dad (Gurgaon)",
    service: "Home Consultation & Exam",
    quote: "Exceptional service! Doctor arrived in 30 minutes with full diagnostic kit. Signed digital prescription was sent instantly on WhatsApp.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdK-CQr1OrO9pvE4mPZdI4WuLYBOKWKdR-ER5na2Ga8KPzHCqJgf_tYpDpYLIV8bliiWzXbwCPhR4w9of5GTKrRuAThnOirq-aSVzTlbVb3xfG3gAX97NneGpSKQYD47wsywZNxZ3fS6XSqjW4JI68U7lgmT34i0mvfA8oM3vb7UpCiLZ7BmK1n91ggmY9kKHHsCe7Oe-szHjzZOS80GMNEBDZxHM9iTODMjD6BfYt8JJUh5MbciGB",
    rating: 5,
  },
  {
    name: "Simba's Family (Noida)",
    service: "Medical Grooming & Spa",
    quote: "Our Persian cat usually freaks out at salons, but Lifeline's certified groomer handled him so calmly at home. 10/10 recommendation!",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoEp3W31JButKEKDDS-t-J8T51qfF2xI614qagCT7LJI9-tfB7_iFdaoO3vNA0niF1lYEBsBtijYIxDTe_nWXtdGylOMJneVw-1yt6ue-TDLkwr2yC2PFmcQR9bDs83Q3XEw8Sft4n0r6qq336mL1baEyT6CFVZitAYsqi6fjBTWX0O9Al6aRDTEgLKhqKlVQ9OI1MfRDg8LWF8VMuUpMOdLLNYffviEy0I4f4Dyv0LtkY-fGlRUpq",
    rating: 5,
  },
];

const articles = [
  {
    title: "Monsoon Paw & Skin Care Guide",
    tag: "Seasonal Care",
    desc: "Essential advice from Delhi vets to prevent fungal infections, tick fever & paw dermatitis during rainy season.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCadBLzapCQxwIlS8mEDg6Dv-dbXp2MCjPRQOUbPoUxt7DV3edSwGxoChP6lj0YsR6cfeNPPsm_0GSqhJMEMWjNjh2Iw3gCCg66v_6avjNx-_NK4vYJB9P1opX2KMOqVsyZZBJY1Tanf_ceotqfvu5J6UUEKRfZuzpCOH6rdUoXVtZTWcJ_FzB3Sdt6kffNrcKKEb_0d1xbZ1HUyf29FzlKVCi8a5sBmc_08j2zWT-3QaFlV5ewQhPy",
  },
  {
    title: "Nutrition & Joint Care for Senior Dogs",
    tag: "Clinical Nutrition",
    desc: "How to adapt your aging dog's diet with Omega-3, glucosamine & customized protein ratios for maximum longevity.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrWsPyhSESBrJjVW4fHPjRRDSsrqjxkH0maVYbqaMKj6LanoHy1BQx4HE_0SttOjfc-ugjBc40PR5ljwzPmHUNb3tydYwGrmsujxPjcAwGHDwXHbb0cnGUnopwrCIV50wCcq4XYQXvaM_TPQqVMI1bKNGj2bxm8FLFQ3iLAjlEgcRQQc49aLSauw98GbjnoHnWk9lqxoMeoqcao7yqh_oUe3vWVSmdHAN52GTFYn5mz_jCPoacbQt3",
  },
  {
    title: "Core Vaccination Schedule for Dogs & Cats",
    tag: "Preventive Health",
    desc: "Comprehensive timeline for Puppy DP, 9-in-1 DHPPi boosters, Anti-Rabies & FVRCP vaccines with 2°C-8°C cold chain.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_zxBP5JAgGA4_yfQbg8Z68NjQs9gC8kr0NddlCETpJH9hmJ8NUOBzPFSGlTHyw-kWP40X_XBaduGLSKXUSdzHM18A31DAbTWn9ZUkCIC5Our95bUsC90QYWS55F3BXFnhhdSKh2yHk9hS7bJRh4OlHkE1Y9IBBTYIL9W4MBLjlKjtscqppVrArbddBAk1BRQqHktcKEtUEMyoNfaiegekepKSL_neq5CkKpmpH3lT3bM_dd6bVmj0",
  },
];

const serviceCards = [
  {
    title: "Home Vet Consultation",
    price: "₹449 Visit + Exam",
    offer: "Flat 30% OFF Packages",
    desc: "Complete head-to-tail physical exam, fever/illness diagnosis & signed digital prescription.",
    icon: "stethoscope",
    bg: "bg-[#006E1C]/10",
    color: "#006E1C",
    booking: "Veterinary Home Visit (₹449)",
  },
  {
    title: "Vaccination Drive",
    price: "Single ₹999 | Packages ₹3,899+",
    offer: "2°C–8°C Cold Chain Certified",
    desc: "Genuine Zoetis & Virbac vaccines for Rabies, 9-in-1 DHPPi, Puppy DP & FVRCP Triple.",
    icon: "vaccines",
    bg: "bg-[#E8F5E9]",
    color: "#006E1C",
    booking: "Anti-Rabies Core Vaccine (₹999)",
  },
  {
    title: "Doorstep Spa & Grooming",
    price: "From ₹799",
    offer: "Organic Shampoo & Sanitation",
    desc: "Medicated baths, tick/flea treatment, nail clipping & breed haircut by certified groomers.",
    icon: "content_cut",
    bg: "bg-[#FFFDE7]",
    color: "#1B1C1A",
    booking: "Doorstep Grooming Bath (₹799)",
  },
];

export default function StitchMasterUI() {
  const containerRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalService, setModalService] = useState("Veterinary Home Visit (₹449)");

  {/* HERO QUERY FORM STATE */}
  const [heroPet, setHeroPet] = useState("Dog 🐕");
  const [heroService, setHeroService] = useState("Veterinary Home Visit (₹449)");
  const [heroName, setHeroName] = useState("");
  const [heroPhone, setHeroPhone] = useState("");
  const [heroArea, setHeroArea] = useState("");
  const [heroFormSubmitted, setHeroFormSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        // Hero entrance animation
        gsap.fromTo(
          ".gsap-hero-animate",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
        );

        // Section Scroll-Reveal Animations
        const revealElements = gsap.utils.toArray(".gsap-reveal");
        revealElements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 50, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  const book = (s = "Veterinary Home Visit (₹449)") => {
    setModalService(s);
    setOpenModal(true);
  };

  const handleHeroSubmit = async (e) => {
    e.preventDefault();
    setHeroFormSubmitted(true);

    try {
      // 1. Send API payload to trigger Nodemailer email to lifelinepetcare46@gmail.com
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: heroName,
          phone: heroPhone,
          service: heroService,
          pet: heroPet,
          area: heroArea,
          date: "Immediate / Today",
          slot: "Hero Form Submission",
        }),
      });
    } catch (err) {
      console.warn("Hero API fetch error:", err);
    }

    // 2. WhatsApp Fallback trigger
    const text = encodeURIComponent(
      `Hi Lifeline Pet Care! 🐾 I want to book a doorstep service for my ${heroPet}.\nName: ${heroName}\nPhone: ${heroPhone}\nArea: ${heroArea}\nService: ${heroService}\nPlease share doctor arrival timing & slot details.`
    );
    setTimeout(() => {
      window.open(`https://wa.me/918800813462?text=${text}`, "_blank");
    }, 1200);
  };

  return (
    <div ref={containerRef} className="bg-[#FAF9F5] text-[#1B1C1A] font-sans antialiased min-h-screen relative">
      <Navbar />

      <main>
        {/* ═══════════════════ AMAZING HERO WITH QUERY FORM ═══════════════════ */}
        <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
          {/* Spatial Glow Orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-[#4CAF50]/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E3F2FD] rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* HERO LEFT COLUMN: EDITORIAL CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F5E9] border border-[#006E1C]/30 text-[#006E1C] text-xs font-extrabold uppercase tracking-wider shadow-xs shimmer-badge">
                <span className="w-2 h-2 rounded-full bg-[#006E1C] animate-ping" />
                <span>#1 Doorstep Veterinary Care in Delhi NCR</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1B1C1A] tracking-tight leading-[1.05]">
                Their safest place is <br className="hidden sm:block" />
                <span className="text-[#006E1C] italic font-serif">home</span>.{" "}
                <br className="hidden sm:block" />
                So is their vet.
              </h1>

              <p className="text-base sm:text-lg text-[#3F4A3C] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Licensed BVSc veterinary doctors, Zoetis 2°C–8°C cold-chain vaccines & organic doorstep grooming spa delivered directly to your home across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad.
              </p>

              {/* INSTANT HERO CALL, WHATSAPP & BOOKING CTAS — UNIFORM SIZED BUTTON GRID */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-xl mx-auto lg:mx-0">
                <button
                  onClick={() => book("Veterinary Home Visit (₹449)")}
                  className="w-full bg-[#006E1C] hover:bg-[#005313] text-white font-extrabold text-xs sm:text-xs py-3.5 px-4 rounded-full shadow-lg shadow-[#006E1C]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>Book Visit (₹449)</span>
                  <span>🩺</span>
                </button>

                <a
                  href="tel:+918800813462"
                  className="w-full bg-[#BA1A1A] hover:bg-[#93000A] text-white font-extrabold text-xs sm:text-xs py-3.5 px-4 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>📞 Call SOS</span>
                </a>

                <a
                  href="https://wa.me/918800813462"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-white border-2 border-[#006E1C] text-[#006E1C] hover:bg-emerald-50 font-extrabold text-xs sm:text-xs py-3.5 px-4 rounded-full shadow-xs hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>💬 WhatsApp</span>
                </a>
              </div>

              {/* TRUST BADGES GRID */}
              <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start text-xs font-bold text-[#1B1C1A]">
                <div className="glass-panel px-4 py-2.5 rounded-full flex items-center gap-2 ambient-shadow">
                  <span className="text-[#006E1C] text-base">⚡</span>
                  <span>35-Min Average Arrival</span>
                </div>
                <div className="glass-panel px-4 py-2.5 rounded-full flex items-center gap-2 ambient-shadow">
                  <span className="text-[#006E1C] text-base">🩺</span>
                  <span>BVSc Certified Doctors</span>
                </div>
                <div className="glass-panel px-4 py-2.5 rounded-full flex items-center gap-2 ambient-shadow">
                  <span className="text-amber-500 text-base">★</span>
                  <span>15,000+ Pets Served</span>
                </div>
              </div>

              {/* HERO VISUAL IMAGE CLUSTER */}
              <div className="relative pt-4">
                <div className="aspect-[16/9] sm:aspect-[21/9] rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,110,28,0.12)] border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-700">
                  <img
                    className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyws5kJuyMk_uM5xm3ElvGJBAr7yL0h--vpDcuxIRgdi_2aX5CwEZhjX5mt_2YvgjITQdvcbsYnj_oZzFZ9RkrGeRIDZuA62Jj6AkoITo1RX40u18gKDORbcnMwWlFs5MUtKNdkCXDzJf4aExDDy4YF27-B9Gtqcm71_wwVDYVXHFi69p6oGiVyG7aNL_EcK6kNDFDsTFEU9MKqxSm_WCuDVE2xOKRxWZ5s3YMi68AIilF2fnsicp0"
                    alt="Veterinarian examining Golden Retriever in warm Indian home"
                  />
                </div>

                <div className="absolute -bottom-4 right-4 glass-panel px-5 py-2.5 rounded-full text-xs font-extrabold text-[#1B1C1A] flex items-center gap-2 ambient-shadow">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006E1C] animate-pulse" />
                  <span>₹449 Doorstep Vet Visit</span>
                </div>
              </div>
            </div>

            {/* HERO RIGHT COLUMN: HIGH-CONVERTING HERO QUERY FORM */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="glass-panel-dark text-white rounded-[3rem] p-8 sm:p-10 space-y-6 shadow-2xl border border-white/15 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#006E1C]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-[#006E1C]/40 text-[#94F990] text-[11px] font-extrabold uppercase tracking-wider border border-[#006E1C]/50">
                      ⚡ Instant Booking & Callback
                    </span>
                    <span className="text-xs text-[#BECAB9] font-semibold">30-Sec Form</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Book Doorstep Vet Care 🩺
                  </h3>
                  <p className="text-xs text-[#BECAB9]">
                    Select your pet details & certified doctor will contact you on WhatsApp immediately.
                  </p>
                </div>

                {heroFormSubmitted ? (
                  <div className="py-8 text-center space-y-4 bg-white/5 rounded-3xl p-6 border border-white/10">
                    <div className="w-16 h-16 rounded-full bg-[#006E1C]/30 text-[#94F990] flex items-center justify-center text-3xl mx-auto border border-[#006E1C]">
                      ✓
                    </div>
                    <h4 className="text-xl font-extrabold text-white">Booking Requested!</h4>
                    <p className="text-xs text-[#BECAB9] leading-relaxed">
                      Connecting you to our WhatsApp vet desk... Our duty doctor will share timing & doctor details shortly.
                    </p>
                    <button
                      onClick={() => setHeroFormSubmitted(false)}
                      className="text-xs font-bold text-[#94F990] underline"
                    >
                      Book another appointment
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-4">
                    {/* PET COMPANION SELECTOR (DOG / CAT ONLY) */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#BECAB9] uppercase tracking-wider">
                        1. Select Pet Companion
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setHeroPet("Dog 🐕")}
                          className={`py-3 px-4 rounded-2xl text-xs font-extrabold border transition-all flex items-center justify-center gap-2 ${
                            heroPet === "Dog 🐕"
                              ? "bg-[#006E1C] text-white border-[#94F990] shadow-md"
                              : "bg-[#2F312E] text-[#BECAB9] border-white/10 hover:bg-white/10"
                          }`}
                        >
                          <span>Dog / Canine 🐕</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setHeroPet("Cat 🐱")}
                          className={`py-3 px-4 rounded-2xl text-xs font-extrabold border transition-all flex items-center justify-center gap-2 ${
                            heroPet === "Cat 🐱"
                              ? "bg-[#006E1C] text-white border-[#94F990] shadow-md"
                              : "bg-[#2F312E] text-[#BECAB9] border-white/10 hover:bg-white/10"
                          }`}
                        >
                          <span>Cat / Feline 🐱</span>
                        </button>
                      </div>
                    </div>

                    {/* SERVICE SELECTOR */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#BECAB9] uppercase tracking-wider">
                        2. Required Service
                      </label>
                      <select
                        value={heroService}
                        onChange={(e) => setHeroService(e.target.value)}
                        className="w-full bg-[#2F312E] text-white text-xs font-bold px-4 py-3.5 rounded-2xl border border-white/10 focus:outline-none focus:border-[#94F990]"
                      >
                        <option value="Veterinary Home Visit (₹449)">🩺 Vet Home Visit (₹449)</option>
                        <option value="Puppy 5-Vaccine Package (₹6,799)">💉 Puppy 5-Vaccine Series (₹6,799)</option>
                        <option value="Adult Dog Booster 9-in-1 (₹3,899)">💉 Adult Dog 9-in-1 Booster (₹3,899)</option>
                        <option value="Anti-Rabies Core Shot (₹999)">💉 Anti-Rabies Core Vaccine (₹999)</option>
                        <option value="Doorstep Grooming Bath (₹799)">✂️ Doorstep Spa Bath (₹799)</option>
                        <option value="Emergency ICU Support">🚑 24/7 Emergency Vet SOS</option>
                        <option value="Lab Blood Test CBC (₹850)">🧪 Home Blood Test CBC (₹850)</option>
                      </select>
                    </div>

                    {/* OWNER DETAILS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        value={heroName}
                        onChange={(e) => setHeroName(e.target.value)}
                        placeholder="Your Name *"
                        className="bg-[#2F312E] text-white placeholder-[#BECAB9] text-xs font-semibold px-4 py-3.5 rounded-2xl border border-white/10 focus:outline-none focus:border-[#94F990]"
                      />
                      <input
                        type="tel"
                        required
                        value={heroPhone}
                        onChange={(e) => setHeroPhone(e.target.value)}
                        placeholder="WhatsApp Number *"
                        className="bg-[#2F312E] text-white placeholder-[#BECAB9] text-xs font-semibold px-4 py-3.5 rounded-2xl border border-white/10 focus:outline-none focus:border-[#94F990]"
                      />
                    </div>

                    <input
                      type="text"
                      required
                      value={heroArea}
                      onChange={(e) => setHeroArea(e.target.value)}
                      placeholder="Your City / Area (e.g. South Delhi, Gurgaon, Noida) *"
                      className="w-full bg-[#2F312E] text-white placeholder-[#BECAB9] text-xs font-semibold px-4 py-3.5 rounded-2xl border border-white/10 focus:outline-none focus:border-[#94F990]"
                    />

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="w-full bg-[#006E1C] hover:bg-[#005313] text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-full shadow-xl shadow-[#006E1C]/40 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                      Confirm Doorstep Slot 🚀
                    </button>
                  </form>
                )}

                <div className="pt-2 flex items-center justify-between text-[11px] text-[#BECAB9] border-t border-white/10">
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#94F990]" />
                    12 Vets Live in Delhi NCR
                  </span>
                  <span>Zero Advance Payment Required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ EXTRACTED SERVICES GRID ═══════════════════ */}
        <section className="py-20 bg-[#F4F4F0] border-y border-[rgba(26,26,26,0.06)] relative gsap-reveal">
          <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="px-4 py-1 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-bold uppercase">
                Clinical Excellence At Home
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1B1C1A] tracking-tight">
                What does your pet need today?
              </h2>
              <p className="text-base sm:text-lg text-[#3F4A3C] font-normal">
                Doorstep veterinary services, cold-chain immunizations & medical grooming across Delhi NCR.
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
                    <div className="flex justify-between items-start">
                      <div
                        className={`w-16 h-16 rounded-3xl ${card.bg} flex items-center justify-center text-[#006E1C]`}
                      >
                        <span className="material-symbols-outlined text-3xl">
                          {card.icon}
                        </span>
                      </div>
                      <span className="bg-white/80 border border-black/5 px-3.5 py-1 rounded-full text-[11px] font-bold text-[#006E1C]">
                        {card.offer}
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

                  <div className="pt-8 flex items-center justify-between font-bold text-xs text-[#006E1C]">
                    <span className="bg-white/80 px-4 py-2 rounded-full border border-black/5 shadow-xs">
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
        <section className="max-w-7xl mx-auto px-6 md:px-16 py-8 gsap-reveal">
          <PetPriceCalculator onBook={(p) => book(p)} />
        </section>

        {/* ═══════════════════ TESTIMONIALS CAROUSEL ═══════════════════ */}
        <section className="py-20 bg-[#FAF9F5] overflow-hidden gsap-reveal">
          <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-12">
            <div className="max-w-xl space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1B1C1A] tracking-tight">
                What Pet Parents Say
              </h2>
              <p className="text-base sm:text-lg text-[#3F4A3C]">
                Real stories from pet families in Delhi, Noida & Gurgaon.
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
                  Veterinary Care Guides
                </h2>
                <p className="text-base sm:text-lg text-[#3F4A3C] mt-2">
                  Clinical insights & seasonal advice from certified Delhi vets.
                </p>
              </div>
              <Link
                href="/blog"
                className="text-[#006E1C] font-bold text-sm flex items-center gap-2 hover:translate-x-2 transition-transform"
              >
                <span>View All Articles</span>
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

        {/* ═══════════════════ STRAY ANIMAL INITIATIVE (STITCH SPEC) ═══════════════════ */}
        <section className="py-16 max-w-7xl mx-auto px-6 md:px-16 gsap-reveal">
          <div className="rounded-[3rem] md:rounded-[4rem] overflow-hidden bg-[#E8F5E9] p-8 md:p-14 border border-[#006E1C]/20 shadow-xl grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="inline-block px-4 py-1 bg-[#006E1C] text-white text-xs font-extrabold uppercase tracking-wider rounded-full">
                Community Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1C1A] tracking-tight">
                The Stray Animal Initiative
              </h2>
              <p className="text-xs sm:text-sm text-[#3F4A3C] leading-relaxed">
                We dedicate 15% of our medical resources to providing free emergency triage, field vaccinations, and rescue shelter partnerships across Delhi NCR.
              </p>
              <ul className="space-y-2 text-xs text-[#1B1C1A] font-semibold">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#006E1C] text-lg">health_and_safety</span>
                  <span>Field diagnostics & emergency wound care for street animals.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#006E1C] text-lg">vaccines</span>
                  <span>Preventative rabies vaccination drives in Delhi NCR.</span>
                </li>
              </ul>
              <button
                onClick={() => book("Community Stray Animal Support")}
                className="bg-[#006E1C] hover:bg-[#005313] text-white font-extrabold text-xs px-7 py-3.5 rounded-full shadow-lg shadow-[#006E1C]/30 hover:scale-105 transition-all"
              >
                Support the Initiative 🐾
              </button>
            </div>
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAiA780AgYZBVbumsih1aCRaqEbtotRmcKev89-sst3vKcdRHeePT2iBeuVWsdxog9jal4OWx4-AmmJqRhVLNj_ozA3DRFWPfFfm7H4eTgSfHdH7Hh0R7-lpgHoJ6sVMAFjlRFqI3QjJ_IyBLWGEhxZgr4TL9BxP6_3I0KZmxLfiz76l1A083Y2Lx8slBgvwra1AUqBGa9W7X2u9QvCcNIa8v6Fuc9axtelbIh9lLZ7zmIucGZ2ycF"
                alt="Veterinarian holding rescued puppy"
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════ DUAL CTA & EMERGENCY SECTION ═══════════════════ */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-16 gsap-reveal">
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

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="tel:+918800813462"
                  className="inline-flex items-center justify-center gap-2 bg-[#BA1A1A] hover:bg-[#93000A] text-white px-6 py-3.5 rounded-full font-extrabold text-xs shadow-lg shadow-red-600/30 hover:scale-105 transition-all"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  <span>Call: +91 88008 13462</span>
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
