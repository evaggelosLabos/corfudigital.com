import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../../components/Navbar";
import { getGuides } from "../../../lib/guides";
import type { Metadata } from "next";

type Params = Promise<{ lang: string }>;
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  const isEl = lang === "el";
  return {
    title: { absolute: isEl ? "Blog για ιστοσελίδες και κρατήσεις | Corfu Digital" : "Website and booking blog | Corfu Digital" },
    description: isEl ? "Πρακτικοί οδηγοί για ιστοσελίδες, βίλες και επιχειρήσεις στην Κέρκυρα." : "Practical guides to websites and online bookings for Corfu businesses.",
    alternates: { canonical: `https://corfudigital.com/${lang}/blog`, languages: { el: "https://corfudigital.com/el/blog", en: "https://corfudigital.com/en/blog" } },
  };
}
export default async function Guides({ params }: { params: Params }) {
  const { lang } = await params;
  if (lang !== "el" && lang !== "en") notFound();
  const isEl = lang === "el";
  return <><Navbar /><main className="max-w-5xl mx-auto px-5 py-16 sm:py-24"><p className="text-blue-700 font-bold">CORFU DIGITAL</p><h1 className="mt-3 text-4xl sm:text-5xl font-extrabold">{isEl ? "Blog για την ψηφιακή σας παρουσία" : "The Corfu Digital blog"}</h1><p className="mt-5 text-lg text-slate-600">{isEl ? "Πρακτικές απαντήσεις για ιστοσελίδες και online κρατήσεις στην Κέρκυρα." : "Practical answers about websites and online bookings for Corfu businesses."}</p><div className="mt-10 grid gap-5 md:grid-cols-3">{getGuides(lang).map(guide => <Link key={guide.slug} href={`/${lang}/guides/${guide.slug}`} className="rounded-2xl bg-white border border-slate-200 p-6 hover:border-blue-400"><h2 className="text-xl font-bold">{guide.title}</h2><p className="mt-3 text-slate-600">{guide.description}</p><span className="block mt-5 font-semibold text-blue-700">{isEl ? "Διαβάστε τον οδηγό →" : "Read the guide →"}</span></Link>)}</div></main></>;
}
