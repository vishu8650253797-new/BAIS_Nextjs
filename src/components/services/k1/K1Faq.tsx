import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const k1Faqs = [
  {
    question: "What is a K-1 visa?",
    answer:
      "A fiancé(e) visa that lets a U.S. citizen bring a foreign partner to the U.S. to marry within 90 days of arrival. After the wedding, the foreign spouse applies for a green card from inside the U.S. on Form I-485.",
  },
  {
    question: "Can a green card holder file a K-1?",
    answer:
      "No. Only U.S. citizens can file a K-1 petition. A green card holder must marry first and then file Form I-130 for a spouse, which is a preference category that may have a wait.",
  },
  {
    question: "How long does a K-1 visa take in 2026?",
    answer:
      "It varies. The I-129F commonly takes several months at USCIS, then NVC transfer, documents and the interview add more time. Many couples see the visa within about a year of filing. Check current USCIS and embassy times.",
  },
  {
    question: "How much does a K-1 visa cost?",
    answer:
      "Government fees: $675 for the I-129F and $265 for the visa application, plus the medical exam. After marriage, the I-485 is $1,440, with optional work and travel permits. Fees change, so confirm on the USCIS fee schedule.",
  },
  {
    question: "Do we have to meet in person before applying?",
    answer:
      "Yes. You must generally have met in person within the two years before filing. USCIS may waive this for extreme hardship or strict, long-established cultural or religious customs.",
  },
  {
    question: "What happens if we don't marry within 90 days?",
    answer:
      "K-1 status ends after 90 days and cannot be extended, and the fiancé(e) generally must leave. A K-1 entrant can only get a green card by marrying the U.S. citizen who filed the petition.",
  },
  {
    question: "Is the K-1 or the spouse visa faster?",
    answer:
      "It depends on current USCIS and consular processing and your country. K-1 couples marry in the U.S. but need a second green card step. CR-1/IR-1 is one process with a green card on arrival. We compare both for you.",
  },
  {
    question: "Is the K-3 visa still used?",
    answer:
      "Rarely. If USCIS approves the I-130 first, which is common, the National Visa Center closes the K-3 and processes an immigrant spouse visa instead.",
  },
  {
    question: "Can my fiancé(e)'s children come too?",
    answer:
      "Yes. Unmarried children under 21 can receive K-2 visas if listed on the I-129F. They can travel with the parent or later, and they file their own green card applications after the marriage.",
  },
  {
    question: "What income do I need for a K-1?",
    answer:
      "At the visa stage, Form I-134 shows you can support your fiancé(e). At the green card stage, the I-864 generally requires income of at least 125% of the federal poverty guidelines. A joint sponsor can help.",
  },
  {
    question: "What questions are asked at the K-1 interview?",
    answer:
      "How you met, your relationship history, wedding plans, each other's families and jobs, and future plans. Honest, consistent answers backed by organized evidence matter most. We provide interview preparation.",
  },
  {
    question: "Can the fiancé(e) work after arriving?",
    answer:
      "Yes, after getting a work permit. A K-1 entrant can apply soon after arrival, but most couples request it with the I-485. Don't work until the permit is approved.",
  },
  {
    question: "Can same-sex couples use the K-1 visa?",
    answer:
      "Yes. Same-sex couples are eligible for K-1 and spouse visas on the same terms as opposite-sex couples, as long as all other requirements are met.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares K-1, K-3 and family-based immigration documentation. We do not provide legal advice or representation, and we are not affiliated with USCIS or the Department of State.",
  },
];

export function K1Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="K-1 Fiancé(e) Visa FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={k1Faqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
