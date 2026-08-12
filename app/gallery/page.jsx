"use client";
import { useState } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const filters = ["All", "Dogs", "Cats", "Birds", "Grooming", "Vaccination", "Emergency"];

const photos = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc9LWmMM08px7CB1tFJossP1smXHH2DGGWRseN8U15pjcpGLaZvzkUEjnJQKHP2vEIZnA-zM0nQ-iPUtHY8mWxD5--Uuojs47qFWjjnv3E_Xw2-Jy_Pf_jyB7e5IVvF97Zs9gfYZKaH-VAyoJBqulaP02SAHydoTWMYTYNKxVNhHZCYyorVgygyTTOWaScJ0yV0rMmvuj8859r904dxIDDaEdTvcvhk9A4HjwNlnqWLEEf7RPLIq9D", tag: "Dogs",       label: "Golden Retriever Checkup", span: 2 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3epoSNHaQgHPWcSrhdDaatNsKRMNPLvMf6uFc-qbSkbfuOVgVJawXLj3KGGqfXgZT-4lCZDY2ewdE2-dklSqyK2kbtd74MaEBLhDh65-fIQmm-ZAlb7GqJM0Z9AweuQ_O7D8wC6HN3mnq8MNJM0SX3pTPESH60QXu48qyZ_KydcdkTOCOgnYEoENdRrxZkTWVRB0cMk976vV6XTib64xqAvONWJFNsQ_0kw1OpB58f5sALLdEDTpQ", tag: "Cats",       label: "Persian Cat Spa Day",        span: 1 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn6yuSTBLZI7luWPuF4PFsdKYYRmRiVta9IMcpEqMid21rdbnTvGKyk8SnUDMuUjXBGbBW9q7QdYVk4GIOpgQQKPFGH0PYeLO7B2aBkHLg__hw2_uafxCbVfP9Fy7SsNmYL-gRz6qVixAOndx26HktkF-4dBeysCvhNeW28TplFC8L20FPL6TFfK6pxUWqL0QvEj7aBDaxf-eSnOY1GPU8LSE_6JzPKCM2-KE_su-w1xlN-y8DyLI2", tag: "Birds",      label: "Parrot Health Visit",        span: 1 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3I1cbucbuU4w4rFrSAaKOZV7ggfr_1vxJ8vLFfBEd2paISnaJ0z0BsCL0TnxNBA6cPVlcuBmjk1hO2GFEAzHCorUK7tPYgOj0JtcJBILhjdQAMsDmHEfAt5Jxee1wbNfHsL2KXfiA5LCQiiJspx6SBCJstmKSD4rDfxgfsnWkonR7o3hwXTSc-esO4ztzu-rJjYoxu8VrvMxtpEMQgGaQZzakjzzK_r5fuM6EDDPwV5OXbPuXQ7hI", tag: "Dogs",       label: "Beagle Post-Surgery",        span: 1 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc9LWmMM08px7CB1tFJossP1smXHH2DGGWRseN8U15pjcpGLaZvzkUEjnJQKHP2vEIZnA-zM0nQ-iPUtHY8mWxD5--Uuojs47qFWjjnv3E_Xw2-Jy_Pf_jyB7e5IVvF97Zs9gfYZKaH-VAyoJBqulaP02SAHydoTWMYTYNKxVNhHZCYyorVgygyTTOWaScJ0yV0rMmvuj8859r904dxIDDaEdTvcvhk9A4HjwNlnqWLEEf7RPLIq9D", tag: "Grooming",   label: "Labrador Groom Result",      span: 1 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3epoSNHaQgHPWcSrhdDaatNsKRMNPLvMf6uFc-qbSkbfuOVgVJawXLj3KGGqfXgZT-4lCZDY2ewdE2-dklSqyK2kbtd74MaEBLhDh65-fIQmm-ZAlb7GqJM0Z9AweuQ_O7D8wC6HN3mnq8MNJM0SX3pTPESH60QXu48qyZ_KydcdkTOCOgnYEoENdRrxZkTWVRB0cMk976vV6XTib64xqAvONWJFNsQ_0kw1OpB58f5sALLdEDTpQ", tag: "Vaccination","label": "Vaccine Day Clinic",          span: 2 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn6yuSTBLZI7luWPuF4PFsdKYYRmRiVta9IMcpEqMid21rdbnTvGKyk8SnUDMuUjXBGbBW9q7QdYVk4GIOpgQQKPFGH0PYeLO7B2aBkHLg__hw2_uafxCbVfP9Fy7SsNmYL-gRz6qVixAOndx26HktkF-4dBeysCvhNeW28TplFC8L20FPL6TFfK6pxUWqL0QvEj7aBDaxf-eSnOY1GPU8LSE_6JzPKCM2-KE_su-w1xlN-y8DyLI2", tag: "Emergency",  label: "Emergency Night Response",   span: 1 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3I1cbucbuU4w4rFrSAaKOZV7ggfr_1vxJ8vLFfBEd2paISnaJ0z0BsCL0TnxNBA6cPVlcuBmjk1hO2GFEAzHCorUK7tPYgOj0JtcJBILhjdQAMsDmHEfAt5Jxee1wbNfHsL2KXfiA5LCQiiJspx6SBCJstmKSD4rDfxgfsnWkonR7o3hwXTSc-esO4ztzu-rJjYoxu8VrvMxtpEMQgGaQZzakjzzK_r5fuM6EDDPwV5OXbPuXQ7hI", tag: "Grooming",   label: "Full Pomeranian Style",      span: 1 },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  useGSAP([
    { selector: ".anim-hero",   from: { opacity: 0, y: 40 },  duration: 0.8, ease: "power3.out" },
    { selector: ".anim-filter", from: { opacity: 0, y: -20 }, duration: 0.5, ease: "back.out(1.4)", stagger: 0.06 },
    { selector: ".anim-photo",  from: { opacity: 0, scale: 0.92 }, duration: 0.65, ease: "power3.out", stagger: 0.08 },
  ]);

  const visible = photos.filter(p => active === "All" || p.tag === active);

  return (
    <div style={{ background: "var(--grad-gallery)", minHeight: "100vh", fontFamily: "var(--ff-body)" }}>
      <Navbar />
      <main style={{ paddingTop: 64 }}>

        {/* HERO */}
        <section style={{
          background: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 40%, #7c3aed 100%)",
          padding: "5rem 2rem", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 40%, rgba(255,255,255,0.08) 0%, transparent 55%)" }} />
          <div className="anim-hero" style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <span className="chip" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>Pet Stories & Moments</span>
            <h1 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(2.2rem,5vw,3.6rem)", color: "#fff", margin: "1.25rem 0 1rem", letterSpacing: "-0.03em" }}>
              Our Gallery 📸
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
              Real pets, real recoveries, real smiles. Every photo is a Lifeline story from Delhi NCR.
            </p>
          </div>
        </section>

        {/* FILTER TABS */}
        <section style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", padding: "1.75rem 2rem", position: "sticky", top: 64, zIndex: 30, borderBottom: "1px solid var(--clr-border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center" }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)} className="anim-filter" style={{
                fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.8rem",
                padding: "0.5rem 1.25rem", borderRadius: 999, border: "none", cursor: "pointer",
                background: active === f ? "#7c3aed" : "#f1f5f9",
                color: active === f ? "#fff" : "var(--clr-ink-400)",
                boxShadow: active === f ? "0 4px 16px rgba(124,58,237,0.3)" : "none",
                transition: "all 0.2s ease",
              }}>
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* MASONRY GRID */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "3.5rem 2rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}>
            {visible.map((p, i) => (
              <div key={`${p.label}-${i}`} className="anim-photo"
                style={{
                  gridColumn: p.span === 2 ? "span 2" : "span 1",
                  borderRadius: "var(--r-xl)", overflow: "hidden", position: "relative",
                  boxShadow: "var(--shadow-md)", cursor: "zoom-in",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.025)"; e.currentTarget.style.boxShadow = "var(--shadow-xl)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}>
                <img src={p.src} alt={p.label} style={{ width: "100%", height: p.span === 2 ? 340 : 260, objectFit: "cover", display: "block" }} />
                {/* Overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(15,23,42,0.75) 0%, transparent 60%)",
                  display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "1.25rem",
                }}>
                  <span style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{p.tag}</span>
                  <p style={{ fontFamily: "var(--ff-display)", fontWeight: 800, color: "#fff", fontSize: "0.95rem" }}>{p.label}</p>
                </div>
              </div>
            ))}
          </div>

          {visible.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--clr-ink-300)" }}>
              <p style={{ fontSize: "3rem" }}>🐾</p>
              <p style={{ fontFamily: "var(--ff-display)", fontWeight: 700, marginTop: "1rem" }}>No photos in this category yet.</p>
            </div>
          )}
        </section>

        {/* INSTAGRAM CTA */}
        <section style={{ background: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%)", padding: "4rem 2rem", textAlign: "center" }}>
          <p style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📷</p>
          <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#fff", marginBottom: "0.75rem" }}>
            Follow us on Instagram
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", marginBottom: "2rem" }}>
            Daily pet care tips, behind-the-scenes moments & happy patient stories.
          </p>
          <a href="https://instagram.com/_lifeline_pet_care/" target="_blank" rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#fff", color: "#4c1d95",
              fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "0.9rem",
              padding: "0.875rem 2rem", borderRadius: 999,
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)", transition: "all 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "none"}>
            @_lifeline_pet_care →
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
