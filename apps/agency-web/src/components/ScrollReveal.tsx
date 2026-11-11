"use client";

import { useEffect, useRef } from "react";

export function ScrollReveal({ isEl }: { isEl: boolean }) {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = section.current;
    const scene = stage.current;
    if (!root || !scene) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (motion.matches) {
        root.classList.remove("reveal-animated");
        scene.style.removeProperty("--reveal-progress");
        return;
      }
      const bounds = root.getBoundingClientRect();
      const travel = Math.max(1, root.offsetHeight - scene.offsetHeight);
      const progress = Math.max(0, Math.min(1, (80 - bounds.top) / travel));
      scene.style.setProperty("--reveal-progress", String(progress));
      root.classList.add("reveal-animated");
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("reveal-animated");
    };
  }, []);

  return <section ref={section} id="discover" className="reveal-chapter" aria-labelledby="reveal-title">
    <div ref={stage} className="reveal-stage">
      <div className="reveal-center">
        <div className="reveal-center-copy"><span>02 / CORFU DIGITAL</span><h2 id="reveal-title">{isEl ? <>Η ΙΔΕΑ ΣΑΣ.<br /><em>Ο ΚΟΣΜΟΣ ΜΑΣ.</em></> : <>YOUR IDEA.<br /><em>OUR WORLD.</em></>}</h2><p>{isEl ? "Από την πρώτη σκέψη μέχρι την ψηφιακή εμπειρία." : "From the first idea to a digital experience."}</p></div>
        <svg className="reveal-emblem" viewBox="0 0 500 500" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="198" stroke="#7CA9FF" strokeOpacity=".5" strokeWidth="1"/><circle cx="250" cy="250" r="164" stroke="#7CA9FF" strokeOpacity=".25" strokeDasharray="2 10"/>
          <path d="M250 34V83M250 417V466M34 250H83M417 250H466" stroke="#5892FF" strokeWidth="2"/><path d="M250 91L260 126H240L250 91Z" fill="#5892FF"/>
          <circle cx="250" cy="250" r="134" fill="#CDDDFB"/><path d="M116 265 Q166 222 211 255 Q261 206 311 254 Q353 227 384 251 V340 H116Z" fill="#4D7BC1"/><path d="M116 304 Q183 278 250 306 T384 304 V347 H116Z" fill="#2458A2"/><path d="M116 326 Q183 304 250 331 T384 326 V345 Q250 418 116 345Z" fill="#3979C5"/>
          <path d="M206 284V213H294V284" fill="#E0EAFA"/><path d="M192 213L250 174L308 213Z" fill="#3E79F0"/><path d="M222 231H239V249H222Z M261 231H278V249H261Z" fill="#234A91"/><path d="M242 284V257H258V284" fill="#315BAD"/>
          <path d="M250 117V152M250 348V383M117 250H152M348 250H383" stroke="#88B6FF" strokeWidth="1.5"/><path d="M250 142L258 158H242Z M358 250L342 258V242Z M250 358L242 342H258Z M142 250L158 242V258Z" fill="#88B6FF"/>
          <circle cx="250" cy="250" r="151" stroke="#73A7FF" strokeWidth="1"/><circle cx="250" cy="250" r="183" stroke="#73A7FF" strokeOpacity=".25"/>
          <circle cx="250" cy="52" r="4" fill="#5892FF"/><circle cx="448" cy="250" r="4" fill="#5892FF"/><circle cx="250" cy="448" r="4" fill="#5892FF"/><circle cx="52" cy="250" r="4" fill="#5892FF"/>
        </svg>
        <div className="reveal-signature">CORFU DIGITAL <span>·</span> {isEl ? "ΙΔΕΕΣ ΣΕ ΚΙΝΗΣΗ" : "IDEAS IN MOTION"}</div>
      </div>
      <div className="reveal-panel reveal-panel-left" aria-hidden="true"><div className="reveal-panel-inner"><span>01 / {isEl ? "Η ΕΠΙΧΕΙΡΗΣΗ ΣΑΣ" : "YOUR BUSINESS"}</span><strong>{isEl ? "Η ΙΔΕΑ" : "THE IDEA"}</strong><div className="reveal-window"><i/><i/><i/><div className="reveal-window-lines"><b/><b/><b/></div><div className="reveal-window-block"/></div></div></div>
      <div className="reveal-panel reveal-panel-right" aria-hidden="true"><div className="reveal-panel-inner"><span>02 / {isEl ? "Η ΨΗΦΙΑΚΗ ΛΥΣΗ" : "THE DIGITAL SOLUTION"}</span><strong>{isEl ? "Η ΕΜΠΕΙΡΙΑ" : "THE EXPERIENCE"}</strong><div className="reveal-connection"><span>✳</span><div><b/ ><b/ ><b/ ></div><span>↗</span></div></div></div>
    </div>
  </section>;
}
