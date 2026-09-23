import React from "react";
import type { Metadata } from "next";
import { Badge, Button, ProjectMockupCard } from "@repo/ui";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies & Production Work | Corfu Hospitality Tech",
  description: "Explore live production web apps and booking platforms engineered for Marcopolo Hotel, Ion Boats, Aeolina Villas, and Corfu Transfers.",
};

const allProjects = [
  {
    title: "Marcopolo Hotel",
    category: "Boutique Hotel Web",
    location: "Corfu Town, Greece",
    description: "Modern, high-performance responsive web experience for Marcopolo Hotel in Corfu. Optimized for visual storytelling, fast mobile discovery, and direct guest reservations.",
    metrics: "< 0.8s Mobile Speed",
    link: "https://marcopolocorfu.com",
    imageUrl: "https://marcopolocorfu.com/hotel/photo_079.jpg",
    imageAlt: "Marcopolo Hotel Corfu Real Photo",
  },
  {
    title: "ion-boats | Corfu Boat Trips",
    category: "Sea Excursions & Fleet",
    location: "Benitses Marina & Corfu",
    description: "Tailor-made online booking experience for private boat trips, sea tours, and boat rentals around Corfu and Paxos with instant tour discovery.",
    metrics: "Live Excursion Booking",
    link: "https://ion-boats.com",
    imageUrl: "https://ion-boats.com/trips/ion-beach-aerial.jpg",
    imageAlt: "ion-boats Corfu Boat Trips Live Photo",
  },
  {
    title: "AEOLINA Luxury Villas",
    category: "Villa Direct Engine",
    location: "Episkopiana, Corfu",
    description: "Custom direct booking platform built for luxury private villas. Synchronizes calendar availability 2-way with Airbnb and Booking.com while eliminating OTA commissions.",
    metrics: "0% OTA Commission",
    link: "https://aeolinavillas.com",
    imageUrl: "https://aeolinavillas.com/images/slider/1.webp",
    imageAlt: "AEOLINA Luxury Villas Corfu Real Photo",
  },
  {
    title: "Corfu Transfers Platform",
    category: "Transport Logistics",
    location: "Corfu Airport & Port",
    description: "Automated transport booking system featuring dynamic route pricing, Corfu airport/port pick-up scheduling, and automated driver dispatch notifications.",
    metrics: "Automated Dispatch",
    link: "https://corfutransfersapp.com",
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Corfu Executive Airport Transfer Logistics",
  },
  {
    title: "GT QR Menu & Ordering",
    category: "Hospitality & Restaurant SaaS",
    location: "Greece",
    description: "Contactless digital QR menu and table ordering platform for restaurants, beach bars, and hotel dining in Corfu with multi-language support.",
    metrics: "Multi-Language QR",
    link: "https://qr-menu.gtsystems.gr",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Restaurant Digital QR Menu and Ordering System",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-stone-700 hover:text-sky-600 transition gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Studio Home
          </Link>
          <div className="text-xl font-black tracking-tight text-stone-900">
            CORFU<span className="text-sky-600">DIGITAL</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-200/60 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Live Client Production Proof
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Software & Direct Booking Platforms Engineered for Corfu
          </h1>
          <p className="text-stone-600 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            From boutique hotels and luxury villa direct engines to boat excursion booking systems—explore how our engineering drives tangible direct revenue.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 w-full flex-1">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {allProjects.map((project, idx) => (
            <ProjectMockupCard key={idx} {...project} />
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-stone-900 to-slate-950 text-white rounded-3xl p-10 sm:p-14 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold">Ready to engineer your direct booking platform?</h3>
          <p className="text-stone-400 max-w-xl mx-auto mt-3 text-sm leading-relaxed">
            Whether you run a boutique hotel, manage luxury villas, or operate boat excursions in Corfu, we build software that captures 100% direct revenue.
          </p>
          <div className="mt-8">
            <Link href="/#contact">
              <Button size="lg" variant="primary">
                Book a Free Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
