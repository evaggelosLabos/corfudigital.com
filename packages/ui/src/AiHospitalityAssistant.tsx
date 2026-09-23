"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Send, Bot, User, ArrowRight, CheckCircle2, MessageSquare, Compass, ShieldCheck } from "lucide-react";

interface Message {
  sender: "ai" | "user";
  text: string;
  time: string;
  quickReplies?: string[];
}

export interface AiHospitalityAssistantProps {
  lang?: "en" | "el";
}

export const AiHospitalityAssistant: React.FC<AiHospitalityAssistantProps> = ({ lang = "en" }) => {
  const isEl = lang === "el";
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: isEl 
        ? "👋 Γεια σας! Είμαι ο **Corfu Digital AI Hospitality Assistant**.\n\nΜπορώ να σας δείξω πώς το λογισμικό μας μηδενίζει τις προμήθειες Booking/Airbnb, να υπολογίσω το κέρδος σας σε πραγματικό χρόνο, ή να απαντήσω σε ερωτήσεις για τα πραγματικά μας έργα στην Κέρκυρα (*Marcopolo Hotel*, *Aeolina Villas*, *ion-boats*)."
        : "👋 Hello! I am the **Corfu Digital AI Hospitality Assistant**.\n\nI can show you how our custom software cuts OTA commissions, demonstrate real-time booking calculations, or answer questions about our live production projects in Corfu (*Marcopolo Hotel*, *Aeolina Villas*, *Ion Boats*).",
      time: isEl ? "Τώρα" : "Just now",
      quickReplies: isEl ? [
        "Πώς μηδενίζετε το 20% των προμηθειών;",
        "Πείτε μου για τα έργα Marcopolo & Aeolina",
        "Πώς λειτουργεί ο συγχρονισμός iCal;",
        "Τι μπορείτε να φτιάξετε για το κατάλυμά μου;",
      ] : [
        "How do you eliminate 20% Airbnb/Booking fees?",
        "Tell me about your Marcopolo & Aeolina projects",
        "How does 2-way iCal sync prevent double bookings?",
        "What can you build for my hotel or villas in Corfu?",
      ],
    },
  ]);

  // Reset initial message when language changes
  useEffect(() => {
    setMessages([
      {
        sender: "ai",
        text: isEl 
          ? "👋 Γεια σας! Είμαι ο **Corfu Digital AI Hospitality Assistant**.\n\nΜπορώ να σας δείξω πώς το λογισμικό μας μηδενίζει τις προμήθειες Booking/Airbnb, να υπολογίσω το κέρδος σας σε πραγματικό χρόνο, ή να απαντήσω σε ερωτήσεις για τα πραγματικά μας έργα στην Κέρκυρα (*Marcopolo Hotel*, *Aeolina Villas*, *ion-boats*)."
          : "👋 Hello! I am the **Corfu Digital AI Hospitality Assistant**.\n\nI can show you how our custom software cuts OTA commissions, demonstrate real-time booking calculations, or answer questions about our live production projects in Corfu (*Marcopolo Hotel*, *Aeolina Villas*, *Ion Boats*).",
        time: isEl ? "Τώρα" : "Just now",
        quickReplies: isEl ? [
          "Πώς μηδενίζετε το 20% των προμηθειών;",
          "Πείτε μου για τα έργα Marcopolo & Aeolina",
          "Πώς λειτουργεί ο συγχρονισμός iCal;",
          "Τι μπορείτε να φτιάξετε για το κατάλυμά μου;",
        ] : [
          "How do you eliminate 20% Airbnb/Booking fees?",
          "Tell me about your Marcopolo & Aeolina projects",
          "How does 2-way iCal sync prevent double bookings?",
          "What can you build for my hotel or villas in Corfu?",
        ],
      },
    ]);
  }, [isEl]);

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

    setTimeout(() => {
      let replyText = "";
      let replies: string[] = [];

      const lower = query.toLowerCase();

      if (isEl) {
        if (lower.includes("airbnb") || lower.includes("booking") || lower.includes("προμήθει") || lower.includes("fee") || lower.includes("μηδεν")) {
          replyText = "💰 **Πώς Μηδενίζουμε τις Προμήθειες των OTA:**\n\n1. **Απευθείας Μηχανή Κρατήσεων**: Ενσωματώνουμε σύστημα πληρωμών Stripe απευθείας στην ιστοσελίδα του ξενοδοχείου ή της βίλας σας.\n2. **Χωρίς Μεσάζοντες**: Αντί να πληρώνετε 15%–20% σε Booking.com ή Airbnb, πληρώνετε μόνο το τυπικό ~1.6% τραπεζικής εκκαθάρισης.\n3. **Δικά σας Δεδομένα**: Κρατάτε τα emails και τα τηλέφωνα των επισκεπτών για απευθείας επαναλαμβανόμενες κρατήσεις.\n\n*Παράδειγμα:* Μια βίλα στην Κέρκυρα με τζίρο €80.000/σεζόν κερδίζει πάνω από **€13.000 καθαρό κέρδος** κάθε χρόνο!";
          replies = ["Πώς λειτουργεί ο συγχρονισμός iCal;", "Μπορώ να ζητήσω έλεγχο ιστοσελίδας;"];
        } else if (lower.includes("marcopolo") || lower.includes("aeolina") || lower.includes("ion") || lower.includes("έργ") || lower.includes("project")) {
          replyText = "🏆 **Ζωντανά Έργα Παραγωγής στην Κέρκυρα:**\n\n• **Marcopolo Hotel** (*marcopolocorfu.com*): Ταχύτατη παρουσίαση ξενοδοχείου στην Παλιά Πόλη με άμεση ανακάλυψη δωματίων.\n• **ion-boats** (*ion-boats.com*): Πλατφόρμα online κρατήσεων σκαφών και θαλάσσιων εκδρομών στις Μπενίτσες.\n• **AEOLINA Luxury Villas** (*aeolinavillas.com*): Σύστημα απευθείας κρατήσεων με αμφίδρομο συγχρονισμό iCal με Airbnb.\n• **Corfu Transfers** (*corfutransfersapp.com*): Δυναμική τιμολόγηση ζωνών και αυτόματη ανάθεση διαδρομών.\n\nΌλα κατασκευασμένα με Next.js 15, TypeScript και φιλοξενία σε ευρωπαϊκό cloud.";
          replies = ["Πόσο γρήγορα μπορεί να γίνει μια ιστοσελίδα;", "Πώς λειτουργεί ο συγχρονισμός iCal;"];
        } else if (lower.includes("ical") || lower.includes("sync") || lower.includes("συγχρονισμ") || lower.includes("διπλο")) {
          replyText = "🔄 **Αμφίδρομος Συγχρονισμός iCal (RFC 5545):**\n\nΌταν ένας επισκέπτης κλείνει απευθείας από την ιστοσελίδα σας, το σύστημά μας ενημερώνει αυτόματα τη διαθεσιμότητα σε Airbnb, Booking.com και VRBO μέσα σε δευτερόλεπτα.\n\nΑντίστοιχα, όταν έρχεται κράτηση από πλατφόρμα, οι ημερομηνίες κλειδώνουν αμέσως στην ιστοσελίδα σας — εξασφαλίζοντας **μηδενικές διπλοκρατήσεις**.";
          replies = ["Πώς μηδενίζετε το 20% των προμηθειών;", "Κλείστε μια ενημερωτική κλήση"];
        } else {
          replyText = "🚀 **Εξειδικευμένο Λογισμικό Φιλοξενίας στην Κέρκυρα:**\n\nΙδρύθηκε από τον **Ευάγγελο Λάμπο** (EIT Digital Venture alumni & MSc AI/Computer Vision):\n\n1. Custom Μηχανές Κρατήσεων (0% Προμήθεια)\n2. Ταχύτατες Next.js Ιστοσελίδες (< 1s load)\n3. Συστήματα Κρατήσεων Σκαφών & Μεταφορών\n4. Digital QR Menus με myDATA συμβατότητα\n\nΘα θέλατε έναν δωρεάν τεχνικό & SEO έλεγχο για το κατάλυμά σας;";
          replies = ["Αίτηση Δωρεάν Ελέγχου", "Πείτε μου για τα έργα Marcopolo & Aeolina"];
        }
      } else {
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
    }, 800);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 via-sky-50/30 to-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold border border-sky-200 mb-4">
            <Sparkles className="w-4 h-4 text-sky-600" />
            {isEl ? "Ζωντανό Διαδραστικό AI Demo" : "Live Interactive AI Demo"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {isEl ? "Δείτε την Τεχνητή Νοημοσύνη (AI) στην Πράξη" : "Experience Our Hospitality AI in Action"}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            {isEl 
              ? "Αυτή είναι η τεχνολογία έξυπνου ψηφιακού concierge που ενσωματώνουμε στις πλατφόρμες των ξενοδοχείων και βιλών των πελατών μας στην Κέρκυρα για 24/7 εξυπηρέτηση."
              : "This is the exact intelligent AI assistant technology we embed into our clients' hotel, villa, and excursion platforms in Corfu to engage guests 24/7."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden flex flex-col h-[560px]">
          {/* Top Bar */}
          <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center font-bold text-white shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-stone-900"></div>
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  Corfu Digital AI Concierge
                  <span className="text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-full font-mono font-medium">
                    v2.4
                  </span>
                </div>
                <div className="text-xs text-stone-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> {isEl ? "Ενεργό • Άμεση Απόκριση" : "Online • Instant Response"}
                </div>
              </div>
            </div>
            <div className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-800 text-stone-300 border border-stone-700 hidden sm:block">
              {isEl ? "Hospitality Domain Engine" : "Hospitality Domain Engine"}
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-stone-50/50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "ai" && (
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 mt-1 border border-sky-200">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div className={`max-w-[85%] space-y-2`}>
                  <div
                    className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-sky-600 text-white rounded-tr-none shadow-sm"
                        : "bg-white text-stone-800 border border-stone-200 rounded-tl-none shadow-xs"
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>
                    <div
                      className={`text-[10px] mt-2 text-right ${
                        msg.sender === "user" ? "text-sky-200" : "text-stone-400"
                      }`}
                    >
                      {msg.time}
                    </div>
                  </div>

                  {/* Quick replies */}
                  {msg.quickReplies && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.quickReplies.map((qr, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(qr)}
                          className="text-[11px] font-medium bg-white hover:bg-sky-50 text-stone-700 hover:text-sky-700 px-3 py-1.5 rounded-full border border-stone-200 hover:border-sky-300 transition shadow-2xs"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {msg.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-stone-800 text-stone-200 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start items-center text-stone-500 text-xs pl-2">
                <Bot className="w-4 h-4 text-sky-600 animate-spin" />
                <span className="italic">{isEl ? "Το Corfu Digital AI πληκτρολογεί..." : "Corfu Digital AI is typing..."}</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-white border-t border-stone-200">
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
                placeholder={isEl ? "Ρωτήστε για απευθείας κρατήσεις, iCal sync, ή έργα στην Κέρκυρα..." : "Ask about direct bookings, iCal sync, or Corfu projects..."}
                className="flex-1 px-4 py-2.5 bg-stone-100 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-sky-500 focus:bg-white transition"
              />
              <button
                type="submit"
                className="p-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl transition shrink-0"
                aria-label="Send message"
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
