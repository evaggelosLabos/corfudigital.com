"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Send, Bot, User, ArrowRight, CheckCircle2, MessageSquare, Compass, ShieldCheck } from "lucide-react";

interface Message {
  sender: "ai" | "user";
  text: string;
  time: string;
  quickReplies?: string[];
}

export const AiHospitalityAssistant = () => {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "👋 Hello! I am the **IonianCode AI Hospitality Assistant**.\n\nI can show you how our custom software cuts OTA commissions, demonstrate real-time booking calculations, or answer questions about our live production projects in Corfu (*Marcopolo Hotel*, *Aeolina Villas*, *Ion Boats*).",
      time: "Just now",
      quickReplies: [
        "How do you eliminate 20% Airbnb/Booking fees?",
        "Tell me about your Marcopolo & Aeolina projects",
        "How does 2-way iCal sync prevent double bookings?",
        "What can you build for my hotel or villas in Corfu?",
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Dynamic AI response logic based on hospitality queries
    setTimeout(() => {
      let replyText = "";
      let replies: string[] = [];

      const lower = query.toLowerCase();

      if (lower.includes("airbnb") || lower.includes("booking") || lower.includes("commission") || lower.includes("fee") || lower.includes("eliminate")) {
        replyText = "💰 **How We Eliminate OTA Commissions:**\n\n1. **Direct Booking Engine**: We embed a custom Stripe-powered booking engine directly into your hotel or villa website.\n2. **Zero Middleman Fees**: Instead of paying 15%–20% to Booking.com or Airbnb, you only pay standard 1.6% bank processing.\n3. **Guest Retention**: You own guest emails and phone numbers for direct return stays in future seasons.\n\n*Example:* A Corfu villa generating €80,000/year reclaims over **€13,000 in pure profit** every season!";
        replies = ["How does 2-way iCal sync work?", "Can you audit my property website?"];
      } else if (lower.includes("marcopolo") || lower.includes("aeolina") || lower.includes("ion") || lower.includes("project") || lower.includes("case")) {
        replyText = "🏆 **Our Live Production Systems in Corfu:**\n\n• **Marcopolo Hotel** (*marcopolocorfu.com*): Sub-second responsive hotel showcase in Corfu Town with instant room discovery.\n• **ion-boats** (*ion-boats.com*): Custom sea excursion and boat rental booking platform operating from Benitses.\n• **AEOLINA Luxury Villas** (*aeolinavillas.com*): Luxury villa booking system with 2-way iCal calendar sync with Airbnb.\n• **Corfu Transfers** (*corfutransfersapp.com*): Dynamic zone pricing and automated driver dispatch.\n\nAll built with Next.js 15, TypeScript, and hosted on high-availability European cloud.";
        replies = ["How fast can you build a website for my villa?", "How does iCal sync work?"];
      } else if (lower.includes("ical") || lower.includes("sync") || lower.includes("double")) {
        replyText = "🔄 **2-Way iCal Synchronization (RFC 5545):**\n\nWhen a guest books directly on your website, our system automatically pushes updated availability to Airbnb, Booking.com, and VRBO within seconds.\n\nLikewise, when an OTA booking comes in, those dates are instantly blocked on your website—guaranteeing **zero double-bookings**.";
        replies = ["How do you eliminate 20% Airbnb/Booking fees?", "Schedule a discovery call"];
      } else {
        replyText = "🚀 **Tailored Hospitality Engineering in Corfu:**\n\nFounded by **Evangelos Lampos** (EIT Digital Venture alumni & MSc AI/Computer Vision), our studio builds:\n\n1. Custom Direct Booking Engines (0% Commission)\n2. Sub-second Next.js Hotel Websites (< 1s load)\n3. Boat Tour & Transfer Fleet Booking Software\n4. Digital QR Restaurant Menus with Greek myDATA compliance\n\nWould you like a free technical & SEO audit for your property?";
        replies = ["Request a Free Audit", "Tell me about your Marcopolo & Aeolina projects"];
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          quickReplies: replies,
        },
      ]);
    }, 900);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 via-sky-50/30 to-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold border border-sky-200 mb-4">
            <Sparkles className="w-4 h-4 text-sky-600" />
            Live Interactive AI Demo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Experience Our Hospitality AI in Action
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            This is the exact intelligent AI assistant technology we embed into our clients&apos; hotel, villa, and excursion platforms in Corfu to engage guests 24/7.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-stone-200/90 shadow-2xl shadow-sky-900/10 overflow-hidden flex flex-col h-[600px]">
          {/* AI Header Bar */}
          <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900"></span>
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  IonianCode AI Assistant
                  <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-[10px] font-semibold border border-sky-400/30">
                    Live Demo
                  </span>
                </div>
                <div className="text-xs text-slate-400">Trained on Corfu Hospitality & Direct Bookings</div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Online & Instant
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-stone-50/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "ai" && (
                  <div className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[75%] space-y-2`}>
                  <div
                    className={`rounded-2xl px-5 py-3.5 text-sm leading-relaxed whitespace-pre-line shadow-xs ${
                      msg.sender === "user"
                        ? "bg-sky-600 text-white rounded-br-none"
                        : "bg-white text-stone-800 border border-stone-200/80 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.quickReplies.map((qr, qrIdx) => (
                        <button
                          key={qrIdx}
                          onClick={() => handleSend(qr)}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white hover:bg-sky-50 text-sky-800 hover:text-sky-900 border border-stone-200 hover:border-sky-300 transition shadow-2xs cursor-pointer text-left"
                        >
                          💬 {qr}
                        </button>
                      ))}
                    </div>
                  )}

                  <div
                    className={`text-[10px] text-stone-400 ${
                      msg.sender === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>

                {msg.sender === "user" && (
                  <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-stone-200/80 rounded-2xl rounded-bl-none px-4 py-3 shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-4 bg-white border-t border-stone-200 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about direct booking savings, iCal sync, or Corfu projects..."
                className="flex-1 px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-3 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:hover:bg-sky-600 text-white transition shadow-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
