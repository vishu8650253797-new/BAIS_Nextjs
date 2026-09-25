"use client";

import { useId, useState } from "react";
import {
  ChevronDown,
  ClipboardList,
  Clock,
  IdCard,
  MessageCircle,
  User,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { homeFAQs } from "@/data/faq";

const icons = [ClipboardList, User, IdCard, Clock, MessageCircle];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="relative scroll-mt-24 overflow-hidden bg-cream py-24">
      <svg
        className="pointer-events-none absolute -bottom-10 left-0 h-40 w-64 text-maroon/10"
        viewBox="0 0 300 160"
        fill="none"
        aria-hidden="true"
      >
        <path d="M-20 120 Q 60 40 150 90 T 320 60" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div className="pointer-events-none absolute -top-4 right-0 hidden h-64 w-72 lg:block" aria-hidden="true">
        <svg className="absolute inset-0 size-full text-ink/[0.06]" viewBox="0 0 300 260" fill="none">
          <circle cx="90" cy="70" r="3" fill="currentColor" />
          <circle cx="140" cy="50" r="2" fill="currentColor" />
          <circle cx="180" cy="90" r="2.5" fill="currentColor" />
          <circle cx="60" cy="120" r="2" fill="currentColor" />
          <circle cx="220" cy="60" r="2" fill="currentColor" />
          <path
            d="M40 150 Q 150 30 280 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path d="M262 10 L288 20 L260 30 L266 20 Z" fill="currentColor" />
        </svg>
        <div className="absolute right-6 top-10 h-28 w-20 rotate-6 rounded-lg bg-gradient-to-br from-ink to-body p-3 shadow-xl shadow-ink/20">
          <div className="mx-auto flex size-6 items-center justify-center rounded-full border border-white/30">
            <span className="block size-2.5 rounded-full bg-white/60" aria-hidden="true" />
          </div>
          <p className="mt-3 text-center font-serif text-[9px] tracking-[0.2em] text-white/80">
            PASSPORT
          </p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-40 hidden -rotate-6 select-none font-serif text-lg italic leading-snug text-maroon/25 sm:block lg:left-10"
      >
        Your Immigration
        <br />
        Journey Matters
      </p>

      <Container className="relative max-w-3xl">
        <div className="text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
            Questions &amp; Answers
            <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Frequently Asked <span className="text-maroon">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-body">
            Answers to common questions about working with Bay Area
            Immigration Services in Fremont.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {homeFAQs.map((item, index) => {
            const isOpen = openIndex === index;
            const Icon = icons[index % icons.length];
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div
                key={item.question}
                className={cn(
                  "rounded-2xl border bg-white transition-all duration-300",
                  isOpen ? "border-maroon/20 shadow-lg shadow-ink/10" : "border-border",
                )}
                onMouseEnter={() => setOpenIndex(index)}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    onFocus={() => setOpenIndex(index)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cream text-maroon">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="flex-1 text-base font-bold text-ink sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "size-5 shrink-0 text-maroon transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-[76px] pr-6 text-sm leading-relaxed text-body sm:px-6 sm:pl-20 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
