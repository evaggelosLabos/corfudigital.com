"use client";

import React from "react";
import { Badge, Button, ProjectMockupCard } from "@repo/ui";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { LanguageToggle } from "../components/LanguageToggle";

export function CaseStudiesView() {
  const { lang } = useLanguage();
  const isEl = lang === "el";

  const allProjects = [
    {
      title: "Marcopolo Hotel",
      category: isEl ? "Boutique Ξενοδοχείο" : "Boutique Hotel Web",
      location: isEl ? "Παλιά Πόλη Κέρκυρας" : "Corfu Town, Greece",
      description: isEl 
        ? "Σύγχρονη, υψηλής απόδοσης web εμπειρία για το Marcopolo Hotel στην Κέρκυρα. Βελτιστοποιημένη για εντυπωσιακή οπτική παρουσίαση, ταχύτατη πλοήγηση από κινητά και απευθείας κρατήσεις δωματίων."
        : "Modern, high-performance responsive web experience for Marcopolo Hotel in Corfu. Optimized for visual storytelling, fast mobile discovery, and direct guest reservations.",
      metrics: isEl ? "< 0.8δ Ταχύτητα Mobile" : "< 0.8s Mobile Speed",
      link: "https://marcopolocorfu.com",
      imageUrl: "https://marcopolocorfu.com/hotel/photo_079.jpg",
      imageAlt: "Marcopolo Hotel Corfu Real Photo",
    },
    {
      title: "ion-boats | Corfu Boat Trips",
      category: isEl ? "Σκάφη & Θαλάσσιες Εκδρομές" : "Sea Excursions & Fleet",
      location: isEl ? "Μαρίνα Μπενιτσών & Κέρκυρα" : "Benitses Marina & Corfu",
      description: isEl
        ? "Custom σύστημα online κρατήσεων ιδιωτικών σκαφών, θαλάσσιων εκδρομών σε Παξούς-Αντίπαξους και ηλιοβασιλέματος με ζωντανή επιλογή πακέτων."
        : "Tailor-made online booking experience for private boat trips, sea tours, and boat rentals around Corfu and Paxos with instant tour discovery.",
      metrics: isEl ? "Online Κρατήσεις Εκδρομών" : "Live Excursion Booking",
      link: "https://ion-boats.com",
      imageUrl: "https://ion-boats.com/trips/ion-beach-aerial.jpg",
      imageAlt: "ion-boats Corfu Boat Trips Live Photo",
    },
    {
      title: "AEOLINA Luxury Villas",
      category: isEl ? "Μηχανή Απευθείας Κρατήσεων Βίλας" : "Villa Direct Engine",
      location: isEl ? "Επισκοπιανά, Κέρκυρα" : "Episkopiana, Corfu",
      description: isEl
        ? "Πλατφόρμα απευθείας κρατήσεων για πολυτελείς βίλες. Αμφίδρομος συγχρονισμός διαθεσιμότητας ημερολογίων (iCal) με Airbnb και Booking.com, εξαλείφοντας τις προμήθειες τρίτων."
        : "Custom direct booking platform built for luxury private villas. Synchronizes calendar availability 2-way with Airbnb and Booking.com while eliminating OTA commissions.",
      metrics: isEl ? "0% Προμήθεια Πλατφορμών" : "0% OTA Commission",
      link: "https://aeolinavillas.com",
      imageUrl: "https://aeolinavillas.com/images/slider/1.webp",
      imageAlt: "AEOLINA Luxury Villas Corfu Real Photo",
    },
    {
      title: "Corfu Transfers Platform",
      category: isEl ? "Logistics & Στόλος Μεταφορών" : "Transport Logistics",
      location: isEl ? "Αεροδρόμιο & Λιμάνι Κέρκυρας" : "Corfu Airport & Port",
      description: isEl
        ? "Αυτοματοποιημένο σύστημα κρατήσεων μεταφορών με δυναμική τιμολόγηση ζωνών, προγραμματισμό παραλαβών από αεροδρόμιο/λιμάνι και αυτόματες ειδοποιήσεις οδηγών."
        : "Automated transport booking system featuring dynamic route pricing, Corfu airport/port pick-up scheduling, and automated driver dispatch notifications.",
      metrics: isEl ? "Αυτοματοποιημένο Dispatch" : "Automated Dispatch",
      link: "https://corfutransfersapp.com",
      imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Corfu Airport Transfers Vehicle Fleet",
    },
  ];

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
          <Badge color="blue">{isEl ? "Πραγματικά Έργα Παραγωγής" : "Production Case Studies"}</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            {isEl 
              ? "Ψηφιακές Εμπειρίες & Συστήματα Κρατήσεων στην Κέρκυρα" 
              : "High-Performance Digital Platforms in Corfu, Greece"}
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            {isEl
              ? "Δείτε πώς βοηθήσαμε ξενοδοχεία, ιδιοκτήτες πολυτελών κατοικιών, στόλους σκαφών και εταιρείες μεταφορών στην Κέρκυρα να αποκτήσουν τεχνολογικό πλεονέκτημα και να αυξήσουν τα απευθείας έσοδά τους."
              : "See how we empower boutique hotels, luxury villa hosts, boat charter fleets, and transfer operators across Corfu with high-speed web tech and zero-commission booking engines."}
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-8">
          {allProjects.map((project, idx) => (
            <ProjectMockupCard key={idx} {...project} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center flex flex-col items-center">
          <Sparkles className="w-10 h-10 text-blue-400 mb-4" />
          <h2 className="text-3xl font-extrabold tracking-tight">
            {isEl ? "Θέλετε να κατασκευάσουμε το δικό σας ψηφιακό project;" : "Want to Build Your Custom Digital Platform?"}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2 mb-8">
            {isEl
              ? "Είτε χρειάζεστε νέα ιστοσελίδα, e-shop, είτε μηχανή κρατήσεων χωρίς προμήθειες, επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες σας."
              : "Whether you need a new website, e-commerce store, or direct booking platform, contact us today to plan your project."}
          </p>
          <Link href={`/${lang}#contact`}>
            <Button size="lg" variant="primary">
              {isEl ? "Ζητήστε Προσφορά Έργου" : "Request a Project Proposal"}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
