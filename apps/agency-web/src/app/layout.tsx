import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata: Metadata = {
  title: "Corfu Digital | High-Speed Web & Direct Booking Engines",
  description: "Bespoke web development, direct booking engines, and custom software for luxury villas, boutique hotels, and restaurants in Corfu, Greece. Cut OTA commissions.",
  keywords: [
    "Corfu web design",
    "hospitality digital agency corfu",
    "��������� ����������� �������",
    "hotel booking engine corfu",
    "villa direct booking system",
    "restaurant qr menu corfu"
  ],
  authors: [{ name: "Evangelos Lampos" }],
  openGraph: {
    title: "Corfu Hospitality Tech | Digital Agency for Tourism",
    description: "Next-gen web engineering & direct booking systems for Corfu hotels and villas.",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Corfu Digital",
    "url": "https://corfudigital.com",
    "description": "Full-stack software engineering and direct booking platforms for hotels, villas, and hospitality in Corfu, Greece.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Corfu",
      "addressRegion": "Ionian Islands",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.6243",
      "longitude": "19.9217"
    },
    "knowsAbout": [
      "Hotel Web Development",
      "Villa Direct Booking Systems",
      "iCal & Channel Manager Integration",
      "Hospitality Software",
      "Corfu Local SEO"
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
