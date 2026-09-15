"use client";
import { useEffect, useRef } from "react";
import { animate, useReducedMotion } from "motion/react";
import { hero } from "@/data/portfolio";
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    const node = ref.current;
    if (!node || reduce || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let controls: ReturnType<typeof animate> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { controls = animate(node, { opacity: [0.55, 1], y: [18, 0] }, { duration: 0.35 }); observer.disconnect(); }
    }, { threshold: 0.08 });
    observer.observe(node);
    return () => { observer.disconnect(); controls?.stop(); };
  }, [reduce]);
  return <div ref={ref} className={className}>{children}</div>;
}

// Hero copy fades top-to-bottom as you scroll out of the first screen.
export function HeroScrollFade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    const node = ref.current;
    if (!node || reduce || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const kids = Array.from(node.children) as HTMLElement[];
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        kids.forEach((kid, i) => {
          const start = vh * (0.04 + i * 0.05);
          const p = Math.min(1, Math.max(0, (window.scrollY - start) / (vh * 0.5)));
          kid.style.opacity = String(1 - p * 0.95);
          kid.style.transform = `translateY(${p * -16}px)`;
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, [reduce]);
  return <div ref={ref} className={className}>{children}</div>;
}

// Hero 3D depth scene: cursor-driven tilt + idle float. Server HTML stays static.
export function HeroDepth({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    const node = ref.current;
    if (!node || reduce || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0, t = 0;
    const tick = () => {
      t += 0.008;
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      const floatY = Math.sin(t) * 4;
      node.style.transform = `rotateX(${cy}deg) rotateY(${cx}deg) translateY(${floatY}px)`;
      raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      const r = node.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 7;
      ty = -((e.clientY - r.top) / r.height - 0.5) * 5;
    };
    const onLeave = () => { tx = 0; ty = 0; };
    const section = node.closest("section");
    section?.addEventListener("pointermove", onMove);
    section?.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); section?.removeEventListener("pointermove", onMove); section?.removeEventListener("pointerleave", onLeave); };
  }, [reduce]);
  return <div ref={ref} className="hero-depth">{children}</div>;
}

export function Intro() {
  return <div className="intro" aria-hidden="true"><div className="intro-inner"><span className="mono">WUTTIPONG THONGMON / PORTFOLIO</span><div className="intro-grid">{hero.gridLabels.map((label, i) => <span key={label} style={{ animationDelay: `${i * 35}ms` }}>{label}</span>)}</div><span className="mono">SOFTWARE FOR REAL OPERATIONS.</span></div></div>;
}
