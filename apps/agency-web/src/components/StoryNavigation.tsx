"use client";
import { useEffect, useRef, useState } from "react";

export function StoryNavigation({ isEl }: { isEl: boolean }) {
  const progress=useRef<HTMLDivElement>(null);
  const [active,setActive]=useState("intro");
  const chapters=[{id:"intro",en:"INTRO",el:"ΑΡΧΗ"},{id:"district",en:"THE DISTRICT",el:"Η ΓΕΙΤΟΝΙΑ"},{id:"services",en:"THE STUDIO",el:"ΤΟ STUDIO"},{id:"about",en:"THE PERSON",el:"Ο ΑΝΘΡΩΠΟΣ"},{id:"project",en:"YOUR PROJECT",el:"ΤΟ ΕΡΓΟ ΣΑΣ"},{id:"contact",en:"CONTACT",el:"ΕΠΙΚΟΙΝΩΝΙΑ"}];
  useEffect(()=>{
    let frame=0;
    const update=()=>{frame=0; const doc=document.documentElement; const available=doc.scrollHeight-window.innerHeight; if(progress.current) progress.current.style.transform=`scaleX(${available>0?Math.max(0,Math.min(1,window.scrollY/available)):0})`;
      const marker=window.innerHeight*.4; let current="intro"; for(const id of ["intro","district","services","about","project","contact"]) { const node=document.getElementById(id); if(node && node.getBoundingClientRect().top<=marker) current=id; } setActive(old=>old===current?old:current);};
    const schedule=()=>{if(!frame) frame=requestAnimationFrame(update);}; update(); window.addEventListener("scroll",schedule,{passive:true}); window.addEventListener("resize",schedule); return ()=>{window.removeEventListener("scroll",schedule);window.removeEventListener("resize",schedule);if(frame)cancelAnimationFrame(frame);};
  },[]);
  return <><div ref={progress} className="story-progress" aria-hidden="true"/><nav className="story-chapters" aria-label={isEl?"Ενότητες αρχικής σελίδας":"Homepage chapters"}>{chapters.map((chapter,i)=><a key={chapter.id} href={`#${chapter.id}`} className={active===chapter.id?"current":""} aria-current={active===chapter.id?"location":undefined}><span>0{i+1}</span><b>{isEl?chapter.el:chapter.en}</b><i/></a>)}</nav></>;
}
