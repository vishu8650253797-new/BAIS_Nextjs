import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const audiences = [
  {
    title: "Individuals & families",
    description: "Calm, plain-English triage, one clear plan and one complete response.",
    cta: "Individuals: Upload My Notice",
  },
  {
    title: "Employers & HR",
    description:
      "Faster evidence collection from your team (payroll, org charts, contracts, client letters), consistent records across employees, and deadline tracking.",
    cta: "Employers: Plan Our Response",
  },
  {
    title: "Attorneys & law firms",
    description:
      "Evidence and back-office support under your direction. Your attorney keeps legal judgment, signatures (including Form G-28) and responsibility.",
    cta: "Attorneys: Back-Office Call",
  },
];

export function RfeWhoWeHelp() {
  return (
    <section id="attorneys" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Who we help
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          RFE Help for Individuals, Employers and Law Firms
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {audiences.map((audience, index) => (
            <FadeIn key={audience.title} delay={index * 70}>
              <div className="flex h-full flex-col rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="text-base font-bold text-ink">{audience.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{audience.description}</p>
                <Link
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-maroon hover:text-maroon-dark"
                >
                  {audience.cta} →
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-body/60">
          BAIS does not give legal advice, write legal briefs, or represent
          clients before USCIS. We prepare documentation and evidence; your
          attorney (if you have one) retains legal judgment and
          responsibility.
        </p>
      </Container>
    </section>
  );
}
