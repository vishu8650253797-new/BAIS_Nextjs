import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const employers = [
  { title: "Universities", description: "Tenured, tenure-track or permanent research positions." },
  { title: "Research institutions", description: "Permanent research positions at institutes and labs." },
  {
    title: "Private R&D employers",
    description: "A comparable permanent research role, if the employer has 3+ full-time researchers and documented accomplishments.",
  },
];

export function Eb1bEmployers() {
  return (
    <section id="employers" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Employers
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Who Can Sponsor an EB-1B?
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {employers.map((item, index) => (
            <FadeIn key={item.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
        >
          Employers: Plan an EB-1B Petition
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
