import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const h1bFaqs = [
  {
    question: "What is the H-1B visa?",
    answer:
      "The H-1B is a U.S. nonimmigrant work visa for specialty occupations, meaning jobs that require at least a bachelor's degree or equivalent. The employer sponsors the worker by filing an LCA and Form I-129. It lasts up to three years, is extendable to six, and allows the holder to pursue a green card.",
  },
  {
    question: "How does the new weighted H-1B lottery work?",
    answer:
      "Since the FY 2027 season, when registrations exceed the cap, USCIS gives each registration entries based on the OEWS wage level of the offered salary. Level IV positions receive the most entries and Level I the fewest. Each person still counts only once toward the cap, and petitions must document the wage level claimed.",
  },
  {
    question: "When is the next H-1B registration?",
    answer:
      "The FY 2028 registration period is expected in March 2027. Selected employers can then file petitions from April 1, 2027, for jobs starting on or after October 1, 2027. Preparation of the wage level, job description and degree evaluation should begin by early 2027.",
  },
  {
    question: "Does the $100,000 H-1B fee apply to me?",
    answer:
      "As of September 30, 2026, the fee is not being collected because a federal court vacated it, even though a new proclamation extended it through September 2027. It was designed only for certain new petitions for workers outside the U.S. It never applied to extensions, amendments or in-U.S. changes of status such as F-1 to H-1B.",
  },
  {
    question: "How long can I stay in the U.S. on an H-1B?",
    answer:
      "The first approval is typically up to three years, with an extension to a six-year maximum. You can extend beyond six years if a PERM or I-140 was filed early enough, or if your I-140 is approved but a green card number isn't yet available.",
  },
  {
    question: "Can I change employers on an H-1B?",
    answer:
      "Yes. Your new employer files a new H-1B petition (a transfer). Under H-1B portability, you can generally start working for the new employer as soon as USCIS receives the petition. Transfers are not subject to the lottery if you were already counted under the cap.",
  },
  {
    question: "What is a cap-exempt H-1B?",
    answer:
      "Universities, their affiliated nonprofits, and nonprofit or government research organizations can file H-1B petitions at any time without registration or the lottery. Workers counted under the cap in the past six years may also be cap-exempt when changing employers.",
  },
  {
    question: "Do I need an H-1B amendment if I work remotely or move?",
    answer:
      "Usually, yes. If your worksite moves outside the area covered by your current LCA, your employer typically needs a new LCA and an amended H-1B petition before the change. Moves within the same metropolitan area may only need a new LCA posting.",
  },
  {
    question: "What are common reasons for an H-1B RFE?",
    answer:
      "The most frequent RFEs question whether the role is a specialty occupation, whether the degree matches the job, the wage level claimed, and the employer-employee relationship. A complete petition with a detailed job description and credential evaluation reduces RFE risk.",
  },
  {
    question: "Can my family come with me on an H-1B?",
    answer:
      "Yes. Your spouse and unmarried children under 21 can join you on H-4 status. Spouses may qualify for an H-4 EAD work permit once your I-140 is approved or you've been granted an extension beyond six years under AC21.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. Bay Area Immigration Services is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares H-1B and other immigration documentation. We do not provide legal advice or legal representation, and we are not affiliated with USCIS.",
  },
  {
    question: "How much does the H-1B process cost?",
    answer:
      "Costs include USCIS government fees, which depend on employer size and premium processing, plus document preparation fees. Your first consultation with BAIS is free, and we give you a clear written quote before any work begins.",
  },
];

export function H1bFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="H-1B Visa FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={h1bFaqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
