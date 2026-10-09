import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const updates = [
  {
    title: "1. Worldwide immigrant visa interview pause (August 25, 2026)",
    description:
      "The State Department paused immigrant visa interviews at U.S. embassies and consulates worldwide while officers train on expanded public charge screening, and hasn't announced when normal scheduling will resume. Applicants have received rescheduling notices. Reports say processing resumed in Hungary and Poland in early September. This affects consular processing (spouse, parent and child cases). People adjusting status inside the U.S. use USCIS and are not affected by this pause. Check your embassy's page for the latest.",
  },
  {
    title: "2. The 75-country immigrant visa pause was struck down (August 21, 2026)",
    description:
      "A federal court ruled the earlier nationality-based suspension unlawful, and the State Department confirmed it is no longer in effect. Nationality-specific travel restrictions may still apply; check your country.",
  },
  {
    title: "3. New public charge framework (September 18, 2026)",
    description: "It applies to I-485 applications filed on or after that date. Earlier filings are decided under the earlier policy.",
  },
  {
    title: "4. October 2026 Visa Bulletin",
    description:
      "F2A moved forward to September 22, 2026 for most countries (March 22, 2026 for Mexico), and F1 advanced for Mexico and the Philippines. USCIS is using the Dates for Filing chart for family categories this month.",
  },
  {
    title: "5. New Form I-864 edition",
    description: "USCIS published the 08/24/26 edition on August 31, 2026. Use the current edition.",
  },
];

export function FamilyUpdates() {
  return (
    <section id="2026" className="scroll-mt-24 bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Family Immigration Updates for 2026
        </h2>
        <span className="mt-4 inline-block rounded-full bg-cream px-4 py-1.5 text-xs font-semibold text-body">
          Last reviewed October 8, 2026
        </span>

        <div className="mt-8 space-y-4">
          {updates.map((update, index) => (
            <FadeIn key={update.title} delay={index * 60}>
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
          Check How These Updates Affect My Family
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
