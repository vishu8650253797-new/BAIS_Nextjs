import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const j1Faqs = [
  {
    question: "What is a J-1 visa?",
    answer:
      "A U.S. nonimmigrant visa for Department of State–approved exchange programs, covering students, interns, trainees, professors, research scholars, teachers and others. A designated sponsor issues Form DS-2019, and spouses and children may come on J-2.",
  },
  {
    question: "Who issues the DS-2019?",
    answer:
      "Only a Department of State–designated J-1 sponsor, such as a university or exchange organization. BAIS is not a sponsor. We prepare documents, training plans, waivers and family applications around the program.",
  },
  {
    question: "What is the difference between a J-1 intern and trainee?",
    answer:
      "Interns are current students or recent graduates (within 12 months) of a foreign post-secondary institution, for up to 12 months. Trainees need a foreign degree plus one year of experience abroad, or five years of experience, for up to 18 months.",
  },
  {
    question: "How long can a J-1 research scholar stay?",
    answer:
      "Professors and research scholars can stay up to five years; short-term scholars up to six months. Professors and research scholars face a 24-month repeat bar, and a 12-month bar if they held J status recently, with exceptions.",
  },
  {
    question: "What changed for J-1 visas in 2026?",
    answer:
      "From September 15, 2026, J-1 visitors are admitted until their program end date, up to four years, instead of \"duration of status.\" There's a 30-day grace period, and staying longer requires an extension application with USCIS.",
  },
  {
    question: "Can my J-2 spouse work?",
    answer:
      "Yes. A J-2 spouse or child can apply to USCIS for work authorization on Form I-765, as long as the income isn't needed to support the J-1. They can work once the permit is approved.",
  },
  {
    question: "What is the two-year home residency requirement?",
    answer:
      "Under INA 212(e), some J-1 visitors must live in their home country for two years before getting H-1B, L, K or green card status. It applies if their program was government-funded, their skills are on the Skills List, or they came for medical training.",
  },
  {
    question: "Is India still on the Exchange Visitor Skills List?",
    answer:
      "No. The December 2024 Skills List removed India, China, Brazil, South Korea and more than 30 other countries, retroactively. Government funding or medical training can still make a visitor subject to 212(e).",
  },
  {
    question: "How do I get a J-1 waiver?",
    answer:
      "File the online DS-3035 with the State Department fee, then submit evidence for your basis: a no-objection statement, an interested government agency, Conrad 30, persecution or hardship. The State Department recommends, and USCIS decides. Waivers are discretionary.",
  },
  {
    question: "Can I switch from J-1 to H-1B?",
    answer:
      "Yes, if you're not subject to 212(e) or have a waiver. Universities and research institutions can often file cap-exempt H-1B petitions. If you are subject, you generally must satisfy the two-year rule or get a waiver first.",
  },
  {
    question: "Can I get a green card after a J-1?",
    answer:
      "Yes, if you're not subject to 212(e) or have obtained a waiver. Researchers often qualify for EB-1A, EB-1B or EB-2 NIW.",
  },
  {
    question: "What is the J-1 grace period?",
    answer:
      "After your program ends, you have a 30-day grace period to prepare to leave or change status. You can't work during the grace period.",
  },
  {
    question: "How much does a J-1 visa cost?",
    answer:
      "The SEVIS I-901 fee (generally $220; $35 for some categories), the visa application fee and any other consular fees, plus sponsor program fees and required insurance. Your first BAIS consultation is free.",
  },
  {
    question: "Is BAIS a law firm or a J-1 sponsor?",
    answer:
      "Neither. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares immigration documentation. We are not a designated J-1 sponsor, don't issue DS-2019 forms, and are not affiliated with the State Department or USCIS.",
  },
];

export function J1Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="J-1 Visa FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={j1Faqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
