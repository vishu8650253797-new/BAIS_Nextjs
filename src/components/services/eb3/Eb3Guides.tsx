import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const guides = [
  { title: "PERM Processing Times: Monthly DOL Update", tag: "Read guide", href: "/blog" },
  { title: "How PERM Processing Affects Your Green Card", tag: "Read guide", href: "/blog" },
  { title: "PERM for Employers (Compliance)", tag: "Read guide", href: "/blog" },
  { title: "EB-2 vs EB-3 in 2026", tag: "Read guide", href: "/blog" },
  { title: "Real Stories: Bay Area PERM Green Cards", tag: "Read guide", href: "/blog" },
  { title: "H-1B Visa Services", tag: "Service", href: "/services/h-1b-visa" },
];

export function Eb3Guides() {
  return (
    <section className="bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Keep learning
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Helpful EB-3 &amp; PERM Guides</h2>

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
