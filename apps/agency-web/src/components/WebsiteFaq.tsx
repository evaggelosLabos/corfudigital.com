"use client";

import { useLanguage } from "../context/LanguageContext";

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

export function WebsiteFaq() {
  const { lang } = useLanguage();
  const isEl = lang === "el";
  const items = faqItems[lang];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <section className="border-b border-slate-200 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-700">{isEl ? "Συχνές ερωτήσεις" : "Frequently asked questions"}</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{isEl ? "Πριν ξεκινήσουμε την ιστοσελίδα σας" : "Before we build your website"}</h2>
        </div>
        <div className="space-y-3">
          {items.map(({ question, answer }) => (
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </section>
  );
}
