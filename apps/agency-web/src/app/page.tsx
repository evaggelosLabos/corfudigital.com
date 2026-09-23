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

export default function Home() {
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
        ? "Πλατφόρμα απευθείας κρατήσεων με 0% προμήθεια και αμφίδρομο συγχρονισμό ημερολογίων iCal με Airbnb & Booking.com."
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
        : "Dynamic zone pricing, automated airport pick-up scheduling, and driver dispatch system for Corfu summer fleet operations.",
      metrics: isEl ? "Αυτοματοποιημένο Dispatch" : "Automated Dispatch",
      link: "https://corfutransfersapp.com",
      imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Corfu Executive Airport Transfer Logistics",
    },
  ];

  const services = [
    {
      icon: <Calendar className="w-6 h-6 text-sky-600" />,
      title: t.services.s2Title,
      desc: t.services.s2Desc,
      href: "/services/villa-booking-engines",
      badge: isEl ? "Μέγιστο ROI" : "Highest ROI",
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-600" />,
      title: isEl ? "24/7 AI Ψηφιακός Concierge" : "24/7 AI Guest Concierge Assistants",
      desc: isEl 
        ? "Έξυπνοι πολυγλωσσικοί AI βοηθοί που απαντούν σε ερωτήσεις επισκεπτών, διαχειρίζονται κρατήσεις και δίνουν τοπικές συστάσεις."
        : "Smart multilingual AI assistants that answer guest questions, handle booking inquiries, and provide Corfu local recommendations.",
      href: "#ai-demo",
      badge: isEl ? "Τεχνολογία AI" : "AI Powered",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: t.services.s1Title,
      desc: t.services.s1Desc,
      href: "/services/hotel-websites",
      badge: isEl ? "Κορυφαίο SEO" : "Google Rank #1",
    },
    {
      icon: <Anchor className="w-6 h-6 text-sky-600" />,
      title: t.services.s3Title,
      desc: t.services.s3Desc,
      href: "/services/boat-tours-transfers",
      badge: isEl ? "Αυτοματισμός Στόλου" : "Fleet Automation",
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: t.services.s5Title,
      desc: t.services.s5Desc,
      href: "/services/digital-transformation",
      badge: isEl ? "Ψηφιακός Μετασχηματισμός" : "SME Digital Upgrade",
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group hover:opacity-90 transition cursor-pointer">
            <span className="text-2xl font-black tracking-tight text-stone-900">
              CORFU<span className="text-sky-600">DIGITAL</span>
            </span>
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-800 border border-sky-200/60">
              {t.nav.tagline}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium text-stone-600">
            <Link href="/services/hotel-websites" className="hover:text-sky-600 transition">{t.nav.hotels}</Link>
            <Link href="/services/villa-booking-engines" className="hover:text-sky-600 transition">{t.nav.villas}</Link>
            <Link href="/services/boat-tours-transfers" className="hover:text-sky-600 transition">{t.nav.boats}</Link>
            <Link href="/services/digital-transformation" className="hover:text-sky-600 transition">{t.nav.digitalTransformation}</Link>
            <Link href="/case-studies" className="hover:text-sky-600 transition">{t.nav.caseStudies}</Link>
            <a href="#ai-demo" className="hover:text-sky-600 transition flex items-center gap-1 text-sky-600 font-semibold">
              <Bot className="w-4 h-4" /> {t.nav.aiDemo}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a href="#contact" className="hidden sm:inline-block">
              <Button size="sm" variant="primary">{t.nav.requestProposal}</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 pb-20 sm:pb-24 bg-gradient-to-b from-sky-50/40 via-stone-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-stone-700 text-xs font-semibold shadow-xs border border-stone-200/80 mb-6 sm:mb-8">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            {t.hero.badge}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
            {t.hero.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-700">
              {t.hero.titleHighlight}
            </span> <br className="hidden sm:block" />
            {t.hero.titleLine2}
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#ai-demo" className="w-full sm:w-auto">
              <Button size="lg" variant="primary" className="w-full sm:w-auto gap-2">
                {isEl ? "Δοκιμάστε το AI Demo" : "Try Live AI Assistant"} <Bot className="w-4 h-4" />
              </Button>
            </a>
            <a href="#calculator" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {t.hero.ctaPrimary}
              </Button>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-10 border-t border-stone-200/80 text-left">
            <div className="p-2">
              <div className="text-3xl font-extrabold text-stone-900">{t.hero.metric1Val}</div>
              <div className="text-xs text-stone-500 font-medium mt-1">{t.hero.metric1Label}</div>
            </div>
            <div className="p-2">
              <div className="text-3xl font-extrabold text-sky-600">{t.hero.metric2Val}</div>
              <div className="text-xs text-stone-500 font-medium mt-1">{t.hero.metric2Label}</div>
            </div>
            <div className="p-2">
              <div className="text-3xl font-extrabold text-purple-600">{t.hero.metric4Val}</div>
              <div className="text-xs text-stone-500 font-medium mt-1">{t.hero.metric4Label}</div>
            </div>
            <div className="p-2">
              <div className="text-3xl font-extrabold text-emerald-600">Corfu</div>
              <div className="text-xs text-stone-500 font-medium mt-1">{isEl ? "Τοπικό Studio στην Κέρκυρα" : "Local Engineering Studio"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Studio Prestige Banner */}
      <FounderTrustBadge lang={lang} />

      {/* Interactive AI Assistant Demo Section */}
      <div id="ai-demo">
        <AiHospitalityAssistant lang={lang} />
      </div>

      {/* Featured Projects Showcase */}
      <section id="case-studies" className="py-24 bg-stone-50 border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">{t.portfolio.badge}</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
                {t.portfolio.heading}
              </h2>
              <p className="text-stone-600 text-sm mt-2 max-w-xl">
                {t.portfolio.subheading}
              </p>
            </div>
            <Link href="/case-studies" className="mt-4 sm:mt-0 text-sm font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1">
              {t.portfolio.viewCaseStudies} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {featuredProjects.map((project, idx) => (
              <ProjectMockupCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Savings Calculator Section */}
      <section id="calculator" className="py-24 bg-white border-b border-stone-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <CommissionCalculator lang={lang} />
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-stone-50 border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">{t.services.badge}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
              {t.services.heading}
            </h2>
            <p className="text-stone-600 text-sm mt-3">
              {t.services.subheading}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-stone-200/80 p-8 shadow-xs hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-stone-50 rounded-2xl border border-stone-100">{s.icon}</div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{s.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                </div>
                <div className="pt-4 border-t border-stone-100">
                  <Link href={s.href} className="text-sm font-bold text-sky-600 hover:text-sky-800 inline-flex items-center gap-1.5">
                    {t.services.learnMore} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Engineering Stack Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <TechStackShowcase />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">{t.contact.badge}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">{t.contact.title}</h2>
            <p className="text-stone-400 text-sm mt-3 max-w-xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="bg-stone-800/80 backdrop-blur rounded-3xl p-8 sm:p-12 border border-stone-700 max-w-xl mx-auto shadow-2xl">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">{t.contact.formName}</label>
                <input
                  type="text"
                  placeholder={isEl ? "π.χ. Corfu Azure Luxury Villa" : "e.g. Corfu Azure Luxury Villa"}
                  className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-sky-500 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">{t.contact.formEmail}</label>
                  <input
                    type="email"
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">{isEl ? "Τηλέφωνο" : "Phone"}</label>
                  <input
                    type="tel"
                    placeholder="+30 69..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">{t.contact.formProperty}</label>
                <select className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-sky-500 focus:outline-none">
                  <option value="hotel">{isEl ? "Boutique Ξενοδοχείο / Δωμάτια" : "Boutique Hotel / Rooms"}</option>
                  <option value="villa">{isEl ? "Πολυτελής Βίλα / Ενοικιαζόμενο" : "Luxury Villa / Holiday Rental"}</option>
                  <option value="boats">{isEl ? "Σκάφη / Θαλάσσιες Εκδρομές" : "Boat Trips / Sea Excursions"}</option>
                  <option value="transfers">{isEl ? "Μεταφορές Αεροδρομίου & Λιμανιού" : "Airport & Port Transfers"}</option>
                  <option value="restaurant">{isEl ? "Εστιατόριο / Beach Bar" : "Restaurant / Beach Bar"}</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">{isEl ? "Περιγραφή Έργου" : "Tell us about your goals"}</label>
                <textarea
                  rows={3}
                  placeholder={t.contact.formMessage}
                  className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-sky-500 focus:outline-none"
                ></textarea>
              </div>
              <Button size="lg" variant="primary" className="w-full justify-center mt-2">
                {t.contact.submit}
              </Button>
              <p className="text-center text-xs text-stone-400 mt-2">
                {t.contact.privacy}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-10 text-xs border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </div>
          <div className="flex gap-4 items-center">
            <span>{t.footer.location}</span>
            <span>•</span>
            <a href="mailto:vagjelis.8@gmail.com" className="hover:text-stone-300 transition">vagjelis.8@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
