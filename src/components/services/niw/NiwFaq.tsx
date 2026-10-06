import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const niwFaqs = [
  {
    question: "What is the EB-2 National Interest Waiver?",
    answer:
      "A green card for professionals with an advanced degree or exceptional ability whose proposed work benefits the U.S. It waives the job offer and PERM, so you can self-petition. USCIS evaluates it under the three-prong Dhanasar framework.",
  },
  {
    question: "What are the three Dhanasar prongs?",
    answer:
      "First, your proposed endeavor has substantial merit and national importance. Second, you are well positioned to advance it. Third, on balance, waiving the job offer and labor certification benefits the U.S. You must meet all three, after qualifying for EB-2.",
  },
  {
    question: "Do I need a job offer for EB-2 NIW?",
    answer:
      "No. The waiver removes the job-offer and PERM requirements, so you file Form I-140 yourself. You still show how you'll pursue your endeavor in the U.S., through employment, research, a business plan or similar evidence.",
  },
  {
    question: "Who qualifies for EB-2?",
    answer:
      "People with a U.S. master's degree or higher (or equivalent), a bachelor's plus five years of progressive experience, or exceptional ability shown by at least three of six criteria, such as ten years of experience, licenses, high salary or recognition.",
  },
  {
    question: "What is the NIW approval rate in 2026?",
    answer:
      "USCIS data shows NIW approval rates of 42.6% in Q1, 48.1% in Q2 and 55.3% in Q3 of fiscal year 2026, across all filers. These are averages, not individual odds. A specific endeavor and strong evidence make the biggest difference.",
  },
  {
    question: "How long does EB-2 NIW take?",
    answer:
      "Preparing the endeavor and letters usually takes six to eight weeks. With premium processing, USCIS acts on the I-140 within 45 business days. The green card stage depends on the Visa Bulletin, which for most countries is January 1, 2025 as of October 2026.",
  },
  {
    question: "How long is the NIW wait for India?",
    answer:
      "In the October 2026 Visa Bulletin, EB-2 India is at November 1, 2013 (filing date January 15, 2015), which is a very long wait. Indian professionals with strong records often also file EB-1A, which is at February 1, 2023.",
  },
  {
    question: "Can software engineers qualify for NIW?",
    answer:
      "Yes, if the endeavor is specific and nationally important, for example in cybersecurity, healthcare AI or critical infrastructure, and your record shows you're well positioned to advance it. A general software job alone is usually not enough.",
  },
  {
    question: "Can entrepreneurs file EB-2 NIW?",
    answer:
      "Yes. Founders can self-petition if their U.S. venture is nationally important and they're well positioned to advance it. Funding, revenue, customers, jobs created, expert letters and a credible business plan help.",
  },
  {
    question: "Can I file EB-2 NIW and EB-1A at the same time?",
    answer:
      "Yes. Many professionals file both. If both are approved, you can generally use the category and priority date that leads to a green card fastest. NIW has a lower bar; EB-1A has faster visa availability for most countries.",
  },
  {
    question: "Can my family get green cards too?",
    answer:
      "Yes. Your spouse and unmarried children under 21 receive green cards as derivatives and can apply for work permits and advance parole once an I-485 is filed. The Child Status Protection Act may protect children nearing 21.",
  },
  {
    question: "What happens if I get an RFE?",
    answer:
      "You get a set time to respond, usually 87 days. The most common NIW RFEs question national importance or the \"well positioned\" prong. A focused response with specific new evidence often resolves them.",
  },
  {
    question: "How much does EB-2 NIW cost?",
    answer:
      "The USCIS I-140 fee and Asylum Program Fee, optional premium processing ($2,965), green card stage fees, medical exams and document preparation fees. Government fees may change. Your first consultation with BAIS is free.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares EB-2 NIW and other immigration documentation. We do not provide legal advice or representation, and we are not affiliated with USCIS.",
  },
];

export function NiwFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="EB-2 NIW FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={niwFaqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
