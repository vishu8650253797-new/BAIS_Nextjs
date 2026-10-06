import Link from "next/link";
import { ArrowRight, BookOpen, Languages, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const cards = [
  {
    icon: BookOpen,
    title: "Civics test",
    description: (
      <>
        <strong className="text-ink">Filed on or after October 20, 2025:</strong>{" "}
        up to <strong className="text-ink">20 questions</strong> from a list
        of <strong className="text-ink">128</strong>; you need{" "}
        <strong className="text-ink">12 correct</strong>.
        <br />
        <strong className="text-ink">Filed earlier:</strong> the 2008 test
        (up to 10 of 100, 6 correct).
      </>
    ),
  },
  {
    icon: Languages,
    title: "English test",
    description: (
      <>
        <strong className="text-ink">Reading:</strong> read one of up to
        three sentences aloud. <strong className="text-ink">Writing:</strong>{" "}
        write one of up to three.{" "}
        <strong className="text-ink">Speaking:</strong> judged during your
        interview.
      </>
    ),
  },
  {
    icon: UserCheck,
    title: "Exemptions",
    description: (
      <>
        50+ with 20 years, or 55+ with 15 years as a resident: no English
        test (civics in your language). 65+ with 20 years: a shorter civics
        test. Some disabilities qualify (N-648).
      </>
    ),
  },
];

export function CitizenshipTest() {
  return (
    <section id="test" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          The test
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The Citizenship Test in 2026: What to Expect
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-11 items-center justify-center rounded-full bg-cream text-maroon">
                  <card.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{card.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Book a Mock Citizenship Interview
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
