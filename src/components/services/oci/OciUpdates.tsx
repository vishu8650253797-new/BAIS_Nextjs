import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const updates = [
  {
    title: "Citizenship (Amendment) Rules, 2026 (effective May 1, 2026)",
    description:
      "OCI registration, re-issuance, renunciation and cancellation are fully online, with no duplicate document sets. You can receive an electronic e-OCI as well as, or instead of, a physical card.",
  },
  {
    title: "Re-issuance, minors and PIO",
    description:
      "Re-issuance is required only once, after a new passport issued after you turn 20. A minor can't hold an Indian and a foreign passport at the same time. PIO cards are no longer valid for travel.",
  },
  {
    title: "Giving up OCI",
    description:
      "You surrender the physical card; cancellation takes effect in the digital record even if the card isn't returned.",
  },
];

export function OciUpdates() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          OCI Updates for 2026
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
