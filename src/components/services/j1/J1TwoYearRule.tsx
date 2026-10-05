import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const reasons = [
  {
    title: "Government funding",
    description:
      "Your program was funded by the U.S. government or your home government.",
  },
  {
    title: "Skills List",
    description: "Your skills appear on your country's Exchange Visitor Skills List.",
  },
  {
    title: "Medical training",
    description: "You came for graduate medical education or training.",
  },
];

export function J1TwoYearRule() {
  return (
    <section id="212e" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          212(e) &amp; waivers
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The J-1 Two-Year Home Residency Requirement (212(e)) and Waivers
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {reasons.map((item, index) => (
            <FadeIn key={item.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-9 items-center justify-center rounded-full bg-maroon text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={90} className="mt-6 rounded-2xl bg-ink p-7 text-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/30">
          <h3 className="text-base font-bold text-white">
            Big change: the 2024 Skills List
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            In December 2024, the State Department removed more than 30
            countries, including <strong className="text-white">India, China, Brazil and South Korea</strong>,
            and applied the change <strong className="text-white">retroactively</strong>. Many
            J-1 holders who were subject before may no longer be. Funding
            and medical training can still make you subject.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
