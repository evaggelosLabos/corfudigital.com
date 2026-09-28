"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, Hotel, Home, Anchor, Cpu, Briefcase, 
  ArrowRight, Phone, Mail, Sparkles, MessageSquare 
} from "lucide-react";
import { Button } from "@repo/ui";
import { useLanguage } from "../context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export interface NavbarProps {
  showBackToHome?: boolean;
}

export function Navbar({ showBackToHome = false }: NavbarProps) {
  const { lang, t } = useLanguage();
  const isEl = lang === "el";
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    {
      href: `/${lang}/services/hotel-websites`,
      label: t.nav.hotels,
      icon: <Hotel className="w-4 h-4 text-blue-600" />,
      desc: isEl ? "Next.js 15 για boutique ξενοδοχεία" : "Fast Next.js websites for hotels",
    },
    {
      href: `/${lang}/services/villa-booking-engines`,
      label: t.nav.villas,
      icon: <Home className="w-4 h-4 text-indigo-600" />,
      desc: isEl ? "0% προμήθεια & 2-way iCal συγχρονισμός" : "Direct booking & 2-way iCal sync",
    },
    {
      href: `/${lang}/services/boat-tours-transfers`,
      label: t.nav.boats,
      icon: <Anchor className="w-4 h-4 text-sky-600" />,
      desc: isEl ? "Online κρατήσεις σκαφών & εκδρομών" : "Boat rentals & transfer booking",
    },
    {
      href: `/${lang}/services/digital-transformation`,
      label: t.nav.digitalTransformation,
      icon: <Cpu className="w-4 h-4 text-emerald-600" />,
      desc: isEl ? "AI Concierge & Business Automation" : "AI integrations & automation",
    },
    {
      href: `/${lang}/case-studies`,
      label: t.nav.caseStudies,
      icon: <Briefcase className="w-4 h-4 text-amber-600" />,
      desc: isEl ? "Marcopolo, Aeolina, ion-boats" : "Real Corfu production projects",
    },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex flex-col group">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition">
            CORFU<span className="text-blue-600">DIGITAL</span>
          </span>
          <span className="text-[10px] text-slate-700 tracking-wider uppercase font-semibold">
            {isEl ? "Κατασκευή Ιστοσελίδων & Booking Tech" : t.nav.tagline}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-600 transition py-1 ${
                pathname === link.href ? "text-blue-600 font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Desktop Controls & Mobile Hamburger Trigger */}
        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageToggle />

          <a href={`/${lang}#contact`} className="hidden sm:inline-block">
            <Button size="sm" variant="primary">
              {t.nav.requestProposal}
            </Button>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            aria-label={isOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Slide-Down Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-slate-950/40 backdrop-blur-sm z-40 animate-fade-in">
          <div className="bg-white border-b border-slate-200 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* Navigation links with icons */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700 px-3 pb-1">
                {isEl ? "Υπηρεσίες & Έργα" : "Services & Case Studies"}
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-start gap-3 p-3 rounded-xl transition ${
                    pathname === link.href
                      ? "bg-blue-50/80 text-blue-700 border border-blue-200"
                      : "hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  <div className="p-2 rounded-lg bg-slate-100 shrink-0 mt-0.5">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {link.label}
                    </div>
                    <div className="text-xs text-slate-700 font-normal">
                      {link.desc}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Actions & Call To Action */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Link
                href={`/${lang}#contact`}
                onClick={() => setIsOpen(false)}
                className="w-full block"
              >
                <Button size="lg" variant="primary" className="w-full justify-center">
                  {t.nav.requestProposal}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              
              <div className="text-center pt-2">
                <a
                  href="tel:+306980000000"
                  className="text-xs text-slate-700 hover:text-blue-600 inline-flex items-center gap-1.5 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  {isEl ? "Τηλέφωνο Επικοινωνίας Κέρκυρας" : "Direct Corfu Phone Line"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
