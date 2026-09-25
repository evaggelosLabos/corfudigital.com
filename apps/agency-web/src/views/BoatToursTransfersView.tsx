"use client";

import React from "react";
import { Badge, Button } from "@repo/ui";
import { ArrowLeft, Anchor, Compass, DollarSign } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { LanguageToggle } from "../components/LanguageToggle";

export function BoatToursTransfersView() {
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
          <Badge color="blue">{isEl ? "Συστήματα Κρατήσεων Σκαφών & Μεταφορών" : "Maritime & Fleet Booking Software"}</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            {isEl 
              ? "Online Κρατήσεις για Σκάφη, Θαλάσσιες Εκδρομές & Στόλους Μεταφορών στην Κέρκυρα" 
              : "Custom Booking Platforms for Corfu Boat Charters, Sea Excursions & Fleet Transfers"}
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            {isEl
              ? "Αυτοματοποιήστε τις ημερήσιες ενοικιάσεις σκαφών, τον υπολογισμό καυσίμων, την είσπραξη προκαταβολών και τον προγραμματισμό παραλαβών από το αεροδρόμιο."
              : "Automate hourly charter reservations, fuel calculations, skipper options, online deposit collection, and airport transfer dispatch."}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href={`/${lang}#contact`}>
              <Button size="lg" variant="primary">
                {isEl ? "Σχεδιάστε την Πλατφόρμα του Στόλου σας" : "Build Your Fleet Booking Engine"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <Anchor className="w-8 h-8 text-sky-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "Ενοικιάσεις Σκαφών & Εκδρομές" : "Boat Charters & Tours"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Ημερήσιες ή ωριαίες κρατήσεις σκαφών (με ή χωρίς skipper), επιλογή προορισμών (Παξοί, Αντίπαξοι, Σπηλιές) και αυτόματος υπολογισμός τιμών."
                : "Hourly or full-day yacht & rib charters, skipper options, route selection (Paxos, Antipaxos, Blue Caves), and automated pricing."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <Compass className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "Logistics Μεταφορών & VIP Transfers" : "Airport Transfer Dispatch"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Δυναμική τιμολόγηση ανά ζώνη/περιοχή Κέρκυρας, προγραμματισμός πτήσεων και αυτόματες ειδοποιήσεις SMS/WhatsApp στους οδηγούς."
                : "Dynamic zone-based transfer pricing, automated flight arrival tracking, and instant SMS/WhatsApp driver dispatch."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <DollarSign className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "Άμεση Είσπραξη Προκαταβολής" : "Instant Online Deposits"}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEl
                ? "Εισπράξτε 20%–30% προκαταβολή μέσω κάρτας (Stripe / Viva Wallet) για να κλειδώσετε την κράτηση και να εκμηδενίσετε τις ακυρώσεις."
                : "Collect 20%-30% deposits or full upfront payments securely via Stripe or Greek bank gateways to eliminate last-minute no-shows."}
            </p>
          </div>
        </div>

        {/* Real Example */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Badge color="blue">{isEl ? "Παράδειγμα Παραγωγής" : "Production Example"}</Badge>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">ion-boats | Corfu Boat Trips</h3>
            <p className="text-slate-600 text-sm mt-1 max-w-xl leading-relaxed">
              {isEl
                ? "Δείτε πώς η πλατφόρμα της ion-boats στις Μπενίτσες Κέρκυρας διαχειρίζεται online κρατήσεις σκαφών και εκδρομών."
                : "See how ion-boats in Benitses Marina manages live excursion discovery and direct boat charter reservations."}
            </p>
          </div>
          <a
            href="https://ion-boats.com"
            target="_blank"
            rel="noreferrer"
            className="shrink-0"
          >
            <Button variant="secondary" size="md">
              {isEl ? "Επίσκεψη στο ion-boats.com" : "Visit ion-boats.com"}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
