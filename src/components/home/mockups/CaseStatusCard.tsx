"use client";

import { useEffect, useRef, useState } from "react";

const sampleCases = [
  { name: "J. Patel", detail: "H-1B transfer", status: "In Progress", milestone: "RFE response filed" },
  { name: "M. Rivera", detail: "Green card (EB-2)", status: "In Progress", milestone: "Documentation review" },
  { name: "S. Chen", detail: "TN renewal", status: "Approved", milestone: "Case closed" },
  { name: "A. Okafor", detail: "Family I-130", status: "In Progress", milestone: "Petition filed" },
];

const liveRowIndex = sampleCases.length - 1;
const liveStates = [
  { status: "In Progress", milestone: "Petition filed" },
  { status: "Approved", milestone: "Case closed" },
];

function StatusPill({ status }: { status: string }) {
  const isApproved = status === "Approved";
  return (
    <span
      className={
        isApproved
          ? "rounded-full bg-ink px-2.5 py-1 text-xs font-semibold text-white transition-colors duration-500"
          : "rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent-dark transition-colors duration-500"
      }
    >
      {status}
    </span>
  );
}

export function CaseStatusCard() {
  const [cases, setCases] = useState(sampleCases);
  const [justUpdated, setJustUpdated] = useState(false);
  const flashTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let stateIndex = 0;
    const interval = setInterval(() => {
      stateIndex = (stateIndex + 1) % liveStates.length;
      const next = liveStates[stateIndex];

      setCases((prev) =>
        prev.map((c, i) => (i === liveRowIndex ? { ...c, ...next } : c)),
      );
      setJustUpdated(true);

      if (flashTimeout.current) clearTimeout(flashTimeout.current);
      flashTimeout.current = setTimeout(() => setJustUpdated(false), 1400);
    }, 4500);

    return () => {
      clearInterval(interval);
      if (flashTimeout.current) clearTimeout(flashTimeout.current);
    };
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-xl shadow-ink/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-ink/15">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-2">
          <p className="text-sm font-bold text-ink">Active cases</p>
          <span className="flex items-center gap-1.5 rounded-full bg-cream px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-accent-dark">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            Live
          </span>
        </span>
        <div className="flex w-fit gap-1 rounded-full bg-cream p-1 text-xs font-semibold text-body">
          <span className="rounded-full bg-white px-2.5 py-1 text-ink shadow-sm">All</span>
          <span className="hidden rounded-full px-2.5 py-1 transition-colors duration-200 hover:bg-white/60 sm:inline">In progress</span>
          <span className="hidden rounded-full px-2.5 py-1 transition-colors duration-200 hover:bg-white/60 sm:inline">Approved</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-[1.2fr_0.8fr_1fr] gap-2 border-b border-border pb-2 text-xs font-semibold uppercase tracking-wide text-body/60">
        <span>Name</span>
        <span>Status</span>
        <span>Milestone</span>
      </div>

      <ul>
        {cases.map((c, i) => (
          <li
            key={c.name}
            className={
              "-mx-2 grid grid-cols-[1.2fr_0.8fr_1fr] items-center gap-2 rounded-lg border-b border-border px-2 py-3.5 transition-colors duration-500 last:border-0 hover:bg-cream/60" +
              (i === liveRowIndex && justUpdated ? " bg-accent/5" : "")
            }
          >
            <span>
              <span className="block text-sm font-bold text-ink">{c.name}</span>
              <span className="block text-xs text-body/70">{c.detail}</span>
            </span>
            <StatusPill status={c.status} />
            <span className="truncate rounded-full border border-border px-2.5 py-1 text-xs text-body transition-colors duration-500">
              {c.milestone}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[11px] text-body/50">Illustrative example of a client case view.</p>
    </div>
  );
}
