"use client";

import { useEffect, useState } from "react";

export default function StickyCallBar() {
  const [isClient, setIsClient] = useState(false);

  // ✅ Ensure browser-only execution
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ Safe conversion handler (NO SSR access)
  const handleCallClick = () => {
    if (
      typeof window !== "undefined" &&
      window.gtag_report_conversion
    ) {
      window.gtag_report_conversion();
    }
  };

  // ✅ Prevent hydration mismatch
  if (!isClient) return null;

  return (
    <div className="stickyCallBar">
      <a
        href="tel:+918800813462"
        onClick={handleCallClick}
        className="callBtn"
      >
        📞 Call
      </a>

      <a
        href="https://wa.me/918800813462?text=Hi%20I%20need%20a%20vet%20home%20visit"
        target="_blank"
        className="waBtn"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
