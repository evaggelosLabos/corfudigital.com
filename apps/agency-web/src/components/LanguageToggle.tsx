"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex items-center bg-stone-100 p-1 rounded-full border border-stone-200 text-xs font-semibold shadow-inner">
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
          lang === "en"
            ? "bg-white text-stone-900 shadow-sm font-bold"
            : "text-stone-500 hover:text-stone-900"
        }`}
        aria-label="Switch to English"
      >
        <span>🇬🇧</span> EN
      </button>
      <button
        onClick={() => setLang("el")}
        className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
          lang === "el"
            ? "bg-white text-stone-900 shadow-sm font-bold"
            : "text-stone-500 hover:text-stone-900"
        }`}
        aria-label="Αλλαγή σε Ελληνικά"
      >
        <span>🇬🇷</span> ΕΛ
      </button>
    </div>
  );
};
