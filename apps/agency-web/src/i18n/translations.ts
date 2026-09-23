export type Language = "en" | "el";

export interface TranslationDictionary {
  nav: {
    hotels: string;
    villas: string;
    boats: string;
    caseStudies: string;
    aiDemo: string;
    tagline: string;
    requestProposal: string;
    backHome: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    metric3Val: string;
    metric3Label: string;
    metric4Val: string;
    metric4Label: string;
  };
  services: {
    badge: string;
    heading: string;
    subheading: string;
    s1Title: string;
    s1Desc: string;
    s2Title: string;
    s2Desc: string;
    s3Title: string;
    s3Desc: string;
    s4Title: string;
    s4Desc: string;
    learnMore: string;
  };
  portfolio: {
    badge: string;
    heading: string;
    subheading: string;
    viewCaseStudies: string;
  };
  calculator: {
    badge: string;
    title: string;
    desc: string;
    estRevenue: string;
    otaCommission: string;
    youKeep: string;
    lostToOta: string;
    directStripe: string;
    netSavings: string;
    cta: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    whatsapp: string;
    email: string;
    location: string;
    formName: string;
    formEmail: string;
    formProperty: string;
    formMessage: string;
    submit: string;
    privacy: string;
  };
  footer: {
    rights: string;
    location: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      hotels: "Hotels",
      villas: "Villas",
      boats: "Boats & Fleet",
      caseStudies: "Case Studies",
      aiDemo: "AI Demo",
      tagline: "Studio & Tech Lab",
      requestProposal: "Start a Project",
      backHome: "Back to Studio Home",
    },
    hero: {
      badge: "Corfu's Premier Hospitality & Tourism Digital Agency",
      titleLine1: "We Build Fast Websites &",
      titleHighlight: "Direct Booking Engines",
      titleLine2: "That Eliminate OTA Commissions",
      subtitle:
        "Bespoke web engineering, 2-way iCal & Beds24 channel sync, visual AI technology, and 0% commission direct booking systems for Corfu boutique hotels, luxury villas, boat rentals, and transfers.",
      ctaPrimary: "Calculate Your OTA Savings",
      ctaSecondary: "Explore Live Client Work",
      metric1Val: "< 0.8s",
      metric1Label: "Page Load Speed",
      metric2Val: "0%",
      metric2Label: "OTA Commission Cut",
      metric3Val: "100%",
      metric3Label: "Custom Code & iCal Sync",
      metric4Val: "24/7",
      metric4Label: "AI Guest Concierge",
    },
    services: {
      badge: "Engineering Capabilities",
      heading: "Built Specifically for Corfu & Ionian Hospitality",
      subheading:
        "From individual luxury villas to boutique hotel portfolios and boat fleets, we engineer systems that drive direct revenue.",
      s1Title: "Boutique Hotel Showcase Platforms",
      s1Desc:
        "Sub-second Next.js web applications with immersive visuals, multilingual SEO, and direct reservation integration.",
      s2Title: "Luxury Villa Direct Booking Engines",
      s2Desc:
        "Integrated Stripe checkout and 2-way real-time calendar synchronization (Beds24 & iCal) to prevent double-bookings.",
      s3Title: "Sea Excursion & Boat Fleet Platforms",
      s3Desc:
        "Instant hourly/daily yacht charter bookings, fuel calculations, skipper options, and online deposit collection.",
      s4Title: "Digital QR Restaurant & Bar Menus",
      s4Desc:
        "Multi-language contactless menus with Greek myDATA tax compliance, live price updates, and automated allergen filters.",
      learnMore: "Explore Service",
    },
    portfolio: {
      badge: "Real Production Proof",
      heading: "Live Client Platforms in Corfu",
      subheading:
        "Boutique hotels, luxury villa direct engines, and boat excursions active right now in the Ionian.",
      viewCaseStudies: "View Detailed Case Studies",
    },
    calculator: {
      badge: "Direct Booking ROI Calculator",
      title: "How Much Are You Giving Away to OTAs?",
      desc: "Every season, Corfu hotels and villa owners lose 15% to 25% of their total turnover to Booking.com, Airbnb, and Viator commissions.",
      estRevenue: "Estimated Annual Revenue:",
      otaCommission: "Average OTA Commission Rate:",
      youKeep: "Reclaim Your Direct Revenue",
      lostToOta: "Lost to OTAs Each Season:",
      directStripe: "Direct Card Processing (~1.6%):",
      netSavings: "Estimated Net Annual Savings:",
      cta: "Claim Your Commission Savings",
    },
    contact: {
      badge: "Start Your Project",
      title: "Ready to Accelerate Your Direct Bookings?",
      subtitle:
        "Book a direct strategy call or message founder Evangelos Lampos to discuss your property, yacht charter, or hospitality project in Corfu.",
      whatsapp: "Chat on WhatsApp",
      email: "Send Email",
      location: "Corfu Town, Ionian Islands, Greece",
      formName: "Your Full Name",
      formEmail: "Email Address",
      formProperty: "Property / Business Type",
      formMessage: "Tell us about your project or current OTA setup...",
      submit: "Request Technical & Direct Booking Audit",
      privacy: "Direct response within 24 hours. No sales spam.",
    },
    footer: {
      rights: "CORFU DIGITAL. All rights reserved.",
      location: "Corfu Town, Ionian Islands, Greece",
    },
  },
  el: {
    nav: {
      hotels: "Ξενοδοχεία",
      villas: "Βίλες",
      boats: "Σκάφη & Εκδρομές",
      caseStudies: "Έργα & Μελέτες",
      aiDemo: "AI Demo",
      tagline: "Studio & Tech Lab",
      requestProposal: "Ξεκινήστε Έργο",
      backHome: "Επιστροφή στην Αρχική",
    },
    hero: {
      badge: "Το Κορυφαίο Digital Agency Τουρισμού & Φιλοξενίας στην Κέρκυρα",
      titleLine1: "Κατασκευάζουμε Υπερταχείες Ιστοσελίδες &",
      titleHighlight: "Μηχανές Απευθείας Κρατήσεων",
      titleLine2: "Χωρίς Προμήθειες Booking & Airbnb",
      subtitle:
        "Εξειδικευμένο λογισμικό, αμφίδρομος συγχρονισμός ημερολογίων (Beds24 & iCal), οπτική τεχνητή νοημοσύνη (AI) και συστήματα απευθείας κρατήσεων με 0% προμήθεια για ξενοδοχεία, πολυτελείς βίλες, ενοικιάσεις σκαφών και μεταφορές στην Κέρκυρα.",
      ctaPrimary: "Υπολογίστε το Κέρδος σας",
      ctaSecondary: "Δείτε Ζωντανά Έργα μας",
      metric1Val: "< 0.8δ",
      metric1Label: "Ταχύτητα Φόρτωσης",
      metric2Val: "0%",
      metric2Label: "Προμήθεια σε Πλατφόρμες",
      metric3Val: "100%",
      metric3Label: "Custom Κώδικας & iCal Sync",
      metric4Val: "24/7",
      metric4Label: "AI Ψηφιακός Concierge",
    },
    services: {
      badge: "Υπηρεσίες & Λογισμικό",
      heading: "Σχεδιασμένο Αποκλειστικά για τον Τουρισμό της Κέρκυρας",
      subheading:
        "Από μεμονωμένες πολυτελείς βίλες μέχρι boutique ξενοδοχεία και στόλους σκαφών, δημιουργούμε συστήματα που μεγιστοποιούν τα απευθείας έσοδά σας.",
      s1Title: "Ιστοσελίδες Boutique Ξενοδοχείων",
      s1Desc:
        "Next.js web εφαρμογές με άμεση απόκριση, εντυπωσιακά γραφικά, πολυγλωσσικό SEO και ενσωματωμένη μηχανή κρατήσεων.",
      s2Title: "Μηχανές Κρατήσεων για Πολυτελείς Βίλες",
      s2Desc:
        "Απευθείας πληρωμές με κάρτα (Stripe) και αμφίδρομος συγχρονισμός σε πραγματικό χρόνο (Beds24 & iCal) για μηδενικές διπλοκρατήσεις.",
      s3Title: "Συστήματα Κρατήσεων Σκαφών & Μεταφορών",
      s3Desc:
        "Online κρατήσεις ημερήσιων εκδρομών, υπολογισμός καυσίμων, επιλογή skipper και αυτόματη είσπραξη προκαταβολών.",
      s4Title: "Ψηφιακοί QR Κατάλογοι Εστιατορίων",
      s4Desc:
        "Πολυγλωσσικά ανέπαφα μενού, πλήρης διασύνδεση με myDATA, ζωντανή ενημέρωση τιμών και φίλτρα αλλεργιογόνων.",
      learnMore: "Μάθετε Περισσότερα",
    },
    portfolio: {
      badge: "Αποδεδειγμένα Έργα Παραγωγής",
      heading: "Ζωντανές Πλατφόρμες Πελατών στην Κέρκυρα",
      subheading:
        "Boutique ξενοδοχεία, απευθείας μηχανές κρατήσεων για βίλες και πλατφόρμες θαλάσσιων εκδρομών που λειτουργούν αυτή τη στιγμή στο Ιόνιο.",
      viewCaseStudies: "Δείτε Όλα τα Case Studies",
    },
    calculator: {
      badge: "Υπολογιστής Απόδοσης (ROI)",
      title: "Πόσα Χρήματα Χάνετε Κάθε Σεζόν σε Προμήθειες;",
      desc: "Κάθε καλοκαίρι, οι ιδιοκτήτες ξενοδοχείων και βιλών στην Κέρκυρα πληρώνουν 15% έως 25% του συνολικού τους τζίρου σε Booking.com, Airbnb και Viator.",
      estRevenue: "Εκτιμώμενος Ετήσιος Τζίρος:",
      otaCommission: "Μέση Προμήθεια Πλατφορμών:",
      youKeep: "Κερδίστε τα Έσοδά σας Απευθείας",
      lostToOta: "Χαμένα Έσοδα σε Προμήθειες:",
      directStripe: "Κόστος Τραπεζικής Συναλλαγής (~1.6%):",
      netSavings: "Εκτιμώμενο Καθαρό Ετήσιο Κέρδος:",
      cta: "Μηδενίστε τις Προμήθειες σας",
    },
    contact: {
      badge: "Ξεκινήστε Σήμερα",
      title: "Έτοιμοι να Αυξήσετε τις Απευθείας Κρατήσεις σας;",
      subtitle:
        "Κλείστε μια δωρεάν συμβουλευτική κλήση ή επικοινωνήστε απευθείας με τον Ευάγγελο Λάμπο για να συζητήσουμε τις ανάγκες του καταλύματος ή της επιχείρησής σας.",
      whatsapp: "Μήνυμα στο WhatsApp",
      email: "Αποστολή Email",
      location: "Πόλη της Κέρκυρας, Ιόνια Νησιά, Ελλάδα",
      formName: "Ονοματεπώνυμο",
      formEmail: "Email Επικοινωνίας",
      formProperty: "Είδος Επιχείρησης / Καταλύματος",
      formMessage: "Περιγράψτε μας το έργο σας ή το τρέχον σύστημα κρατήσεών σας...",
      submit: "Αίτηση Δωρεάν Τεχνικού Ελέγχου & Audit",
      privacy: "Άμεση απάντηση εντός 24 ωρών. Χωρίς spam.",
    },
    footer: {
      rights: "CORFU DIGITAL. Με επιφύλαξη παντός δικαιώματος.",
      location: "Πόλη της Κέρκυρας, Ιόνια Νησιά, Ελλάδα",
    },
  },
};
