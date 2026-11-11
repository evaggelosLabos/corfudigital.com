"use client";
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function IntroSequence({ isEl }: { isEl: boolean }) {
  const root=useRef<HTMLElement>(null), stage=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const section=root.current, scene=stage.current; if(!section||!scene)return;
    const reduce=matchMedia("(prefers-reduced-motion: reduce)"); let frame=0;
    const update=()=>{frame=0;if(reduce.matches){section.classList.remove("intro-animated", "intro-open");scene.style.removeProperty("--intro-progress");return;}
      section.classList.add("intro-animated"); const travel=Math.max(1,section.offsetHeight-scene.offsetHeight); const progress=Math.max(0,Math.min(1,(80-section.getBoundingClientRect().top)/travel)); scene.style.setProperty("--intro-progress",String(progress));section.classList.toggle("intro-open",progress>.45);};
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);}; update(); window.addEventListener("scroll",schedule,{passive:true});window.addEventListener("resize",schedule);reduce.addEventListener("change",schedule);
    return()=>{window.removeEventListener("scroll",schedule);window.removeEventListener("resize",schedule);reduce.removeEventListener("change",schedule);if(frame)cancelAnimationFrame(frame);section.classList.remove("intro-animated");};
  },[]);
  return <section id="intro" ref={root} className="intro-sequence" aria-labelledby="intro-title"><div className="intro-stage" ref={stage}>
    <h1 id="intro-title" className="sr-only">{isEl?"Η επιχείρησή σας, ζωντανή online. Ιστοσελίδες, κρατήσεις και ψηφιακά εργαλεία στην Κέρκυρα.":"Your business, brought to life online. Websites, bookings and digital tools in Corfu."}</h1>
    <div className="intro-reveal" aria-hidden="true"><div className="intro-reveal-copy"><span>02 / CORFU DIGITAL</span><strong>{isEl?<>Η ΙΔΕΑ ΣΑΣ.<br/><em>ΣΕ ΚΙΝΗΣΗ.</em></>:<>YOUR IDEA.<br/><em>IN MOTION.</em></>}</strong></div><div className="intro-compass"><div className="intro-compass-ring intro-compass-ring-one"/><div className="intro-compass-ring intro-compass-ring-two"/><svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="118" fill="#9DC5FF"/><path d="M32 155Q80 117 125 151Q170 110 215 149Q251 126 268 146V207H32Z" fill="#4D79BD"/><path d="M32 195Q90 170 150 197T268 195V225H32Z" fill="#174788"/><path d="M32 215Q90 195 150 217T268 215V224Q150 288 32 224Z" fill="#2A6BC8"/><path d="M110 185V123H190V185" fill="#E6EFFF"/><path d="M98 123L150 87L202 123Z" fill="#316CF4"/><path d="M122 138H137V155H122Z M163 138H178V155H163Z" fill="#193F7A"/><path d="M143 185V162H157V185" fill="#527BC0"/></svg><span>N</span></div><div className="intro-reveal-tag">CORFU DIGITAL <b>✳</b> {isEl?"ΙΔΕΕΣ ΣΕ ΚΙΝΗΣΗ":"IDEAS IN MOTION"}</div></div>
    <div className="intro-panel intro-panel-idea" aria-hidden="true"><div className="intro-panel-title">{isEl?<>Η ΔΙΚΗ ΣΑΣ<br/><em>ΙΔΕΑ.</em></>:<>YOUR<br/><em>IDEA.</em></>}</div><div className="intro-browser-art"><div className="intro-browser-bar"><i/><i/><i/></div><div className="intro-browser-copy"><b/><b/><b/><span/></div><div className="intro-browser-image"><div className="intro-art-sun"/><div className="intro-art-hill"/></div></div><div className="intro-mobile-art"><div/><span/><span/></div><div className="intro-panel-caption">01 / {isEl?"Η ΕΠΙΧΕΙΡΗΣΗ ΣΑΣ":"YOUR BUSINESS"}</div></div>
    <div className="intro-panel intro-panel-digital" aria-hidden="true"><div className="intro-panel-title">{isEl?<>Ο ΨΗΦΙΑΚΟΣ<br/><em>ΚΟΣΜΟΣ.</em></>:<>THE DIGITAL<br/><em>WORLD.</em></>}</div><div className="intro-dashboard-art"><div className="intro-dashboard-bar"><i/><i/><i/></div><div className="intro-dashboard-heading">CORFU DIGITAL <span>✳</span></div><div className="intro-dashboard-row"><b>01</b><span>{isEl?"ΙΣΤΟΣΕΛΙΔΕΣ":"WEBSITES"}</span><small>↗</small></div><div className="intro-dashboard-row"><b>02</b><span>{isEl?"ΚΡΑΤΗΣΕΙΣ":"BOOKINGS"}</span><small>↗</small></div><div className="intro-dashboard-row"><b>03</b><span>{isEl?"ΑΥΤΟΜΑΤΙΣΜΟΙ":"AUTOMATION"}</span><small>↗</small></div></div><div className="intro-panel-caption">02 / {isEl?"Η ΨΗΦΙΑΚΗ ΛΥΣΗ":"THE DIGITAL SOLUTION"}</div></div>
    <div className="intro-center-label" aria-hidden="true"><span>{isEl?"Η ΙΔΕΑ":"IDEA"}</span><b>✳</b><span>{isEl?"Η ΛΥΣΗ":"DIGITAL"}</span></div>
    <div className="intro-actions"><a href="#district">{isEl?"ΑΝΑΚΑΛΥΨΤΕ ΤΙΣ ΥΠΗΡΕΣΙΕΣ":"EXPLORE OUR SERVICES"} <ArrowDown size={16}/></a><a href="#contact">{isEl?"ΣΥΖΗΤΗΣΤΕ ΜΑΖΙ ΜΑΣ":"LET’S TALK"} <ArrowUpRight size={16}/></a></div>
    <div className="intro-scroll-hint" aria-hidden="true">{isEl?"ΚΥΛΗΣΤΕ ΓΙΑ ΝΑ ΑΝΑΚΑΛΥΨΕΤΕ":"SCROLL TO DISCOVER"} ↓</div>
  </div></section>;
}
