"use client";

import React from "react";
import { Badge, Button, ProjectMockupCard } from "@repo/ui";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { LanguageToggle } from "../../components/LanguageToggle";

export default function CaseStudiesPage() {
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
      imageAlt: "Corfu Executive Airport Transfer Logistics",
    },
    {
      title: "GT QR Menu & Ordering",
      category: isEl ? "Ψηφιακό Μενού & Εστίαση" : "Hospitality & Restaurant SaaS",
      location: isEl ? "Ελλάδα & Κέρκυρα" : "Greece",
      description: isEl
        ? "Ανέπαφος ψηφιακός κατάλογος QR και πλατφόρμα παραγγελιών για εστιατόρια, beach bars και ξενοδοχεία στην Κέρκυρα με πολυγλωσσική υποστήριξη."
        : "Contactless digital QR menu and table ordering platform for restaurants, beach bars, and hotel dining in Corfu with multi-language support.",
      metrics: isEl ? "Πολυγλωσσικό QR Menu" : "Multi-Language QR",
      link: "https://qr-menu.gtsystems.gr",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Restaurant Digital QR Menu and Ordering System",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-stone-700 hover:text-sky-600 transition gap-2">
            <ArrowLeft className="w-4 h-4" /> {isEl ? "Επιστροφή στην Αρχική" : "Back to Studio Home"}
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link href="/" className="text-xl font-black tracking-tight text-stone-900 hover:opacity-90 transition">
              CORFU<span className="text-sky-600">DIGITAL</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-200/60 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            {isEl ? "Αποδεδειγμένα Έργα Παραγωγής" : "Live Client Production Proof"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            {isEl ? "Λογισμικό & Μηχανές Κρατήσεων Σχεδιασμένες για την Κέρκυρα" : "Software & Direct Booking Platforms Engineered for Corfu"}
          </h1>
          <p className="text-stone-600 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            {isEl 
              ? "Από boutique ξενοδοχεία και πολυτελείς βίλες μέχρι συστήματα κρατήσεων σκαφών και μεταφορών — δείτε πώς η μηχανική μας φέρνει μετρήσιμα απευθείας έσοδα."
              : "From boutique hotels and luxury villa direct engines to boat excursion booking systems—explore how our engineering drives tangible direct revenue."}
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

        {/* Bottom CTA */}
        <div className="mt-20 bg-stone-900 text-white rounded-3xl p-10 sm:p-14 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold">
            {isEl ? "Θέλετε παρόμοια αποτελέσματα για το κατάλυμά σας;" : "Want Similar Direct Booking Results for Your Business?"}
          </h3>
          <p className="text-stone-400 text-sm mt-3 max-w-xl mx-auto">
            {isEl 
              ? "Επικοινωνήστε σήμερα μαζί μας για έναν δωρεάν έλεγχο ταχύτητας και σχεδιασμό της δικής σας μηχανής απευθείας κρατήσεων."
              : "Let's build a dedicated, zero-commission booking pathway or digital platform tailored for your Corfu hospitality operations."}
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/#contact">
              <Button size="lg" variant="primary">
                {isEl ? "Ξεκινήστε το Δικό σας Έργο" : "Start Your Project Today"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
