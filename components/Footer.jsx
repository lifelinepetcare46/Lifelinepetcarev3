import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Pricing & Packages" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "🩺 Vet Home Visit — ₹449",
  "💉 Anti-Rabies Shot — ₹999",
  "🐶 Puppy Vaccine Package — ₹6,799",
  "✂️ Grooming Spa — from ₹799",
  "🚑 Emergency ICU Care",
  "🧪 Lab Tests at Home",
];

const coverage = [
  "Delhi — All Zones",
  "Noida & Greater Noida",
  "Gurgaon & Manesar",
  "Faridabad & Ghaziabad",
];

export default function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "#94a3b8", fontFamily: "var(--font-body)" }}>
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <div className="space-y-4">
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.35rem", color: "#34d399", display: "block" }}>
            Lifeline Pet Care 🐾
          </span>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "#64748b" }}>
            Delhi NCR's most trusted home veterinary service — certified doctors, cold-chain vaccines &amp; organic grooming at your doorstep.
          </p>
          {/* Social / contact icons */}
          <div className="flex gap-3 pt-2">
            <a href="https://wa.me/918800813462" target="_blank" rel="noreferrer"
              style={{ width: 36, height: 36, background: "#059669", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.8rem", textDecoration: "none" }}>
              W
            </a>
            <a href="https://instagram.com/_lifeline_pet_care/" target="_blank" rel="noreferrer"
              style={{ width: 36, height: 36, background: "#7c3aed", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.9rem", textDecoration: "none" }}>
              📷
            </a>
            <a href="tel:+918800813462"
              style={{ width: 36, height: 36, background: "#1e293b", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", border: "1px solid #334155" }}>
              📞
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#34d399", marginBottom: "1rem" }}>
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}
                  style={{ fontSize: "0.875rem", color: "#64748b", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#e2e8f0"}
                  onMouseLeave={e => e.currentTarget.style.color = "#64748b"}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#34d399", marginBottom: "1rem" }}>
            Our Services
          </h4>
          <ul className="space-y-2">
            {services.map((s, i) => (
              <li key={i} style={{ fontSize: "0.875rem", color: "#64748b" }}>{s}</li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4">
          <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#34d399" }}>
            24/7 Helpline
          </h4>
          <a href="tel:+918800813462"
            style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.4rem", color: "#fff", display: "block", textDecoration: "none", letterSpacing: "-0.02em" }}>
            +91 88008 13462
          </a>
          <p style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.6 }}>
            Calls answered 24/7. Emergency vet dispatch within 30–60 minutes.
          </p>
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#34d399", marginBottom: "0.6rem" }}>
              Coverage
            </p>
            <ul className="space-y-1">
              {coverage.map((c, i) => (
                <li key={i} style={{ fontSize: "0.8rem", color: "#64748b" }}>📍 {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{ borderTop: "1px solid #1e293b" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p style={{ fontSize: "0.8rem", color: "#475569" }}>
            © {new Date().getFullYear()} Lifeline Pet Care. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {[{ href: "/privacy", label: "Privacy Policy" }, { href: "/terms", label: "Terms of Service" }].map(({ href, label }) => (
              <Link key={href} href={href}
                style={{ fontSize: "0.8rem", color: "#475569", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.color = "#e2e8f0"}
                onMouseLeave={e => e.currentTarget.style.color = "#475569"}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
