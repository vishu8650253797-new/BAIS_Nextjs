import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const requirements = [
  "Treaty nationality, and a business at least 50% owned by treaty nationals",
  "Substantial trade: a sizable, continuing flow with numerous transactions over time (not one big deal; no dollar threshold)",
  "Principal trade: more than 50% of your international trade is between the U.S. and your treaty country",
  "Real trade in goods, services or technology, where title passes",
  "Enough income from the trade to support you and your family",
  "You'll run or supervise the business and intend to leave when E-1 ends",
];

export function E1Requirements() {
  return (
    <section id="requirements" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Requirements
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          E-1 Requirements in Plain English
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <ul className="space-y-3">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-white">
              Worked example: principal trade
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              If your business has <strong className="text-white">$200</strong>{" "}
              of international trade and{" "}
              <strong className="text-white">$120</strong> is between the
              U.S. and your treaty country, the U.S. share is{" "}
              <strong className="text-white">60%</strong>, which clears the
              50% bar.
            </p>
            <h3 className="mt-5 text-base font-bold text-white">
              E-1 is not a startup visa
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              The trade must already exist. New business? See{" "}
              <strong className="text-white">E-2</strong>.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
