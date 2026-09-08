"use client";

import Image from "next/image";
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
    <div ref={ref} className="flex flex-col items-center overflow-hidden text-center">
      <div
        aria-hidden="true"
        style={{ transitionDelay: revealed ? "150ms" : "0ms" }}
        className={cn(
          "relative flex w-[clamp(4rem,11vw,6.5rem)] items-center justify-center transition-all duration-[900ms] ease-out motion-reduce:transition-none",
          revealed ? "scale-100 opacity-100" : "scale-50 opacity-0",
        )}
      >
        <span
          className="absolute inset-0 -z-10 animate-pulse rounded-full bg-maroon/40 blur-2xl motion-reduce:hidden"
          aria-hidden="true"
        />
        <Image
          src="/brand/logo-icon.png"
          alt=""
          width={123}
          height={132}
          className="h-auto w-full"
        />
      </div>

      <p
        aria-hidden="true"
        style={{ transitionDelay: revealed ? "450ms" : "0ms" }}
        className={cn(
          "mt-4 select-none text-[clamp(2.75rem,9vw,6rem)] font-extrabold leading-none tracking-tight text-cream/90 transition-all duration-[900ms] ease-out motion-reduce:transition-none",
          revealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
      >
        BAY AREA
      </p>
      <p
        aria-hidden="true"
        style={{ transitionDelay: revealed ? "600ms" : "0ms" }}
        className={cn(
          "mt-2 select-none text-[clamp(0.9rem,2.6vw,1.5rem)] font-semibold uppercase tracking-[0.3em] text-cream/50 transition-all duration-[900ms] ease-out motion-reduce:transition-none",
          revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        )}
      >
        Immigration Services
      </p>

      <span className="sr-only">Bay Area Immigration Services</span>
    </div>
  );
}
