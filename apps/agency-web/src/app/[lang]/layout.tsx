import React from "react";
import { Language } from "../../i18n/translations";
import { LanguageProvider } from "../../context/LanguageContext";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = lang === "en" ? "en" : "el";

  return (
    <LanguageProvider initialLang={validLang}>
      {children}
    </LanguageProvider>
  );
}
