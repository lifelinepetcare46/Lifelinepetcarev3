import "./globals.css";

export const metadata = {
  title: "Life Line Pet Care",
  description: "Compassionate Care for Your Beloved Pets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
