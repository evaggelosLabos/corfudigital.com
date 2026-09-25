"use client";

import React from "react";
import { Badge, Button } from "@repo/ui";
import { ArrowLeft, DollarSign, Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { LanguageToggle } from "../components/LanguageToggle";

export function VillaBookingEnginesView() {
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
          <Badge color="blue">{isEl ? "Μηχανές Κρατήσεων για Βίλες" : "Villa Booking Engine Technology"}</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            {isEl 
              ? "Μηδενίστε τις Προμήθειες Booking & Airbnb με Απευθείας Σύστημα Κρατήσεων" 
              : "Eliminate OTA Commissions with Direct Villa Booking Engines"}
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            {isEl
              ? "Απευθείας πληρωμές με κάρτα (Stripe), αμφίδρομος συγχρονισμός ημερολογίων (Beds24 & iCal) σε πραγματικό χρόνο και μηδενικός κίνδυνος διπλοκρατήσεων για πολυτελείς βίλες στην Κέρκυρα."
              : "Capture direct guest reservations with instant Stripe payments and 2-way real-time calendar synchronization (Beds24 & iCal) to prevent double-bookings."}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href={`/${lang}#contact`}>
              <Button size="lg" variant="primary">
                {isEl ? "Υπολογίστε το Κέρδος σας & Ζητήστε Έλεγχο" : "Calculate Your Commission Savings"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <DollarSign className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "0% Προμήθεια Μεσάζοντα" : "0% Middleman Fees"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Κρατήστε το 100% των εσόδων σας πληρώνοντας μόνο τη στάνταρ τραπεζική εκκαθάριση (~1.6%) αντί για 18%–20% στις πλατφόρμες."
                : "Keep 100% of your villa income by paying standard ~1.6% bank fees instead of 18%-20% middleman fees on every booking."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <Calendar className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "Αμφίδρομο iCal & Beds24 Sync" : "2-Way Calendar Sync"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Όταν μια ημερομηνία κλειστεί στην ιστοσελίδα σας, κλειδώνει αυτόματα σε Airbnb, Booking.com και VRBO σε δευτερόλεπτα."
                : "Dates booked on your direct website instantly lock on Airbnb, Booking.com, and VRBO to make double-bookings impossible."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <ShieldCheck className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "Εγγύηση Ζημιών & Προκαταβολές" : "Damage Deposits & Security"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Αυτοματοποιημένη προέγκριση εγγύησης ζημιών και είσπραξη προκαταβολής 30% τη στιγμή της κράτησης."
                : "Automated security deposit hold on guest credit cards and seamless 30% upfront booking deposits."}
            </p>
          </div>
        </div>

        {/* Real Example */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Badge color="blue">{isEl ? "Παράδειγμα Παραγωγής" : "Production Example"}</Badge>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">AEOLINA Luxury Villas Corfu</h3>
            <p className="text-slate-600 text-sm mt-1 max-w-xl leading-relaxed">
              {isEl
                ? "Δείτε πώς η AEOLINA Luxury Villas στα Επισκοπιανά Κέρκυρας διαχειρίζεται απευθείας κρατήσεις με μηδενική προμήθεια."
                : "See how AEOLINA Luxury Villas in Episkopiana, Corfu captures high-ticket direct guest stays with 0% commissions."}
            </p>
          </div>
          <a
            href="https://aeolinavillas.com"
            target="_blank"
            rel="noreferrer"
            className="shrink-0"
          >
            <Button variant="secondary" size="md">
              {isEl ? "Επίσκεψη στο aeolinavillas.com" : "Visit aeolinavillas.com"}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
