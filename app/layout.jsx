// app/layout.jsx
import "./globals.css";
import Preloader from "@/components/Preloader";

export const metadata = {
  metadataBase: new URL("https://lifeline-pet-care-v3.vercel.app"),
  title: "Lifeline Pet Care | #1 Doorstep Vet Doctor, Vaccination & Grooming in Delhi NCR",
  description:
    "Book certified BVSc veterinary doctors at home across Delhi, Gurgaon, Noida, Ghaziabad & Faridabad. 2°C–8°C cold-chain vaccines, doorstep spa grooming & 24/7 emergency SOS.",
  keywords: [
    "doorstep vet delhi ncr",
    "vet doctor at home south delhi",
    "dog vaccination at home gurgaon",
    "cat doctor doorstep noida",
    "home vet consultation ghaziabad",
    "24/7 emergency vet faridabad",
    "dog grooming bath spa at home",
    "puppy 9-in-1 vaccine delhi",
    "cat fvrcp vaccine noida",
    "home blood test pickup for pets",
  ],
  authors: [{ name: "Lifeline Pet Care Medical Team" }],
  creator: "Lifeline Pet Care",
  publisher: "Lifeline Pet Care",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Lifeline Pet Care | #1 Doorstep Vet Service in Delhi NCR",
    description:
      "Licensed BVSc doctors, Zoetis 2°C–8°C vaccines & doorstep grooming spa delivered directly to your home in Delhi NCR. Call +91 88008 13462.",
    url: "https://lifeline-pet-care-v3.vercel.app",
    siteName: "Lifeline Pet Care",
    images: [
      {
        url: "https://lifeline-pet-care-v3.vercel.app/logo3.png",
        width: 1200,
        height: 630,
        alt: "Lifeline Pet Care Doorstep Veterinary Services Delhi NCR",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifeline Pet Care | Doorstep Vet Doctor Delhi NCR",
    description:
      "Certified BVSc doctors, cold-chain vaccines & organic spa care at your doorstep. Call 24/7 Helpline: +91 88008 13462.",
    images: ["https://lifeline-pet-care-v3.vercel.app/logo3.png"],
  },
  alternates: {
    canonical: "https://lifeline-pet-care-v3.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>

        {/* GOOGLE FONTS & MATERIAL SYMBOLS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S5R5JZQ9Y4" />

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

        {/* ✅ VETERINARYCARE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              name: "Lifeline Pet Care",
              url: "https://lifeline-pet-care-v3.vercel.app",
              logo: "https://lifeline-pet-care-v3.vercel.app/logo3.png",
              image: "https://lifeline-pet-care-v3.vercel.app/logo3.png",
              telephone: "+91-8800813462",
              priceRange: "₹449 – ₹6799",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi NCR",
                addressRegion: "Delhi",
                addressCountry: "IN",
              },
              areaServed: [
                "Delhi",
                "South Delhi",
                "Gurgaon",
                "Noida",
                "Ghaziabad",
                "Faridabad",
                "Dwarka",
              ],
              openingHours: "Mo-Su 00:00-23:59",
              sameAs: ["https://instagram.com/_lifeline_pet_care/"],
              description:
                "Lifeline Pet Care provides certified doorstep veterinary doctor consultations, Zoetis cold-chain vaccines, pet grooming, home blood test pickup & 24/7 emergency vet support across Delhi NCR.",
            }),
          }}
        />

        {/* ✅ FAQPAGE SCHEMA FOR GOOGLE RICH SNIPPETS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much does a doorstep vet consultation cost in Delhi NCR?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A doorstep veterinary consultation with Lifeline Pet Care costs ₹449. This includes a full physical clinical exam and a digitally signed doctor prescription sent on WhatsApp.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How quickly does the emergency vet arrive at home?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For emergency SOS calls across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad, our average doctor arrival time is 35 minutes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are pet vaccines temperature controlled during delivery?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. All vaccines (Zoetis, Virbac, Intervet) are maintained in 2°C–8°C insulated digital cold-chain carriers until administered by the doctor.",
                  },
                },
              ],
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
