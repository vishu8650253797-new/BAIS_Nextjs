import Link from "next/link";
import { ArrowRight, Clock, FileCheck, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const reasons = [
  {
    icon: FileCheck,
    title: "No PERM labor certification",
    description:
      "Most employer green cards must first go through PERM, a Department of Labor process that often takes well over a year. EB-1C skips it entirely.",
    yes: "One fewer government stage",
  },
  {
    icon: Globe2,
    title: "No backlog for most countries",
    description:
      "In the October 2026 Visa Bulletin, EB-1 is “current” for every country except China and India. There is no waiting line for a visa number.",
    yes: "Canada, Mexico, Brazil: current",
  },
  {
    icon: Clock,
    title: "Premium processing available",
    description:
      "USCIS offers premium processing for EB-1C I-140 petitions, with action within 45 business days (fee $2,965).",
    yes: "Predictable petition timeline",
  },
];

export function Eb1cOverview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is the EB-1C Green Card?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            The <strong>EB-1C</strong> is a first-preference U.S. green card
            for <strong>multinational managers and executives</strong>. A
            U.S. employer sponsors you if you worked for its related company
            abroad for{" "}
            <strong>at least one year in the last three years</strong> in a
            managerial or executive role, and it has been{" "}
            <strong>doing business in the U.S. for at least one year</strong>.
            EB-1C needs <strong>no PERM labor certification</strong>.
          </div>
        </FadeIn>

        <h2 className="mt-12 text-2xl font-bold text-ink sm:text-3xl">
          Why EB-1C Is One of the Fastest Employment Green Card Routes
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 70}>
              <div className="h-full rounded-2xl border-t-4 border-maroon bg-white p-6 shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <span className="flex size-10 items-center justify-center rounded-full bg-cream text-maroon">
                  <reason.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {reason.description}
                </p>
                <span className="mt-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  ✓ {reason.yes}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mt-4 text-xs text-body/50">
          &ldquo;Faster&rdquo; refers to process steps and visa availability,
          not approval odds. Every case is decided by USCIS on its own merits.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          See If You Qualify
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
