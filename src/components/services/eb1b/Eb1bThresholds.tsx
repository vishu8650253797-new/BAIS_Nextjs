import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const thresholds = [
  {
    title: "International recognition",
    description: "As outstanding in your academic field, shown by at least 2 of 6 criteria.",
  },
  {
    title: "3+ years of experience",
    description: "Teaching or research in the field. Doctoral experience can count in certain cases.",
  },
  {
    title: "A permanent offer",
    description:
      "Tenured or tenure-track, a permanent research post, or a private employer with 3+ full-time researchers and documented accomplishments.",
  },
];

export function Eb1bThresholds() {
  return (
    <section id="requirements" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Requirements
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-1B Requirements: 3 Thresholds
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {thresholds.map((item, index) => (
            <FadeIn key={item.title} delay={index * 70}>
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
      </Container>
    </section>
  );
}
