"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export function SiteFooter() {
  const { lang, t } = useLanguage();
  const isEl = lang === "el";
  return (
      <footer className="mt-12 border-t border-slate-200 bg-white w-full text-sm text-slate-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href={`/${lang}`} className="text-lg font-extrabold tracking-tight text-slate-900">CORFU<span className="text-blue-600">DIGITAL</span></Link>
              <p className="mt-3 max-w-xs leading-relaxed">{isEl ? "Σχεδιασμός και ανάπτυξη ιστοσελίδων και ψηφιακών λύσεων για επιχειρήσεις στην Κέρκυρα." : "Website development and digital solutions for businesses in Corfu."}</p>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">{isEl ? "Εξερευνήστε" : "Explore"}</h2>
              <ul className="mt-4 space-y-3">
                <li><Link className="hover:text-blue-700" href={`/${lang}`}>{isEl ? "Αρχική" : "Home"}</Link></li>
                <li><Link className="hover:text-blue-700" href={`/${lang}/case-studies`}>{isEl ? "Η δουλειά μας" : "Our work"}</Link></li>
                <li><a className="hover:text-blue-700" href={`/${lang}#contact`}>{isEl ? "Επικοινωνία" : "Contact"}</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">{isEl ? "Υπηρεσίες" : "Services"}</h2>
              <ul className="mt-4 space-y-3">
                <li><Link className="hover:text-blue-700" href={`/${lang}/${lang === "en" ? "website-development-corfu" : "κατασκευή-ιστοσελίδων-κέρκυρα"}`}>{isEl ? "Κατασκευή Ιστοσελίδων" : "Website Development"}</Link></li>
                <li><Link className="hover:text-blue-700" href={`/${lang}/services/hotel-websites`}>{t.nav.hotels}</Link></li>
                <li><Link className="hover:text-blue-700" href={`/${lang}/services/villa-booking-engines`}>{t.nav.villas}</Link></li>
                <li><Link className="hover:text-blue-700" href={`/${lang}/services/boat-tours-transfers`}>{t.nav.boats}</Link></li>
                <li><Link className="hover:text-blue-700" href={`/${lang}/services/digital-transformation`}>{t.nav.digitalTransformation}</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">{isEl ? "Μιλήστε μαζί μας" : "Get in touch"}</h2>
              <p className="mt-4 leading-relaxed">{isEl ? "Έχετε ερώτηση ή θέλετε να συζητήσουμε την ιστοσελίδα σας;" : "Have a question or want to discuss your website?"}</p>
              <a className="mt-3 inline-block font-semibold text-blue-700 hover:text-blue-900" href="mailto:info@corfudigital.com">info@corfudigital.com</a>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-5 text-xs text-slate-500">© {new Date().getFullYear()} Corfu Digital · {isEl ? "Κατασκευή ιστοσελίδων στην Κέρκυρα" : "Website development in Corfu"}</div>
        </div>
      </footer>
  );
}
