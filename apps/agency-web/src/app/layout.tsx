import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://corfudigital.com"),
  title: {
    template: "%s | Corfu Digital",
    default: "Κατασκευή Ιστοσελίδων Κέρκυρα | Corfu Digital - Web Engineering & Booking Tech",
  },
  description: "Bespoke web development, zero-commission direct booking engines, Beds24 / iCal sync, and small business digital transformation in Corfu, Greece.",
  authors: [{ name: "Evangelos Lampos" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Corfu Digital",
    "url": "https://corfudigital.com",
    "description": "Full-stack software engineering, direct booking platforms, and small business digital transformation in Corfu, Greece.",
    "founder": {
      "@type": "Person",
      "name": "Evangelos Lampos",
      "jobTitle": "Lead Software Engineer & Founder",
      "alumniOf": "Ionian University"
    },
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
    "areaServed": [
      "Corfu",
      "Paxos",
      "Lefkada",
      "Ionian Islands",
      "Greece"
    ],
    "knowsAbout": [
      "Hotel Web Development",
      "Villa Direct Booking Systems",
      "iCal & Beds24 Channel Manager Integration",
      "SME Digital Transformation",
      "AADE myDATA Integration",
      "E-Commerce & Online Payments",
      "WhatsApp & SMS CRM Automation",
      "Computer Vision & Visual AI",
      "Corfu Local SEO"
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="el" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
