"use client";

import React from "react";
import { 
  Button, Card, Badge, CommissionCalculator, 
  TechStackShowcase, ProjectMockupCard, FounderTrustBadge, 
  AiHospitalityAssistant 
} from "@repo/ui";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Calendar, DollarSign, Smartphone, Compass, Anchor, Sparkles, Bot, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { LanguageToggle } from "../components/LanguageToggle";

export function HomeView() {
  const { lang, t } = useLanguage();
  const isEl = lang === "el";

  const featuredProjects = [
    {
      title: "Marcopolo Hotel",
      category: isEl ? "Boutique Ξενοδοχείο" : "Boutique Hotel Web",
      location: isEl ? "Παλιά Πόλη Κέρκυρας" : "Corfu Old Town, Greece",
      description: isEl 
        ? "Πολυτελής ψηφιακή παρουσίαση, ταχύτατη responsive αρχιτεκτονική και απευθείας σύστημα ανακάλυψης δωματίων για το Marcopolo Hotel."
        : "Editorial visual showcase, mobile-first responsive architecture, and direct booking pathway for Marcopolo Hotel in Corfu.",
      metrics: isEl ? "< 0.8δ Ταχύτητα" : "< 0.8s Mobile Speed",
      link: "https://marcopolocorfu.com",
      imageUrl: "https://marcopolocorfu.com/hotel/photo_079.jpg",
      imageAlt: "Marcopolo Hotel Corfu Real Photo",
    },
    {
      title: "ion-boats | Corfu Boat Trips",
      category: isEl ? "Εκδρομές & Σκάφη" : "Sea Excursions & Fleet",
      location: isEl ? "Μαρίνα Μπενιτσών & Κέρκυρα" : "Benitses Marina & Corfu",
      description: isEl
        ? "Custom σύστημα online κρατήσεων ιδιωτικών σκαφών, θαλάσσιων εκδρομών σε Παξούς-Αντίπαξους και ηλιοβασιλέματος."
        : "Custom online booking engine for private boat charters, Paxos sea caves, and sunset cruises with real-time tour details.",
      metrics: isEl ? "Online Κρατήσεις" : "Live Excursion Booking",
      link: "https://ion-boats.com",
      imageUrl: "https://ion-boats.com/trips/ion-beach-aerial.jpg",
      imageAlt: "ion-boats Corfu Boat Trips Live Photo",
    },
    {
      title: "AEOLINA Luxury Villas",
      category: isEl ? "Μηχανή Κρατήσεων Βίλας" : "Villa Direct Engine",
      location: isEl ? "Επισκοπιανά, Κέρκυρα" : "Episkopiana, Corfu",
      description: isEl
        ? "Πλατφόρμα απευθείας κρατήσεων με 0% προμήθεια και αμφίδρομο συγχρονισμός ημερολογίων iCal με Airbnb & Booking.com."
        : "Zero-commission direct booking platform with 2-way Airbnb/Booking.com iCal calendar synchronization and private pool villa showcase.",
      metrics: isEl ? "0% Προμήθεια" : "0% OTA Commission",
      link: "https://aeolinavillas.com",
      imageUrl: "https://aeolinavillas.com/images/slider/1.webp",
      imageAlt: "AEOLINA Luxury Villas Corfu Real Photo",
    },
    {
      title: "Corfu Transfers Platform",
      category: isEl ? "Logistics Μεταφορών" : "Transport Logistics",
      location: isEl ? "Αεροδρόμιο & Λιμάνι Κέρκυρας" : "Corfu Airport & Port",
      description: isEl
        ? "Δυναμική τιμολόγηση ζωνών, αυτόματος προγραμματισμός παραλαβών από αεροδρόμιο και σύστημα ανάθεσης οδηγών."
        : "Zone-based dynamic pricing engine, flight-arrival scheduling, and automated driver dispatch notifications across Corfu.",
      metrics: isEl ? "Αυτοματοποιημένο Dispatch" : "Automated Dispatch",
      link: "https://corfutransfersapp.com",
      imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Corfu Airport VIP Transfers Fleet",
    },
  ];

  return (
    <div className="flex flex-col gap-24 pb-20 selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* Top Bar / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link href={`/${lang}`} className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                CORFU<span className="text-blue-600">DIGITAL</span>
              </span>
              <span className="text-[10px] text-slate-700 tracking-wider uppercase font-semibold">
                {isEl ? "Κατασκευή Ιστοσελίδων & Booking Tech" : t.nav.tagline}
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <Link href={`/${lang}/services/hotel-websites`} className="hover:text-blue-600 transition">
              {t.nav.hotels}
            </Link>
            <Link href={`/${lang}/services/villa-booking-engines`} className="hover:text-blue-600 transition">
              {t.nav.villas}
            </Link>
            <Link href={`/${lang}/services/boat-tours-transfers`} className="hover:text-blue-600 transition">
              {t.nav.boats}
            </Link>
            <Link href={`/${lang}/services/digital-transformation`} className="hover:text-blue-600 transition">
              {t.nav.digitalTransformation}
            </Link>
            <Link href={`/${lang}/case-studies`} className="hover:text-blue-600 transition">
              {t.nav.caseStudies}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <a href="#contact" className="hidden sm:inline-block">
              <Button size="sm" variant="primary">
                {t.nav.requestProposal}
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 sm:pt-16 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <Badge color="blue">{t.hero.badge}</Badge>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              {t.hero.titleLine1} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.titleLine2}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#calculator" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full justify-center">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full justify-center">
                  {t.hero.ctaSecondary}
                </Button>
              </a>
            </div>

            {/* Quick Proof Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
              <div>
                <div className="text-2xl font-black text-slate-900">{t.hero.metric1Val}</div>
                <div className="text-xs text-slate-700 font-medium">{t.hero.metric1Label}</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">{t.hero.metric2Val}</div>
                <div className="text-xs text-slate-700 font-medium">{t.hero.metric2Label}</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">{t.hero.metric3Val}</div>
                <div className="text-xs text-slate-700 font-medium">{t.hero.metric3Label}</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">{t.hero.metric4Val}</div>
                <div className="text-xs text-slate-700 font-medium">{t.hero.metric4Label}</div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center">
            <FounderTrustBadge lang={lang} />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center space-y-4 mb-12">
          <Badge color="blue">{t.services.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.services.heading}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.services.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col justify-between hover:border-blue-300 transition shadow-xs hover:shadow-md">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.services.s1Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t.services.s1Desc}
              </p>
            </div>
            <Link href={`/${lang}/services/hotel-websites`} className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center">
              {t.services.learnMore} <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Card>

          <Card className="flex flex-col justify-between hover:border-blue-300 transition shadow-xs hover:shadow-md">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.services.s2Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t.services.s2Desc}
              </p>
            </div>
            <Link href={`/${lang}/services/villa-booking-engines`} className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center">
              {t.services.learnMore} <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Card>

          <Card className="flex flex-col justify-between hover:border-blue-300 transition shadow-xs hover:shadow-md">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Anchor className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.services.s3Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t.services.s3Desc}
              </p>
            </div>
            <Link href={`/${lang}/services/boat-tours-transfers`} className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center">
              {t.services.learnMore} <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Card>

          <Card className="flex flex-col justify-between hover:border-blue-300 transition shadow-xs hover:shadow-md">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.services.s4Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t.services.s4Desc}
              </p>
            </div>
            <Link href={`/${lang}/services/digital-transformation`} className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center">
              {t.services.learnMore} <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Card>

          <Card className="flex flex-col justify-between hover:border-blue-300 transition shadow-xs hover:shadow-md md:col-span-2 lg:col-span-2">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.services.s5Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {t.services.s5Desc}
              </p>
            </div>
            <Link href={`/${lang}/case-studies`} className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center">
              {t.services.learnMore} <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Card>
        </div>
      </section>

      {/* Commission Calculator */}
      <section id="calculator" className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <CommissionCalculator />
      </section>

      {/* Featured Production Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <Badge color="blue">{t.portfolio.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
              {t.portfolio.heading}
            </h2>
            <p className="text-slate-600 mt-1">
              {t.portfolio.subheading}
            </p>
          </div>
          <Link href={`/${lang}/case-studies`}>
            <Button variant="secondary" size="sm">
              {t.portfolio.viewCaseStudies}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <ProjectMockupCard key={idx} {...project} />
          ))}
        </div>
      </section>

      {/* AI Hospitality Assistant Demo */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <AiHospitalityAssistant />
      </section>

      {/* Engineering Stack */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <TechStackShowcase />
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-14 text-white">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                {isEl ? "Επικοινωνια & Εναρξη Εργου" : "Direct Contact & Project Inquiries"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                {isEl ? "Ας συζητήσουμε για το ψηφιακό σας έργο στην Κέρκυρα." : "Let's Build Your High-Performance Platform."}
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {isEl 
                  ? "Μιλήστε απευθείας με τον μηχανικό λογισμικού Ευάγγελο Λάμπο. Είτε πρόκειται για νέα κατασκευή ιστοσελίδας, booking engine για βίλες ή ψηφιακό μετασχηματισμό της επιχείρησής σας, είμαστε εδώ."
                  : "Work directly with lead software engineer Evangelos Lampos. Whether you need a bespoke direct booking platform or business automation, get in touch today."}
              </p>

              <div className="space-y-4 pt-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:info@corfudigital.com" className="hover:text-white transition underline">
                    info@corfudigital.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:+306980000000" className="hover:text-white transition">
                    +30 (Corfu, Greece)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>{isEl ? "Κέρκυρα & Ιόνια Νησιά, Ελλάδα" : "Corfu & Ionian Islands, Greece"}</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">
                  {isEl ? "Ζητήστε Δωρεάν Έλεγχο & Προσφορά" : "Request Free Audit & Quote"}
                </h3>
                <p className="text-slate-400 text-sm">
                  {isEl 
                    ? "Στείλτε μας το website σας ή την ιδέα του project σας για έναν άμεσο τεχνικό έλεγχο ταχύτητας και πρόταση εξοικονόμησης προμηθειών."
                    : "Send us your existing website or project requirements for an instant speed audit and commission-savings plan."}
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:info@corfudigital.com?subject=Project Inquiry - Corfu Digital"
                    className="w-full inline-block"
                  >
                    <Button variant="primary" size="lg" className="w-full justify-center">
                      {isEl ? "Αποστολή Email στο info@corfudigital.com" : "Email info@corfudigital.com"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Local SEO & Schema Backlinks */}
      <footer className="border-t border-slate-200 pt-12 max-w-6xl mx-auto px-4 sm:px-6 w-full text-xs text-slate-500">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Corfu Digital • {isEl ? "Κατασκευή Ιστοσελίδων Κέρκυρα & Direct Booking Engines" : "Corfu Web Design & Booking Tech"}
          </div>
          <div className="flex items-center gap-6">
            <Link href={`/${lang}/services/hotel-websites`} className="hover:text-slate-900">
              {t.nav.hotels}
            </Link>
            <Link href={`/${lang}/services/villa-booking-engines`} className="hover:text-slate-900">
              {t.nav.villas}
            </Link>
            <Link href={`/${lang}/services/digital-transformation`} className="hover:text-slate-900">
              {t.nav.digitalTransformation}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
