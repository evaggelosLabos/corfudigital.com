"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const LanguageToggle = () => {
  const { lang } = useLanguage();
  const pathname = usePathname() || "/el";

  const getPathForLang = (targetLang: "el" | "en") => {
    if (pathname.startsWith("/en")) {
      return pathname.replace(/^\/en/, `/${targetLang}`);
    } else if (pathname.startsWith("/el")) {
      return pathname.replace(/^\/el/, `/${targetLang}`);
    }
    return `/${targetLang}${pathname === "/" ? "" : pathname}`;
  };

  const elHref = getPathForLang("el");
  const enHref = getPathForLang("en");

  return (
    <div className="inline-flex items-center bg-stone-100 p-1 rounded-full border border-stone-200 text-xs font-semibold shadow-inner">
      <Link
        href={enHref}
        className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
          lang === "en"
            ? "bg-white text-stone-900 shadow-sm font-bold"
            : "text-stone-500 hover:text-stone-900"
        }`}
        aria-label="Switch to English"
      >
        <span>🇬🇧</span> EN
      </Link>
      <Link
        href={elHref}
        className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
          lang === "el"
            ? "bg-white text-stone-900 shadow-sm font-bold"
            : "text-stone-500 hover:text-stone-900"
        }`}
        aria-label="Αλλαγή σε Ελληνικά"
      >
        <span>🇬🇷</span> ΕΛ
      </Link>
    </div>
  );
};
