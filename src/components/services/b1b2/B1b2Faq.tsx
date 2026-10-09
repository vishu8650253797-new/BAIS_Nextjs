import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const b1b2Faqs = [
  {
    question: "What is a B-1/B-2 visa?",
    answer:
      "The B-1/B-2 is a nonimmigrant visitor visa. B-1 covers business visits, such as meetings, conferences and contract negotiations. B-2 covers tourism, family visits and medical treatment. Most consulates issue one combined B-1/B-2 visa. Neither allows you to work for a U.S. employer.",
  },
  {
    question: "What's the difference between B-1 and B-2?",
    answer:
      "The difference is your purpose. B-1 is for short business activities that don't amount to employment, such as attending meetings, negotiating contracts or servicing equipment under warranty. B-2 is for leisure, visiting family, social events or medical care.",
  },
  {
    question: "Do I need a B visa or can I use ESTA?",
    answer:
      "If your country is in the Visa Waiver Program, you can usually travel for up to 90 days with an approved ESTA instead of a visa. If it isn't, you need a B visa. ESTA and the B visa both cover business and tourism, but you can't extend an ESTA stay.",
  },
  {
    question: "Can I work or get paid on a B-1 or B-2?",
    answer:
      "No. You can't take a U.S. job or be paid by a U.S. source. B-1 allows business activities such as meetings, consulting with colleagues, attending conferences and negotiating contracts, but not local employment or productive work. If you need to work, look at H-1B, L-1, O-1 or TN.",
  },
  {
    question: "How long can I stay on a B visa, and can I extend?",
    answer:
      "The I-94 record, not the visa, sets how long you can stay, usually up to 6 months. You can ask USCIS for an extension on Form I-539 before the I-94 expires. Overstaying can cancel your visa and trigger 3-year or 10-year bars.",
  },
  {
    question: "Why do B visas get denied?",
    answer:
      "The most common reason is Section 214(b): the officer isn't convinced you'll return home, because of weak ties, an unclear purpose, or signs you plan to stay or work. Clear purpose, honest answers, consistent documents and strong ties help. A refusal doesn't bar you from reapplying.",
  },
  {
    question: "What changed for B visas in 2026?",
    answer:
      "On August 3, 2026, the State Department made its visa bond program permanent. Applicants from about 50 designated countries may have to post a $10,000, $15,000 or $20,000 bond, refundable if they comply. A $250 visa integrity fee was also authorized. Most applicants must interview in person.",
  },
  {
    question: "Is BAIS a law firm, and do you book appointments?",
    answer:
      "No to both. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191). We prepare documents and interview preparation, and we don't provide legal advice, guarantee visas, or sell appointment slots. Appointments are booked only through the State Department's system.",
  },
];

export function B1b2Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="B-1/B-2 Visa FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={b1b2Faqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
