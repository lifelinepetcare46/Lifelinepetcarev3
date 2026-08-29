"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import QuickLeadBar from "@/components/QuickLeadBar";

const filters = ["All", "Dogs", "Cats", "Grooming", "Vaccination", "Emergency"];

const photos = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc9LWmMM08px7CB1tFJossP1smXHH2DGGWRseN8U15pjcpGLaZvzkUEjnJQKHP2vEIZnA-zM0nQ-iPUtHY8mWxD5--Uuojs47qFWjjnv3E_Xw2-Jy_Pf_jyB7e5IVvF97Zs9gfYZKaH-VAyoJBqulaP02SAHydoTWMYTYNKxVNhHZCYyorVgygyTTOWaScJ0yV0rMmvuj8859r904dxIDDaEdTvcvhk9A4HjwNlnqWLEEf7RPLIq9D", tag: "Dogs", label: "Golden Retriever Clinical Checkup" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3epoSNHaQgHPWcSrhdDaatNsKRMNPLvMf6uFc-qbSkbfuOVgVJawXLj3KGGqfXgZT-4lCZDY2ewdE2-dklSqyK2kbtd74MaEBLhDh65-fIQmm-ZAlb7GqJM0Z9AweuQ_O7D8wC6HN3mnq8MNJM0SX3pTPESH60QXu48qyZ_KydcdkTOCOgnYEoENdRrxZkTWVRB0cMk976vV6XTib64xqAvONWJFNsQ_0kw1OpB58f5sALLdEDTpQ", tag: "Cats", label: "Persian Cat Doorstep Spa Day" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3I1cbucbuU4w4rFrSAaKOZV7ggfr_1vxJ8vLFfBEd2paISnaJ0z0BsCL0TnxNBA6cPVlcuBmjk1hO2GFEAzHCorUK7tPYgOj0JtcJBILhjdQAMsDmHEfAt5Jxee1wbNfHsL2KXfiA5LCQiiJspx6SBCJstmKSD4rDfxgfsnWkonR7o3hwXTSc-esO4ztzu-rJjYoxu8VrvMxtpEMQgGaQZzakjzzK_r5fuM6EDDPwV5OXbPuXQ7hI", tag: "Dogs", label: "Beagle Post-Treatment Recovery" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyws5kJuyMk_uM5xm3ElvGJBAr7yL0h--vpDcuxIRgdi_2aX5CwEZhjX5mt_2YvgjITQdvcbsYnj_oZzFZ9RkrGeRIDZuA62Jj6AkoITo1RX40u18gKDORbcnMwWlFs5MUtKNdkCXDzJf4aExDDy4YF27-B9Gtqcm71_wwVDYVXHFi69p6oGiVyG7aNL_EcK6kNDFDsTFEU9MKqxSm_WCuDVE2xOKRxWZ5s3YMi68AIilF2fnsicp0", tag: "Dogs", label: "Home Doctor Exam & Stethoscope" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [openModal, setOpenModal] = useState(false);

  const visible = photos.filter((p) => active === "All" || p.tag === active);

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] font-sans antialiased min-h-screen relative flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full space-y-12">
        {/* EDITORIAL HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#006E1C] text-xs font-extrabold uppercase tracking-wider border border-[#006E1C]/30">
            Real Stories & Moments
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1B1C1A] tracking-tight leading-none">
            Patient <span className="text-[#006E1C] italic font-serif">Gallery</span> 📸
          </h1>
          <p className="text-base sm:text-lg text-[#3F4A3C] leading-relaxed">
            Real pets, real recoveries, real smiles. Every picture is a Lifeline doorstep story from Delhi NCR.
          </p>
        </div>

        {/* FILTER BAR PILLS */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                active === f
                  ? "bg-[#006E1C] text-white shadow-md"
                  : "bg-[#F4F4F0] text-[#1B1C1A] hover:bg-black/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* PHOTO MASONRY/GRID (STITCH SPEC) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.map((p, i) => (
            <div
              key={i}
              className="glass-panel rounded-[2.5rem] overflow-hidden border border-[rgba(26,26,26,0.08)] shadow-lg group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="h-72 overflow-hidden relative">
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1A]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-extrabold uppercase text-[#94F990]">
                    {p.tag}
                  </span>
                  <p className="text-sm font-bold text-white leading-snug">{p.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <QuickLeadBar onBookClick={() => setOpenModal(true)} />

      {openModal && (
        <BookingModal
          service="Veterinary Home Visit (₹449)"
          onClose={() => setOpenModal(false)}
        />
      )}

      <Footer />
    </div>
  );
}
