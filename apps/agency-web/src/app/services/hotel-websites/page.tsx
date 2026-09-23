import React from "react";
import type { Metadata } from "next";
import { Badge, Button } from "@repo/ui";
import { ArrowLeft, CheckCircle2, Zap, Smartphone, Globe, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hotel Website Development & Booking Systems Corfu | Kataskevi Istoselidon Kerkyra",
  description: "Bespoke hotel web development in Corfu. Sub-second load times, direct booking pathways, PMS integration, and high Google organic ranking.",
  keywords: [
    "κατασκευη ιστοσελιδων κερκυρα",
    "ιστοσελιδες ξενοδοχειων κερκυρα",
    "hotel website design corfu",
    "hotel web agency corfu",
    "corfu hotel direct bookings"
  ]
};

export default function HotelWebsitesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-blue-600">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <div className="text-sm font-bold text-slate-900">
            CORFU<span className="text-blue-600">DIGITAL</span>
          </div>
        </div>
      </header>

      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge color="blue">Corfu Hotel Web Engineering</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            High-Performance Websites for Corfu Boutique Hotels & Resorts
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Upgrade from slow, generic WordPress themes to custom Next.js web applications engineered to rank on Google and convert visitors into direct, commission-free guests.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg" variant="primary">Get a Free Hotel Website Audit</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <Zap className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Sub-Second Mobile Speeds</h3>
            <p className="text-slate-600 text-sm">
              More than 70% of hotel lookups in Corfu happen on mobile devices. Our Next.js architecture achieves 95+ PageSpeed scores, reducing bounce rates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <Globe className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Dual-Language SEO Mastery</h3>
            <p className="text-slate-600 text-sm">
              Engineered with optimized schema and multilingual hreflang tags to rank for both Greek commercial queries and high-paying European tourists.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <Shield className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Booking Integration</h3>
            <p className="text-slate-600 text-sm">
              Seamlessly connects with your booking engine, PMS, or custom direct reservation flow to capture zero-commission bookings.
            </p>
          </div>
        </div>

        {/* Real Example */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Badge color="blue">Production Example</Badge>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">Marcopolo Hotel, Corfu</h3>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              See how we created a modern, responsive web showcase for Marcopolo Hotel in Corfu, delivering fast navigation and room presentations.
            </p>
          </div>
          <a
            href="https://marcopolocorfu.com"
            target="_blank"
            rel="noreferrer"
            className="shrink-0"
          >
            <Button variant="secondary" size="md">Visit marcopolocorfu.com</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
