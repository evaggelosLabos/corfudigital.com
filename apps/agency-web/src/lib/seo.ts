import type { Metadata } from "next";
import { Language } from "../i18n/translations";

const BASE_URL = "https://corfudigital.com";

export interface PageSeoConfig {
  el: {
    title: string;
    description: string;
    keywords: string[];
  };
  en: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const SEO_DATA: Record<string, PageSeoConfig> = {
  home: {
    el: {
      title: "Κατασκευή Ιστοσελίδων Κέρκυρα | Corfu Digital - Web Engineering & Direct Booking",
      description: "Επαγγελματική κατασκευή ιστοσελίδων στην Κέρκυρα. Μηχανές απευθείας κρατήσεων για βίλες & ξενοδοχεία (0% προμήθεια), Beds24/iCal sync, myDATA & ψηφιακός μετασχηματισμός.",
      keywords: [
        "κατασκευη ιστοσελιδων κερκυρα",
        "σχεδιασμος ιστοσελιδων κερκυρα",
        "web design κερκυρα",
        "ψηφιακος μετασχηματισμος κερκυρα",
        "booking engine για βιλες",
        "κατασκευη eshop κερκυρα",
        "ηλεκτρονικη τιμολογηση mydata κερκυρα",
        "qr menu εστιατορια κερκυρα",
        "συστηματα κρατησεων σκαφων κερκυρα",
        "corfu digital"
      ]
    },
    en: {
      title: "Corfu Web Design & Direct Booking Engines | Corfu Digital",
      description: "Bespoke web development, zero-commission direct booking engines for villas & hotels, Beds24 / iCal sync, and SME digital transformation in Corfu, Greece.",
      keywords: [
        "corfu web design",
        "website development corfu",
        "digital agency corfu",
        "villa direct booking system corfu",
        "hotel web development corfu",
        "booking engine for villas greece",
        "corfu seo agency",
        "corfu digital"
      ]
    }
  },
  hotelWebsites: {
    el: {
      title: "Κατασκευή Ιστοσελίδων Ξενοδοχείων Κέρκυρα | Corfu Digital",
      description: "Custom ιστοσελίδες υψηλής απόδοσης για boutique ξενοδοχεία και resorts στην Κέρκυρα. Ταχύτητα φόρτωσης < 0.8s και απευθείας κρατήσεις χωρίς προμήθειες.",
      keywords: [
        "κατασκευη ιστοσελιδων ξενοδοχειων κερκυρα",
        "hotel web development corfu",
        "ιστοσελιδες boutique hotels κερκυρα",
        "direct booking engine ξενοδοχειου"
      ]
    },
    en: {
      title: "Corfu Hotel Web Engineering & Direct Bookings | Corfu Digital",
      description: "High-performance web applications for boutique hotels & luxury resorts in Corfu, Greece. Sub-second speed and direct booking channels.",
      keywords: [
        "corfu hotel web engineering",
        "boutique hotel web design corfu",
        "hotel direct bookings corfu",
        "resort website development greece"
      ]
    }
  },
  villaBookingEngines: {
    el: {
      title: "Μηχανές Κρατήσεων για Βίλες Κέρκυρα (0% Προμήθεια) | Corfu Digital",
      description: "Απευθείας κρατήσεις για πολυτελείς βίλες στην Κέρκυρα. Πληρωμές με κάρτα Stripe, αμφίδρομος συγχρονισμός Beds24 & iCal και εκμηδενισμός προμηθειών Booking/Airbnb.",
      keywords: [
        "booking engine για βιλες κερκυρα",
        "συστημα κρατησεων βιλας",
        "διασυνδεση beds24 ical",
        "απευθειας κρατησεις χωρις προμηθεια"
      ]
    },
    en: {
      title: "Direct Villa Booking Engines & Beds24 Sync Corfu | Corfu Digital",
      description: "Capture direct guest reservations with instant Stripe payments and 2-way real-time calendar synchronization (Beds24 & iCal) to eliminate OTA fees.",
      keywords: [
        "villa booking engines corfu",
        "villa direct booking system",
        "beds24 ical sync corfu",
        "zero commission villa bookings"
      ]
    }
  },
  boatToursTransfers: {
    el: {
      title: "Συστήματα Κρατήσεων Σκαφών & Μεταφορών Κέρκυρα | Corfu Digital",
      description: "Custom πλατφόρμες online κρατήσεων για ενοικιάσεις σκαφών, θαλάσσιες εκδρομές (Παξοί/Αντίπαξοι) και VIP μεταφορές αεροδρομίου στην Κέρκυρα.",
      keywords: [
        "συστηματα κρατησεων σκαφων κερκυρα",
        "ενοικιαση σκαφους online booking",
        "πλατφορμα μεταφορων κερκυρα airport transfers"
      ]
    },
    en: {
      title: "Maritime & Transfer Fleet Booking Software Corfu | Corfu Digital",
      description: "Automate boat charters, sea tours (Paxos/Antipaxos), hourly rentals, and airport transfer dispatch with custom booking software in Corfu.",
      keywords: [
        "boat tour booking engine corfu",
        "boat rental booking system corfu",
        "corfu airport transfers dispatch software"
      ]
    }
  },
  digitalTransformation: {
    el: {
      title: "Ψηφιακός Μετασχηματισμός Επιχειρήσεων Κέρκυρα (myDATA & E-Commerce) | Corfu Digital",
      description: "Εκσυγχρονισμός τοπικών επιχειρήσεων στην Κέρκυρα: Διασύνδεση ΑΑΔΕ myDATA, E-Commerce, online ραντεβού, αυτοματισμοί WhatsApp CRM & 24/7 AI υποστήριξη.",
      keywords: [
        "ψηφιακος μετασχηματισμος κερκυρα",
        "ηλεκτρονικη τιμολογηση mydata κερκυρα",
        "αυτοματισμοι whatsapp crm",
        "κατασκευη eshop κερκυρα"
      ]
    },
    en: {
      title: "SME Digital Transformation & myDATA Integration Corfu | Corfu Digital",
      description: "Modernize your Corfu business with custom digital workflows, AADE myDATA electronic invoicing, e-commerce, WhatsApp CRM, and 24/7 AI assistants.",
      keywords: [
        "digital transformation corfu",
        "aade mydata integration greece",
        "whatsapp crm automation",
        "corfu e-commerce development"
      ]
    }
  },
  caseStudies: {
    el: {
      title: "Έργα & Μελέτες Περίπτωσης | Corfu Digital",
      description: "Δείτε πραγματικά έργα και αποτελέσματα για πελάτες μας στην Κέρκυρα: Marcopolo Hotel, ion-boats, AEOLINA Luxury Villas και Corfu Transfers.",
      keywords: [
        "εργα corfu digital",
        "portfolio κατασκευης ιστοσελιδων κερκυρα",
        "case studies web design corfu"
      ]
    },
    en: {
      title: "Case Studies & Production Portfolio | Corfu Digital",
      description: "Explore real-world production platforms built by Corfu Digital: Marcopolo Hotel, ion-boats, AEOLINA Luxury Villas, and Corfu Transfers.",
      keywords: [
        "corfu digital case studies",
        "corfu web design portfolio",
        "hotel and villa booking platforms showcase"
      ]
    }
  }
};

export function buildPageMetadata(pageKey: string, lang: Language, pathSuffix: string = ""): Metadata {
  const pageData = SEO_DATA[pageKey] || SEO_DATA.home;
  const current = pageData[lang];
  const pagePath = pathSuffix ? `/${pathSuffix}` : "";
  
  const elUrl = `${BASE_URL}/el${pagePath}`;
  const enUrl = `${BASE_URL}/en${pagePath}`;
  const canonicalUrl = lang === "el" ? elUrl : enUrl;

  return {
    title: current.title,
    description: current.description,
    keywords: current.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "el": elUrl,
        "en": enUrl,
        "x-default": elUrl,
      },
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: canonicalUrl,
      siteName: "Corfu Digital",
      locale: lang === "el" ? "el_GR" : "en_US",
      alternateLocale: [lang === "el" ? "en_US" : "el_GR"],
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
