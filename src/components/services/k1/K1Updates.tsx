import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const updates = [
  {
    title: "1. The 75-country immigrant visa pause was struck down",
    description:
      "In January 2026, the State Department paused immigrant visas for nationals of 75 countries on public-charge grounds. K-1 visas, as nonimmigrant visas, were generally treated as outside the pause, while spouse immigrant visas were affected. On August 21, 2026, a federal court ruled the pause unlawful, and the State Department confirmed it is no longer in effect.",
  },
  {
    title: "2. Public charge: new USCIS approach from September 18, 2026",
    description:
      "USCIS rescinded the 2022 public charge rule. The new guidance applies to I-485 applications filed on or after September 18, 2026, which includes K-1 couples filing after marriage. A well-prepared I-864 matters more than ever.",
  },
  {
    title: "3. Closer review at consulates",
    description:
      "Officers are giving more weight to public-charge factors such as health and financial self-sufficiency. Complete medical, financial and relationship evidence helps avoid delays.",
  },
  {
    title: "4. Current fees",
    description:
      "I-129F $675 · K visa application $265 · I-485 $1,440 · work permit with a pending I-485 $260 · travel document $630. Confirm on the USCIS fee schedule (G-1055).",
  },
];

export function K1Updates() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          K-1 Visa Updates for 2026
        </h2>
        <span className="mt-4 inline-block rounded-full bg-cream px-4 py-1.5 text-xs font-semibold text-body">
          Last reviewed September 30, 2026
        </span>

        <div className="mt-8 space-y-4">
          {updates.map((update, index) => (
            <FadeIn key={update.title} delay={index * 70}>
              <div className="rounded-2xl border border-border bg-cream/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="text-base font-bold text-ink">{update.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{update.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Check How 2026 Changes Affect Your Case
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Review monthly. Nationality-specific travel restrictions under
          presidential proclamations may also apply, so confirm country
          status before advising.
        </p>
      </Container>
    </section>
  );
}
