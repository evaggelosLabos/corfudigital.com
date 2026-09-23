"use client";

import React from "react";
import { Badge, Button } from "@repo/ui";
import { ArrowLeft, CheckCircle2, Calendar, ShieldCheck, DollarSign, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";
import { LanguageToggle } from "../../../components/LanguageToggle";

export default function VillaBookingEnginesPage() {
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
            <Link href="/#contact">
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
                ? "Αντί για το 15%–20% που παρακρατούν η Booking.com και το Airbnb, πληρώνετε μόνο το τυπικό ~1.6% τραπεζικής εκκαθάρισης μέσω Stripe."
                : "Instead of losing 15% to 20% to OTAs, you retain 100% of your booking rate minus standard ~1.6% Stripe credit card processing."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <RefreshCw className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "Αμφίδρομος Συγχρονισμός iCal & Beds24" : "2-Way Real-Time Sync"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Οι κρατήσεις από την ιστοσελίδα σας μπλοκάρουν αμέσως τις ημερομηνίες σε Airbnb, Booking.com και VRBO. Μηδενικός κίνδυνος διπλοκράτησης."
                : "Live 2-way sync across Airbnb, Booking.com, and VRBO ensures instant calendar updates with zero risk of double bookings."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <ShieldCheck className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "Δικά σας Στοιχεία Επισκεπτών" : "Direct Guest Retention"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Κρατάτε τα emails και τα τηλέφωνα των πελατών σας, δημιουργώντας πελατολόγιο για επαναλαμβανόμενες κρατήσεις κάθε καλοκαίρι."
                : "You own your guest data (emails, phone numbers), allowing you to re-market directly for recurring stays year after year."}
            </p>
          </div>
        </div>

        {/* Real Example */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Badge color="blue">{isEl ? "Παράδειγμα Παραγωγής" : "Production Example"}</Badge>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">AEOLINA Luxury Villas, Corfu</h3>
            <p className="text-slate-600 text-sm mt-1 max-w-xl leading-relaxed">
              {isEl
                ? "Δείτε πώς η πλατφόρμα της AEOLINA Luxury Villas στα Επισκοπιανά Κέρκυρας λαμβάνει απευθείας κρατήσεις με συγχρονισμό iCal."
                : "Explore how AEOLINA Luxury Villas in Episkopiana captures direct guest bookings with automated calendar synchronization."}
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
