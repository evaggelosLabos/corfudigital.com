"use client";

import { ArrowRight, Mail, Phone, Globe, CalendarDays, Sparkles, CreditCard } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "../components/Navbar";
import { WebsiteFaq } from "../components/WebsiteFaq";
import { IntroSequence } from "../components/IntroSequence";
import { BusinessConveyor } from "../components/BusinessConveyor";
import { DigitalDistrict } from "../components/DigitalDistrict";
import { ProjectSelector } from "../components/ProjectSelector";
import { StoryNavigation } from "../components/StoryNavigation";
import "./home-story.css";

export function HomeView() {
  const { lang } = useLanguage();
  const isEl = lang === "el";
  return <div className="story-home"><Navbar /><StoryNavigation isEl={isEl} />
    <main>
      <IntroSequence isEl={isEl} />

      <DigitalDistrict lang={lang} isEl={isEl} />
      <BusinessConveyor lang={lang} isEl={isEl} />
      <section id="capabilities" className="story-capabilities"><div className="story-section-inner"><div className="story-section-label">04 / {isEl ? "ΠΕΡΙΣΣΟΤΕΡΑ ΑΠΟ ΜΙΑ ΙΣΤΟΣΕΛΙΔΑ" : "MORE THAN A WEBSITE"}</div><h2>{isEl ? <>Η ΙΔΕΑ ΣΑΣ.<br /><em>Η ΔΥΝΑΜΗ ΜΑΣ.</em></> : <>YOUR IDEA.<br /><em>OUR CRAFT.</em></>}</h2><div className="story-cap-grid">{[{icon: Globe, title:isEl?"Ιστοσελίδες":"Websites", text:isEl?"Μια δυνατή ψηφιακή παρουσία, σχεδιασμένη για το κοινό σας.":"A distinctive online presence, designed for your audience."},{icon: CalendarDays,title:isEl?"Κρατήσεις":"Bookings",text:isEl?"Ένας απλός τρόπος για τους πελάτες να έρχονται σε επαφή ή να κάνουν κράτηση.":"A simple way for customers to enquire or make a booking."},{icon: Sparkles,title:isEl?"Αυτοματισμοί":"Automation",text:isEl?"Ψηφιακά εργαλεία που υποστηρίζουν την καθημερινή εργασία σας.":"Digital tools that support the way you work every day."},{icon: CreditCard,title:isEl?"Online πωλήσεις":"Online sales",text:isEl?"Προϊόντα, υπηρεσίες και πληρωμές με λύσεις που ταιριάζουν στην επιχείρησή σας.":"Products, services and payments with solutions shaped around your business."}].map(({icon:Icon,title,text},index)=><article key={title}><div className="story-cap-top"><span>0{index+1}</span><Icon size={25}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="about" className="story-about"><div className="story-section-inner story-about-grid"><div className="about-art" aria-hidden="true"><div className="about-orbit about-orbit-one"/><div className="about-orbit about-orbit-two"/><div className="about-monogram">EL<span>✳</span></div><div className="about-art-label">CORFU <span> / </span> DIGITAL</div></div><div className="about-copy"><div className="story-section-label">05 / {isEl ? "ΠΙΣΩ ΑΠΟ ΤΗΝ ΙΔΕΑ" : "BEHIND THE IDEA"}</div><h2>{isEl ? <>ΤΕΧΝΟΛΟΓΙΑ<br/><em>ΜΕ ΑΝΘΡΩΠΟ.</em></> : <>TECHNOLOGY<br/><em>WITH A HUMAN SIDE.</em></>}</h2><p>{isEl ? "Πίσω από την Corfu Digital βρίσκεται ο Ευάγγελος Λάμπος, μηχανικός λογισμικού στην Κέρκυρα. Από την πρώτη συζήτηση έως την υλοποίηση, στόχος είναι να δημιουργούμε ψηφιακές λύσεις γύρω από τις πραγματικές ανάγκες κάθε επιχείρησης." : "Corfu Digital is led by Evangelos Lampos, a software engineer based in Corfu. From the first conversation to the finished product, the goal is to create digital solutions around the real needs of each business."}</p><div className="about-tags"><span>{isEl?"ΚΕΡΚΥΡΑ":"CORFU"}</span><span>{isEl?"ΙΣΤΟΣΕΛΙΔΕΣ":"WEBSITES"}</span><span>{isEl?"ΨΗΦΙΑΚΑ ΕΡΓΑΛΕΙΑ":"DIGITAL TOOLS"}</span></div><a href="#contact" className="about-link">{isEl?"ΑΣ ΜΙΛΗΣΟΥΜΕ":"LET’S TALK"} ↗</a></div></div></section>
      <ProjectSelector isEl={isEl} />
      <section id="contact" className="story-finale"><div className="finale-label">07 / {isEl ? "Η ΕΠΟΜΕΝΗ ΙΔΕΑ" : "THE NEXT IDEA"}</div><h2><span>{isEl ? "ΑΣ ΤΟ ΚΑΝΟΥΜΕ" : "LET’S MAKE IT"}</span><em>{isEl ? "ΠΡΑΓΜΑΤΙΚΟ." : "REAL."}</em></h2><div className="finale-illustration" aria-hidden="true"><div className="finale-ring finale-ring-one"/><div className="finale-ring finale-ring-two"/><div className="finale-star">✳</div><span>CORFU / DIGITAL</span></div><p>{isEl ? "Έχετε μια ιδέα ή μια επιχείρηση που θέλετε να αναπτύξετε; Ας συζητήσουμε τι μπορούμε να δημιουργήσουμε μαζί." : "Have an idea or a business you want to grow? Let’s talk about what we can create together."}</p><a className="finale-button" href="mailto:info@corfudigital.com?subject=Project%20Inquiry%20-%20Corfu%20Digital">{isEl ? "ΑΣ ΜΙΛΗΣΟΥΜΕ" : "START A CONVERSATION"} <ArrowRight size={18}/></a><div className="finale-links"><a href="tel:+306945474102"><Phone size={16}/> +30 694 547 4102</a><a href="mailto:info@corfudigital.com"><Mail size={16}/> info@corfudigital.com</a></div></section>
      <WebsiteFaq />
    </main>
  </div>;
}
