import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";

const immigrantVisas = ["EB-1", "EB-2", "EB-2 NIW", "EB-3", "EB-5", "Green Card Lottery", "U.S. Citizenship"];
const nonImmigrantVisas = ["H-1B", "L-1A", "L-1B", "O-1", "J-1", "TN", "E-1", "E-2"];

function VisaCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-xl hover:shadow-ink/5">
      <h3 className="text-xl font-bold text-ink">{title}</h3>
      <p className="mt-1.5 text-sm text-body">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-cream px-3 py-1.5 text-xs font-bold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CoverageSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Coverage
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            All the visa categories you need, in one place
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-body">
            From first filing to permanent residency, we prepare
            documentation across every major pathway we handle.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <FadeIn>
            <VisaCard
              title="Immigrant Visas"
              description="Your path to permanent residency"
              tags={immigrantVisas}
            />
          </FadeIn>
          <FadeIn delay={80}>
            <VisaCard
              title="Nonimmigrant Visas"
              description="Work, business, and exchange categories"
              tags={nonImmigrantVisas}
            />
          </FadeIn>
        </div>

        <FadeIn delay={140} className="mt-6 flex flex-col items-start justify-between gap-6 rounded-2xl bg-cream p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5 sm:flex-row sm:items-center">
          <p className="text-lg font-semibold text-ink">
            Not sure which visa is right? We&apos;ll guide you to the strongest option.
          </p>
          <Button href="/contact">
            Contact Us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
