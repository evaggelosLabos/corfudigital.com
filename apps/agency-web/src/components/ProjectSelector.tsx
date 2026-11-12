"use client";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ProjectSelector({ isEl }: { isEl: boolean }) {
  const [choice,setChoice]=useState(0);
  const mobileDetails = useRef<Array<HTMLDivElement | null>>([]);
  const desktopDetail = useRef<HTMLDivElement>(null);
  const selectOption = (index: number) => {
    setChoice(index);
    if (window.matchMedia("(max-width: 767px)").matches) {
      window.requestAnimationFrame(() => mobileDetails.current[index]?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "nearest" }));
    } else {
      window.requestAnimationFrame(() => {
        const detail = desktopDetail.current;
        const label = detail?.querySelector(".project-detail-number");
        const button = detail?.querySelector(".story-button");
        if (!label || !button) return;
        const labelTop = label.getBoundingClientRect().top;
        const buttonBottom = button.getBoundingClientRect().bottom;
        const visibleTop = 130;
        const visibleBottom = window.innerHeight - 24;
        if (labelTop < visibleTop || buttonBottom > visibleBottom) {
          window.scrollBy({ top: labelTop - visibleTop, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        }
      });
    }
  };
  const options=[
    {name:isEl?"Ιστοσελίδα":"Website",title:isEl?"Μια παρουσία που σας εκφράζει.":"An online presence that feels like you.",text:isEl?"Παρουσιάστε την επιχείρησή σας και βοηθήστε τους πελάτες να σας βρουν και να επικοινωνήσουν μαζί σας.":"Introduce your business and help customers find and contact you.", subject:isEl?"Νέα ιστοσελίδα":"New website"},
    {name:isEl?"Σύστημα κρατήσεων":"Booking system",title:isEl?"Κρατήσεις στα μέτρα σας.":"Bookings built around your business.",text:isEl?"Από online αιτήματα έως απευθείας κρατήσεις για καταλύματα, σκάφη ή μεταφορές.":"From online enquiries to direct bookings for accommodation, boats or transfers.",subject:isEl?"Σύστημα κρατήσεων":"Booking system"},
    {name:isEl?"Ηλεκτρονικό κατάστημα":"Online store",title:isEl?"Τα προϊόντα σας online.":"Your products, ready to discover.",text:isEl?"Ένα ηλεκτρονικό κατάστημα που φέρνει τα προϊόντα και τις υπηρεσίες σας πιο κοντά στους πελάτες.":"An online store that brings your products and services closer to customers.",subject:isEl?"Ηλεκτρονικό κατάστημα":"Online store"},
    {name:isEl?"Αυτοματισμοί":"Automation",title:isEl?"Περισσότερος χρόνος για όσα μετράνε.":"More time for what matters.",text:isEl?"Ψηφιακά εργαλεία για επικοινωνία, αιτήματα και καθημερινές εργασίες της επιχείρησής σας.":"Digital tools for communication, enquiries and the everyday work of your business.",subject:isEl?"Ψηφιακοί αυτοματισμοί":"Business automation"},
  ];
  const active=options[choice];
  const subject=encodeURIComponent(`${isEl?"Ενδιαφέρον για":"Interested in"} ${active.subject} - Corfu Digital`);
  const body=encodeURIComponent(isEl?`Γεια σας, ενδιαφέρομαι για ${active.subject}.\n\nΛίγα λόγια για την επιχείρησή μου: `:`Hello, I am interested in ${active.subject}.\n\nA little about my business: `);
  const detail = <><div className="project-detail-number">0{choice+1} / {isEl?"ΕΠΙΛΕΓΜΕΝΟ ΕΡΓΟ":"PROJECT SELECTED"}</div><h3>{active.title}</h3><p>{active.text}</p><div className="project-detail-art" aria-hidden="true"><div className="project-art-window"><i/><i/><i/><div/><span/><span/></div><div className="project-art-orbit">✳</div></div><a href={`mailto:info@corfudigital.com?subject=${subject}&body=${body}`} className="story-button">{isEl?"ΣΥΖΗΤΗΣΤΕ ΑΥΤΟ ΤΟ ΕΡΓΟ":"DISCUSS THIS PROJECT"} <ArrowUpRight size={17}/></a></>;
  return <section id="project" className="project-selector" aria-labelledby="project-title"><div className="project-select-list"><span className="project-kicker">06 / {isEl?"Η ΔΙΚΗ ΣΑΣ ΙΔΕΑ":"YOUR NEXT PROJECT"}</span><h2 id="project-title">{isEl?<>ΤΙ ΘΕΛΕΤΕ<br/><em>ΝΑ ΧΤΙΣΟΥΜΕ;</em></>:<>WHAT WOULD YOU<br/><em>LIKE TO BUILD?</em></>}</h2><p>{isEl?"Επιλέξτε αυτό που σας ταιριάζει και ξεκινήστε τη συζήτηση.":"Choose the idea closest to yours and start a conversation."}</p><div className="project-options" role="group" aria-label={isEl?"Επιλογή έργου":"Choose a project"}>{options.map((option,i)=><div className="project-option" key={option.name}><button type="button" aria-pressed={choice===i} aria-controls={`project-detail-mobile-${i}`} className={choice===i?"selected":""} onClick={()=>selectOption(i)}><span>0{i+1}</span><strong>{option.name}</strong><span aria-hidden="true">{choice===i?"−":"+"}</span></button><div id={`project-detail-mobile-${i}`} ref={node=>{mobileDetails.current[i]=node;}} className="project-mobile-detail" hidden={choice!==i}>{choice===i && detail}</div></div>)}</div></div><div className="project-select-detail"><div ref={desktopDetail} className="project-detail-inner" aria-live="polite">{detail}</div></div></section>;
}
