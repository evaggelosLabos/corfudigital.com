import type { Metadata } from "next";
import { buildPageMetadata } from "../../../lib/seo";
import type { Language } from "../../../i18n/translations";
import { WebsiteDevelopmentView } from "../../../views/WebsiteDevelopmentView";

export function generateStaticParams() {
  return [{ lang: "el" }, { lang: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const validLang: Language = lang === "en" ? "en" : "el";
  return buildPageMetadata("websiteDevelopment", validLang, "kataskevi-istoselidon-kerkyra");
}

export default function Page() {
  return <WebsiteDevelopmentView />;
}
