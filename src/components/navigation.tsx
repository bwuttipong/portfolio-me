"use client";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/portfolio";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape" && open) { setOpen(false); button.current?.focus(); } };
    const media = window.matchMedia("(min-width: 1000px)");
    const resize = () => { if (media.matches) setOpen(false); };
    document.addEventListener("keydown", close);
    media.addEventListener("change", resize);
    return () => { document.removeEventListener("keydown", close); media.removeEventListener("change", resize); };
  }, [open]);
  return <header ref={header} className="site-header" onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}>
    <div className="nav-shell"><a href="#home" className="wordmark" aria-label="Best Thongmon — home">BT<span>®</span></a>
      <button ref={button} className="menu-toggle" aria-controls="site-nav" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Close −" : "Menu +"}</button>
      <nav id="site-nav" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"}>{navItems.filter(i => i.label !== "Foundation").map(item => <a href={item.href} key={item.href} onClick={() => { setOpen(false); document.getElementById(item.href.slice(1))?.focus({ preventScroll: true }); }}>{item.label}{item.label === "Contact" && <span aria-hidden="true"> ↗</span>}</a>)}</nav>
    </div>
  </header>;
}
