"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const getDistrictTravel = (distance: number) => distance > 0 ? Math.max(distance * 4, window.innerHeight * 3) : 0;

export function DigitalDistrict({ lang, isEl }: { lang: string; isEl: boolean }) {
  const section = useRef<HTMLElement>(null), stage = useRef<HTMLDivElement>(null), viewport = useRef<HTMLDivElement>(null), track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root=section.current, panel=stage.current, frame=viewport.current, rail=track.current;
    if (!root || !panel || !frame || !rail) return;
    const media=matchMedia("(min-width: 768px) and (min-height: 650px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let request=0;
    const update=()=>{ request=0; if (!media.matches) { root.classList.remove("district-pinned"); root.style.removeProperty("--district-height"); rail.style.removeProperty("transform"); return; }
      root.classList.add("district-pinned"); const distance=Math.max(0,rail.scrollWidth-frame.clientWidth), travel=getDistrictTravel(distance); root.style.setProperty("--district-height",`${panel.offsetHeight+travel}px`); const progress=travel?Math.max(0,Math.min(1,(80-root.getBoundingClientRect().top)/travel)):0; rail.style.transform=`translate3d(${-distance*progress}px,0,0)`; };
    const schedule=()=>{if(!request) request=requestAnimationFrame(update);};
    const observer=new ResizeObserver(schedule); observer.observe(frame); observer.observe(rail); update(); window.addEventListener("scroll",schedule,{passive:true}); window.addEventListener("resize",schedule); media.addEventListener("change",schedule);
    return ()=>{observer.disconnect(); window.removeEventListener("scroll",schedule); window.removeEventListener("resize",schedule); media.removeEventListener("change",schedule); if(request) cancelAnimationFrame(request); root.classList.remove("district-pinned"); rail.style.removeProperty("transform");};
  },[]);
  const focusCard = (element: HTMLElement) => {
    const root=section.current, frame=viewport.current, rail=track.current;
    if (!root || !frame || !rail || !root.classList.contains("district-pinned")) return;
    const distance=Math.max(0,rail.scrollWidth-frame.clientWidth);
    const travel=getDistrictTravel(distance);
    const current=travel ? Math.max(0,Math.min(distance,(80-root.getBoundingClientRect().top)*distance/travel)) : 0;
    const left=element.offsetLeft;
    const next=left<current?left:left+element.offsetWidth>current+frame.clientWidth?left+element.offsetWidth-frame.clientWidth:current;
    if(next!==current) window.scrollTo({top:window.scrollY+root.getBoundingClientRect().top-80+(distance ? next*travel/distance : 0),behavior:"instant"});
  };
  const cards=[
    { label:isEl?"ΞΕΝΟΔΟΧΕΙΟ":"HOTEL", text:isEl?"Φιλοξενία που ανακαλύπτεις online.":"A stay discovered online.", href:`/${lang}/services/hotel-websites`, type:"hotel" },
    { label:isEl?"ΒΙΛΑ":"VILLA", text:isEl?"Ένας ξεχωριστός χώρος, παντού προσβάσιμος.":"A special place, open to the world.", href:`/${lang}/services/villa-booking-engines`, type:"villa" },
    { label:isEl?"ΣΚΑΦΗ":"BOATS", text:isEl?"Εμπειρίες που ξεκινούν από μια οθόνη.":"Experiences that begin with a screen.", href:`/${lang}/services/boat-tours-transfers`, type:"boats" },
    { label:isEl?"ΜΕΤΑΦΟΡΕΣ":"TRANSFERS", text:isEl?"Ένα απλούστερο ξεκίνημα για κάθε διαδρομή.":"A smoother start to every journey.", href:`/${lang}/services/boat-tours-transfers`, type:"transfers" },
    { label:isEl?"ΕΣΤΙΑΣΗ":"RESTAURANTS", text:isEl?"Η γεύση σας συναντά το κοινό της online.":"Bring your menu and atmosphere online.", href:`/${lang}/services/digital-transformation`, type:"restaurants" },
    { label:isEl?"ΚΑΤΑΣΤΗΜΑΤΑ":"SHOPS", text:isEl?"Τα προϊόντα σας πιο κοντά στους πελάτες.":"Make your products easier to discover.", href:`/${lang}/services/digital-transformation`, type:"shops" },
    { label:isEl?"ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ":"EXPERIENCES", text:isEl?"Μοναδικές εμπειρίες που ξεκινούν online.":"Help visitors discover their next experience.", href:`/${lang}/services/boat-tours-transfers`, type:"experiences" },
    { label:isEl?"ΕΠΑΓΓΕΛΜΑΤΙΕΣ":"PROFESSIONALS", text:isEl?"Η δουλειά σας αξίζει δυνατή ψηφιακή παρουσία.":"A strong online presence for your expertise.", href:`/${lang}/website-development-corfu`, type:"professionals" },
  ];
  return <section id="district" ref={section} className="district" aria-labelledby="district-title"><div ref={stage} className="district-stage"><div className="district-heading"><span>03 / {isEl?"Η ΨΗΦΙΑΚΗ ΓΕΙΤΟΝΙΑ":"THE DIGITAL DISTRICT"}</span><h2 id="district-title">{isEl?<>Η ΕΠΙΧΕΙΡΗΣΗ ΣΑΣ.<br/><em>Η ΠΡΩΤΗ ΕΝΤΥΠΩΣΗ.</em></>:<>YOUR BUSINESS.<br/><em>THE FIRST IMPRESSION.</em></>}</h2><p><span className="district-desktop">{isEl?"ΣΥΝΕΧΙΣΤΕ ΤΟ SCROLL":"KEEP SCROLLING"}</span><span className="district-touch">{isEl?"ΣΥΡΕΤΕ ΟΡΙΖΟΝΤΙΑ":"SWIPE TO EXPLORE"}</span> →</p></div><div ref={viewport} className="district-viewport" tabIndex={0} aria-label={isEl?"Ψηφιακές λύσεις ανά επιχείρηση":"Digital solutions by business"}><div ref={track} className="district-track">{cards.map((item,index)=>{return <Link className={`district-building district-${item.type}`} href={item.href} key={item.type} onFocus={(event)=>focusCard(event.currentTarget)}><div className="district-sky"><span className="district-sun"/><span className="district-cloud"/></div><div className="district-roof"/><div className="district-facade"><div className="district-building-sign"><span>0{index+1} / {item.label}</span><ArrowUpRight size={18}/></div><div className="district-window"><Image className="district-photo" src={`/images/district/${item.type}-modern.jpg`} alt="" width={800} height={600} sizes="(max-width: 767px) 80vw, 380px" /></div><div className="district-facade-bottom"><p>{item.text}</p><span>{isEl?"ΑΝΑΚΑΛΥΨΤΕ":"DISCOVER"} →</span></div></div></Link>})}</div></div><div className="district-road" aria-hidden="true"><span/><span/><span/><span/><span/><span/><span/></div><a className="district-skip" href="#services">{isEl?"ΠΑΡΑΛΕΙΨΗ":"SKIP THE SCENE"} →</a></div></section>;
}
