import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const updates = [
  {
    title: "Permanent visa bond rule (August 3, 2026)",
    description:
      "The State Department made its bond program permanent. Applicants from about 50 designated countries may have to post $10,000, $15,000 or $20,000, refundable if they comply. Visa Waiver countries are excluded. India was not on the list as of early October 2026 (check the State Department's current list).",
  },
  {
    title: "$250 Visa Integrity Fee",
    description: "Authorized by the 2025 budget law; check whether your consulate is collecting it.",
  },
  {
    title: "In-person interviews and online vetting",
    description:
      "Waivers are limited, and applicants generally apply in their country of nationality or residence. Officers increasingly review online presence, so make sure what you say matches what you've posted.",
  },
];

export function B1b2Updates() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          B-1/B-2 Updates for 2026
        </h2>
        <span className="mt-4 inline-block rounded-full bg-cream px-4 py-1.5 text-xs font-semibold text-body">
          Last reviewed October 8, 2026
        </span>

        <div className="mt-8 space-y-4">
          {updates.map((update, index) => (
            <FadeIn key={update.title} delay={index * 70}>
              <div className="rounded-2xl border border-border bg-cream/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="text-base font-bold text-ink">{update.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{update.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
