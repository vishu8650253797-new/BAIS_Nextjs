import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    title: "Free Profile Assessment",
    description: "We score your achievements against the criteria and identify gaps.",
    when: "Week 1",
  },
  {
    title: "Evidence Strategy",
    description: "We pick the 3–5 strongest criteria and plan comparable evidence.",
    when: "Weeks 1–2",
  },
  {
    title: "Letters & Advisory Opinion",
    description: "Expert letters (350+ professor network) and the advisory opinion.",
    when: "Weeks 2–5",
  },
  {
    title: "Petition Assembly",
    description: "I-129, petition letter, exhibits, contracts or itinerary.",
    when: "Weeks 4–6",
  },
  {
    title: "USCIS Decision",
    description: "Premium: action within 15 business days.",
    when: "Weeks 6–10+",
  },
  {
    title: "Visa & Start",
    description: "Consular stamping or a change of status. Enter up to 10 days early.",
    when: "After approval",
  },
];

export function O1Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          How it works
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The O-1 Process: Step by Step
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 50}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="font-serif text-2xl font-bold text-maroon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{step.description}</p>
                <span className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-body/60">
                  {step.when}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-body">
          <strong className="text-ink">File timing tip:</strong> USCIS
          accepts O-1 petitions up to 1 year before the start date. Filing
          at least 45 days ahead is recommended.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-body/60">
          Timelines are estimates and can change. Premium processing
          guarantees USCIS action, not approval.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Start My O-1 Petition Plan
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
