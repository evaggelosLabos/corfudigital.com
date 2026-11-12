"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Anchor, ArrowUpRight, Building2, Car, Home, Globe, ShoppingBag, Workflow, UtensilsCrossed } from "lucide-react";

type Props = { lang: string; isEl: boolean };
export function BusinessConveyor({ lang, isEl }: Props) {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const distance = useRef(0);

  useEffect(() => {
    const root = section.current, panel = stage.current, frame = viewport.current, rail = track.current;
    if (!root || !panel || !frame || !rail) return;
    const media = window.matchMedia("(min-width: 320px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)");
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!media.matches) {
        root.classList.remove("conveyor-pinned");
        root.style.removeProperty("--conveyor-height");
        rail.style.removeProperty("transform");
        distance.current = 0;
        rail.querySelectorAll<HTMLElement>(".conveyor-card").forEach(card => card.classList.remove("is-processed"));
        panel.style.removeProperty("--press-depth");
        if (counter.current) counter.current.textContent = "08";
        return;
      }
      root.classList.add("conveyor-pinned");
      const cards = rail.querySelectorAll<HTMLElement>(".conveyor-card");
      const lastCard = cards.item(cards.length - 1);
      const fullDistance = Math.max(0, rail.scrollWidth - frame.clientWidth);
      // Finish with the last card still in view, just past the machine.
      const lastCardStop = lastCard ? lastCard.offsetLeft + lastCard.offsetWidth / 2 - frame.clientWidth * 0.34 : 0;
      distance.current = Math.max(0, Math.min(fullDistance, lastCardStop));
      const travel = distance.current * 1.35;
      root.style.setProperty("--conveyor-height", `${panel.offsetHeight + travel}px`);
      const progress = travel ? Math.max(0, Math.min(1, (80 - root.getBoundingClientRect().top) / travel)) : 0;
      const moved = distance.current * progress;
      rail.style.transform = `translate3d(${-moved}px, 0, 0)`;
      const station = frame.clientWidth * 0.42;
      let processed = 0;
      let nearest = Infinity;
      rail.querySelectorAll<HTMLElement>(".conveyor-card").forEach(card => {
        const position = card.offsetLeft + card.offsetWidth / 2 - moved;
        const complete = position < station;
        card.classList.toggle("is-processed", complete);
        if (complete) processed++;
        nearest = Math.min(nearest, Math.abs(position - station));
      });
      panel.style.setProperty("--press-depth", String(Math.max(0, 1 - nearest / 85)));
      if (counter.current) counter.current.textContent = String(processed).padStart(2, "0");
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(frame);
    observer.observe(rail);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    return () => {
      observer.disconnect(); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); media.removeEventListener("change", schedule);
      if (raf) cancelAnimationFrame(raf);
      root.classList.remove("conveyor-pinned"); rail.style.removeProperty("transform");
    };
  }, []);

  const onCardFocus = (element: HTMLElement) => {
    const root = section.current, frame = viewport.current, rail = track.current;
    if (!root || !frame || !rail || !root.classList.contains("conveyor-pinned") || !distance.current) return;
    const cardLeft = element.offsetLeft;
    const current = Math.max(0, Math.min(distance.current, (80 - root.getBoundingClientRect().top) / 1.35));
    const next = cardLeft < current ? cardLeft : cardLeft + element.offsetWidth > current + frame.clientWidth ? cardLeft + element.offsetWidth - frame.clientWidth : current;
    if (next !== current) window.scrollTo({ top: window.scrollY + root.getBoundingClientRect().top - 80 + next * 1.35, behavior: "instant" });
  };
  const items = [
    { icon: Building2, label: isEl ? "Ξενοδοχεία" : "Hotels", heading: isEl ? "Μια εμπειρία που ξεκινά online." : "The stay starts online.", description: isEl ? "Ιστοσελίδες που παρουσιάζουν το κατάλυμά σας και ανοίγουν τον δρόμο για απευθείας κρατήσεις." : "Present your property beautifully and give guests a clear path to book directly.", tags: isEl ? ["ΙΣΤΟΣΕΛΙΔΑ", "ΔΩΜΑΤΙΑ", "ΚΡΑΤΗΣΕΙΣ"] : ["WEBSITE", "ROOMS", "BOOKINGS"], href: `/${lang}/services/hotel-websites`, kind:"hotel" },
    { icon: Home, label: isEl ? "Βίλες" : "Villas", heading: isEl ? "Η δική σας γωνιά, στον δικό σας κόσμο." : "Your place, your own world.", description: isEl ? "Παρουσιάστε τον χώρο σας, μοιραστείτε διαθεσιμότητα και δεχθείτε άμεσα αιτήματα ή κρατήσεις." : "Showcase your space, share availability and welcome direct enquiries or bookings.", tags: isEl ? ["ΠΑΡΟΥΣΙΑΣΗ", "ΔΙΑΘΕΣΙΜΟΤΗΤΑ", "ΚΡΑΤΗΣΕΙΣ"] : ["SHOWCASE", "AVAILABILITY", "BOOKINGS"], href: `/${lang}/services/villa-booking-engines`, kind:"villa" },
    { icon: Anchor, label: isEl ? "Σκάφη" : "Boats", heading: isEl ? "Η επόμενη εκδρομή ξεκινά εδώ." : "The next adventure starts here.", description: isEl ? "Δώστε ζωή στον στόλο και στις εμπειρίες σας, με έναν απλό τρόπο για online αιτήματα." : "Bring your fleet and experiences to life with a simple path to online enquiries.", tags: isEl ? ["ΣΤΟΛΟΣ", "ΕΚΔΡΟΜΕΣ", "ΑΙΤΗΜΑΤΑ"] : ["FLEET", "TRIPS", "ENQUIRIES"], href: `/${lang}/services/boat-tours-transfers`, kind:"boat" },
    { icon: Car, label: isEl ? "Μεταφορές" : "Transfers", heading: isEl ? "Κάθε διαδρομή αρχίζει με ένα κλικ." : "Every journey begins with a click.", description: isEl ? "Μια ξεκάθαρη παρουσία και φόρμες αιτημάτων για τις μεταφορές της επιχείρησής σας." : "A clear online presence and enquiry flow for your transfer service.", tags: isEl ? ["ΥΠΗΡΕΣΙΕΣ", "ΔΙΑΔΡΟΜΕΣ", "ΕΠΙΚΟΙΝΩΝΙΑ"] : ["SERVICES", "ROUTES", "CONTACT"], href: `/${lang}/services/boat-tours-transfers`, kind:"transfer" },
    { icon: Globe, label: isEl ? "Ιστοσελίδες" : "Websites", heading: isEl ? "Η επιχείρησή σας, online." : "Your business, online.", description: isEl ? "Μια ιστοσελίδα που παρουσιάζει καθαρά την επιχείρησή σας και βοηθά τους πελάτες να επικοινωνούν." : "A website that presents your business clearly and makes it easy for customers to get in touch.", tags: isEl ? ["ΣΧΕΔΙΑΣΜΟΣ", "ΚΙΝΗΤΑ", "ΕΠΙΚΟΙΝΩΝΙΑ"] : ["DESIGN", "MOBILE", "CONTACT"], href: `/${lang}/${isEl ? "κατασκευή-ιστοσελίδων-κέρκυρα" : "website-development-corfu"}`, kind:"web" },
    { icon: ShoppingBag, label: isEl ? "Ηλεκτρονικό κατάστημα" : "E-commerce", heading: isEl ? "Το κατάστημά σας παντού." : "Your shop, wherever they are.", description: isEl ? "Ψηφιακά καταστήματα για την παρουσίαση προϊόντων και την εξυπηρέτηση παραγγελιών online." : "Online stores that present your products and help customers place orders.", tags: isEl ? ["ΠΡΟΪΟΝΤΑ", "ΠΑΡΑΓΓΕΛΙΕΣ", "ΠΛΗΡΩΜΕΣ"] : ["PRODUCTS", "ORDERS", "PAYMENTS"], href: `/${lang}/services/digital-transformation`, kind:"commerce" },
    { icon: Workflow, label: isEl ? "Αυτοματισμοί" : "Automation", heading: isEl ? "Λιγότερη επανάληψη. Περισσότερος χρόνος." : "Less repetition. More time.", description: isEl ? "Ψηφιακές ροές για αιτήματα, επικοινωνία και καθημερινές εργασίες της επιχείρησής σας." : "Digital workflows for enquiries, communication and everyday business tasks.", tags: isEl ? ["ΡΟΕΣ", "ΕΠΙΚΟΙΝΩΝΙΑ", "ΕΡΓΑΛΕΙΑ"] : ["WORKFLOWS", "MESSAGING", "TOOLS"], href: `/${lang}/services/digital-transformation`, kind:"automation" },
    { icon: UtensilsCrossed, label: isEl ? "Εστίαση" : "Restaurants", heading: isEl ? "Το μενού σας στο κινητό." : "Your menu in their hands.", description: isEl ? "Ψηφιακή παρουσία και online μενού για εστιατόρια, καφέ και μπαρ." : "A digital presence and online menus for restaurants, cafés and bars.", tags: isEl ? ["ΜΕΝΟΥ", "ΚΙΝΗΤΟ", "ΕΠΙΚΟΙΝΩΝΙΑ"] : ["MENUS", "MOBILE", "CONTACT"], href: `/${lang}/services/digital-transformation`, kind:"restaurant" },
  ];
  return <section id="services" ref={section} className="conveyor-section" aria-labelledby="conveyor-title"><div className="conveyor-stage" ref={stage}>
    <div className="factory-scenery" aria-hidden="true"><div className="factory-windows"/><div className="factory-pipe"/><div className="factory-control factory-control-left"><span>01 / DIGITAL STUDIO</span><b>✳</b><i/><i/><i/></div><div className="factory-control factory-control-right"><span>02 / CORFU DIGITAL</span><b>↗</b><i/><i/><i/></div><div className="factory-machine"><div className="factory-machine-head"><i/><i/><i/></div><div className="factory-machine-shaft"/><div className="factory-machine-press"/></div><div className="factory-gear factory-gear-one">✳</div><div className="factory-gear factory-gear-two">✳</div></div>
    <div className="conveyor-heading"><span>04 / {isEl ? "Ο ΚΟΣΜΟΣ ΤΩΝ ΔΥΝΑΤΟΤΗΤΩΝ" : "A WORLD OF POSSIBILITIES"}</span><h2 id="conveyor-title">{isEl ? <>ΠΙΣΩ ΑΠΟ ΤΗΝ ΕΙΚΟΝΑ, <em>Η ΤΕΧΝΟΛΟΓΙΑ ΣΑΣ.</em></> : <>BEHIND THE EXPERIENCE, <em>YOUR DIGITAL ENGINE.</em></>}</h2><p className="conveyor-hint"><span className="conveyor-desktop-hint">{isEl ? "ΣΥΝΕΧΙΣΤΕ ΤΟ SCROLL ΓΙΑ ΝΑ ΑΝΑΚΑΛΥΨΕΤΕ" : "KEEP SCROLLING TO EXPLORE"}</span><span className="conveyor-touch-hint">{isEl ? "ΣΥΡΕΤΕ ΓΙΑ ΝΑ ΑΝΑΚΑΛΥΨΕΤΕ" : "SWIPE TO EXPLORE"}</span> <span aria-hidden="true">→</span></p></div>
    <div className="conveyor-viewport" ref={viewport} tabIndex={0} aria-label={isEl ? "Εξερευνήστε λύσεις για επιχειρήσεις" : "Explore business solutions"}><div className="conveyor-track" ref={track}>
      <div className="factory-lead" aria-hidden="true" />
      {items.map((item, index) => { const Icon = item.icon; return <article key={item.kind} className={`conveyor-card conveyor-${item.kind}`} onFocus={(event) => onCardFocus(event.currentTarget)}>
        <div className="conveyor-card-top"><span>0{index + 1} / {item.label}</span><Icon size={22} aria-hidden="true" /></div><div className="conveyor-art" aria-hidden="true"><span className="conveyor-art-sun"/><div className="conveyor-art-shape"><Icon size={70} strokeWidth={1.1}/></div><span className="conveyor-art-orbit"/></div>
        <div className="conveyor-card-content"><span className="factory-stamp" aria-hidden="true">{isEl ? "ΕΤΟΙΜΟ" : "READY"}</span><h3>{item.heading}</h3><p>{item.description}</p><div className="conveyor-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div><Link href={item.href} className="conveyor-card-link">{isEl ? "ΑΝΑΚΑΛΥΨΤΕ ΤΗ ΛΥΣΗ" : "DISCOVER THE SOLUTION"} <ArrowUpRight size={17}/></Link></div><div className="factory-package" aria-hidden="true"><span className="factory-package-icon"><Icon size={56} strokeWidth={1.25}/></span><strong>0{index + 1} / {item.label}</strong><small>CORFU DIGITAL</small></div></article>; })}
      <div className="factory-tail" aria-hidden="true" />
    </div></div>
    <div className="conveyor-belt" aria-hidden="true"><div className="conveyor-belt-line"/><div className="conveyor-belt-wheels">{Array.from({length:16},(_,i)=><span key={i}/>)}</div></div>
    <div className="factory-status"><span><b ref={counter}>08</b> / 08 {isEl ? "ΛΥΣΕΙΣ" : "SOLUTIONS"}</span><a href="#capabilities">{isEl ? "ΠΑΡΑΛΕΙΨΗ ΙΣΤΟΡΙΑΣ" : "SKIP THE STORY"} →</a></div>
  </div></section>;
}
