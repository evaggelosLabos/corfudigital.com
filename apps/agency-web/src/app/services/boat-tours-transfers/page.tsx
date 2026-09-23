import React from "react";
import type { Metadata } from "next";
import { Badge, Button } from "@repo/ui";
import { ArrowLeft, CheckCircle2, Compass, Waves, Navigation, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boat Trip & Transfer Booking Platforms Corfu | Custom Tourism Software",
  description: "Custom booking software for boat rentals, private sea tours, and transfer companies in Corfu. Automated scheduling and payments.",
};

export default function BoatToursTransfersPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-blue-600">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <div className="text-sm font-bold text-slate-900">
            CORFU<span className="text-blue-600">DIGITAL</span>
          </div>
        </div>
      </header>

      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge color="blue">Maritime & Transport Tech</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            Booking Engines for Corfu Boat Tours & Transfer Fleets
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Eliminate manual WhatsApp booking chaos and high commissions from Viator or GetYourGuide. We build automated online booking platforms for boat operators and transfer providers in Corfu.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg" variant="primary">Request Custom Demo</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 w-full space-y-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <Compass className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Automated Excursion Slots</h3>
            <p className="text-slate-600 text-sm">
              Live capacity management, morning/sunset time slot booking, and instant confirmation for sea tours around Paxos, Antipaxos, and Paleokastritsa.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <Navigation className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Dynamic Route Pricing</h3>
            <p className="text-slate-600 text-sm">
              Instant distance and zone-based calculation for Corfu airport/port transfers with automatic driver notification dispatch.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <Clock className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Instant Stripe Deposits</h3>
            <p className="text-slate-600 text-sm">
              Collect upfront credit card deposits or full payments directly to your Greek bank account, eliminating last-minute cancellations.
            </p>
          </div>
        </div>

        {/* Real Production Showcase */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <Badge color="blue">Live Excursion Platform</Badge>
              <h3 className="text-xl font-bold text-slate-900 mt-2">ion-boats | Corfu Boat Trips</h3>
              <p className="text-slate-600 text-sm mt-2">
                Custom web application and trip reservation platform for private boat trips and sea adventures in Corfu.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://ion-boats.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-semibold text-sm hover:underline"
              >
                Visit ion-boats.com &rarr;
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <Badge color="green">Live Logistics Platform</Badge>
              <h3 className="text-xl font-bold text-slate-900 mt-2">Corfu Transfers Platform</h3>
              <p className="text-slate-600 text-sm mt-2">
                Comprehensive airport transfer dispatch and passenger booking engine built for high-volume Corfu summer transport.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://corfutransfersapp.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-semibold text-sm hover:underline"
              >
                Visit corfutransfersapp.com &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
