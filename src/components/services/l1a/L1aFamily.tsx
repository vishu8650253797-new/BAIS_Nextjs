import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const cards = [
  {
    title: "Spouse (L-2)",
    description:
      "Your spouse can live in the U.S. with you and is authorized to work for any employer. Work authorization comes with L-2 status, shown on an I-94 marked “L-2S,” so a separate work permit application is generally not needed. Spouses can also study.",
  },
  {
    title: "Children (L-2)",
    description:
      "Unmarried children under 21 can live with you and attend school or university in the U.S. They cannot work on L-2 status.",
  },
  {
    title: "How L-2 works",
    description:
      "Abroad: your family applies at the U.S. consulate, usually with you. In the U.S.: change or extend status on Form I-539. Their stay generally matches your L-1A dates, so file extensions together. Spouse and children under 21 are included in your EB-1C green card.",
  },
];

export function L1aFamily() {
  return (
    <section className="bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Your family
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Bringing Your Family: L-2 Visa for Spouses and Children
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="text-base font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{card.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-6">
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
          >
            Plan Your Family&apos;s Move With Us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
