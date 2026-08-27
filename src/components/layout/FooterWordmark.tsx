"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function FooterWordmark() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden text-center">
      <p
        aria-hidden="true"
        style={{ transitionDelay: revealed ? "500ms" : "0ms" }}
        className={cn(
          "select-none text-[clamp(4rem,15vw,11.5rem)] font-extrabold leading-none tracking-tight text-cream/90 transition-all duration-[1100ms] ease-out motion-reduce:transition-none",
          revealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
      >
        BAIS
      </p>
      <span className="sr-only">Bay Area Immigration Services</span>
    </div>
  );
}
