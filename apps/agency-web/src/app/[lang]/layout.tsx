import React from "react";
import { Language } from "../../i18n/translations";
import { LanguageProvider } from "../../context/LanguageContext";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";

// The root layout reads the language supplied for each request.
export const dynamic = "force-dynamic";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  // Unknown first path segments must not become copies of the Greek homepage.
  if (lang !== "el" && lang !== "en") {
    notFound();
  }
  const validLang: Language = lang;

  return (
    <LanguageProvider initialLang={validLang}>
      {children}
      <SiteFooter />
    </LanguageProvider>
  );
}
