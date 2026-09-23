"use client";

import React from "react";
import { Badge, Button } from "@repo/ui";
import { ArrowLeft, CheckCircle2, Zap, Smartphone, Globe, Shield } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";
import { LanguageToggle } from "../../../components/LanguageToggle";

export default function HotelWebsitesPage() {
  const { lang } = useLanguage();
  const isEl = lang === "el";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-blue-600">
            <ArrowLeft className="w-4 h-4 mr-2" /> {isEl ? "Επιστροφή στην Αρχική" : "Back to Home"}
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link href="/" className="text-sm font-bold text-slate-900 hover:opacity-90 transition">
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
              : "Upgrade from slow, generic WordPress themes to custom Next.js web applications engineered to rank on Google and convert visitors into direct, commission-free guests."}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg" variant="primary">
                {isEl ? "Αίτηση Δωρεάν Ελέγχου Ιστοσελίδας Ξενοδοχείου" : "Get a Free Hotel Website Audit"}
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
              {isEl ? "Ταχύτητα Mobile < 0.8s" : "Sub-Second Mobile Speeds"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Πάνω από το 70% των αναζητήσεων για ξενοδοχεία στην Κέρκυρα γίνονται από κινητά. Η αρχιτεκτονική Next.js επιτυγχάνει σκορ 95+ στο Google PageSpeed, μειώνοντας την εγκατάλειψη."
                : "More than 70% of hotel lookups in Corfu happen on mobile devices. Our Next.js architecture achieves 95+ PageSpeed scores, reducing bounce rates."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <Globe className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "Διγλωσσικό SEO Google" : "Dual-Language SEO Mastery"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Βελτιστοποιημένα rich snippets και hreflang tags για να κατατάσσεστε ψηλά τόσο για Έλληνες ταξιδιώτες όσο και για Ευρωπαίους τουρίστες υψηλού εισοδήματος."
                : "Engineered with optimized schema and multilingual hreflang tags to rank for both Greek commercial queries and high-paying European tourists."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <Shield className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "Απευθείας Σύνδεση Μηχανής Κρατήσεων" : "Direct Booking Integration"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Άμεση διασύνδεση με WebHotelier, Primal-RES, Beds24 ή custom Stripe ροή για να εισπράττετε κρατήσεις με μηδενική προμήθεια πλατφορμών."
                : "Seamlessly connects with your booking engine, WebHotelier, PMS, or custom direct reservation flow to capture zero-commission bookings."}
            </p>
          </div>
        </div>

        {/* Real Example */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Badge color="blue">{isEl ? "Παράδειγμα Παραγωγής" : "Production Example"}</Badge>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">Marcopolo Hotel, Corfu</h3>
            <p className="text-slate-600 text-sm mt-1 max-w-xl leading-relaxed">
              {isEl
                ? "Δείτε πώς δημιουργήσαμε μια σύγχρονη, ταχύτατη web παρουσίαση για το Marcopolo Hotel στην Παλιά Πόλη της Κέρκυρας με άμεση ανακάλυψη δωματίων."
                : "See how we created a modern, responsive web showcase for Marcopolo Hotel in Corfu, delivering fast navigation and room presentations."}
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
