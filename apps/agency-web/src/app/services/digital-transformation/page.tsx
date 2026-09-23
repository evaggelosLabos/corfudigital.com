import React from "react";
import type { Metadata } from "next";
import { Badge, Button } from "@repo/ui";
import { ArrowLeft, CheckCircle2, Zap, Smartphone, Globe, Shield, CreditCard, MessageSquare, Database, Sparkles, TrendingUp, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Transformation for Small Businesses Corfu | Ψηφιακός Μετασχηματισμός ΜμΕ Κέρκυρα",
  description: "Complete digital transformation for Corfu SMEs and small businesses. Custom e-commerce, online appointment booking, WhatsApp automation, and automated AADE myDATA electronic invoicing.",
  keywords: [
    "ψηφιακος μετασχηματισμος κερκυρα",
    "digital transformation corfu",
    "κατασκευη ιστοσελιδων κερκυρα",
    "ηλεκτρονικη τιμολογηση mydata κερκυρα",
    "αυτοματισμοι επιχειρησεων κερκυρα",
    "eshop κατασκευη κερκυρα",
    "software development corfu"
  ]
};

export default function DigitalTransformationPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-blue-600">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <Link href="/" className="text-sm font-bold text-slate-900 hover:opacity-90 transition">
            CORFU<span className="text-blue-600">DIGITAL</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge color="blue">Ψηφιακός Μετασχηματισμός ΜμΕ • Small Business Tech</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            Modernize Your Corfu Business with Custom Digital Workflows & Automation
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            From local retail stores and clinics to car rentals, tour agencies, and service businesses across Corfu — we build custom digital infrastructure that reduces manual work and multiplies your revenue.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg" variant="primary">Schedule a Free Digital Transformation Audit</Button>
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
            <h3 className="text-lg font-bold text-slate-900 mb-2">E-Commerce & Digital Payments</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Accept credit cards, Apple Pay, Google Pay, and Greek bank gateways (Viva Wallet, Piraeus, Alpha Bank, Eurobank) with instant checkout.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">AADE myDATA & E-Invoicing</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Automated electronic invoicing and live transmission to the Greek tax authority (ΑΑΔΕ myDATA) directly upon customer checkout or appointment completion.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">WhatsApp & SMS CRM Workflows</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Automated booking reminders, customer follow-ups, dispatch alerts, and digital receipts sent straight to your clients&apos; phones via WhatsApp & Viber.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">24/7 AI Customer Support</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Intelligent multilingual AI chatbots that answer customer questions, qualify incoming leads, and capture phone numbers around the clock.
            </p>
          </div>
        </div>

        {/* Detailed Solutions for Corfu Industries */}
        <div className="mt-16 bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Tailored Solutions</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Transforming Every Sector in Corfu & the Ionian
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Car & Moto Rentals
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct fleet management, online deposit collection, ID/driver license upload, and automated airport/port delivery scheduling.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Clinics, Spas & Salons
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                24/7 online appointment booking, calendar sync with Google Calendar, automated SMS reminders to eliminate no-shows.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Retail & Tavernas
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                QR ordering menus, loyalty point systems, contactless tableside payments, and live inventory sync.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Digitalize Your Corfu Business?</h3>
            <p className="text-blue-100 text-sm mt-2 max-w-xl">
              Talk directly with software engineer Evangelos Lampos to map out your digital roadmap and automate manual overhead.
            </p>
          </div>
          <Link href="/#contact" className="shrink-0">
            <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 font-bold">
              Start Your Digital Upgrade
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
