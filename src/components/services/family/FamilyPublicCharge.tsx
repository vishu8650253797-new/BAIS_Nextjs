import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function FamilyPublicCharge() {
  return (
    <section id="public-charge" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Public charge
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Money Matters: The Affidavit of Support (I-864) and Public Charge
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <ul className="space-y-3 text-sm leading-relaxed text-body">
              <li>
                <strong className="text-ink">Public charge</strong> is the
                test of whether someone is likely to depend mainly on public
                benefits.
              </li>
              <li>
                Most sponsors file <strong className="text-ink">Form I-864</strong>{" "}
                and show household income of{" "}
                <strong className="text-ink">
                  at least 125% of the federal poverty guidelines
                </strong>{" "}
                (check the I-864P table). A{" "}
                <strong className="text-ink">joint sponsor</strong> can help.
              </li>
              <li>
                <strong className="text-ink">New from September 18, 2026:</strong>{" "}
                a new USCIS framework applies to I-485 applications filed on
                or after that date. Complete financial evidence matters more
                than ever.
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-white">Our I-864 Support Planner (USP)</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              We check your income against the current table, flag gaps
              early, and organize a joint sponsor&apos;s documents so the
              affidavit is complete.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-white/60">
              <strong className="text-white">Reported:</strong> a State
              Department public charge bond pilot (announced August 5, 2026)
              lets consular officers require certain applicants to post a
              bond of up to $250,000. Check current rules before advising.
            </p>
          </FadeIn>
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Check My I-864 Income Before I File
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
