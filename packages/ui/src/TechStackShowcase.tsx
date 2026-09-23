"use client";

import React, { useState } from "react";
import { 
  Code2, Server, Cloud, Cpu, Layers, 
  Zap, ShieldCheck, Check, ArrowRight, Sparkles,
  Database, Terminal, Globe, Lock, CpuIcon
} from "lucide-react";

export interface TechStackShowcaseProps {
  lang?: "en" | "el";
}

export const TechStackShowcase: React.FC<TechStackShowcaseProps> = ({ lang = "en" }) => {
  const isEl = lang === "el";
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "cloud" | "ai" | "hospitality">("frontend");

  const categories = [
    { id: "frontend", label: isEl ? "Frontend & Ταχύτητα" : "Frontend & Speed", icon: <Code2 className="w-4 h-4" /> },
    { id: "backend", label: isEl ? "APIs & Πληρωμές" : "APIs & Payments", icon: <Server className="w-4 h-4" /> },
    { id: "cloud", label: isEl ? "Cloud & DevOps" : "Cloud & DevOps", icon: <Cloud className="w-4 h-4" /> },
    { id: "ai", label: isEl ? "AI & Αυτοματισμοί" : "AI & Automation", icon: <Cpu className="w-4 h-4" /> },
    { id: "hospitality", label: isEl ? "iCal & Channels" : "Channel & iCal", icon: <Layers className="w-4 h-4" /> },
  ] as const;

  const stackDetails = {
    frontend: {
      headline: isEl ? "Υπερταχύ Web & Mobile Interface < 0.8s" : "Sub-Second Web & Mobile UI",
      subline: isEl 
        ? "Σχεδιασμένο για σκορ 95+ στο Google PageSpeed, μετατρέποντας τους επισκέπτες από κινητά σε απευθείας πελάτες."
        : "Engineered for 95+ Google PageSpeed scores, turning casual mobile travelers into instant direct bookings.",
      metric: "99 / 100",
      metricLabel: isEl ? "Google Lighthouse Mobile Score" : "Google Lighthouse Mobile Score",
      cards: [
        {
          name: "Next.js 15 App Router",
          tag: isEl ? "Βασικός Πυρήνας" : "Core Engine",
          desc: isEl ? "Server-side rendering (SSR) και edge caching για αστραπιαίο άνοιγμα σε 4G/5G." : "Server-side rendering (SSR) and edge-cached static pages for near-instant first load on 4G/5G.",
          badge: "Sub-Second LCP",
        },
        {
          name: "TypeScript End-to-End",
          tag: isEl ? "Αξιοπιστία" : "Reliability",
          desc: isEl ? "Απόλυτη ασφάλεια τύπων που εκμηδενίζει τα σφάλματα κατά τη διαδικασία πληρωμής." : "Strict type safety eliminates checkout crashes and reservation runtime bugs.",
          badge: "100% Type-Safe",
        },
        {
          name: "Tailwind CSS & Modern UI",
          tag: isEl ? "Design System" : "Design System",
          desc: isEl ? "Εξαιρετικά ελαφρύ, custom responsive interface φτιαγμένο για πολυτελή καταλύματα." : "Bespoke, featherweight responsive interfaces custom-crafted for luxury stays.",
          badge: "Zero Bloat",
        },
        {
          name: "Core Web Vitals & SEO",
          tag: isEl ? "Google SEO" : "SEO Boost",
          desc: isEl ? "Βελτιστοποιημένα LCP, INP και CLS scores που ανταμείβονται με την 1η θέση στο Google." : "Optimized LCP, INP, and CLS scores that Google rewards with top local search rankings.",
          badge: "SEO Priority",
        },
      ],
    },
    backend: {
      headline: isEl ? "Αξιόπιστα APIs & Απευθείας Πληρωμές" : "Resilient APIs & Direct Payments",
      subline: isEl
        ? "Υψηλής απόδοσης Node.js microservices και απευθείας πληρωμές Stripe με μηδενικές προμήθειες μεσαζόντων."
        : "High-throughput Node.js microservices and direct Stripe payment flows with zero intermediary commission fees.",
      metric: "€0",
      metricLabel: isEl ? "Προμήθεια OTA σε Direct Πληρωμές" : "OTA Commission on Direct Gateways",
      cards: [
        {
          name: "Stripe & Τραπεζικές Πληρωμές",
          tag: isEl ? "Έσοδα" : "Revenue",
          desc: isEl ? "Δεχτείτε Apple Pay, Google Pay και διεθνείς κάρτες με κατάθεση κατευθείαν στον ελληνικό τραπεζικό σας λογαριασμό." : "Accept Apple Pay, Google Pay, and international cards with funds landing straight in your Greek bank.",
          badge: isEl ? "Άμεση Εκκαθάριση" : "Instant Payouts",
        },
        {
          name: "Node.js & Express / NestJS",
          tag: isEl ? "Αρχιτεκτονική API" : "API Architecture",
          desc: isEl ? "Ασύγχρονα endpoints κατασκευασμένα να αντέχουν τις αιχμές επισκεψιμότητας της καλοκαιρινής σεζόν." : "High-concurrency async endpoints built to handle intense summer booking spikes without slowdowns.",
          badge: isEl ? "Υψηλή Απόδοση" : "High Throughput",
        },
        {
          name: "PostgreSQL & Redis Caching",
          tag: isEl ? "Βάσεις Δεδομένων" : "Data Layer",
          desc: isEl ? "ACID συναλλαγές για ημερολόγια κρατήσεων και Redis cache για υπολογισμούς τιμών σε milliseconds." : "ACID transaction guarantees for reservation ledgers paired with sub-millisecond Redis caching.",
          badge: isEl ? "Μηδενικό Data Loss" : "Zero Data Loss",
        },
        {
          name: "Webhooks & Αυτοματισμοί",
          tag: isEl ? "Ειδοποιήσεις" : "Event Driven",
          desc: isEl ? "Αυτόματη αποστολή email επιβεβαίωσης, ενημέρωση λογιστηρίου και διαβίβαση myDATA." : "Instant email dispatch, booking push alerts, and automated accounting sync via secure webhooks.",
          badge: isEl ? "Αυτοματοποιημένο" : "Real-Time Events",
        },
      ],
    },
    cloud: {
      headline: isEl ? "Cloud Φιλοξενία & 99.9% Uptime" : "European Cloud & 99.9% Uptime",
      subline: isEl
        ? "Docker containers, Linux VPS και Cloudflare Edge CDN για μέγιστη ασφάλεια και ταχύτητα."
        : "Docker containers, automated CI/CD pipelines, and high-availability Linux infrastructure across European datacenters.",
      metric: "99.9%",
      metricLabel: isEl ? "Εγγύηση Διαθεσιμότητας Uptime" : "Production Uptime Guarantee",
      cards: [
        {
          name: "Docker & Containerization",
          tag: isEl ? "Υποδομή" : "DevOps",
          desc: isEl ? "Απομονωμένα περιβάλλοντα που εξασφαλίζουν σταθερότητα και άμεση κλιμάκωση." : "Isolated, reproducible environments guaranteeing zero environment drift between staging and live.",
          badge: "Container Ready",
        },
        {
          name: "Linux VPS & Nginx Reverse Proxy",
          tag: isEl ? "Ασφάλεια Server" : "Web Server",
          desc: isEl ? "Εξειδικευμένη παραμετροποίηση Nginx με αυτόματα SSL certificates Let's Encrypt." : "Custom tuned Nginx reverse proxies with automatic HTTP/2, Brotli compression, and SSL renewal.",
          badge: "A+ SSL Security",
        },
        {
          name: "Cloudflare Global Edge CDN",
          tag: isEl ? "Διεθνής Ταχύτητα" : "Global Edge",
          desc: isEl ? "Άμεση φόρτωση των φωτογραφιών του καταλύματος για επισκέπτες από Ηνωμένο Βασίλειο, Γερμανία και ΗΠΑ." : "Assets and images cached at 300+ edge locations worldwide for instant loading in the UK, Germany, and US.",
          badge: "Global Edge",
        },
        {
          name: "DDoS & Web Application Firewall",
          tag: isEl ? "Προστασία" : "Security",
          desc: isEl ? "Ενεργή προστασία από επιθέσεις bot, brute force και scraping τιμών." : "Active bot mitigation, rate limiting, and brute-force protection safeguarding your booking engine.",
          badge: "24/7 Defense",
        },
      ],
    },
    ai: {
      headline: isEl ? "Τεχνητή Νοημοσύνη & Computer Vision" : "Hospitality AI & Computer Vision",
      subline: isEl
        ? "Έρευνα MSc στην Οπτική Τεχνητή Νοημοσύνη (Ionian University) εφαρμοσμένη σε 24/7 AI Concierge και έξυπνα συστήματα."
        : "Leveraging our MSc in AI/Computer Vision (Ionian University) to build 24/7 guest concierges and automated vision tools.",
      metric: "24/7",
      metricLabel: isEl ? "Αυτοματοποιημένη Εξυπηρέτηση Επισκεπτών" : "Autonomous Guest Interaction",
      cards: [
        {
          name: isEl ? "24/7 Πολυγλωσσικός AI Concierge" : "24/7 Multilingual AI Concierge",
          tag: "NLP & LLM",
          desc: isEl ? "Απαντά σε ερωτήσεις για check-in, θέρμανση πισίνας και συστάσεις στην Κέρκυρα σε 10+ γλώσσες." : "Answers guest FAQs on check-in, pool heating, and Corfu tips in German, Italian, English, and Greek.",
          badge: "Instant Reply",
        },
        {
          name: isEl ? "AI Βελτιστοποίηση Φωτογραφιών" : "AI Neural Image Optimization",
          tag: "Computer Vision",
          desc: isEl ? "Αυτόματη βελτίωση ανάλυσης και φωτεινότητας φωτογραφιών για μέγιστη ελκυστικότητα." : "Super-resolution neural upscaling to make luxury villa photography stand out on high-DPI retina screens.",
          badge: "Retina Sharp",
        },
        {
          name: isEl ? "Αυτοματισμοί WhatsApp CRM" : "Automated WhatsApp Workflows",
          tag: "CRM AI",
          desc: isEl ? "Αποστολή οδηγιών άφιξης, κωδικών εισόδου και προτάσεων εκδρομών απευθείας στο WhatsApp." : "Automated dispatch of directions, Wi-Fi codes, and excursion recommendations straight to guest phones.",
          badge: "No Manual Work",
        },
        {
          name: isEl ? "Έξυπνη Διαχείριση Στόλου & Drivers" : "Dynamic Route & Fleet AI",
          tag: "Smart Dispatch",
          desc: isEl ? "Βελτιστοποίηση δρομολογίων μεταφορών και υπολογισμός χρόνων άφιξης βάσει κίνησης στην Κέρκυρα." : "Automated trip scheduling and dynamic flight delay adjustments for Corfu airport transfer fleets.",
          badge: "Smart Dispatch",
        },
      ],
    },
    hospitality: {
      headline: isEl ? "Αμφίδρομος Συγχρονισμός iCal & Channel Manager" : "Bidirectional iCal & Channel Sync",
      subline: isEl
        ? "Πλήρης συγχρονισμός (RFC 5545) με Airbnb, Booking.com, VRBO και Beds24 API για μηδενικές διπλοκρατήσεις."
        : "Strict RFC 5545 compliant calendar synchronization paired with Beds24 & WebHotelier channel management APIs.",
      metric: "0",
      metricLabel: isEl ? "Διπλοκρατήσεις σε Πραγματικό Χρόνο" : "Double Bookings Guaranteed",
      cards: [
        {
          name: "2-Way RFC 5545 iCal Engine",
          tag: isEl ? "Συγχρονισμός" : "Calendar Sync",
          desc: isEl ? "Αυτόματο κλείδωμα ημερομηνιών σε όλες τις πλατφόρμες τη στιγμή που γίνεται απευθείας κράτηση." : "Instantly blocks external OTAs when a direct guest books, and imports external dates automatically.",
          badge: "RFC 5545",
        },
        {
          name: "Beds24 & Channex API",
          tag: isEl ? "Channel Manager" : "API Integration",
          desc: isEl ? "Απευθείας σύνδεση σε πραγματικό χρόνο με επίσημους συνεργάτες της Booking.com και του Airbnb." : "Real-time 2-way rate and availability parity with Booking.com Premier & Airbnb Preferred+ APIs.",
          badge: "Official Partner",
        },
        {
          name: "WebHotelier & PMS Integration",
          tag: isEl ? "Ξενοδοχεία" : "Hotel Systems",
          desc: isEl ? "Ενσωμάτωση του υφιστάμενου συστήματος κρατήσεων του ξενοδοχείου σας χωρίς επιπλέον κόστος." : "Seamless bridge to your existing Greek hotel PMS and WebHotelier direct booking widget.",
          badge: "Zero Friction",
        },
        {
          name: "Stripe Escrow & Προκαταβολές",
          tag: isEl ? "Ασφάλεια Πληρωμών" : "Payment Escrow",
          desc: isEl ? "Είσπραξη προκαταβολής 20%-30% και αυτόματη αποστολή ψηφιακής απόδειξης στον πελάτη." : "Custom deposit schemes (e.g. 30% down, 70% 14 days prior) with automated cancellation policy enforcement.",
          badge: "Risk-Free",
        },
      ],
    },
  };

  const current = stackDetails[activeTab];

  return (
    <section className="py-24 bg-slate-900 text-white rounded-3xl p-6 sm:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-sky-400 text-xs font-bold border border-slate-700 mb-4">
            <Terminal className="w-4 h-4 text-sky-400" />
            {isEl ? "Αρχιτεκτονική & Τεχνολογίες" : "Engineering Standards"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {isEl ? "Χτισμένο με Σύγχρονο Κώδικα, Όχι WordPress Templates" : "Built With Code, Not Bloated Themes"}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            {isEl 
              ? "Γιατί οι κορυφαίες βίλες και τα boutique ξενοδοχεία στην Κέρκυρα επιλέγουν custom Next.js και όχι έτοιμα plug-ins που κολλάνε."
              : "Why Corfu's leading villas and hospitality operators choose bespoke Next.js engineering over fragile plugins."}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === cat.id
                  ? "bg-sky-600 text-white shadow-lg shadow-sky-600/30 scale-102"
                  : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/50"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tab Content Header */}
        <div className="bg-slate-800/50 border border-slate-700/70 rounded-3xl p-6 sm:p-10 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{current.headline}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{current.subline}</p>
          </div>
          <div className="bg-slate-900 border border-slate-700 p-4 sm:p-6 rounded-2xl shrink-0 text-center md:text-right min-w-[200px]">
            <div className="text-3xl sm:text-4xl font-black text-sky-400">{current.metric}</div>
            <div className="text-xs text-slate-400 font-medium mt-1">{current.metricLabel}</div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {current.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-sky-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-sky-400 px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/50">
                    {card.tag}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 bg-slate-700/40 px-2 py-0.5 rounded">
                    {card.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-sky-300 transition">
                  {card.name}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
