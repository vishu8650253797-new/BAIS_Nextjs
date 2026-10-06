import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const canReasons = [
  "You were lawfully admitted as a nonimmigrant",
  "Your status hasn't expired (check your I-94) when USCIS receives the application",
  "You haven't violated your status",
  "You qualify for the new category, and your passport is valid for the new period",
];

const cannotReasons = [
  "Visa Waiver / ESTA visitor (WT/WB)",
  "K-1/K-2 fiancé(e)",
  "C transit or D crew",
  "J-1/J-2 subject to 212(e) without a waiver",
  "M-1 to F-1 (or to H if M-1 training helped)",
];

export function CosEligibility() {
  return (
    <section id="eligibility" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Eligibility
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Who Can Change Status Inside the U.S.?
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">You generally can if…</h3>
            <ul className="mt-4 space-y-2.5">
              {canReasons.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-white">
              You generally cannot if you entered as…
            </h3>
            <ul className="mt-4 space-y-2.5">
              {cannotReasons.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75">
                  <XCircle className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">Late filings</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              USCIS may excuse a late filing only in limited cases:
              extraordinary circumstances outside your control, a
              reasonable delay, and no other status violations. Don&apos;t
              rely on this. File early.
            </p>
          </FadeIn>
          <FadeIn delay={70} className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">
              Intent matters: the &quot;90-day&quot; question
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Acting inconsistently with your visa soon after arrival, such
              as applying to study right after entering as a tourist, can
              raise misrepresentation questions.{" "}
              <strong className="text-ink">
                Honest evidence of when and why your plans changed is
                essential.
              </strong>
            </p>
          </FadeIn>
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Check If You Can Change Status: Free
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
