"use client";
import { useState } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles = [
  {
    tag: "Health Tips", color: "#059669", bg: "#ecfdf5", icon: "🐕",
    title: "7 Signs Your Dog Needs an Emergency Vet — Right Now",
    excerpt: "From labored breathing to seizures, these are the 7 critical warning signs every dog owner in Delhi must recognize immediately.",
    read: "5 min read", date: "July 22, 2025",
    tips: ["Difficulty breathing or wheezing", "Collapse or sudden weakness", "Pale, blue or white gums", "Seizure lasting more than 2 minutes"],
  },
  {
    tag: "Vaccination", color: "#ea580c", bg: "#fff7ed", icon: "💉",
    title: "Complete Dog Vaccine Schedule in India — 2025 Guide",
    excerpt: "An age-by-age breakdown of every vaccine your dog needs from 6 weeks to adulthood, including cold-chain requirements in Delhi's climate.",
    read: "8 min read", date: "July 15, 2025",
    tips: ["6 weeks: DHPPi (first dose)", "9 weeks: DHPPi booster + Coronavirus", "12 weeks: Anti-Rabies mandatory", "Annual boosters for life"],
  },
  {
    tag: "Grooming", color: "#7c3aed", bg: "#f5f3ff", icon: "✂️",
    title: "Home Grooming vs. Salon: Why Doorstep Wins for Anxious Pets",
    excerpt: "Studies show 73% of cats and 49% of dogs experience significant stress in grooming salons. Home grooming removes that anxiety entirely.",
    read: "6 min read", date: "July 10, 2025",
    tips: ["Zero travel = zero stress spikes", "Pet stays in familiar scent environment", "No cage dryers or large equipment noise", "Certified groomers are 1-on-1 only"],
  },
  {
    tag: "Nutrition", color: "#2563eb", bg: "#eff6ff", icon: "🥗",
    title: "What Should Your Cat Actually Eat? A Delhi Vet's Guide",
    excerpt: "Most cats in India are fed the wrong protein ratios. Our feline specialist explains what to feed, how often, and what to never give.",
    read: "7 min read", date: "July 5, 2025",
    tips: ["Cats need minimum 40% protein diet", "Avoid onion, garlic & raw fish", "Wet food reduces UTI risk by 60%", "Delhi heat = increase hydration"],
  },
  {
    tag: "Seasons", color: "#0d9488", bg: "#f0fdfa", icon: "🌡️",
    title: "Protecting Your Pet in Delhi's Extreme Heat — 8 Must-Know Rules",
    excerpt: "Delhi summers hit 44°C. Here's how to protect your dog or cat from heatstroke, dehydration and paw pad burns this season.",
    read: "5 min read", date: "June 28, 2025",
    tips: ["Walk only before 8AM or after 7PM", "Keep fresh water available 24/7", "Never leave pet in parked car", "Watch for excessive panting or drooling"],
  },
  {
    tag: "First Aid", color: "#dc2626", bg: "#fef2f2", icon: "🚑",
    title: "Pet First Aid Every Delhi Pet Parent Must Know",
    excerpt: "From tick removal to wound care, these first-aid steps can save your pet's life before the emergency vet arrives.",
    read: "9 min read", date: "June 20, 2025",
    tips: ["Apply firm pressure to stop bleeding", "Never induce vomiting without vet advice", "Cool heatstroke — not ice, cool water only", "Save vet's emergency number on your phone"],
  },
];

