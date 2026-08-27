import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { FOUNDED_YEAR, site, yearsInBusiness } from "@/data/site";

const stats = [
  {
    label: "Experience",
    value: `${yearsInBusiness()}+ years`,
    description: `Immigration consulting experience, founded in ${FOUNDED_YEAR}.`,
  },
  {
    label: "Consultation",
    value: "$100",
    description: "A detailed case consultation, applied toward your service.",
  },
  {
    label: "Coverage",
    value: "5 categories",
    description: "From employment and family visas to citizenship.",
  },
];

export function TrustStats() {
  return (
    <section className="bg-cream py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            By the Numbers
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">Experience you can count on</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 80}>
              <div className="rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-body/50">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-bold text-maroon sm:text-4xl">{stat.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-body">{stat.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
      <p className="sr-only">{site.consultationFee}</p>
    </section>
  );
}
