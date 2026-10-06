import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const cosFaqs = [
  {
    question: "What is a change of status?",
    answer:
      "A change of status lets someone in the U.S. in one nonimmigrant category switch to another, such as B-2 to F-1 or F-1 to H-1B, without leaving the country. Most people file Form I-539; work categories are requested by an employer on Form I-129.",
  },
  {
    question: "Is change of status the same as adjustment of status?",
    answer:
      "No. A change of status moves you between temporary (nonimmigrant) categories. Adjustment of status, on Form I-485, is how eligible people in the U.S. apply for a green card.",
  },
  {
    question: "Who cannot change status in the U.S.?",
    answer:
      "Generally: Visa Waiver Program (ESTA) visitors, K-1/K-2 entrants, C transit and D crew members, J-1/J-2 holders subject to 212(e) without a waiver, and some M-1 students. Anyone whose status has expired or been violated also usually can't.",
  },
  {
    question: "Can I change from B-2 to F-1?",
    answer:
      "Yes, if you were lawfully admitted, stay in status, and have an I-20 and funding. You can't start classes until USCIS approves. Clear evidence that you decided to study after entering is essential.",
  },
  {
    question: "What is the 90-day rule?",
    answer:
      "The State Department presumes misrepresentation at consulates if someone acts inconsistently with their visa within 90 days of entry. USCIS isn't bound by that rule but reviews intent closely, so honest timeline evidence matters.",
  },
  {
    question: "Can I travel while my change of status is pending?",
    answer:
      "Generally no. Leaving the U.S. while a change of status is pending usually abandons it. If you must travel, plan to apply for the new visa at a consulate abroad instead.",
  },
  {
    question: "Can I start working or studying once I file?",
    answer:
      "No. Filing doesn't authorize the new activity. Keep following your current status until approval, unless a specific rule allows otherwise, such as cap-gap for certain F-1 students.",
  },
  {
    question: "What can I do within 60 days after an H-1B layoff?",
    answer:
      "Options within the grace period of up to 60 days include a new H-1B transfer, a change to B-2, H-4 or another status, an O-1 or other petition, or departing. Act quickly. A proposed rule would eliminate this grace period if finalized.",
  },
  {
    question: "How much is Form I-539 in 2026?",
    answer:
      "The I-539 fee is $470 by mail or $420 online. I-129 fees for employer-filed changes vary by category and employer size. Check the USCIS fee schedule before filing.",
  },
  {
    question: "How long does a change of status take?",
    answer:
      "It varies widely by form and service center, from weeks with premium processing for eligible cases to many months for regular I-539 filings. Check current USCIS processing times.",
  },
  {
    question: "What happens if my change of status is denied?",
    answer:
      "You generally need to leave promptly if you're out of status. Options may include applying for the visa at a consulate, or a motion to reopen or reconsider if USCIS made an error.",
  },
  {
    question: "Can my family change status with me?",
    answer:
      "Yes. Dependents usually file Form I-539 with or after the principal's application or petition, for example H-4 with an H-1B change or F-2 with an F-1 change.",
  },
  {
    question: "Did the duration-of-status rule take effect?",
    answer:
      "No. A federal court postponed it nationwide on September 14, 2026, so F, J and I nonimmigrants are still admitted for duration of status. The government has appealed.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares change-of-status and other immigration documentation. We do not provide legal advice or representation, and we are not affiliated with USCIS.",
  },
];

export function CosFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="Change of Status FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={cosFaqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
