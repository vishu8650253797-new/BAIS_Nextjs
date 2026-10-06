import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const eb1aFaqs = [
  {
    question: "What are the 10 EB-1A criteria?",
    answer:
      "Awards; memberships requiring outstanding achievement; published material about you; judging others' work; original contributions of major significance; scholarly articles; exhibitions; a leading or critical role; high salary; and commercial success in the performing arts. You need three, or a one-time major international award.",
  },
  {
    question: "Can I self-petition for EB-1A?",
    answer:
      "Yes. You can file Form I-140 for yourself without an employer, job offer or PERM. You must show you'll continue working in your field in the U.S., through contracts, offer letters or a detailed plan.",
  },
  {
    question: "Do I need a major award for EB-1A?",
    answer:
      "No. A one-time major international award qualifies alone, but most approved applicants meet three or more of the ten criteria instead, often judging, original contributions, scholarly articles and a critical role.",
  },
  {
    question: "What is the EB-1A final merits review?",
    answer:
      "After you meet three criteria, USCIS weighs all evidence together to decide whether you're among the small percentage at the very top of your field with sustained acclaim. Most denials happen at this second step.",
  },
  {
    question: "How long does EB-1A take?",
    answer:
      "Evidence and letters usually take six to eight weeks. With premium processing, USCIS acts on the I-140 within 15 business days. The green card stage depends on your country's Visa Bulletin date and processing times.",
  },
  {
    question: "How long is the EB-1A wait for India?",
    answer:
      "In the October 2026 Visa Bulletin, the EB-1 final action date for India is February 1, 2023 (filing date July 1, 2024). That's far ahead of EB-2 India, which is at November 1, 2013.",
  },
  {
    question: "Can software engineers qualify for EB-1A?",
    answer:
      "Yes, with strong evidence: a critical role at a distinguished company, high salary, original contributions such as adopted systems or patents, and judging. Pay and titles alone aren't enough. Impact must be documented.",
  },
  {
    question: "Should I file EB-1A or EB-2 NIW?",
    answer:
      "EB-1A has a higher bar but faster visa availability and 15-day premium processing. NIW has a lower bar but a longer wait and 45-day premium processing. Many professionals file both, then use the earliest approved priority date.",
  },
  {
    question: "Can I go from O-1 to EB-1A?",
    answer:
      "Yes. O-1 and EB-1A rely on similar evidence, and O-1 has no foreign-residence requirement, so you can generally pursue EB-1A while on O-1.",
  },
  {
    question: "Can my family get green cards too?",
    answer:
      "Yes. Your spouse and unmarried children under 21 receive green cards as derivatives and can apply for work permits and advance parole while an I-485 is pending.",
  },
  {
    question: "Do I need expert opinion letters for EB-1A?",
    answer:
      "USCIS doesn't require a specific number, but expert letters are one of the main ways to explain the significance of your work to an officer outside your field. Independent experts generally carry the most weight. BAIS provides access to 350+ professors and industry experts.",
  },
  {
    question: "Expert opinion letter vs recommendation letter: what's the difference?",
    answer:
      "A recommendation letter usually comes from someone who worked with you. An expert opinion letter comes from an independent, recognized expert who evaluates your record against the field. Strong petitions use both, with independent letters carrying more weight.",
  },
  {
    question: "How many recommendation letters do I need?",
    answer:
      "There's no fixed number, but strong petitions typically include five to eight letters, mixing independent experts and close collaborators. Letters should describe specific impact, not general praise.",
  },
  {
    question: "How much does EB-1A cost?",
    answer:
      "The USCIS I-140 fee and Asylum Program Fee, optional premium processing ($2,965), green card stage fees, medical exams and document preparation fees. Government fees may change. Your first consultation with BAIS is free.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares EB-1A and other immigration documentation. We do not provide legal advice or representation, and we are not affiliated with USCIS.",
  },
];

export function Eb1aFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="EB-1A Green Card FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={eb1aFaqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
