import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const guides = [
  { title: "L-1A vs L-1B: What's the Difference?", tag: "Read guide", href: "/blog" },
  { title: "Common RFE Triggers for L-1 Applicants", tag: "Read guide", href: "/blog" },
  { title: "L-1 or H-1B for Intracompany Transfers?", tag: "Read guide", href: "/blog" },
  { title: "H-1B & L-1 Extension Fees 2026", tag: "Read guide", href: "/blog" },
  { title: "L-1 RFEs: Why Transfers Face Extra Scrutiny", tag: "Read guide", href: "/blog" },
  { title: "EB-1C Green Card for Managers", tag: "Read guide", href: "/services/eb-1c" },
];

export function L1aGuides() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Keep learning
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Helpful L-1 Guides</h2>

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
