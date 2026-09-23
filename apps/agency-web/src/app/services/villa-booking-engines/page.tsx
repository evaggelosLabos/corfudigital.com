import React from "react";
import type { Metadata } from "next";
import { Badge, Button } from "@repo/ui";
import { ArrowLeft, CheckCircle2, RefreshCw, CreditCard, ShieldCheck, Key } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Direct Booking Engines for Corfu Luxury Villas | Cut OTA Commissions",
  description: "Custom direct booking software for luxury villas in Corfu. 2-way iCal sync with Airbnb/Booking.com, instant Stripe deposits, and zero commissions.",
};

export default function VillaBookingEnginesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
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

      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge color="green">Villa Direct Booking Systems</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            Stop Paying €15,000+ in Villa Commissions Every Summer
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            We build standalone direct booking websites for Corfu villa owners and property managers that automatically sync with Airbnb and Booking.com while capturing 100% direct profit.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg" variant="primary">Calculate Your Villa Commission Savings</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 w-full space-y-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <RefreshCw className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">2-Way iCal & Channel Sync</h3>
            <p className="text-slate-600 text-sm">
              Zero double-bookings. Dates booked directly automatically block dates on Airbnb, Booking.com, and VRBO within seconds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <CreditCard className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Stripe & Direct Payouts</h3>
            <p className="text-slate-600 text-sm">
              Guests pay with Apple Pay, Google Pay, or Credit Card. Funds land directly into your bank account without OTA escrow holds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <Key className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Automated Guest Communication</h3>
            <p className="text-slate-600 text-sm">
              Automatic check-in instructions, WiFi details, directions, and upsells (private chef, boat rental) sent via email or WhatsApp.
            </p>
          </div>
        </div>

        {/* Real Example */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Badge color="green">Live Production Villa Platform</Badge>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">AEOLINA Luxury Villas</h3>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Engineered direct booking system with custom rate calculator, high-res photography layout, and seamless mobile check-out.
            </p>
          </div>
          <a
            href="https://aeolinavillas.com"
            target="_blank"
            rel="noreferrer"
            className="shrink-0"
          >
            <Button variant="secondary" size="md">Visit aeolinavillas.com</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
