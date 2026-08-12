// app/layout.jsx
import "./globals.css";

import Preloader from "@/components/Preloader";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* TAILWIND CSS CDN FOR RELIABLE RENDERING */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* GOOGLE FONTS & MATERIAL SYMBOLS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S5R5JZQ9Y4"
        />

        {/* Google Analytics + Google Ads Config */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-S5R5JZQ9Y4');
              gtag('config', 'AW-17766232863');
            `,
          }}
        />

        {/* ✅ SEO SCHEMA – VeterinaryCare */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              name: "Lifeline Pet Care",
              url: "https://www.lifelinepetcare.in",
              logo: "https://www.lifelinepetcare.in/logo3.png",
              image: "https://www.lifelinepetcare.in/logo3.png",
              telephone: "+91-8800813462",
              priceRange: "₹99 – ₹6499",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi NCR",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Delhi NCR",
              },
              openingHours: "Mo-Su 00:00-23:59",
              sameAs: [
                "https://www.instagram.com/_lifeline_pet_care/",
              ],
              description:
                "Lifeline Pet Care provides doorstep veterinary services, pet vaccination, grooming, emergency vet support, and home visits across Delhi NCR.",
            }),
          }}
        />
      </head>

      <body suppressHydrationWarning className="font-sans antialiased">
        {/* GLOBAL SITE PRELOADER */}
        <Preloader />

        {/* SITE CONTENT */}
        {children}

        {/* Google Ads Conversion Function */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                if (typeof window === 'undefined' || typeof gtag !== 'function') {
                  return true;
                }

                var callback = function () {
                  if (typeof url !== 'undefined') {
                    window.location = url;
                  }
                };

                gtag('event', 'conversion', {
                  'send_to': 'AW-17766232863/S-hNCIP1odgbEJ_mzJdC',
                  'value': 30.0,
                  'currency': 'INR',
                  'event_callback': callback
                });

                return false;
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
