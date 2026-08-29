"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuickLeadBar from "@/components/QuickLeadBar";
import BookingModal from "@/components/BookingModal";

const articles = [
  {
    tag: "Health Tips",
    icon: "stethoscope",
    title: "7 Signs Your Dog Needs an Emergency Vet — Right Now",
    excerpt: "From labored breathing to seizures, these are the 7 critical warning signs every dog owner in Delhi must recognize immediately.",
    read: "5 min read",
    date: "July 22, 2025",
    tips: [
      "Difficulty breathing or wheezing",
      "Collapse or sudden weakness",
      "Pale, blue or white gums",
      "Seizure lasting more than 2 minutes",
    ],
  },
  {
    tag: "Vaccination",
    icon: "vaccines",
    title: "Complete Dog Vaccine Schedule in India — Guide",
    excerpt: "An age-by-age breakdown of every vaccine your dog needs from 6 weeks to adulthood, including cold-chain requirements.",
    read: "8 min read",
    date: "July 15, 2025",
    tips: [
      "6 weeks: DHPPi (first dose)",
      "9 weeks: DHPPi booster + Coronavirus",
      "12 weeks: Anti-Rabies mandatory",
      "Annual boosters for life",
    ],
  },
  {
    tag: "Grooming",
    icon: "content_cut",
    title: "Home Grooming vs. Salon: Why Doorstep Wins for Anxious Pets",
    excerpt: "Studies show 73% of cats and 49% of dogs experience significant stress in grooming salons. Home grooming removes that anxiety entirely.",
    read: "6 min read",
    date: "July 10, 2025",
    tips: [
      "Zero travel = zero stress spikes",
      "Pet stays in familiar scent environment",
      "No cage dryers or large equipment noise",
      "Certified groomers are 1-on-1 only",
    ],
  },
  {
    tag: "Nutrition",
    icon: "restaurant",
    title: "What Should Your Cat Actually Eat? A Delhi Vet's Guide",
    excerpt: "Most cats in India are fed the wrong protein ratios. Our feline specialist explains what to feed, how often, and what to never give.",
    read: "7 min read",
    date: "July 5, 2025",
    tips: [
      "Cats need minimum 40% protein diet",
      "Avoid onion, garlic & raw fish",
      "Wet food reduces UTI risk by 60%",
      "Delhi heat = increase hydration",
    ],
  },
  {
    tag: "Seasons",
    icon: "thermostat",
    title: "Protecting Your Pet in Delhi's Extreme Heat — 8 Rules",
    excerpt: "Delhi summers hit 44°C. Here's how to protect your dog or cat from heatstroke, dehydration and paw pad burns this season.",
    read: "5 min read",
    date: "June 28, 2025",
    tips: [
      "Walk only before 8AM or after 7PM",
      "Keep fresh water available 24/7",
      "Never leave pet in parked car",
      "Watch for excessive panting or drooling",
    ],
  },
  {
    tag: "First Aid",
    icon: "medical_services",
    title: "Pet First Aid Every Delhi Pet Parent Must Know",
    excerpt: "From tick removal to wound care, these first-aid steps can save your pet's life before the emergency vet arrives.",
    read: "9 min read",
    date: "June 20, 2025",
    tips: [
      "Apply firm pressure to stop bleeding",
      "Never induce vomiting without vet advice",
      "Cool heatstroke — not ice, cool water only",
      "Save vet's emergency number on your phone",
    ],
  },
];

export default function BlogPage() {
  const [expanded, setExpanded] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] font-sans antialiased min-h-screen relative flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full space-y-12">
        {/* EDITORIAL HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider border border-[#006E1C]/30">
            Care Guides & Science
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1B1C1A] tracking-tight leading-none">
            Proactive Pet <span className="text-[#006E1C] italic font-serif">Care</span> 📖
          </h1>
          <p className="text-base sm:text-lg text-[#3F4A3C] leading-relaxed">
            Science-backed pet health guides written by licensed Delhi NCR veterinarians — vaccines, nutrition, grooming & emergency protocols.
          </p>
        </div>

        {/* ARTICLES GRID (STITCH SPEC) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <article
              key={i}
              className="glass-panel rounded-[3rem] p-8 md:p-10 space-y-6 flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 ambient-shadow"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider border border-[#006E1C]/30">
                    {a.tag}
                  </span>
                  <span className="material-symbols-outlined text-2xl text-[#006E1C]">
                    {a.icon}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1B1C1A] leading-snug">
                  {a.title}
                </h3>
                <p className="text-xs text-[#3F4A3C] leading-relaxed">
                  {a.excerpt}
                </p>

                {expanded === i && (
                  <ul className="bg-[#F4F4F0] p-4 rounded-2xl space-y-2 text-xs text-[#1B1C1A] border border-black/5">
                    {a.tips.map((tip, ti) => (
                      <li key={ti} className="flex items-center gap-2">
                        <span className="text-[#006E1C] font-bold">→</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs">
                <span className="text-[#6F7A6B] font-medium">{a.read}</span>
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="bg-[#006E1C] text-white font-extrabold px-4 py-2 rounded-full text-xs hover:scale-105 transition-all"
                >
                  {expanded === i ? "Hide Tips ↑" : "Key Tips ↓"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <QuickLeadBar onBookClick={() => setOpenModal(true)} />

      {openModal && (
        <BookingModal
          service="General Consultation (₹449)"
          onClose={() => setOpenModal(false)}
        />
      )}

      <Footer />
    </div>
  );
}
