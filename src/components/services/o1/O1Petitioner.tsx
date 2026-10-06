import Link from "next/link";
import { ArrowRight, Building2, Handshake, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const options = [
  {
    icon: Building2,
    title: "U.S. employer",
    description:
      "Best for: full-time roles. A company in the U.S. employs you directly and files the petition.",
  },
  {
    icon: Handshake,
    title: "U.S. agent",
    description:
      "Best for: freelancers, artists and consultants with multiple clients. The agent files with an itinerary of your engagements.",
  },
  {
    icon: Rocket,
    title: "Your own U.S. company",
    description:
      "Best for: founders. Your startup can generally petition for you, with a genuine employer-employee arrangement (e.g., a board with authority over your role).",
  },
];

export function O1Petitioner() {
  return (
    <section className="bg-white py-20">
      <Container>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Who Files the O-1 Petition? Employer, Agent or Your Own Company
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          O-1 is <strong className="text-ink">not a self-petition</strong>.
          A U.S. petitioner must file Form I-129, but there are three
          flexible options:
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {options.map((option, index) => (
            <FadeIn key={option.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-maroon">
                  <option.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{option.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{option.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
        >
          Ask Which Petitioner Works for You
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