export default function BlogPage() {
  const [expanded, setExpanded] = useState(null);

  useGSAP([
    { selector: ".anim-hero",    from: { opacity: 0, y: 40 }, duration: 0.8, ease: "power3.out" },
    { selector: ".anim-article", from: { opacity: 0, y: 50 }, duration: 0.65, ease: "power3.out", stagger: 0.1 },
    { selector: ".anim-news",    from: { opacity: 0, y: 30 }, duration: 0.6, ease: "power3.out" },
  ]);

  return (
    <div style={{ background: "var(--grad-blog)", minHeight: "100vh", fontFamily: "var(--ff-body)" }}>
      <Navbar />
      <main style={{ paddingTop: 64 }}>

        {/* HERO */}
        <section style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #2563eb 100%)",
          padding: "5rem 2rem", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 75% 50%, rgba(255,255,255,0.07) 0%, transparent 55%)" }} />
          <div className="anim-hero" style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <span className="chip" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>Expert Vet Advice</span>
            <h1 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(2.2rem,5vw,3.6rem)", color: "#fff", margin: "1.25rem 0 1rem", letterSpacing: "-0.03em" }}>
              Pet Care Blog 📖
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
              Science-backed pet health articles written by our licensed Delhi NCR veterinarians — vaccines, nutrition, grooming & emergency care.
            </p>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="chip">Latest Articles</span>
            <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--clr-ink-900)", marginTop: "1rem" }}>
              Written by Our Vets
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {articles.map((a, i) => (
              <article key={i} className="anim-article card" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                  <span style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", background: a.bg, color: a.color, border: `1px solid ${a.bg}`, padding: "4px 12px", borderRadius: 999 }}>
                    {a.tag}
                  </span>
                  <span style={{ fontSize: "1.5rem" }}>{a.icon}</span>
                </div>

                {/* Content */}
                <h3 style={{ fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "1.1rem", color: "var(--clr-ink-900)", lineHeight: 1.35, marginBottom: "0.75rem" }}>{a.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--clr-ink-300)", lineHeight: 1.7, flex: 1, marginBottom: "1.25rem" }}>{a.excerpt}</p>

                {/* Expandable key takeaways */}
                {expanded === i && (
                  <ul style={{ background: a.bg, borderRadius: "var(--r-md)", padding: "1rem 1.25rem", marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {a.tips.map((tip, ti) => (
                      <li key={ti} style={{ display: "flex", gap: "0.5rem", fontSize: "0.82rem", color: "var(--clr-ink-500)" }}>
                        <span style={{ color: a.color, fontWeight: 700, flexShrink: 0 }}>→</span>{tip}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Footer */}
                <div style={{ paddingTop: "1rem", borderTop: "1px solid var(--clr-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ fontSize: "0.75rem", color: "var(--clr-ink-200)" }}>{a.date}</p>
                    <p style={{ fontSize: "0.72rem", color: "var(--clr-ink-200)", marginTop: 2 }}>{a.read}</p>
                  </div>
                  <button onClick={() => setExpanded(expanded === i ? null : i)} style={{
                    fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "0.78rem",
                    color: a.color, background: a.bg, border: `1px solid ${a.bg}`,
                    padding: "0.4rem 1rem", borderRadius: 999, cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}>
                    {expanded === i ? "Hide Tips ↑" : "Key Tips ↓"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="anim-news" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 100%)", padding: "5rem 2rem", textAlign: "center" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <p style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📬</p>
            <h2 style={{ fontFamily: "var(--ff-display)", fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#fff", marginBottom: "0.75rem" }}>
              Get Free Vet Tips Weekly
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", marginBottom: "2rem" }}>
              Join 4,500+ Delhi NCR pet parents receiving our free weekly pet health newsletter.
            </p>
            <form onSubmit={e => e.preventDefault()} style={{ display: "flex", gap: "0.75rem", maxWidth: 440, margin: "0 auto", flexWrap: "wrap" }}>
              <input type="email" placeholder="your@email.com" required style={{
                flex: 1, minWidth: 200, padding: "0.875rem 1.25rem", borderRadius: 999,
                border: "1.5px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.1)",
                color: "#fff", fontFamily: "var(--ff-body)", fontSize: "0.9rem", outline: "none",
              }} />
              <button type="submit" className="btn btn-white" style={{ padding: "0.875rem 1.5rem", fontSize: "0.875rem" }}>
                Subscribe Free
              </button>
            </form>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", marginTop: "0.75rem" }}>No spam. Unsubscribe anytime.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
