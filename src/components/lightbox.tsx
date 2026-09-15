"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function Lightbox({ src, alt, width, height, caption, frameBar }: { src: string; alt: string; width: number; height: number; caption: string; frameBar: string }) {
  const [active, setActive] = useState(false);
  const close = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;
    close.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active]);

  return <>
    <figure className="app-frame">
      <div className="frame-bar"><span aria-hidden="true">● ● ●</span><span>{frameBar}</span><span>↗</span></div>
      <button className="lightbox-trigger" onClick={() => setActive(true)} aria-haspopup="dialog" aria-label={`Enlarge ${caption} screenshot`}>
        <Image src={src} alt={alt} width={width} height={height} sizes={width > 1000 ? "(max-width: 800px) 92vw, 1100px" : "(max-width: 800px) 92vw, 550px"} />
      </button>
      <figcaption>{caption}<span>VIEW FULL SIZE ↗</span></figcaption>
    </figure>
    {active && <div className="lightbox" role="dialog" aria-modal="true" aria-label={caption} onClick={() => setActive(false)}>
      <button ref={close} className="lightbox-close" onClick={() => setActive(false)} aria-label="Close screenshot preview">Close ✕</button>
      {/* eslint-disable-next-line @next/next/no-img-element -- full-resolution view without optimizer constraints */}
      <img src={src} alt={alt} className="lightbox-img" />
    </div>}
  </>;
}
