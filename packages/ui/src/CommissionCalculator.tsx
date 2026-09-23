"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export const CommissionCalculator = () => {
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
            Direct Booking ROI Calculator
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              How Much Are You Giving Away to OTAs?
            </h3>
            <p className="text-stone-600 text-sm mt-2 max-w-lg leading-relaxed">
              Every season, Corfu hotels and villa owners lose 15% to 25% of their total turnover to Booking.com, Airbnb, and Viator commissions.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-stone-700">Estimated Annual Revenue:</span>
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
                <span className="text-stone-700">Average OTA Commission Rate:</span>
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
                <span>12% (Mixed Direct)</span>
                <span>18% (Standard OTA)</span>
                <span>25% (High Dependency)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="w-full lg:w-96 bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-2xl p-8 shadow-2xl flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase font-semibold text-sky-300 tracking-wider">
              Lost to Commissions Each Season
            </span>
            <div className="text-3xl sm:text-4xl font-black text-rose-300 mt-2">
              -€{otaLoss.toLocaleString()}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
                Reclaimable Direct Profit
              </span>
              <div className="text-4xl sm:text-5xl font-black text-emerald-400 mt-2">
                +€{netSaved.toLocaleString()}
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Profit kept in your pocket each year by moving guests to your own direct booking engine.
              </p>
            </div>
          </div>

          <a href="#contact" className="mt-8">
            <button className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm transition shadow-lg flex items-center justify-center gap-2 cursor-pointer">
              Eliminate Commissions <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
