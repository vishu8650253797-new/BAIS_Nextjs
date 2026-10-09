import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const cards = [
  {
    title: "Minors",
    description:
      "Birth certificate, parents' passports or surrender/OCI documents, photos and signatures. Under the 2026 rules a minor can't hold an Indian and a foreign passport at the same time.",
  },
  {
    title: "Adult checklist",
    description:
      "Current passport (valid 6+ months) · naturalization certificate · original Indian passport and Surrender Certificate · proof of Indian origin · address proof · marriage certificate if relevant · photos and signature (right size and format)",
  },
  {
    title: "Common rejections",
    description:
      "Wrong photo or signature size · mismatched names or dates · missing Surrender Certificate. Detailed lists: the OCI document checklist and the children-born-in-the-U.S. guides.",
  },
];

export function OciMinorsChecklist() {
  return (
    <section id="minors-checklist" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Minors and the checklist
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          U.S.-Born Children and the Document Checklist
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

        <p className="mt-6 text-sm leading-relaxed text-body">
          <strong className="text-ink">OCI gives you</strong> a lifelong
          multiple-entry visa-style status, no need for an Indian visa, and
          parity with NRIs in many economic matters.{" "}
          <strong className="text-ink">OCI does not give you</strong> Indian
          citizenship, voting rights, or (generally) government jobs or
          agricultural land. OCI can be cancelled for violations.
        </p>
      </Container>
    </section>
  );
}
