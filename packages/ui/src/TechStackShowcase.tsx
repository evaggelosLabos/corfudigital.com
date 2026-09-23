"use client";

import React, { useState } from "react";
import { 
  Code2, Server, Cloud, Cpu, Layers, 
  Zap, ShieldCheck, Check, ArrowRight, Sparkles,
  Database, Terminal, Globe, Lock, CpuIcon
} from "lucide-react";

export const TechStackShowcase = () => {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "cloud" | "ai" | "hospitality">("frontend");

  const categories = [
    { id: "frontend", label: "Frontend & Speed", icon: <Code2 className="w-4 h-4" /> },
    { id: "backend", label: "APIs & Payments", icon: <Server className="w-4 h-4" /> },
    { id: "cloud", label: "Cloud & DevOps", icon: <Cloud className="w-4 h-4" /> },
    { id: "ai", label: "AI & Automation", icon: <Cpu className="w-4 h-4" /> },
    { id: "hospitality", label: "Channel & iCal", icon: <Layers className="w-4 h-4" /> },
  ] as const;

  const stackDetails = {
    frontend: {
      headline: "Sub-Second Web & Mobile UI",
      subline: "Engineered for 95+ Google PageSpeed scores, turning casual mobile travelers into instant direct bookings.",
      metric: "99 / 100",
      metricLabel: "Google Lighthouse Mobile Score",
      cards: [
        {
          name: "Next.js 15 App Router",
          tag: "Core Engine",
          desc: "Server-side rendering (SSR) and edge-cached static pages for near-instant first load on 4G/5G.",
          badge: "Sub-Second LCP",
        },
        {
          name: "TypeScript End-to-End",
          tag: "Reliability",
          desc: "Strict type safety eliminates checkout crashes and reservation runtime bugs.",
          badge: "100% Type-Safe",
        },
        {
          name: "Tailwind CSS & Modern UI",
          tag: "Design System",
          desc: "Bespoke, featherweight responsive interfaces custom-crafted for luxury stays.",
          badge: "Zero Bloat",
        },
        {
          name: "Core Web Vitals Mastery",
          tag: "SEO Boost",
          desc: "Optimized LCP, INP, and CLS scores that Google rewards with top local search rankings.",
          badge: "SEO Priority",
        },
      ],
    },
    backend: {
      headline: "Resilient APIs & Direct Payments",
      subline: "High-throughput Node.js microservices and direct Stripe payment flows with zero intermediary commission fees.",
      metric: "€0",
      metricLabel: "OTA Commission on Direct Gateways",
      cards: [
        {
          name: "Stripe & Direct Payouts",
          tag: "Revenue",
          desc: "Accept Apple Pay, Google Pay, and international cards with funds landing straight in your Greek bank.",
          badge: "Instant Payouts",
        },
        {
          name: "Node.js & Express / NestJS",
          tag: "API Architecture",
          desc: "High-concurrency async endpoints built to handle intense summer booking spikes without slowdowns.",
          badge: "High Throughput",
        },
        {
          name: "MongoDB & PostgreSQL",
          tag: "Data Layer",
          desc: "Flexible, resilient schema designs for multi-unit boutique hotels, private villas, and vehicle fleets.",
          badge: "ACID Compliant",
        },
        {
          name: "Greek myDATA Invoicing API",
          tag: "Compliance",
          desc: "Automated fiscal electronic invoice transmission in compliance with Greek tax authority rules.",
          badge: "AADE Connected",
        },
      ],
    },
    cloud: {
      headline: "Cloud Infrastructure & Zero Downtime",
      subline: "Enterprise containerization and European regional cloud hosting guaranteeing 99.9% uptime throughout summer.",
      metric: "99.9%",
      metricLabel: "Operational Summer Uptime",
      cards: [
        {
          name: "Docker Containerization",
          tag: "Isolation",
          desc: "Reproducible container microservices deployed with zero environmental friction.",
          badge: "Isolated & Fast",
        },
        {
          name: "Microsoft Azure & Linux VPS",
          tag: "Hosting",
          desc: "Hosted in low-latency European regions (Italy North & Germany) for ultra-fast response times.",
          badge: "EU Cloud Tier 1",
        },
        {
          name: "Nginx Proxy & SSL / DNS",
          tag: "Security",
          desc: "Automated Let's Encrypt SSL, enterprise HTTP/3 headers, and DDoS mitigation.",
          badge: "A+ SSL Rating",
        },
        {
          name: "Automated CI/CD Pipelines",
          tag: "Operations",
          desc: "Automated tests and zero-downtime rolling deployments for continuous system improvements.",
          badge: "Zero-Downtime",
        },
      ],
    },
    ai: {
      headline: "Computer Vision & Intelligent Automation",
      subline: "Applying startup-grade AI algorithms and smart assistants to automate repetitive guest communication and monitoring.",
      metric: "24/7",
      metricLabel: "Automated Concierge Availability",
      cards: [
        {
          name: "Smart AI Concierge Assistants",
          tag: "Guest Delight",
          desc: "Interactive chatbots that instantly answer property amenities, check-in instructions, and Corfu local tips.",
          badge: "Multi-Language",
        },
        {
          name: "Python, OpenCV & YOLO Models",
          tag: "Deep Tech",
          desc: "Custom computer-vision inspection and image recognition pipelines from founder's research background.",
          badge: "Vision AI",
        },
        {
          name: "Dynamic Seasonal Pricing Logic",
          tag: "Yield Optimization",
          desc: "Rule-based pricing adjustment engine that maximizes revenue during high-demand Corfu weekends.",
          badge: "Max Revenue",
        },
        {
          name: "Automated WhatsApp / Email Alerts",
          tag: "Operations",
          desc: "Instant automated booking confirmations, directions, and WiFi credentials dispatched to arriving guests.",
          badge: "Zero Manual Work",
        },
      ],
    },
    hospitality: {
      headline: "Hospitality Sync & Channel Protocols",
      desc: "Custom engines built specifically for the vacation rental and hotel ecosystem.",
      subline: "Real-time calendar synchronization eliminating double-bookings across Airbnb, Booking.com, and VRBO.",
      metric: "100%",
      metricLabel: "2-Way Calendar Synchronization",
      cards: [
        {
          name: "2-Way iCal Engine (RFC 5545)",
          tag: "Sync Protocol",
          desc: "Direct bookings immediately block dates on external OTAs within seconds to prevent double reservations.",
          badge: "Instant Sync",
        },
        {
          name: "Direct Booking Engine",
          tag: "Disintermediation",
          desc: "Custom multi-step checkout flow optimized to maximize conversion and bypass OTA commission cuts.",
          badge: "0% Commission",
        },
        {
          name: "Boat & Transfer Slot Scheduling",
          tag: "Maritime & Fleet",
          desc: "Time-slotted capacity management with pickup zone calculations for sea tours and airport transfers.",
          badge: "Fleet Engine",
        },
        {
          name: "Multi-Currency & Multilingual Routing",
          tag: "Global Guests",
          desc: "Seamless language switching (EN, EL, IT, DE) and automatic currency formatting for international travelers.",
          badge: "Multi-Currency",
        },
      ],
    },
  };

  const current = stackDetails[activeTab];

  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Full-Stack Architecture
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              The Modern Engineering Stack
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              We ditch slow WordPress plugins and outdated templates. We build custom, high-availability software on enterprise cloud and TypeScript.
            </p>
          </div>

          {/* Key Metric Badge */}
          <div className="bg-slate-800/80 backdrop-blur border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shrink-0">
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
              {current.metric}
            </div>
            <div className="text-xs text-slate-300 font-medium max-w-[130px] leading-snug">
              {current.metricLabel}
            </div>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 scale-[1.02]"
                    : "bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700/50"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Context Banner */}
        <div className="mb-6">
          <h4 className="text-xl font-bold text-sky-400">{current.headline}</h4>
          <p className="text-slate-400 text-sm mt-1">{current.subline}</p>
        </div>

        {/* 4-Card Visual Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {current.cards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-slate-850 bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/60 hover:border-sky-500/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                    {card.tag}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    {card.badge}
                  </span>
                </div>
                <h5 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition">
                  {card.name}
                </h5>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Production Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
