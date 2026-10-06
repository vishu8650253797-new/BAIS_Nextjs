import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const fits = [
  {
    anchor: "#o-1a",
    title: "O-1A · Science, Education, Business, Athletics",
    who: "Researchers, engineers, AI and tech specialists, founders, executives, professors, athletes and coaches",
    standard: "Extraordinary ability, with sustained national or international acclaim",
    criteria: "A major international award or at least 3 of 8",
    note: "O-2 support staff: athletes only",
  },
  {
    anchor: "#o-1b",
    title: "O-1B · Arts, Motion Picture & TV",
    who: "Musicians, actors, dancers, artists, designers, chefs, photographers, directors, producers",
    standard: "Arts = \"distinction\"; film and TV = \"extraordinary achievement\" (higher)",
    criteria: "A major award or nomination or at least 3 of 6",
    note: "O-2 support staff available",
  },
];

export function O1Overview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is the O-1 Visa?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            The <strong>O-1 visa</strong> is a U.S. work visa for people with{" "}
            <strong>extraordinary ability or achievement</strong>.{" "}
            <strong>O-1A</strong> covers the sciences, education, business
            and athletics. <strong>O-1B</strong> covers the arts and the
            motion picture and television industry. A U.S. employer or
            agent must petition. Approval runs up to{" "}
            <strong>3 years</strong>, with <strong>1-year extensions</strong>{" "}
            and <strong>no lifetime maximum</strong>.
          </div>
        </FadeIn>

        <h2 className="mt-12 text-2xl font-bold text-ink sm:text-3xl">
          O-1A or O-1B: Which One Fits You?
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {fits.map((fit, index) => (
            <FadeIn key={fit.title} delay={index * 80}>
              <Link
                href={fit.anchor}
                className="block h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                <h3 className="text-base font-bold text-ink">{fit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  <strong className="text-ink">Who:</strong> {fit.who}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  <strong className="text-ink">Standard:</strong> {fit.standard}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  <strong className="text-ink">Criteria:</strong> {fit.criteria}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="size-3.5" aria-hidden="true" />
                  {fit.note}
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
        <Link
          href="#o-1a"
          className="mt-4 inline-block text-sm font-semibold text-maroon hover:text-maroon-dark"
        >
          See the full O-1A &amp; O-1B criteria below →
        </Link>
      </Container>
    </section>
  );
}
