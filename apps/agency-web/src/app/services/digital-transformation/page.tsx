"use client";

import React from "react";
import { Badge, Button } from "@repo/ui";
import { ArrowLeft, CheckCircle2, Zap, Smartphone, Globe, Shield, CreditCard, MessageSquare, Database, Sparkles, TrendingUp, Cpu } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";
import { LanguageToggle } from "../../../components/LanguageToggle";

export default function DigitalTransformationPage() {
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

      {/* Hero */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge color="blue">
            {isEl ? "Ψηφιακός Μετασχηματισμός ΜμΕ • Τεχνολογία Επιχειρήσεων" : "SME Digital Transformation • Business Tech"}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            {isEl 
              ? "Εκσυγχρονίστε την Επιχείρησή σας στην Κέρκυρα με Custom Ψηφιακές Ροές & Αυτοματισμούς" 
              : "Modernize Your Corfu Business with Custom Digital Workflows & Automation"}
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            {isEl
              ? "Από τοπικά καταστήματα, ιατρεία και κλινικές μέχρι ενοικιάσεις αυτοκινήτων, τουριστικά γραφεία και επιχειρήσεις υπηρεσιών στην Κέρκυρα — κατασκευάζουμε ψηφιακές υποδομές που εκμηδενίζουν τη χειροκίνητη δουλειά και πολλαπλασιάζουν τα έσοδά σας."
              : "From local retail stores and clinics to car rentals, tour agencies, and service businesses across Corfu — we build custom digital infrastructure that reduces manual work and multiplies your revenue."}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg" variant="primary">
                {isEl ? "Αίτηση Δωρεάν Ψηφιακού Ελέγχου Επιχείρησης" : "Schedule a Free Digital Transformation Audit"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Digital Transformation */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "E-Commerce & Online Πληρωμές" : "E-Commerce & Digital Payments"}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {isEl
                ? "Δεχτείτε πιστωτικές κάρτες, Apple Pay, Google Pay και διασύνδεση με ελληνικές τράπεζες (Viva Wallet, Τράπεζα Πειραιώς, Alpha Bank, Eurobank) με άμεση εκκαθάριση."
                : "Accept credit cards, Apple Pay, Google Pay, and Greek bank gateways (Viva Wallet, Piraeus, Alpha Bank, Eurobank) with instant checkout."}
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "ΑΑΔΕ myDATA & Ηλεκτρονική Τιμολόγηση" : "AADE myDATA & E-Invoicing"}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {isEl
                ? "Αυτόματη έκδοση ψηφιακών αποδείξεων/τιμολογίων και άμεση διαβίβαση στην ΑΑΔΕ (myDATA) τη στιγμή της παραγγελίας ή της ολοκλήρωσης του ραντεβού."
                : "Automated electronic invoicing and live transmission to the Greek tax authority (ΑΑΔΕ myDATA) directly upon customer checkout or appointment completion."}
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "Αυτοματισμοί WhatsApp & CRM" : "WhatsApp & SMS CRM Workflows"}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {isEl
                ? "Αυτόματες υπενθυμίσεις ραντεβού, επιβεβαιώσεις κρατήσεων και αποστολή ψηφιακών παραστατικών κατευθείαν στο κινητό των πελατών μέσω WhatsApp & Viber."
                : "Automated booking reminders, customer follow-ups, dispatch alerts, and digital receipts sent straight to your clients' phones via WhatsApp & Viber."}
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {isEl ? "24/7 AI Εξυπηρέτηση Πελατών" : "24/7 AI Customer Support"}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {isEl
                ? "Έξυπνα πολυγλωσσικά AI chatbots που απαντούν αυτόματα σε ερωτήσεις πελατών, συγκεντρώνουν στοιχεία επικοινωνίας και κλείνουν ραντεβού 24 ώρες το 24ωρο."
                : "Intelligent multilingual AI chatbots that answer customer questions, qualify incoming leads, and capture phone numbers around the clock."}
            </p>
          </div>
        </div>

        {/* Detailed Solutions for Corfu Industries */}
        <div className="mt-16 bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              {isEl ? "Εξειδικευμένες Λύσεις" : "Tailored Solutions"}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              {isEl ? "Ψηφιακός Μετασχηματισμός για Κάθε Κλάδο στην Κέρκυρα" : "Transforming Every Sector in Corfu & the Ionian"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {isEl ? "Ενοικιάσεις Αυτοκινήτων & Moto" : "Car & Moto Rentals"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isEl
                  ? "Διαχείριση διαθεσιμότητας στόλου, είσπραξη online εγγύησης/προκαταβολής, ψηφιακό upload διπλώματος και αυτόματος προγραμματισμός παραδόσεων στο αεροδρόμιο."
                  : "Direct fleet management, online deposit collection, ID/driver license upload, and automated airport/port delivery scheduling."}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {isEl ? "Ιατρεία, Spas & Salons" : "Clinics, Spas & Salons"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isEl
                  ? "Online κρατήσεις ραντεβού 24/7, συγχρονισμός με Google Calendar και αυτόματες SMS/WhatsApp υπενθυμίσεις για μηδενικές ακυρώσεις."
                  : "24/7 online appointment booking, calendar sync with Google Calendar, automated SMS reminders to eliminate no-shows."}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {isEl ? "Καταστήματα & Εστίαση" : "Retail & Tavernas"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isEl
                  ? "Ανέπαφα QR Menus, συστήματα επιβράβευσης πελατών (loyalty), πληρωμές στο τραπέζι και ζωντανή ενημέρωση αποθήκης."
                  : "QR ordering menus, loyalty point systems, contactless tableside payments, and live inventory sync."}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              {isEl ? "Έτοιμοι για την Ψηφιακή Αναβάθμιση της Επιχείρησής σας;" : "Ready to Digitalize Your Corfu Business?"}
            </h3>
            <p className="text-blue-100 text-sm mt-2 max-w-xl">
              {isEl 
                ? "Μιλήστε απευθείας με τον μηχανικό λογισμικού Ευάγγελο Λάμπο για να σχεδιάσουμε το πλάνο ψηφιοποίησης της επιχείρησής σας."
                : "Talk directly with software engineer Evangelos Lampos to map out your digital roadmap and automate manual overhead."}
            </p>
          </div>
          <Link href="/#contact" className="shrink-0">
            <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 font-bold">
              {isEl ? "Ξεκινήστε την Ψηφιακή σας Αναβάθμιση" : "Start Your Digital Upgrade"}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
