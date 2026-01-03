"use client";

export default function StickyCallBar() {
  return (
    <div className="stickyCallBar">
         <a
        href="tel:+918800813462"
        onClick={() => {
          if (
            typeof window !== "undefined" &&
            window.gtag_report_conversion
          ) {
            window.gtag_report_conversion();
          }
        }}
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
