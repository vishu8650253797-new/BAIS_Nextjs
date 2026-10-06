import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const cards = [
  {
    title: "Local wages & recruitment",
    description:
      "Prevailing wages follow your worksite's metro area; Bay Area wages are among the highest in the U.S. California job orders run through CalJOBS, and Sunday ads run in a newspaper of general circulation for your area.",
  },
  {
    title: "Remote & hybrid roles",
    description:
      "The worksite (or the employee's home office) decides the wage area and where to recruit. We plan this carefully.",
  },
  {
    title: "Industries & area",
    description:
      "Tech, semiconductors, biotech, healthcare (Schedule A), manufacturing, logistics, hospitality. Fremont office; serving San Jose, Santa Clara, Sunnyvale, Milpitas, Oakland, San Francisco, the Peninsula, the Tri-Valley and all of California.",
  },
];

export function Eb3BayArea() {
  return (
    <section id="bay-area" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Bay Area &amp; California
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          PERM &amp; EB-3 for Bay Area and California Employers
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="text-base font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{card.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
