import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const i130Faqs = [
  {
    question: "What is Form I-130?",
    answer:
      "Form I-130, the Petition for Alien Relative, is what a U.S. citizen or green card holder files with USCIS to prove a qualifying family relationship with a relative who wants a green card. It's step one only: approval doesn't give a green card by itself. Your filing date becomes your priority date.",
  },
  {
    question: "Who can file an I-130, and for whom?",
    answer:
      "U.S. citizens can file for spouses, children, parents and siblings (parents and siblings require the citizen to be 21 or older). Green card holders can file for spouses and unmarried children only. Fiancé(e)s use a different form, the I-129F.",
  },
  {
    question: "How much does the I-130 cost in 2026?",
    answer:
      "The USCIS filing fee is $625 online or $675 on paper. A spouse's information form (I-130A) is filed with it. Later steps have their own fees, such as the NVC fees or the I-485. Fees change, so confirm on the USCIS fee schedule before filing.",
  },
  {
    question: "How long does an I-130 take?",
    answer:
      "It varies by relationship and office. USCIS's national median for immediate-relative petitions was about 12.9 months in fiscal year 2026, but its published \"80% of cases\" figures are much longer and differ by office. Green card holders' petitions generally take longer. Check USCIS Case Processing Times.",
  },
  {
    question: "What proof do I need for a spouse?",
    answer:
      "The marriage certificate, proof that all prior marriages ended, proof of your status, passport photos, Form I-130A, and evidence the marriage is genuine, such as joint lease, accounts, insurance, photos over time and messages. Names and dates should match across every document.",
  },
  {
    question: "What happens after the I-130 is approved?",
    answer:
      "If your relative is abroad, the case goes to the National Visa Center for consular processing. If they're in the U.S. and eligible, they file the I-485 for the green card, sometimes together with the I-130. Preference categories also wait for their priority date.",
  },
  {
    question: "Why do I-130s get an RFE or denial?",
    answer:
      "Common reasons: missing proof that prior marriages ended, inconsistent names or dates, uncertified translations, weak proof of a genuine relationship, or proof of the petitioner's status. Since August 2026, USCIS can also deny without an RFE, so file complete evidence the first time.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares I-130 forms and evidence. We don't provide legal advice or representation, and we aren't affiliated with USCIS. For legal advice, consult a licensed legal professional.",
  },
];

export function I130Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="Form I-130 FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={i130Faqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
