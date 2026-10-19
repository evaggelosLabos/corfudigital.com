"use client";

import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Compass, Search, Smartphone } from "lucide-react";
import { Badge, Button } from "@repo/ui";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "../components/Navbar";

const projects = [
  { name: "Marcopolo Hotel", url: "https://marcopolocorfu.com", type: { el: "Ξενοδοχείο", en: "Hotel" } },
  { name: "AEOLINA Luxury Villas", url: "https://aeolinavillas.com", type: { el: "Βίλες", en: "Villas" } },
  { name: "ion-boats", url: "https://ion-boats.com", type: { el: "Ενοικιάσεις σκαφών", en: "Boat rentals" } },
  { name: "Corfu Transfers", url: "https://corfutransfersapp.com", type: { el: "Μεταφορές", en: "Transfers" } },
];

const faqItems = {
  el: [
    {
      question: "Γιατί να επιλέξω custom ιστοσελίδα αντί για WordPress;",
      answer: "Δεν είναι πάντα καλύτερη η μία επιλογή από την άλλη. Το WordPress μπορεί να καλύψει οικονομικά μια απλή ιστοσελίδα και να διευκολύνει την ενημέρωση περιεχομένου. Η custom κατασκευή έχει νόημα όταν χρειάζεστε ιδιαίτερο σχεδιασμό, ειδικές λειτουργίες ή διασυνδέσεις και μεγαλύτερο έλεγχο στην εμπειρία και την τεχνική υλοποίηση. Συνήθως απαιτεί μεγαλύτερη αρχική επένδυση και τεχνική υποστήριξη. Επιλέγουμε λύση με βάση τις ανάγκες και τον προϋπολογισμό σας.",
    },
    {
      question: "Χρειάζεται πραγματικά η επιχείρησή μου ιστοσελίδα σήμερα;",
      answer: "Εξαρτάται από το πώς βρίσκουν και επιλέγουν οι πελάτες σας τις υπηρεσίες σας. Τα social media και οι πλατφόρμες προβολής είναι χρήσιμα κανάλια, ενώ η δική σας ιστοσελίδα συγκεντρώνει σε ένα μέρος τις υπηρεσίες, τις πληροφορίες, το portfolio και τους τρόπους επικοινωνίας σας. Μπορεί να βοηθήσει τον πελάτη να σας αξιολογήσει και να επικοινωνήσει απευθείας, αλλά από μόνη της δεν εγγυάται επισκεψιμότητα ή υψηλή θέση στη Google.",
    },
    {
      question: "Αφού η τεχνητή νοημοσύνη μπορεί να φτιάξει ιστοσελίδες, γιατί να απευθυνθώ σε επαγγελματία;",
      answer: "Τα εργαλεία AI μπορούν να βοηθήσουν στη δημιουργία κειμένου, σχεδίων και κώδικα. Η επαγγελματική συνεργασία προσθέτει ανάλυση των αναγκών σας, επιλογή της κατάλληλης λύσης, έλεγχο σε πραγματικές συσκευές, προσβασιμότητα, ασφάλεια, SEO και σωστή σύνδεση με κρατήσεις ή άλλα συστήματα. Επίσης, κάποιος αναλαμβάνει την επίλυση προβλημάτων και τη συντήρηση μετά τη δημοσίευση. Το AI μπορεί να είναι μέρος της διαδικασίας, όχι υποκατάστατο της ευθύνης για το τελικό αποτέλεσμα.",
    },
    {
      question: "Αν το διαμέρισμά μου βρίσκεται ήδη στο Booking.com, γιατί να φτιάξω δική του ιστοσελίδα;",
      answer: "Το Booking.com μπορεί να σας φέρνει επισκέπτες που αναζητούν κατάλυμα. Η δική σας ιστοσελίδα λειτουργεί συμπληρωματικά: παρουσιάζει πληρέστερα το κατάλυμα και την περιοχή, απαντά σε ερωτήσεις και δίνει έναν άμεσο τρόπο επικοινωνίας σε επισκέπτες που σας βρίσκουν από άλλα κανάλια ή επιστρέφουν. Για απευθείας κρατήσεις χρειάζονται κατάλληλη μηχανή κρατήσεων, ενημερωμένη διαθεσιμότητα και τρόποι να προσελκύσετε επισκέπτες. Η ιστοσελίδα δεν αντικαθιστά αυτόματα το Booking.com ούτε εγγυάται κρατήσεις.",
    },
  ],
  en: [
    {
      question: "Why choose a custom website instead of WordPress?",
      answer: "Neither option is always better. WordPress can be a cost-effective fit for a straightforward site and makes content updates accessible. A custom build makes sense when you need a distinctive design, tailored features or integrations, and more control over the experience and implementation. It usually requires a larger initial investment and technical support. The right choice depends on your needs and budget.",
    },
    {
      question: "Does my business really need a website today?",
      answer: "It depends on how your customers discover and evaluate your services. Social media and listing platforms are useful channels, while your own website brings your services, information, portfolio, and contact options together in one place. It can help customers assess your business and contact you directly, but a website alone does not guarantee traffic or a high Google ranking.",
    },
    {
      question: "If AI can build websites, why hire a professional?",
      answer: "AI tools can help create copy, designs, and code. A professional adds discovery, solution planning, checks on real devices, accessibility, security, SEO, and reliable connections to booking or business systems. They can also take responsibility for troubleshooting and maintenance after launch. AI can be part of the process, but it does not replace accountability for the finished result.",
    },
    {
      question: "My apartment is already on Booking.com. Why build its own website?",
      answer: "Booking.com can bring guests who are searching for accommodation. Your own website complements it by presenting the property and area in more detail, answering questions, and giving guests a direct way to contact you if they find you through another channel or return later. Direct bookings also require a suitable booking engine, up-to-date availability, and ways to attract visitors. A website does not automatically replace Booking.com or guarantee bookings.",
    },
  ],
};

