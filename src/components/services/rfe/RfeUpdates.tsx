import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const updates = [
  {
    title: "1. USCIS can now deny without an RFE (Policy Alert PA-2026-05, August 5, 2026)",
    description:
      "Officers may deny a case without first sending an RFE or NOID when required initial evidence is missing or the filing doesn't establish eligibility. It took effect immediately and applies to pending and new filings. Practical rule: file as if no RFE will come. RFEs haven't disappeared, but they're no longer the expected second chance.",
  },
  {
    title: "2. Response limits are ceilings",
    description:
      "The maximum is 12 weeks for an RFE and 30 days for a NOID, and extra time can't be granted. USCIS may set a shorter RFE period, so follow the date on your notice.",
  },
  {
    title: "3. Partial responses",
    description:
      "If you submit any response, including a partial one, USCIS may treat it as a request for a decision on the existing record. Send one complete response.",
  },
  {
    title: "4. Denied cases and fees",
    description:
      "Filing fees are generally non-refundable, including after a denial. Form I-290B costs $800 (as of 2026).",
  },
  {
    title: "5. This can change again",
    description: "This is agency policy, not a statute. Check the latest before relying on it.",
  },
];

export function RfeUpdates() {
  return (
    <section id="2026" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          RFE Policy Changes in 2026: What You Need to Know
        </h2>
        <span className="mt-4 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-body">
          Last reviewed October 8, 2026
        </span>

        <div className="mt-8 space-y-4">
          {updates.map((update, index) => (
            <FadeIn key={update.title} delay={index * 60}>
              <div className="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-xl hover:shadow-ink/5">
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
          Check Your Filing Before You Submit
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
