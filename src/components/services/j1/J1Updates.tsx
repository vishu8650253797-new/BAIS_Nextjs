import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const updates = [
  {
    title: "1. \"Duration of status\" has ended (effective September 15, 2026)",
    description:
      "J-1 visitors are now admitted until their DS-2019 program end date, capped at 4 years, with a 30-day grace period. Staying longer requires an extension application with USCIS.",
  },
  {
    title: "2. Work continuity during extensions",
    description:
      "J-1 categories authorized to work that file a timely extension can generally keep working for up to 240 days while it's pending.",
  },
  {
    title: "3. Proposed tighter sponsor rules",
    description:
      "In July 2026, the State Department proposed expanding the grounds for terminating J-1 programs. It's a proposal, not yet final.",
  },
  {
    title: "4. Enhanced vetting",
    description:
      "Applicants must set social media profiles to public for screening (in place since 2025). Nationality-based travel restrictions may also apply.",
  },
  {
    title: "5. The 2024 Skills List still matters",
    description:
      "Nationals of India, China, Brazil, South Korea and 30+ other countries may no longer be subject to 212(e) on Skills List grounds.",
  },
];

export function J1Updates() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          J-1 Visa Changes in 2026: What Exchange Visitors and Hosts Must Know
        </h2>
        <span className="mt-4 inline-block rounded-full bg-cream px-4 py-1.5 text-xs font-semibold text-body">
          Last reviewed September 30, 2026
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
          Check How 2026 Changes Affect You
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
