import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const guides = [
  { title: "H-1B Amendment: Job Change & Relocation", tag: "Read guide", href: "/blog" },
  { title: "Working From Home on H-1B: Do You Need a New LCA?", tag: "Read guide", href: "/blog" },
  { title: "Top 10 H-1B RFE Reasons & How to Avoid Them", tag: "Read guide", href: "/blog" },
  { title: "Concurrent H-1B Rules Explained", tag: "Read guide", href: "/blog" },
  { title: "H-1B Visa Stamping & Travel Tips", tag: "Read guide", href: "/blog" },
  { title: "The 60-Day H-1B Grace Period", tag: "Read guide", href: "/blog" },
];

export function H1bGuides() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Keep learning
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Helpful H-1B Guides</h2>

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
