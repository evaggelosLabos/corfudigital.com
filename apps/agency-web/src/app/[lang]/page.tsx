import { Metadata } from "next";
import { buildPageMetadata } from "../../lib/seo";
import { Language } from "../../i18n/translations";
import { HomeView } from "../../views/HomeView";

export function generateStaticParams() {
  return [{ lang: "el" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const validLang: Language = lang === "en" ? "en" : "el";
  return buildPageMetadata("home", validLang, "");
}

export default async function Page() {
  return <HomeView />;
}
