"use client";

import React from "react";
import { Badge, Button } from "@repo/ui";
import { ArrowLeft, DollarSign, Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "../components/Navbar";

export function VillaBookingEnginesView() {
  const { lang } = useLanguage();
  const isEl = lang === "el";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

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
              ? "Απευθείας κρατήσεις και πληρωμές με κάρτα, με δυνατότητες συγχρονισμού διαθεσιμότητας μέσω Beds24 ή iCal, ανάλογα με τα συστήματά σας."
              : "Accept direct reservations and card payments, with calendar synchronization options through Beds24 or iCal depending on your systems."}
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
                ? "Οι απευθείας κρατήσεις δεν έχουν προμήθεια πλατφόρμας κρατήσεων, αλλά μπορεί να υπάρχουν χρεώσεις πληρωμών, λογισμικού και προώθησης."
                : "Direct bookings avoid OTA commission, but payment processing, software and marketing may still have costs."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <Calendar className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "Αμφίδρομο iCal & Beds24 Sync" : "2-Way Calendar Sync"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Ο συγχρονισμός διαθεσιμότητας βοηθά στη διαχείριση πολλών καναλιών. Το iCal μπορεί να έχει καθυστερήσεις, ανάλογα με τα συνδεδεμένα συστήματα, και δεν εξαλείφει τον κίνδυνο διπλοκράτησης."
                : "Calendar synchronization helps manage availability across channels. iCal updates can be delayed depending on the connected systems and cannot eliminate double-booking risk."}
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

        <Link href={`/${lang}/guides/direct-bookings-villas`} className="inline-block mt-8 text-blue-700 font-semibold hover:underline">{isEl ? "Οδηγός για απευθείας κρατήσεις βίλας →" : "Guide to direct villa bookings →"}</Link>

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
