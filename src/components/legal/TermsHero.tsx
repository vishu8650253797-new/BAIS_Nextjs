import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const quickPoints = [
  "BAIS is a California-registered immigration consultant. We are not a law firm and do not give legal advice.",
  "Information on this website is general and can be out of date. Check official sources, and ask us about your own situation.",
  "We never guarantee approvals or timelines. Only the government decides.",
  "Services start only under a signed written services agreement that sets scope, fees, cancellation and refunds.",
  "You agree to give us accurate, complete and truthful information.",
  "Texts: consent is optional, rates may apply, reply STOP to opt out.",
];

export function TermsHero() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container className="max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-body/60">
          <Link href="/" className="hover:text-maroon">Home</Link>
          <span className="mx-1.5">›</span>
          <span className="font-semibold text-ink">Terms &amp; Conditions</span>
        </nav>

        <h1 className="text-3xl font-bold text-ink sm:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-2 text-xs text-body/60">
          Effective date: October 8, 2026 · Last updated: October 8, 2026
        </p>

        <FadeIn className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600" aria-hidden="true" />
          <p className="text-sm font-semibold leading-relaxed text-ink">
            Draft pending legal review. This page is not legal advice and
            has not yet been approved by counsel. Some sections contain
            placeholder terms (for example the liability cap and venue)
            that are subject to change before this policy is considered
            final.
          </p>
        </FadeIn>

        <FadeIn delay={70} className="mt-6 rounded-2xl border-l-4 border-maroon bg-white px-6 py-5">
          <p className="text-sm font-bold uppercase tracking-wide text-maroon">
            Terms in 60 seconds
          </p>
          <ul className="mt-3 space-y-2">
            {quickPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
