import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const updates = [
  {
    title: "1. The \"duration of status\" rule is blocked, for now",
    description:
      "DHS's July 2026 rule would have ended \"duration of status\" for F, J and I nonimmigrants and required I-539 extensions. On September 14, 2026, a federal court postponed it nationwide, and duration of status remains in place. The government appealed on September 30.",
  },
  {
    title: "2. Which I-539 edition to use",
    description:
      "After the court order, USCIS said it continues to accept the 08/28/24 edition of Form I-539 and is not accepting the 09/15/26 edition. Always check the USCIS form page before filing.",
  },
  {
    title: "3. Fees",
    description:
      "Form I-539: $470 by mail, $420 online. I-129 fees vary by category and employer size. Premium processing is available for certain I-539 student and exchange visitor changes; check the current fee.",
  },
  {
    title: "4. Proposed change to work-visa grace periods",
    description:
      "A proposed rule would eliminate the up-to-60-day grace period for many temporary work categories. It's not final, but it makes post-layoff planning even more urgent.",
  },
];

export function CosUpdates() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Change of Status Updates for 2026
        </h2>
        <span className="mt-4 inline-block rounded-full bg-cream px-4 py-1.5 text-xs font-semibold text-body">
          Last reviewed October 7, 2026
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
          Check How 2026 Changes Affect You
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
