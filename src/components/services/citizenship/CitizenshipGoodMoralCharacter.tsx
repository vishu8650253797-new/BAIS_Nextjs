import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const helps = [
  "Tax returns filed and paid",
  "Steady work or study",
  "Community service and volunteering",
  "Letters from employers, neighbors and community leaders",
  "Staying current on family support",
];

const talkToUs = [
  "Arrests or citations, even old or dismissed ones",
  "Unpaid taxes or child support",
  "Long trips abroad",
  "False claims to citizenship, or registering to vote before becoming a citizen",
  "Unfiled taxes or \"nonresident\" tax filings",
];

export function CitizenshipGoodMoralCharacter() {
  return (
    <section id="good-moral-character" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Good moral character
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Good Moral Character: The 2025 Standard, Explained Simply
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          USCIS now looks at your <strong className="text-ink">whole record</strong>,
          not just whether you have problems. It considers positive
          contributions too, and may sometimes check with neighbors or
          employers.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="flex items-center gap-2 text-base font-bold text-ink">
              <CheckCircle2 className="size-5 text-emerald-600" aria-hidden="true" />
              What helps
            </h3>
            <ul className="mt-4 space-y-2.5">
              {helps.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="flex items-center gap-2 text-base font-bold text-white">
              <AlertTriangle className="size-5 text-accent" aria-hidden="true" />
              Talk to us first about
            </h3>
            <ul className="mt-4 space-y-2.5">
              {talkToUs.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
        >
          Get a Confidential Pre-Filing Review
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
