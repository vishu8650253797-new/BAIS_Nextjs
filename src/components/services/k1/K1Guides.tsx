import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const guides = [
  { title: "K-1 vs CR-1 in 2026", tag: "Read guide", href: "/blog" },
  { title: "K-1 Timeline 2026", tag: "Read guide", href: "/blog" },
  { title: "30 Common K-1 Interview Questions", tag: "Read guide", href: "/blog" },
  { title: "After the K-1: 90 Days & Green Card", tag: "Read guide", href: "/blog" },
  { title: "Spouse Visa (CR-1 / IR-1)", tag: "Service", href: "/services#family-immigration" },
  { title: "Family-Based Immigration", tag: "Service hub", href: "/services#family-immigration" },
];

export function K1Guides() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Keep learning
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Helpful Family Immigration Guides
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
