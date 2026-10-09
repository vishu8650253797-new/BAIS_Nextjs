import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const updates = [
  {
    title: "In-person interviews are the norm",
    description:
      "E-1/E-2 applicants generally can't use the consular interview waiver, including renewals. (State Department rules tightened in September 2025; confirm with your consulate.)",
  },
  {
    title: "54 E-1 treaty countries",
    description:
      "On the State table (August 2026). Greece and Brunei are E-1 only; India, China, Brazil and Russia aren't on it.",
  },
  {
    title: "Fees and RFE policy",
    description:
      "I-129 $1,015 paper / $965 online; premium $2,965 since March 1, 2026. USCIS can deny without an RFE (PA-2026-05), so file complete trade evidence.",
  },
];

export function E1Updates() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          E-1 Updates for 2026
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
