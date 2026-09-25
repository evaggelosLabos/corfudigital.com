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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Corfu Digital eliminate 15%-25% Booking.com and Airbnb fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We embed a custom direct booking engine with Stripe card processing into your hotel or villa website, paired with 2-way real-time iCal/Beds24 calendar synchronization to prevent double-bookings. You only pay standard ~1.6% bank processing instead of 18%-20% middleman commissions."
        }
      },
      {
        "@type": "Question",
        "name": "Πώς βοηθάει η Corfu Digital τον ψηφιακό μετασχηματισμό των επιχειρήσεων στην Κέρκυρα;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Κατασκευάζουμε υπερταχείες ιστοσελίδες και e-shop, αυτοματοποιούμε τη διασύνδεση με την ΑΑΔΕ myDATA για ηλεκτρονική τιμολόγηση, ενσωματώνουμε online ραντεβού και αυτοματισμούς WhatsApp CRM για μικρομεσαίες επιχειρήσεις (ΜμΕ) στην Κέρκυρα."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Corfu Digital use for website development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build with Next.js 15, React 19, TypeScript, and Tailwind CSS, hosted on high-availability European edge servers, achieving sub-second (< 0.8s) load speeds and 95+ PageSpeed scores."
        }
      }
    ]
  };

  return (
    <html lang="el" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
