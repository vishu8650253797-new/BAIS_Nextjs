import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const requirements = [
  {
    title: "U.S. citizen petitioner",
    description:
      "Only U.S. citizens can file a K-1. Green card holders use the I-130 spouse process instead.",
  },
  {
    title: "Legally free to marry",
    description:
      "Both partners are single, or prior marriages have legally ended. Documents are required.",
  },
  {
    title: "Genuine intent to marry",
    description:
      "Both intend to marry each other within 90 days of the fiancé(e)'s arrival.",
  },
  {
    title: "Met in person within 2 years",
    description:
      "Required before filing. It can be waived for extreme hardship or a strict cultural or religious custom.",
  },
  {
    title: "Financial support",
    description:
      "I-134 at the visa stage; I-864 at the green card stage (generally at least 125% of poverty guidelines). A joint sponsor may help.",
  },
  {
    title: "IMBRA disclosures",
    description:
      "Certain criminal history and marriage-broker use must be disclosed. Filing limits apply for prior K-1s; waivers are possible.",
  },
];

export function K1Eligibility() {
  return (
    <section id="eligibility" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Eligibility
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          K-1 Visa Requirements: Who Qualifies?
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {requirements.map((item, index) => (
            <FadeIn key={item.title} delay={index * 50}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-9 items-center justify-center rounded-full bg-maroon text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-body/60">
          Each case depends on its own facts. Meeting these requirements does
          not guarantee approval.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Check Your K-1 Eligibility Free
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
