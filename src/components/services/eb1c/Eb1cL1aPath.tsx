import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    number: "01",
    title: "L-1A New Office",
    description: "Open your U.S. office and transfer as its manager. First approval: up to 1 year.",
  },
  {
    number: "02",
    title: "Build & Extend",
    description: "Hire staff, grow revenue, and extend L-1A once the office is operating.",
  },
  {
    number: "03",
    title: "1 Year of U.S. Business",
    description: "Once the U.S. company has done business for a full year, EB-1C becomes possible.",
  },
  {
    number: "04",
    title: "File EB-1C I-140",
    description: "Your company petitions for you, with optional premium processing (45 business days).",
  },
  {
    number: "05",
    title: "Green Card Stage",
    description: "File the I-485 in the U.S. or go through consular processing when your date is current.",
  },
  {
    number: "06",
    title: "Family Green Cards",
    description: "Spouse and children under 21 receive green cards with you.",
  },
];

export function Eb1cL1aPath() {
  return (
    <section className="bg-gradient-to-br from-cream to-[#f4e9dc] py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          From L-1A to green card
        </p>
        <h2 className="font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">
          The L-1A to EB-1C Path: How Business Owners Get a Green Card
        </h2>
        <span className="mt-4 block h-1 w-14 rounded-full bg-maroon" aria-hidden="true" />

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 60}>
              <div className="h-full rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <p className="font-serif text-3xl text-maroon">{step.number}</p>
                <h3 className="mt-2 text-sm font-bold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-body">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8 rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <h3 className="text-base font-bold text-ink">
            No L-1A? You may still qualify.
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            EB-1C does not require L-1 status. A manager working abroad for a
            company whose U.S. affiliate has been doing business for a year
            or more may be sponsored directly and complete the process at a
            U.S. consulate. Managers in the U.S. on H-1B, E-2 or other visas
            may also qualify if they meet the one-year-abroad rule.
          </p>
        </FadeIn>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
          >
            Plan Your L-1A to Green Card Path
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/services#employment-immigration"
            className="text-sm font-semibold text-maroon hover:text-maroon-dark"
          >
            Starting with L-1A? See our L-1A page →
          </Link>
        </div>
      </Container>
    </section>
  );
}
