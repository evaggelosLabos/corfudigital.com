import React from "react";
import { 
  Button, Card, Badge, CommissionCalculator, 
  TechStackShowcase, ProjectMockupCard, FounderTrustBadge, 
  AiHospitalityAssistant 
} from "@repo/ui";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Calendar, DollarSign, Smartphone, Compass, Anchor, Sparkles, Bot } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredProjects = [
    {
      title: "Marcopolo Hotel",
      category: "Boutique Hotel Web",
      location: "Corfu, Greece",
      description: "Editorial visual showcase, mobile-first responsive architecture, and direct booking pathway for Marcopolo Hotel in Corfu.",
      metrics: "< 0.8s Mobile Speed",
      link: "https://marcopolocorfu.com",
      imageUrl: "https://marcopolocorfu.com/hotel/photo_079.jpg",
      imageAlt: "Marcopolo Hotel Corfu Real Photo",
    },
    {
      title: "ion-boats | Corfu Boat Trips",
      category: "Sea Excursions & Fleet",
      location: "Benitses Marina & Corfu",
      description: "Custom online booking engine for private boat charters, Paxos sea caves, and sunset cruises with real-time tour details.",
      metrics: "Live Excursion Booking",
      link: "https://ion-boats.com",
      imageUrl: "https://ion-boats.com/trips/ion-beach-aerial.jpg",
      imageAlt: "ion-boats Corfu Boat Trips Live Photo",
    },
    {
      title: "AEOLINA Luxury Villas",
      category: "Villa Direct Engine",
      location: "Episkopiana, Corfu",
      description: "Zero-commission direct booking platform with 2-way Airbnb/Booking.com iCal calendar synchronization and private pool villa showcase.",
      metrics: "0% OTA Commission",
      link: "https://aeolinavillas.com",
      imageUrl: "https://aeolinavillas.com/images/slider/1.webp",
      imageAlt: "AEOLINA Luxury Villas Corfu Real Photo",
    },
    {
      title: "Corfu Transfers Platform",
      category: "Transport Logistics",
      location: "Corfu Airport & Port",
      description: "Dynamic zone pricing, automated airport pick-up scheduling, and driver dispatch system for Corfu summer fleet operations.",
      metrics: "Automated Dispatch",
      link: "https://corfutransfersapp.com",
      imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Corfu Executive Airport Transfer Logistics",
    },
  ];

  const services = [
    {
      icon: <Calendar className="w-6 h-6 text-sky-600" />,
      title: "Direct Booking Engines for Villas & Hotels",
      desc: "Stop paying 15%-20% commissions to Airbnb and Booking.com. Full 2-way iCal & channel sync with instant Stripe guest payments.",
      href: "/services/villa-booking-engines",
      badge: "Highest ROI",
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-600" />,
      title: "24/7 AI Guest Concierge Assistants",
      desc: "Smart multilingual AI assistants that answer guest questions, handle booking inquiries, and provide Corfu local recommendations.",
      href: "#ai-demo",
      badge: "AI Powered",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Ultra-Fast Next.js Websites (< 1s Load)",
      desc: "Ditch bloated WordPress themes. Modern React & Next.js builds that score 95+ on Google PageSpeed, converting more mobile visitors.",
      href: "/services/hotel-websites",
      badge: "Google Rank #1",
    },
    {
      icon: <Anchor className="w-6 h-6 text-sky-600" />,
      title: "Boat Charter & Transfer Booking Software",
      desc: "Custom booking engines for sea excursions, yacht charters, and private airport transfers across Corfu and the Ionian.",
      href: "/services/boat-tours-transfers",
      badge: "Fleet Automation",
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tight text-stone-900">
              CORFU<span className="text-sky-600">DIGITAL</span>
            </span>
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-800 border border-sky-200/60">
              Studio & Tech Lab
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <Link href="/services/hotel-websites" className="hover:text-sky-600 transition">Hotels</Link>
            <Link href="/services/villa-booking-engines" className="hover:text-sky-600 transition">Villas</Link>
            <Link href="/services/boat-tours-transfers" className="hover:text-sky-600 transition">Boats & Fleet</Link>
            <Link href="/case-studies" className="hover:text-sky-600 transition">Case Studies</Link>
            <a href="#ai-demo" className="hover:text-sky-600 transition flex items-center gap-1 text-sky-600 font-semibold">
              <Bot className="w-4 h-4" /> AI Demo
            </a>
          </nav>
          <div>
            <a href="#contact">
              <Button size="sm" variant="primary">Get Free Audit</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 bg-gradient-to-b from-sky-50/40 via-stone-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-stone-700 text-xs font-semibold shadow-xs border border-stone-200/80 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Hospitality Web Engineering & AI Systems • Corfu, Greece
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.1]">
            Stop losing 20% to OTAs. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-700">
              Direct Bookings, AI & Fast Web.
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            We engineer high-converting digital platforms, direct booking engines, and 24/7 AI guest assistants for luxury villas, boutique hotels, and boat charters across Corfu.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#ai-demo" className="w-full sm:w-auto">
              <Button size="lg" variant="primary" className="w-full sm:w-auto gap-2">
                Try Live AI Assistant <Bot className="w-4 h-4" />
              </Button>
            </a>
            <a href="#calculator" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Calculate Direct Savings
              </Button>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-10 border-t border-stone-200/80 text-left">
            <div className="p-2">
              <div className="text-3xl font-extrabold text-stone-900">&lt; 0.9s</div>
              <div className="text-xs text-stone-500 font-medium mt-1">Mobile Load Speed</div>
            </div>
            <div className="p-2">
              <div className="text-3xl font-extrabold text-sky-600">0%</div>
              <div className="text-xs text-stone-500 font-medium mt-1">Commission on Direct Stays</div>
            </div>
            <div className="p-2">
              <div className="text-3xl font-extrabold text-purple-600">24/7</div>
              <div className="text-xs text-stone-500 font-medium mt-1">AI Concierge & Inquiries</div>
            </div>
            <div className="p-2">
              <div className="text-3xl font-extrabold text-emerald-600">Corfu</div>
              <div className="text-xs text-stone-500 font-medium mt-1">Local Engineering Studio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Founder & Studio Prestige Banner */}
      <FounderTrustBadge />

      {/* Interactive AI Assistant Demo Section */}
      <div id="ai-demo">
        <AiHospitalityAssistant />
      </div>

      {/* Visual Featured Projects Showcase */}
      <section id="case-studies" className="py-24 bg-stone-50 border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Real Production Proof</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
                Live Platforms Engineered in Corfu
              </h2>
              <p className="text-stone-600 text-sm mt-2 max-w-xl">
                Boutique hotels, luxury villa direct engines, and boat excursions active right now in the Ionian.
              </p>
            </div>
            <Link href="/case-studies" className="mt-4 sm:mt-0 text-sm font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {featuredProjects.map((project, idx) => (
              <ProjectMockupCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Savings Calculator Section */}
      <section id="calculator" className="py-24 bg-white border-b border-stone-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <CommissionCalculator />
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-stone-50 border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Our Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
              Bespoke Software for Corfu Tourism
            </h2>
            <p className="text-stone-600 text-sm mt-3">
              Purpose-built architectures designed to increase revenue and streamline guest operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-stone-200/80 p-8 shadow-xs hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-stone-50 rounded-2xl border border-stone-100">{s.icon}</div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{s.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                </div>
                <div className="pt-4 border-t border-stone-100">
                  <Link href={s.href} className="text-sm font-bold text-sky-600 hover:text-sky-800 inline-flex items-center gap-1.5">
                    Explore Solution <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Engineering Stack Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <TechStackShowcase />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">Let&apos;s Build Your Direct Booking Engine</h2>
            <p className="text-stone-400 text-sm mt-3 max-w-xl mx-auto">
              Request a free website speed & commission-reduction audit for your hotel, villa, or fleet in Corfu.
            </p>
          </div>

          <div className="bg-stone-800/80 backdrop-blur rounded-3xl p-8 sm:p-12 border border-stone-700 max-w-xl mx-auto shadow-2xl">
            <form className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">Your Name / Property Name</label>
                <input
                  type="text"
                  placeholder="e.g. Corfu Azure Luxury Villa"
                  className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-sky-500 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    placeholder="+30 69..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">Business / Property Type</label>
                <select className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-sky-500 focus:outline-none">
                  <option value="hotel">Boutique Hotel / Rooms</option>
                  <option value="villa">Luxury Villa / Holiday Rental</option>
                  <option value="boats">Boat Trips / Sea Excursions</option>
                  <option value="transfers">Airport & Port Transfers</option>
                  <option value="restaurant">Restaurant / Beach Bar</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">Tell us about your goals</label>
                <textarea
                  rows={3}
                  placeholder="Describe your current booking setup or what you'd like to build..."
                  className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-sky-500 focus:outline-none"
                ></textarea>
              </div>
              <Button size="lg" variant="primary" className="w-full justify-center mt-2">
                Request Free Audit & Discovery Call
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-10 text-xs border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            &copy; {new Date().getFullYear()} CORFU DIGITAL. All rights reserved.
          </div>
          <div className="flex gap-4 items-center">
            <span>Corfu Town, Ionian Islands, Greece</span>
            <span>•</span>
            <a href="mailto:vagjelis.8@gmail.com" className="hover:text-stone-300 transition">vagjelis.8@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
