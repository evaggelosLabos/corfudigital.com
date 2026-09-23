"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export interface CommissionCalculatorProps {
  lang?: "en" | "el";
}

export const CommissionCalculator: React.FC<CommissionCalculatorProps> = ({ lang = "en" }) => {
  const isEl = lang === "el";
  const [annualRevenue, setAnnualRevenue] = useState(75000);
  const [commissionRate, setCommissionRate] = useState(18);

  const otaLoss = Math.round(annualRevenue * (commissionRate / 100));
  const directProcessingCost = Math.round(annualRevenue * 0.016);
  const netSaved = otaLoss - directProcessingCost;

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-xl shadow-stone-200/50">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-200/60">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            {isEl ? "Υπολογιστής Απόδοσης (ROI) Απευθείας Κρατήσεων" : "Direct Booking ROI Calculator"}
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              {isEl ? "Πόσα Χρήματα Χάνετε Κάθε Σεζόν σε Προμήθειες;" : "How Much Are You Giving Away to OTAs?"}
            </h3>
            <p className="text-stone-600 text-sm mt-2 max-w-lg leading-relaxed">
              {isEl 
                ? "Κάθε καλοκαίρι, οι ιδιοκτήτες ξενοδοχείων και βιλών στην Κέρκυρα πληρώνουν 15% έως 25% του συνολικού τους τζίρου σε Booking.com, Airbnb και Viator."
                : "Every season, Corfu hotels and villa owners lose 15% to 25% of their total turnover to Booking.com, Airbnb, and Viator commissions."}
            </p>
          </div>

          <div className="space-y-6 pt-2">
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-stone-700">{isEl ? "Εκτιμώμενος Ετήσιος Τζίρος:" : "Estimated Annual Revenue:"}</span>
                <span className="text-sky-700 font-bold text-lg">€{annualRevenue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="350000"
                step="5000"
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-xs text-stone-600 mt-1.5 font-medium">
                <span>€10k</span>
                <span>€175k</span>
                <span>€350k+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-stone-700">{isEl ? "Μέση Προμήθεια Πλατφορμών (OTA):" : "Average OTA Commission Rate:"}</span>
                <span className="text-amber-700 font-bold text-lg">{commissionRate}%</span>
              </div>
              <input
                type="range"
                min="12"
                max="25"
                step="1"
                value={commissionRate}
                onChange={(e) => setCommissionRate(Number(e.target.value))}
                className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-xs text-stone-600 mt-1.5 font-medium">
                <span>12% (Χαμηλή)</span>
                <span>18% (Τυπική Airbnb/Booking)</span>
                <span>25% (Υψηλή/Expedia)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="w-full lg:w-96 bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-2xl p-8 border border-stone-800 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
              {isEl ? "Καθαρό Ετήσιο Όφελος" : "Estimated Annual Impact"}
            </span>

            <div className="pt-2 border-b border-stone-800 pb-4">
              <div className="text-xs text-stone-400">{isEl ? "Χαμένα σε Προμήθειες:" : "Lost to OTAs Each Season:"}</div>
              <div className="text-2xl font-bold text-rose-400 mt-0.5">-€{otaLoss.toLocaleString()}</div>
            </div>

            <div className="border-b border-stone-800 pb-4">
              <div className="text-xs text-stone-400">{isEl ? "Κόστος Direct Stripe (~1.6%):" : "Direct Card Processing (~1.6%):"}</div>
              <div className="text-sm font-semibold text-stone-300 mt-0.5">-€{directProcessingCost.toLocaleString()}</div>
            </div>

            <div>
              <div className="text-xs text-stone-400">{isEl ? "Καθαρά Χρήματα στην Τσέπη σας:" : "Pure Profit Retained:"}</div>
              <div className="text-3xl font-extrabold text-emerald-400 mt-1">
                +€{netSaved.toLocaleString()} <span className="text-xs text-emerald-300 font-normal">{isEl ? "/σεζόν" : "/year"}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800">
            <a href="#contact" className="w-full block">
              <button className="w-full py-3.5 px-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-sky-600/30">
                {isEl ? "Μηδενίστε τις Προμήθειες σας" : "Claim Your Commission Savings"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400 mt-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isEl ? "0% Επιπλέον Χρέωση Κρατήσεων" : "0% Agency Cut on Direct Stays"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
