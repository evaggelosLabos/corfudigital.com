import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { buildPageMetadata } from "../../../lib/seo";
import type { Language } from "../../../i18n/translations";
import { WebsiteDevelopmentView } from "../../../views/WebsiteDevelopmentView";

export function generateStaticParams() {
  return [{ lang: "el", greekSlug: "κατασκευή-ιστοσελίδων-κέρκυρα" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const validLang: Language = lang === "en" ? "en" : "el";
  return buildPageMetadata("websiteDevelopment", validLang, "κατασκευή-ιστοσελίδων-κέρκυρα");
}

export default async function Page({ params }: { params: Promise<{ lang: string; greekSlug: string }> }) {
  const { lang, greekSlug } = await params;
  if (lang === "en" && decodeURIComponent(greekSlug) === "κατασκευή-ιστοσελίδων-κέρκυρα") permanentRedirect("/en/website-development-corfu");
  if (lang !== "el" || decodeURIComponent(greekSlug) !== "κατασκευή-ιστοσελίδων-κέρκυρα") notFound();
  return <WebsiteDevelopmentView />;
}
