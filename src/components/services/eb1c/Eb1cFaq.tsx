import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const eb1cFaqs = [
  {
    question: "What is the EB-1C green card?",
    answer:
      "EB-1C is a first-preference employment green card for multinational managers and executives. A U.S. employer sponsors a manager or executive who worked for its related foreign company for one year in the past three years. No PERM labor certification is required, and spouses and children under 21 are included.",
  },
  {
    question: "Does EB-1C require PERM labor certification?",
    answer:
      "No. EB-1C is exempt from PERM, the Department of Labor process most employer green cards must complete first. The employer files Form I-140 directly with USCIS, which removes one of the longest steps in the process.",
  },
  {
    question: "Can I get a green card through my L-1A visa?",
    answer:
      "Yes. Most L-1A managers and executives follow the EB-1C route. If you opened a new U.S. office, the U.S. company generally must have been doing business for at least one year before the EB-1C petition is filed.",
  },
  {
    question: "Can a business owner get an EB-1C green card?",
    answer:
      "Yes, if the U.S. company sponsors the owner, the ownership link is documented, and the role is truly executive or managerial, with staff handling daily operations. USCIS closely reviews owner-beneficiary cases, so strong organizational evidence matters.",
  },
  {
    question: "How long is the EB-1C wait for India?",
    answer:
      "In the October 2026 Visa Bulletin, the EB-1 final action date for India is February 1, 2023, and the filing date is July 1, 2024. Your place in line is set by your I-140 filing date. EB-1 is still roughly a decade ahead of EB-2 India.",
  },
  {
    question: "Is EB-1C current for Canada, Mexico and Brazil?",
    answer:
      "Yes. As of the October 2026 Visa Bulletin, EB-1 is current for every country except China and India, including Canada, Mexico, Brazil and the rest of Latin America. Dates can change monthly, so check the latest bulletin.",
  },
  {
    question: "Does my country of birth or citizenship decide the wait?",
    answer:
      "Country of birth. A person born in India is charged to India even if they hold another citizenship. If your spouse was born in a different country, you may be able to use your spouse's country instead (cross-chargeability).",
  },
  {
    question: "How long does EB-1C processing take?",
    answer:
      "With premium processing, USCIS acts on an EB-1C I-140 within 45 business days. Without it, times vary by service center. The green card stage adds several months, depending on USCIS or consular workload and your country's Visa Bulletin date.",
  },
  {
    question: "How long must the U.S. company be operating?",
    answer:
      "Generally at least one year of doing business before filing, meaning regular, continuous trade or services, not just an office or agent. Payroll, contracts, invoices and tax filings help prove it.",
  },
  {
    question: "Can my family get green cards too?",
    answer:
      "Yes. Your spouse and unmarried children under 21 receive green cards as derivatives. In the U.S., they can apply for work permits and travel permission while the case is pending. Children close to 21 may be protected by the Child Status Protection Act.",
  },
  {
    question: "Can I apply for EB-1C from outside the U.S.?",
    answer:
      "Yes. EB-1C doesn't require L-1 status. If the company's U.S. affiliate has been doing business for a year or more, it can sponsor a manager working abroad, who completes the process at a U.S. consulate.",
  },
  {
    question: "What's the difference between EB-1C and EB-1A?",
    answer:
      "EB-1C is employer-sponsored and based on your managerial role in a multinational company. EB-1A is a self-petition based on extraordinary ability, shown through awards, publications or high salary. Both are first preference and skip PERM.",
  },
  {
    question: "How much does EB-1C cost?",
    answer:
      "Costs include USCIS fees for the I-140 and the green card stage, optional premium processing ($2,965), medical exams, and document preparation fees. Government fees are set by USCIS and the Department of State and may change. Your first consultation with BAIS is free.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. Bay Area Immigration Services is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares EB-1C and other immigration documentation. We do not provide legal advice or representation, and we are not affiliated with USCIS or the Department of State.",
  },
];

export function Eb1cFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="EB-1C Green Card FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={eb1cFaqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
