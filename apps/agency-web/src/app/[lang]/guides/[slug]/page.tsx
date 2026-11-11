import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "../../../../components/Navbar";
import { getGuides } from "../../../../lib/guides";

type Params = Promise<{ lang: string; slug: string }>;
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, slug } = await params;
  const guide = (lang === "el" || lang === "en") ? getGuides(lang).find(item => item.slug === slug) : undefined;
  if (!guide) return {};
  return { title: { absolute: `${guide.title} | Corfu Digital` }, description: guide.description, alternates: { canonical: `https://corfudigital.com/${lang}/guides/${slug}`, languages: { el: `https://corfudigital.com/el/guides/${slug}`, en: `https://corfudigital.com/en/guides/${slug}` } } };
}
export default async function Guide({ params }: { params: Params }) {
  const { lang, slug } = await params;
  const guide = (lang === "el" || lang === "en") ? getGuides(lang).find(item => item.slug === slug) : undefined;
  if (!guide) notFound();
  const isEl = lang === "el";
  return <><Navbar /><main className="max-w-3xl mx-auto px-5 py-16 sm:py-20"><Link href={`/${lang}/blog`} className="font-semibold text-blue-700">{isEl ? "← Όλα τα άρθρα" : "← All articles"}</Link><article><h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight">{guide.title}</h1><p className="mt-5 text-xl text-slate-600 leading-relaxed">{guide.description}</p><div className="mt-10 space-y-9">{guide.sections.map(([heading, paragraph]) => <section key={heading}><h2 className="text-2xl font-bold">{heading}</h2><p className="mt-3 leading-8 text-slate-700">{paragraph}</p></section>)}</div></article><div className="mt-12 p-6 rounded-2xl bg-blue-50"><h2 className="text-xl font-bold">{isEl ? "Συζητήστε τις ανάγκες της επιχείρησής σας" : "Discuss your business needs"}</h2><Link className="inline-block mt-4 text-blue-700 font-semibold" href={guide.service}>{guide.serviceLabel} →</Link><br /><Link className="inline-block mt-3 text-blue-700 font-semibold" href={`/${lang}#contact`}>{isEl ? "Επικοινωνήστε μαζί μας →" : "Contact us →"}</Link></div></main></>;
}
