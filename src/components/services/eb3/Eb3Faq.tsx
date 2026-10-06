import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const eb3Faqs = [
  {
    question: "What is the EB-3 visa?",
    answer:
      "An employer-sponsored green card for skilled workers (2+ years of experience), professionals (bachelor's degree) and other workers. Most cases need PERM, then an I-140, then the green card application.",
  },
  {
    question: "What is PERM labor certification?",
    answer:
      "The Department of Labor process where an employer proves no qualified U.S. workers are available at the prevailing wage. It includes a wage determination, recruitment and Form ETA-9089.",
  },
  {
    question: "How long does PERM take in 2026?",
    answer:
      "Prevailing wage takes ~3–4 months, recruitment and the quiet period ~2–3 months, and DOL review averaged 336 days for August 2026 decisions. Roughly 18–24 months in total without an audit.",
  },
  {
    question: "Who pays for PERM?",
    answer:
      "The employer. DOL rules require the employer to pay for PERM recruitment and preparation of the labor certification; those costs can't be passed to the employee.",
  },
  {
    question: "What recruitment does PERM require?",
    answer:
      "For all jobs: a 30-day state job order, two Sunday newspaper ads and a 10-business-day Notice of Filing. Professional jobs also need three additional recruitment steps.",
  },
  {
    question: "Is there premium processing for PERM?",
    answer:
      "No. DOL doesn't offer it. The I-140 can be premium processed: USCIS acts within 15 business days for an extra fee.",
  },
  {
    question: "What is a priority date?",
    answer:
      "Your place in the green card line. For PERM cases, it's the date DOL received the ETA-9089. You can file for the green card when it's current in the Visa Bulletin.",
  },
  {
    question: "How long is the EB-3 wait for India?",
    answer:
      "In the October 2026 Visa Bulletin, EB-3 India's final action date is January 1, 2014, and its filing date is January 15, 2015. Most other countries are at May 15, 2024.",
  },
  {
    question: "Should I file EB-2 or EB-3?",
    answer:
      "It depends on the job and current dates. In October 2026, EB-2 is ahead for most countries, while EB-3 India is slightly ahead of EB-2 India. Some workers file in both using the same PERM.",
  },
  {
    question: "Can I change jobs during the EB-3 process?",
    answer:
      "Before I-140 approval, a new employer usually starts over. After an I-140 has been approved for 180 days, you generally keep the priority date. With an I-485 pending 180 days, you can often move to a same or similar job.",
  },
  {
    question: "Can I stay on H-1B past 6 years?",
    answer:
      "Yes, if PERM or an I-140 was filed 365+ days before your 6-year limit (1-year extensions), or with an approved I-140 and a backlogged date (3-year extensions).",
  },
  {
    question: "What is a PERM audit?",
    answer:
      "DOL may ask for the full recruitment file to verify compliance. Audits add months. A complete, organized file is the best protection.",
  },
  {
    question: "Do nurses need PERM?",
    answer:
      "No. Registered nurses and physical therapists are Schedule A. The employer files the I-140 directly with an uncertified ETA-9089, without DOL recruitment.",
  },
  {
    question: "Can my family get green cards too?",
    answer:
      "Yes. Your spouse and unmarried children under 21 receive green cards as derivatives and can get work and travel permits while the I-485 is pending.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares PERM and EB-3 documentation. We don't provide legal advice and aren't affiliated with DOL or USCIS.",
  },
];

export function Eb3Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="EB-3 &amp; PERM FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={eb3Faqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
