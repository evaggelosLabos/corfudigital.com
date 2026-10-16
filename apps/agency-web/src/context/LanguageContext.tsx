"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, TranslationDictionary } from "../i18n/translations";
import { usePathname, useRouter } from "next/navigation";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ 
  children: React.ReactNode;
  initialLang?: Language;
}> = ({ children, initialLang = "el" }) => {
  const pathname = usePathname();
  const router = useRouter();

  const resolvedLang: Language = pathname?.startsWith("/en")
    ? "en"
    : pathname?.startsWith("/el")
    ? "el"
    : initialLang;

  const [lang, setLangState] = useState<Language>(resolvedLang);

  // Keep state in sync with URL
  useEffect(() => {
    if (pathname?.startsWith("/en")) {
      setLangState("en");
    } else if (pathname?.startsWith("/el")) {
      setLangState("el");
    } else {
      setLangState(initialLang);
    }
  }, [pathname, initialLang]);

  const activeLang: Language = pathname?.startsWith("/en")
    ? "en"
    : pathname?.startsWith("/el")
    ? "el"
    : lang;

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (!pathname) return;

    let targetPath = pathname;
    if (pathname.startsWith("/en")) {
      targetPath = pathname.replace(/^\/en/, `/${newLang}`);
    } else if (pathname.startsWith("/el")) {
      targetPath = pathname.replace(/^\/el/, `/${newLang}`);
    } else {
      targetPath = `/${newLang}${pathname === "/" ? "" : pathname}`;
    }

    router.push(targetPath);
  };

  const toggleLang = () => {
    setLang(activeLang === "en" ? "el" : "en");
  };

  return (
    <LanguageContext.Provider value={{ lang: activeLang, setLang, toggleLang, t: translations[activeLang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
