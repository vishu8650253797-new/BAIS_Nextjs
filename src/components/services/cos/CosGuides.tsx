import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const guides = [
  { title: "Change vs Adjustment vs Extension", tag: "Read guide", href: "/blog" },
  { title: "B-2 to F-1 in 2026: Timing & the 90-Day Rule", tag: "Read guide", href: "/blog" },
  { title: "H-1B Layoff: Your 60-Day Options", tag: "Read guide", href: "/blog" },
  { title: "Duration of Status Rule Blocked", tag: "Read guide", href: "/blog" },
  { title: "STEM OPT Extension & I-539 Guide", tag: "Read guide", href: "/blog" },
  { title: "H-1B Visa Services", tag: "Service", href: "/services/h-1b-visa" },
];

export function CosGuides() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Keep learning
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Helpful Change of Status Guides
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <FadeIn key={guide.title} delay={index * 40}>
              <Link
                href={guide.href}
                className="block h-full rounded-2xl border border-border bg-white p-5 font-medium text-ink transition-all duration-300 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-xl hover:shadow-ink/5"
              >
                {guide.title}
                <span className="mt-2 block text-sm font-semibold text-maroon">
                  {guide.tag} →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
