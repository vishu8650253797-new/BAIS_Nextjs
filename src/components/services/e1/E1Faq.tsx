import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const e1Faqs = [
  {
    question: "What is the E-1 treaty trader visa?",
    answer:
      "The E-1 is a nonimmigrant visa for nationals of treaty countries whose business carries on substantial trade, principally between the United States and their country. The business must be at least 50% owned by treaty-country nationals. It's temporary but renewable for as long as the trade continues.",
  },
  {
    question: "Which countries qualify for the E-1 visa?",
    answer:
      "About 54 countries, including Canada, Mexico, the United Kingdom, Germany, France, Italy, Spain, Japan, South Korea, Taiwan, Australia and the Philippines. India, mainland China, Brazil and Russia are not on the list. Some countries are E-2 only. Check the State Department's treaty table.",
  },
  {
    question: "What counts as substantial and principal trade?",
    answer:
      "Substantial means a sizable, continuing flow of trade with numerous transactions over time, not one large deal. Principal means more than 50% of your international trade is between the United States and your treaty country. Trade includes goods, services and technology, and title must pass between the parties.",
  },
  {
    question: "What is the difference between E-1 and E-2?",
    answer:
      "E-1 is for businesses that already trade substantially with the U.S., and needs no minimum investment. E-2 is for investing in and running a U.S. business, and can be used for a startup. E-1 is not a startup visa. Both require treaty-country nationality and 50% treaty ownership.",
  },
  {
    question: "Can employees get E-1 status?",
    answer:
      "Yes. Employees of a qualifying treaty-country business may qualify if they have the same nationality as the owner and work in an executive or supervisory role, or one that needs essential skills. The business must itself meet the E-1 trade and ownership tests.",
  },
  {
    question: "Can my spouse work on E-1, and how long does it last?",
    answer:
      "An E-1 spouse is generally authorized to work in the U.S. as part of their status, and children under 21 can study. E-1 is granted in increments set by your country's reciprocity, often up to 5 years, and can be renewed as long as the trade continues.",
  },
  {
    question: "How much does an E-1 visa cost?",
    answer:
      "Government fees: a $315 consular application fee abroad, or $1,015 (paper) / $965 (online) for the I-129 inside the U.S. plus a $600 Asylum Program Fee ($300 small employer, $0 nonprofit). Premium processing adds $2,965. There's no minimum investment, but legal, evidence and setup costs are separate.",
  },
  {
    question: "Is BAIS a law firm, and do you arrange trade or find buyers?",
    answer:
      "No to both. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares E-1 documents and trade evidence. We don't provide legal advice, and we don't broker trade, find buyers or sellers, or give business or tax advice. For legal advice, consult a licensed legal professional.",
  },
];

export function E1Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="E-1 Treaty Trader Visa FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={e1Faqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
