import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const eb1bFaqs = [
  {
    question: "What is the EB-1B green card?",
    answer:
      "The EB-1B is a first-preference green card for outstanding professors and researchers. You need international recognition in your academic field, at least 3 years of teaching or research experience, and a permanent job offer. Your employer files Form I-140, and no PERM labor certification is required.",
  },
  {
    question: "Can I self-petition for EB-1B?",
    answer:
      "No. EB-1B requires a U.S. employer to file the I-140 and offer you a qualifying permanent position. If you don't have a sponsoring employer, look at EB-1A (which allows self-petition) or the EB-2 National Interest Waiver.",
  },
  {
    question: "What are the EB-1B requirements?",
    answer:
      "You must show international recognition as outstanding, evidenced under at least 2 of 6 criteria; at least 3 years of teaching or research in the field; and a permanent offer: tenured or tenure-track, a permanent research position, or a comparable research role at a private employer with 3+ full-time researchers.",
  },
  {
    question: "Can a private company sponsor an EB-1B?",
    answer:
      "Yes, for a permanent research position, if the employer has at least three full-time researchers and documented accomplishments in the field. Universities and research institutions can sponsor tenured, tenure-track or permanent research positions.",
  },
  {
    question: "What counts as 3 years of experience?",
    answer:
      "Teaching or research experience in the academic field. Experience gained while earning a doctorate can count if you already hold the degree, had full responsibility for the class you taught, or your research was recognized as outstanding in the field.",
  },
  {
    question: "How long does EB-1B take?",
    answer:
      "The I-140 is decided in about 15 business days with premium processing ($2,965), or months without it. After that, the green card step depends on your country's date. In October 2026 EB-1 is current for most countries, but backlogged for India and China.",
  },
  {
    question: "What's the difference between EB-1B and EB-1A?",
    answer:
      "EB-1B needs an employer sponsor and a permanent offer, and is limited to professors and researchers with 3+ years of experience. EB-1A allows self-petition for people with extraordinary ability in any field, but its evidence standard is higher.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares EB-1B documents and evidence. We don't provide legal advice or representation. For legal advice, consult a licensed legal professional.",
  },
];

export function Eb1bFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="EB-1B Green Card FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={eb1bFaqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
