import { Metadata } from "next";
import { buildPageMetadata } from "../../../../lib/seo";
import { Language } from "../../../../i18n/translations";
import { VillaBookingEnginesView } from "../../../../views/VillaBookingEnginesView";

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
  return buildPageMetadata("villaBookingEngines", validLang, "services/villa-booking-engines");
}

export default async function Page() {
  return <VillaBookingEnginesView />;
}
