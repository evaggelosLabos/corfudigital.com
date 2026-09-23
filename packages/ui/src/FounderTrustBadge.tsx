import React from "react";
import { Award, ShieldCheck, CheckCircle2, ArrowUpRight, Cpu, Globe, Layers } from "lucide-react";

export const FounderTrustBadge = () => {
  return (
    <section className="py-20 bg-stone-100/70 border-y border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-lg shadow-stone-200/40">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Story Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs font-bold border border-sky-200/60">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                Studio DNA & European Heritage
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                European Startup Rigor for Corfu Hospitality
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Founded by <strong>Evangelos Lampos</strong> — bridging European venture innovation (EIT Digital Venture alumni, BlueInvest) and MSc Computer Vision research with deep local Corfu hospitality operations.
              </p>

              <div className="pt-2 flex items-center gap-6 text-xs text-stone-600 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Based in Corfu
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Enterprise TypeScript
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 0% OTA Commissions
                </span>
              </div>
            </div>

            {/* Right Interactive Credential Cards */}
            <div className="lg:col-span-6 grid sm:grid-cols-3 gap-4">
              {/* EIT Digital */}
              <a
                href="https://www.eit.europa.eu/news-events/news/eit-digital-supports-next-generation-start-ups-east-balkan-region"
                target="_blank"
                rel="noreferrer"
                className="group bg-stone-50 hover:bg-sky-50/50 p-5 rounded-2xl border border-stone-200/80 hover:border-sky-300 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs mb-3 group-hover:scale-105 transition">
                    EU
                  </div>
                  <div className="text-sm font-extrabold text-stone-900 group-hover:text-sky-700 flex items-center gap-1">
                    EIT Digital <ArrowUpRight className="w-3 h-3 text-stone-400 group-hover:text-sky-600" />
                  </div>
                  <div className="text-[11px] text-stone-600 font-medium mt-1 leading-snug">
                    Venture Program Alumni
                  </div>
                </div>
                <div className="text-[10px] font-bold text-sky-800 uppercase tracking-wider mt-4">
                  Official Backing &rarr;
                </div>
              </a>

              {/* MSc AI & CV */}
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xs mb-3">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-extrabold text-stone-900">
                    MSc AI & CV
                  </div>
                  <div className="text-[11px] text-stone-600 font-medium mt-1 leading-snug">
                    Ionian University (YOLO Vision)
                  </div>
                </div>
                <div className="text-[10px] font-bold text-purple-800 uppercase tracking-wider mt-4">
                  Applied AI
                </div>
              </div>

              {/* 5+ Production Apps */}
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs mb-3">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-extrabold text-emerald-800">
                    5+ Live Apps
                  </div>
                  <div className="text-[11px] text-stone-600 font-medium mt-1 leading-snug">
                    Active Corfu Stays & Fleets
                  </div>
                </div>
                <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mt-4">
                  100% Production
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
