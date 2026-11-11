import { notFound, permanentRedirect } from "next/navigation";

export default async function Guides({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "el" && lang !== "en") notFound();
  permanentRedirect(`/${lang}/blog`);
}
