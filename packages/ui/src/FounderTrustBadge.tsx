import React from "react";
import { ShieldCheck, CheckCircle2, ArrowUpRight, Cpu, Layers } from "lucide-react";

export interface FounderTrustBadgeProps {
  lang?: "en" | "el";
  className?: string;
}

export const FounderTrustBadge: React.FC<FounderTrustBadgeProps> = ({ lang = "en", className = "" }) => {
  const isEl = lang === "el";

  return (
    <div className={`w-full bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-between">
        {/* Left Story / Bio Column */}
        <div className="flex-1 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/60">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{isEl ? "DNA & Ευρωπαϊκή Εμπειρία" : "DNA & European Experience"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {isEl 
              ? "Ευρωπαϊκά Πρότυπα Τεχνολογίας για τον Τουρισμό της Κέρκυρας" 
              : "European Technology Standards for Corfu Hospitality"}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isEl ? (
              <>
                Ιδρυτής ο <strong>Ευάγγελος Λάμπος</strong> — συνδυάζοντας την εμπειρία ευρωπαϊκών venture προγραμμάτων (EIT Digital Venture alumni, BlueInvest) και έρευνας MSc Computer Vision με βαθιά γνώση της τουριστικής αγοράς της Κέρκυρας.
              </>
            ) : (
              <>
                Founded by <strong>Evangelos Lampos</strong> — combining the experience of European venture programs (EIT Digital Venture alumni, BlueInvest) and MSc Computer Vision research with deep local Corfu hospitality expertise.
              </>
            )}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-700 font-semibold">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> 
              {isEl ? "Έδρα στην Κέρκυρα" : "Headquarters in Corfu"}
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> 
              {isEl ? "Enterprise TypeScript" : "Enterprise TypeScript"}
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> 
              {isEl ? "0% Προμήθειες OTA" : "0% OTA Commissions"}
            </span>
          </div>
        </div>

        {/* Right Credential Badges / Cards */}
        <div className="w-full lg:w-auto shrink-0 grid grid-cols-3 gap-2.5 sm:gap-3.5">
          {/* EIT Digital */}
          <a
            href="https://www.eit.europa.eu/news-events/news/eit-digital-supports-next-generation-start-ups-east-balkan-region"
            target="_blank"
            rel="noreferrer"
            className="group bg-slate-50 hover:bg-blue-50/60 p-3 sm:p-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-xs min-w-[90px] sm:min-w-[110px]"
          >
            <div>
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs mb-2.5 group-hover:scale-105 transition">
                EU
              </div>
              <div className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-700 flex items-center gap-0.5 whitespace-nowrap">
                EIT Digital <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 shrink-0" />
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-600 font-medium mt-1 leading-tight">
                {isEl ? "Απόφοιτος Προγράμματος" : "Program Graduate"}
              </div>
            </div>
            <div className="text-[9px] sm:text-[10px] font-bold text-blue-700 uppercase tracking-wider mt-3 whitespace-nowrap">
              {isEl ? "Στήριξη →" : "Official Support →"}
            </div>
          </a>

          {/* MSc AI & CV */}
          <div className="bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-2xs min-w-[90px] sm:min-w-[110px]">
            <div>
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xs mb-2.5">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm font-black text-slate-900 whitespace-nowrap">
                MSc AI & CV
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-600 font-medium mt-1 leading-tight">
                {isEl ? "Ιόνιο Πανεπιστήμιο" : "Ionian University"}
              </div>
            </div>
            <div className="text-[9px] sm:text-[10px] font-bold text-purple-700 uppercase tracking-wider mt-3 whitespace-nowrap">
              {isEl ? "Εφαρμοσμένο AI" : "Applied AI"}
            </div>
          </div>

          {/* 5+ Production Apps */}
          <div className="bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-2xs min-w-[90px] sm:min-w-[110px]">
            <div>
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs mb-2.5">
                <Layers className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm font-black text-emerald-800 whitespace-nowrap">
                5+ Live Apps
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-600 font-medium mt-1 leading-tight">
                {isEl ? "Ενεργά Έργα Κέρκυρας" : "Active Corfu Works"}
              </div>
            </div>
            <div className="text-[9px] sm:text-[10px] font-bold text-emerald-700 uppercase tracking-wider mt-3 whitespace-nowrap">
              100% Production
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
