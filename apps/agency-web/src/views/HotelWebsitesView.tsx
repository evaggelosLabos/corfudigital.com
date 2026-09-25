"use client";

import React from "react";
import { Badge, Button } from "@repo/ui";
import { ArrowLeft, CheckCircle2, Zap, Smartphone, Globe, Shield } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { LanguageToggle } from "../components/LanguageToggle";

export function HotelWebsitesView() {
  const { lang } = useLanguage();
  const isEl = lang === "el";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link href={`/${lang}`} className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-blue-600">
            <ArrowLeft className="w-4 h-4 mr-2" /> {isEl ? "Επιστροφή στην Αρχική" : "Back to Home"}
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link href={`/${lang}`} className="text-sm font-bold text-slate-900 hover:opacity-90 transition">
              CORFU<span className="text-blue-600">DIGITAL</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge color="blue">{isEl ? "Ιστοσελίδες Ξενοδοχείων Κέρκυρας" : "Corfu Hotel Web Engineering"}</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            {isEl 
              ? "Ιστοσελίδες Υψηλής Απόδοσης για Boutique Ξενοδοχεία & Resorts στην Κέρκυρα" 
              : "High-Performance Websites for Corfu Boutique Hotels & Resorts"}
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            {isEl
              ? "Αναβαθμίστε από αργά WordPress templates σε custom Next.js web εφαρμογές σχεδιασμένες να κατακτούν την 1η θέση στο Google και να μετατρέπουν επισκέπτες σε απευθείας πελάτες χωρίς προμήθειες."
              : "Upgrade from slow generic templates to custom Next.js web platforms engineered for #1 Google rankings and direct commission-free guest conversions."}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href={`/${lang}#contact`}>
              <Button size="lg" variant="primary">
                {isEl ? "Ζητήστε Έλεγχο Ταχύτητας & Προσφορά" : "Get Free Speed Audit & Proposal"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <Zap className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "Ταχύτητα Φόρτωσης < 0.8s" : "< 0.8s Load Speed"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Κατασκευή με Next.js 15 & React 19 και edge caching. Οι επισκέπτες δεν περιμένουν, μειώνοντας το bounce rate στο ελάχιστο."
                : "Engineered with Next.js 15 & edge caching. Zero waiting time for guests browsing from mobile or slow hotel Wi-Fi."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <Globe className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "Beds24 & Booking Engine" : "Direct Booking Engine"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Ενσωμάτωση μηχανής κρατήσεων με άμεση πληρωμή μέσω κάρτας και αυτόματο συγχρονισμό με Beds24, WebHotelier ή το PMS σας."
                : "Direct booking engine with instant credit card processing and real-time 2-way sync with Beds24, WebHotelier, or PMS."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <Shield className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "100% Mobile & Local SEO" : "100% Mobile & SEO"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Πλήρες Schema.org markup για Hotel/Resort, βελτιστοποίηση για αναζητήσεις στην Κέρκυρα και άψογη εμπειρία σε iPhone & Android."
                : "Comprehensive Hotel Schema.org markup, Corfu local SEO optimization, and flawless touch-first mobile UX."}
            </p>
          </div>
        </div>

        {/* Real Example */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Badge color="blue">{isEl ? "Παράδειγμα Παραγωγής" : "Production Example"}</Badge>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">Marcopolo Hotel Corfu</h3>
            <p className="text-slate-600 text-sm mt-1 max-w-xl leading-relaxed">
              {isEl
                ? "Δείτε πώς το Marcopolo Hotel στην Παλιά Πόλη Κέρκυρας πέτυχε ταχύτητα κάτω από 0.8s και άμεση αύξηση απευθείας κρατήσεων."
                : "See how Marcopolo Hotel in Corfu Old Town achieved sub-second speed and converted more organic visitors into direct guests."}
            </p>
          </div>
          <a
            href="https://marcopolocorfu.com"
            target="_blank"
            rel="noreferrer"
            className="shrink-0"
          >
            <Button variant="secondary" size="md">
              {isEl ? "Επίσκεψη στο marcopolocorfu.com" : "Visit marcopolocorfu.com"}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
