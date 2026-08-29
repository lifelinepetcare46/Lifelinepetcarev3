"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import QuickLeadBar from "@/components/QuickLeadBar";

const filters = ["All", "Dogs", "Cats", "Birds", "Grooming", "Vaccination", "Emergency"];

const photos = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc9LWmMM08px7CB1tFJossP1smXHH2DGGWRseN8U15pjcpGLaZvzkUEjnJQKHP2vEIZnA-zM0nQ-iPUtHY8mWxD5--Uuojs47qFWjjnv3E_Xw2-Jy_Pf_jyB7e5IVvF97Zs9gfYZKaH-VAyoJBqulaP02SAHydoTWMYTYNKxVNhHZCYyorVgygyTTOWaScJ0yV0rMmvuj8859r904dxIDDaEdTvcvhk9A4HjwNlnqWLEEf7RPLIq9D", tag: "Dogs", label: "Golden Retriever Clinical Checkup" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3epoSNHaQgHPWcSrhdDaatNsKRMNPLvMf6uFc-qbSkbfuOVgVJawXLj3KGGqfXgZT-4lCZDY2ewdE2-dklSqyK2kbtd74MaEBLhDh65-fIQmm-ZAlb7GqJM0Z9AweuQ_O7D8wC6HN3mnq8MNJM0SX3pTPESH60QXu48qyZ_KydcdkTOCOgnYEoENdRrxZkTWVRB0cMk976vV6XTib64xqAvONWJFNsQ_0kw1OpB58f5sALLdEDTpQ", tag: "Cats", label: "Persian Cat Doorstep Spa Day" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn6yuSTBLZI7luWPuF4PFsdKYYRmRiVta9IMcpEqMid21rdbnTvGKyk8SnUDMuUjXBGbBW9q7QdYVk4GIOpgQQKPFGH0PYeLO7B2aBkHLg__hw2_uafxCbVfP9Fy7SsNmYL-gRz6qVixAOndx26HktkF-4dBeysCvhNeW28TplFC8L20FPL6TFfK6pxUWqL0QvEj7aBDaxf-eSnOY1GPU8LSE_6JzPKCM2-KE_su-w1xlN-y8DyLI2", tag: "Birds", label: "Avian Specialist Home Visit" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3I1cbucbuU4w4rFrSAaKOZV7ggfr_1vxJ8vLFfBEd2paISnaJ0z0BsCL0TnxNBA6cPVlcuBmjk1hO2GFEAzHCorUK7tPYgOj0JtcJBILhjdQAMsDmHEfAt5Jxee1wbNfHsL2KXfiA5LCQiiJspx6SBCJstmKSD4rDfxgfsnWkonR7o3hwXTSc-esO4ztzu-rJjYoxu8VrvMxtpEMQgGaQZzakjzzK_r5fuM6EDDPwV5OXbPuXQ7hI", tag: "Dogs", label: "Beagle Post-Treatment Recovery" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [openModal, setOpenModal] = useState(false);

  const visible = photos.filter((p) => active === "All" || p.tag === active);

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans text-slate-700 antialiased">
      <Navbar />

      <main className="pt-16">
        {/* HERO */}
        <section className="bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/30 backdrop-blur-md">
              Real Stories & Moments
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Our Patient Gallery 📸
            </h1>
            <p className="text-sm text-purple-100 font-medium">
              Real pets, real recoveries, real smiles. Every picture is a Lifeline doorstep story from Delhi NCR.
            </p>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="py-6 px-6 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-16 z-30">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  active === f
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* PHOTO GRID */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visible.map((p, i) => (
              <div
                key={i}
                className="glass-luxury rounded-[28px] overflow-hidden border border-slate-200 shadow-md group hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={p.src}
                    alt={p.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] font-black uppercase text-purple-300">
                      {p.tag}
                    </span>
                    <p className="text-sm font-bold text-white">{p.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
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
