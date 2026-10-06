import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const guides = [
  { title: "O-1 Visa Timeline: From I-129 Filing to Approval", tag: "Read guide", href: "/blog" },
  { title: "O-1 Visa Evidence Checklist", tag: "Read guide", href: "/blog" },
  { title: "O-1 Visa Renewal & Extension Process", tag: "Read guide", href: "/blog" },
  { title: "O-1 Visa for Artists & Entertainers", tag: "Read guide", href: "/blog" },
  { title: "O-1 vs H-1B in 2026", tag: "Read guide", href: "/blog" },
  { title: "EB-1A Green Card", tag: "Service", href: "/services#permanent-immigration" },
];

export function O1Guides() {
  return (
    <section className="bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Keep learning
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Helpful O-1 Guides</h2>

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