export function WebsiteDevelopmentView() {
  const { lang } = useLanguage();
  const isEl = lang === "el";
  const pageFaqs = faqItems[lang];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageFaqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  const features = [
    { icon: Building2, title: isEl ? "Ιστοσελίδες επιχειρήσεων" : "Business websites", text: isEl ? "Καθαρή παρουσίαση υπηρεσιών, περιεχομένου και στοιχείων επικοινωνίας, προσαρμοσμένη στην ταυτότητα της επιχείρησής σας." : "A clear presentation of your services, content, and contact details, shaped around your business identity." },
    { icon: Smartphone, title: isEl ? "Σχεδιασμός για κινητά" : "Designed for mobile", text: isEl ? "Εύκολη πλοήγηση και γρήγορη πρόσβαση στις βασικές πληροφορίες από κινητά, tablet και υπολογιστές." : "Simple navigation and quick access to key information on phones, tablets, and desktop computers." },
    { icon: Search, title: isEl ? "Τεχνική βάση για SEO" : "SEO-ready foundations", text: isEl ? "Σωστή δομή σελίδων, μεταδεδομένα, εσωτερικοί σύνδεσμοι και sitemap, ώστε οι μηχανές αναζήτησης να κατανοούν το περιεχόμενο." : "Structured pages, metadata, internal links, and a sitemap help search engines understand your content." },
    { icon: Compass, title: isEl ? "Λύσεις για τουρισμό" : "Tourism-focused solutions", text: isEl ? "Ιστοσελίδες και λειτουργίες για ξενοδοχεία, βίλες, δραστηριότητες και μεταφορές, με δυνατότητα online αιτημάτων ή κρατήσεων." : "Websites and features for hotels, villas, activities, and transfers, with options for online enquiries or bookings." },
  ];
  const steps = isEl
    ? ["Συζητάμε τους στόχους, το κοινό και το περιεχόμενο.", "Σχεδιάζουμε τη δομή και την εμφάνιση της ιστοσελίδας.", "Υλοποιούμε, ελέγχουμε σε κινητά και υπολογιστές και δημοσιεύουμε.", "Σας βοηθάμε με τις επόμενες βελτιώσεις και την ενημέρωση περιεχομένου."]
    : ["We discuss your goals, audience, and content.", "We plan the site structure and visual direction.", "We build, review on mobile and desktop, and launch.", "We help with follow-up improvements and content updates."];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <section className="bg-white border-b border-slate-200 py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <Badge color="blue">{isEl ? "Corfu Digital · Κέρκυρα" : "Corfu Digital · Corfu, Greece"}</Badge>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            {isEl ? "Κατασκευή ιστοσελίδων στην Κέρκυρα" : "Website design and development in Corfu"}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed text-slate-600">
            {isEl ? "Σχεδιάζουμε και κατασκευάζουμε σύγχρονες ιστοσελίδες για επιχειρήσεις της Κέρκυρας — από την πρώτη παρουσίαση της εταιρείας σας μέχρι σύνθετες λύσεις για τουρισμό και κρατήσεις." : "We design and build modern websites for Corfu businesses—from a clear company presence to more advanced tourism and booking solutions."}
          </p>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
            <Link href={`/${lang}#contact`}><Button size="lg" variant="primary">{isEl ? "Συζητήστε το έργο σας" : "Discuss your project"}<ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
            <Link href={`/${lang}/case-studies`}><Button size="lg" variant="secondary">{isEl ? "Δείτε επιλεγμένα έργα" : "Explore selected projects"}</Button></Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-700">{isEl ? "Τι μπορούμε να αναλάβουμε" : "What we can build"}</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{isEl ? "Ιστοσελίδα σχεδιασμένη γύρω από τη δική σας επιχείρηση" : "A website shaped around your business"}</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">{isEl ? "Κάθε έργο ξεκινά από τις ανάγκες σας και από το τι χρειάζεται να βρίσκει και να κάνει ο επισκέπτης." : "Every project starts with your needs and what visitors need to find and do."}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
            <Icon className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 text-slate-600 leading-relaxed">{text}</p>
          </article>)}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
            <div><p className="text-sm font-bold uppercase tracking-wider text-blue-300">{isEl ? "Επιλεγμένα έργα" : "Selected work"}</p><h2 className="mt-2 text-3xl sm:text-4xl font-bold">{isEl ? "Ψηφιακά έργα για επιχειρήσεις στην Κέρκυρα" : "Digital projects for Corfu businesses"}</h2></div>
            <Link href={`/${lang}/case-studies`} className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-semibold">{isEl ? "Όλα τα έργα" : "All case studies"}<ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => <a key={project.name} href={project.url} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 bg-slate-800 p-5 hover:border-blue-400 transition">
              <span className="text-sm text-blue-300">{project.type[lang]}</span><h3 className="mt-2 text-lg font-bold">{project.name}</h3><span className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300">{isEl ? "Επίσκεψη ιστοσελίδας" : "Visit website"}<ArrowRight className="w-4 h-4" /></span>
            </a>)}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl mb-8"><p className="text-sm font-bold uppercase tracking-wider text-blue-700">{isEl ? "Η διαδικασία" : "How we work"}</p><h2 className="mt-2 text-3xl sm:text-4xl font-bold">{isEl ? "Από την ιδέα στη δημοσίευση" : "From first discussion to launch"}</h2></div>
        <ol className="space-y-4">{steps.map((step, index) => <li key={step} className="flex gap-4 rounded-xl bg-white border border-slate-200 p-5"><span className="flex w-9 h-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">{index + 1}</span><span className="pt-1 text-slate-700 leading-relaxed">{step}</span><CheckCircle2 className="w-5 h-5 text-emerald-600 ml-auto mt-1 shrink-0" /></li>)}</ol>
        <div className="mt-10 rounded-2xl bg-blue-50 border border-blue-100 p-7 sm:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div><h2 className="text-2xl font-bold">{isEl ? "Έχετε μια ιδέα για την επιχείρησή σας;" : "Have a website idea for your business?"}</h2><p className="mt-2 text-slate-600">{isEl ? "Πείτε μας τι χρειάζεστε και θα συζητήσουμε τα επόμενα βήματα." : "Tell us what you need and we’ll talk through the next steps."}</p></div>
          <Link href={`/${lang}#contact`} className="shrink-0"><Button size="lg" variant="primary">{isEl ? "Επικοινωνία" : "Get in touch"}<ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
        </div>
      </section>
      <footer className="bg-white border-t border-slate-200">
        <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">{isEl ? "Συχνές ερωτήσεις" : "Frequently asked questions"}</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{isEl ? "Πριν ξεκινήσουμε την ιστοσελίδα σας" : "Before we build your website"}</h2>
          </div>
          <div className="space-y-3">
            {pageFaqs.map(({ question, answer }) => (
              <details key={question} className="group rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 open:bg-white open:shadow-sm">
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-slate-900 marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">
                  <span>{question}</span>
                  <span aria-hidden="true" className="float-right text-blue-700 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
        </section>
        <section className="border-t border-slate-200 bg-slate-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <Link href={`/${lang}`} className="text-lg font-extrabold tracking-tight text-slate-900">CORFU<span className="text-blue-600">DIGITAL</span></Link>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">{isEl ? "Σχεδιασμός και ανάπτυξη ιστοσελίδων και ψηφιακών λύσεων για επιχειρήσεις στην Κέρκυρα." : "Website development and digital solutions for businesses in Corfu."}</p>
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">{isEl ? "Εξερευνήστε" : "Explore"}</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li><Link className="hover:text-blue-700" href={`/${lang}`}>{isEl ? "Αρχική" : "Home"}</Link></li>
                  <li><Link className="hover:text-blue-700" href={`/${lang}/case-studies`}>{isEl ? "Η δουλειά μας" : "Our work"}</Link></li>
                  <li><Link className="hover:text-blue-700" href={`/${lang}#contact`}>{isEl ? "Επικοινωνία" : "Contact"}</Link></li>
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">{isEl ? "Υπηρεσίες" : "Services"}</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li><Link className="hover:text-blue-700" href={`/${lang}/kataskevi-istoselidon-kerkyra`}>{isEl ? "Κατασκευή Ιστοσελίδων" : "Website Development"}</Link></li>
                  <li><Link className="hover:text-blue-700" href={`/${lang}/services/hotel-websites`}>{isEl ? "Ιστοσελίδες Ξενοδοχείων" : "Hotel Websites"}</Link></li>
                  <li><Link className="hover:text-blue-700" href={`/${lang}/services/villa-booking-engines`}>{isEl ? "Συστήματα Κρατήσεων Βιλών" : "Villa Booking Systems"}</Link></li>
                  <li><Link className="hover:text-blue-700" href={`/${lang}/services/boat-tours-transfers`}>{isEl ? "Κρατήσεις Σκαφών & Μεταφορών" : "Boat & Transfer Bookings"}</Link></li>
                  <li><Link className="hover:text-blue-700" href={`/${lang}/services/digital-transformation`}>{isEl ? "Ψηφιακός Μετασχηματισμός" : "Digital Transformation"}</Link></li>
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">{isEl ? "Μιλήστε μαζί μας" : "Get in touch"}</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{isEl ? "Έχετε ερώτηση ή θέλετε να συζητήσουμε την ιστοσελίδα σας;" : "Have a question or want to discuss your website?"}</p>
                <a className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:text-blue-900" href="mailto:info@corfudigital.com">info@corfudigital.com</a>
              </div>
            </div>
            <div className="mt-10 border-t border-slate-200 pt-5 text-xs text-slate-500">© {new Date().getFullYear()} Corfu Digital · {isEl ? "Κατασκευή ιστοσελίδων στην Κέρκυρα" : "Website development in Corfu"}</div>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </footer>
    </main>
  );
}
