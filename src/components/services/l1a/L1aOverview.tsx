import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const checks = [
  {
    title: "Are the two companies related?",
    description:
      "Your foreign company and U.S. company must be linked as parent, branch, subsidiary or affiliate, through common ownership and control.",
    yes: "Most exporters set up a U.S. subsidiary",
  },
  {
    title: "One year with the company abroad?",
    description:
      "The person transferring must have worked for the foreign company for at least one continuous year in the last three years.",
    yes: "Owners and founders can qualify",
  },
  {
    title: "A true manager or executive role?",
    description:
      "Both the role abroad and the U.S. role must be managerial or executive, directing people or a key function, not doing daily operational work.",
    yes: "Judged by duties, not job title",
  },
];

const stats = [
  { title: "No lottery", description: "File any time of year" },
  { title: "Up to 7 years", description: "1 year for a new office, then extensions" },
  { title: "Spouse can work", description: "L-2 work authorization comes with status" },
  { title: "Green card path", description: "EB-1C, no PERM required" },
];

export function L1aOverview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is an L-1A Visa?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            The <strong>L-1A visa</strong> lets a company outside the U.S.
            transfer a <strong>manager or executive</strong> to a related
            U.S. office: a parent, branch, subsidiary or affiliate. The
            employee must have worked for the foreign company for{" "}
            <strong>at least one continuous year in the last three years</strong>.
            L-1A can also be used to{" "}
            <strong>open a brand-new U.S. office</strong>, with an initial
            stay of one year, and can be extended to{" "}
            <strong>7 years total</strong>.
          </div>
        </FadeIn>

        <h2 className="mt-12 text-2xl font-bold text-ink sm:text-3xl">
          Do You Qualify? 3 Quick Checks
        </h2>
        <p className="mt-2 text-sm text-body/70">
          If you can answer &ldquo;yes&rdquo; to all three, an L-1A may be
          right for your business.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {checks.map((check, index) => (
            <FadeIn key={check.title} delay={index * 70}>
              <div className="h-full rounded-2xl border-t-4 border-maroon bg-white p-6 shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <span className="flex size-9 items-center justify-center rounded-full bg-maroon text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{check.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {check.description}
                </p>
                <span className="mt-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  ✓ {check.yes}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-ink p-5 text-white transition-colors duration-200 hover:bg-maroon-dark"
            >
              <p className="text-base font-bold text-white">{stat.title}</p>
              <p className="mt-1 text-xs leading-snug text-white/60">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
          >
            Take the Free L-1A Eligibility Check
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <span className="text-sm text-body/60">
            Not sure about one of these? We&apos;ll review it with you free.
          </span>
        </div>
      </Container>
    </section>
  );
}
