"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const element = cursor.current;
    if (!element) return;

    const hide = () => {
      element.classList.remove("is-visible", "is-interactive");
      document.documentElement.classList.remove("custom-cursor-active");
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") return hide();
      const target = event.target;
      if (!(target instanceof Element) || target.closest("input, textarea, select, [contenteditable='true'], iframe")) return hide();
      element.style.left = `${event.clientX}px`;
      element.style.top = `${event.clientY}px`;
      element.classList.add("is-visible");
      element.classList.toggle("is-interactive", Boolean(target.closest("a, button, [role='button']")));
      document.documentElement.classList.add("custom-cursor-active");
    };
    const leave = (event: PointerEvent) => { if (!event.relatedTarget) hide(); };
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerout", leave);
    window.addEventListener("blur", hide);
    media.addEventListener("change", hide);
    return () => {
      hide();
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerout", leave);
      window.removeEventListener("blur", hide);
      media.removeEventListener("change", hide);
    };
  }, []);

  return <div ref={cursor} className="custom-cursor" aria-hidden="true"><span /></div>;
}
