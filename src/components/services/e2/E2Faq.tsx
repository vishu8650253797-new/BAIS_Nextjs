import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const e2Faqs = [
  {
    question: "What is an E-2 visa?",
    answer:
      "The E-2 is a nonimmigrant visa for nationals of treaty countries who invest a substantial amount in a real U.S. business and will develop and direct it. It's temporary but renewable for as long as the business operates and you meet the rules.",
  },
  {
    question: "Which countries qualify for the E-2 visa?",
    answer:
      "About 81 countries, including Canada, Mexico, the United Kingdom, Germany, France, Italy, Spain, Japan, South Korea, Taiwan, Australia and the Philippines. India, mainland China, Brazil and Russia are not on the list. Check the State Department's treaty table before planning.",
  },
  {
    question: "Can an Indian citizen get an E-2 visa?",
    answer:
      "Not on an Indian passport, because India isn't a treaty country. If you also hold citizenship in a treaty country, that passport may qualify you. Other options include L-1A, EB-5, O-1 or H-1B, depending on your situation.",
  },
  {
    question: "How much do I need to invest for an E-2 visa?",
    answer:
      "There's no fixed minimum. The investment must be \"substantial\" in proportion to the cost of the business, at risk, and committed before you apply. Lower-cost businesses generally need a higher share of their cost invested. The business must also be more than marginal.",
  },
  {
    question: "Can my spouse work on an E-2 visa?",
    answer:
      "Yes. An E-2 spouse is generally authorized to work in the U.S. as part of their status. Children under 21 can come and study but can't work. Employees of the same nationality in executive, supervisory or essential-skills roles may also qualify.",
  },
  {
    question: "How much does an E-2 visa cost?",
    answer:
      "Government fees: a $315 consular application fee abroad, or $1,015 (paper) / $965 (online) for the I-129 inside the U.S. plus a $600 Asylum Program Fee ($300 small employer, $0 nonprofit). Premium processing adds $2,965. Investment and setup costs are separate.",
  },
  {
    question: "Can the E-2 lead to a green card?",
    answer:
      "Not directly. Many E-2 investors later qualify through EB-5, EB-1C (as multinational managers), EB-2 NIW or employer sponsorship. We plan that path with you early.",
  },
  {
    question: "Is BAIS a law firm, and do you sell businesses?",
    answer:
      "No to both. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares E-2 documents and evidence. We don't provide legal advice, and we don't sell, broker or recommend businesses or franchises. For legal advice, consult a licensed legal professional.",
  },
];

export function E2Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="E-2 Treaty Investor Visa FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={e2Faqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
