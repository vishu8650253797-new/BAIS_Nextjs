import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const rows = [
  { label: "Relationship at filing", k1: "Engaged", cr1: "Already married" },
  { label: "Where you marry", k1: "In the U.S., within 90 days", cr1: "Abroad, before filing" },
  { label: "First petition", k1: "I-129F ($675)", cr1: "I-130 ($675 paper filing)" },
  {
    label: "Visa type",
    k1: "Nonimmigrant → green card in the U.S.",
    cr1: "Immigrant visa, green card on arrival",
  },
  { label: "Green card step after arrival", k1: "Yes: I-485 ($1,440)", cr1: "No" },
  { label: "Work on arrival", k1: "After applying for a work permit", cr1: "Yes, as a permanent resident" },
  { label: "Total government fees", k1: "Higher (two stages)", cr1: "Lower (one stage)" },
  {
    label: "Best for",
    k1: "Couples who want to marry in the U.S.",
    cr1: "Couples already married, or who prefer one process",
  },
];

export function K1VsCr1() {
  return (
    <section id="compare" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">Compare</p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          K-1 Fiancé Visa vs CR-1/IR-1 Spouse Visa: Which Is Right for You?
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink"></th>
                <th className="p-3 font-bold text-ink">K-1 Fiancé(e) Visa</th>
                <th className="p-3 font-bold text-ink">CR-1 / IR-1 Spouse Visa</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className="p-3 text-body">{row.k1}</td>
                  <td className="p-3 text-body">{row.cr1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Fees and timelines change, and which route is faster depends on
          current processing. We&apos;ll compare both for your case.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Not Sure Which Visa? Get a Free Comparison
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
