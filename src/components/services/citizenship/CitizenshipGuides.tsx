import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const guides = [
  { title: "The 2025 Citizenship Test: 128 Questions", tag: "Read guide", href: "/blog" },
  { title: "N-400 Processing Times: San Francisco & San Jose", tag: "Read guide", href: "/blog" },
  { title: "Citizenship Through Marriage: The 3-Year Rule", tag: "Read guide", href: "/blog" },
  { title: "After Citizenship: Renunciation & OCI", tag: "Read guide", href: "/blog" },
  { title: "OCI & Renunciation Services", tag: "Service", href: "/services#other-services" },
  { title: "Family Sponsorship", tag: "Service hub", href: "/services#family-immigration" },
];

export function CitizenshipGuides() {
  return (
    <section className="bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Keep learning
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Helpful Citizenship Guides</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <FadeIn key={guide.title} delay={index * 40}>
              <Link
                href={guide.href}
                className="block h-full rounded-2xl border border-border bg-cream p-5 font-medium text-ink transition-all duration-300 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-xl hover:shadow-ink/5"
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
