import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const updates = [
  {
    title: "In-person interviews are the norm",
    description:
      "E-1/E-2 applicants generally can't use the consular interview waiver, including renewals. (State Department rules tightened in September 2025; confirm with your consulate.)",
  },
  {
    title: "81 E-2 treaty countries",
    description:
      "On the State table (August–September 2026). Portugal joined in 2024; India, China, Brazil and Russia aren't included.",
  },
  {
    title: "Fees",
    description: "I-129 $1,015 paper / $965 online; premium processing $2,965 since March 1, 2026; consular fee $315.",
  },
  {
    title: "Closer review of \"marginal\" and \"at-risk\" funds",
    description:
      "Reported State Department guidance refresh (9 FAM 402.9, February 2026). (Confirm against the current FAM.)",
  },
];

export function E2Updates() {
  return (
    <section className="bg-cream py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          E-2 Updates for 2026
        </h2>
        <span className="mt-4 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-body">
          Last reviewed October 8, 2026
        </span>

        <div className="mt-8 space-y-4">
          {updates.map((update, index) => (
            <FadeIn key={update.title} delay={index * 60}>
              <div className="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-xl hover:shadow-ink/5">
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
