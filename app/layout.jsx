// app/layout.jsx
import StickyCallBar from "@/components/StickyCallBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S5R5JZQ9Y4"
        ></script>

        {/* Google Analytics + Google Ads Config */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              // Google Analytics
              gtag('config', 'G-S5R5JZQ9Y4');

              // Google Ads
              gtag('config', 'AW-17766232863');
            `,
          }}
        />
      </head>

      <body>
        {/* SITE CONTENT */}
        {children}

        {/* ✅ STICKY MOBILE CALL BAR (ADDED, NON-BREAKING) */}
        <StickyCallBar />

        {/* Google Ads Conversion Function (GLOBAL, SAFE) */}
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
