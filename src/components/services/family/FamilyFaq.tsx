import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const familyFaqs = [
  {
    question: "Who can sponsor a family member for a green card?",
    answer:
      "U.S. citizens and green card holders. Citizens can sponsor spouses, children, parents and siblings (parents and siblings require the citizen to be 21 or older). Green card holders can sponsor spouses and unmarried children only.",
  },
  {
    question: "What is the difference between immediate relatives and preference categories?",
    answer:
      "Immediate relatives (spouses, unmarried children under 21 and parents of U.S. citizens) have no visa wait. Other relatives are in preference categories F1–F4 and wait for their priority date to become current.",
  },
  {
    question: "What is Form I-130?",
    answer:
      "The Petition for Alien Relative. The sponsor files it with USCIS to prove the family relationship. It's the first step for most family green cards.",
  },
  {
    question: "How much is the I-130 fee?",
    answer:
      "$625 online or $675 on paper in 2026. Other fees depend on whether your relative finishes abroad (NVC fees and a consular interview) or inside the U.S. (the I-485 and related forms).",
  },
  {
    question: "How long does a family green card take?",
    answer:
      "It varies. Recent USCIS medians for an I-130 filed by a U.S. citizen have been around a year or more, and much longer for green card holders. Preference categories also wait for a visa number, from months to many years.",
  },
  {
    question: "Can a green card holder sponsor parents or siblings?",
    answer:
      "No. Only U.S. citizens can sponsor parents and siblings. Many green card holders become citizens first so they can sponsor them.",
  },
  {
    question: "What is a priority date?",
    answer:
      "The date your I-130 was filed. It's your place in line for preference categories. Your category moves forward when the Visa Bulletin's date passes yours.",
  },
  {
    question: "Consular processing or adjustment of status: what's the difference?",
    answer:
      "Consular processing means finishing at a U.S. embassy or consulate abroad. Adjustment of status means applying for the green card inside the U.S. You may be eligible for one or the other, depending on your relative's status and category.",
  },
  {
    question: "Why was my relative's immigrant visa interview canceled?",
    answer:
      "On August 25, 2026, the State Department paused immigrant visa interviews worldwide for officer training on public charge screening, and hasn't announced a restart date. Check your embassy's page for updates.",
  },
  {
    question: "What is the I-864 income requirement?",
    answer:
      "The sponsor generally needs household income of at least 125% of the federal poverty guidelines. A joint sponsor can help if income is too low. Check the current I-864P table.",
  },
  {
    question: "Did public charge rules change in 2026?",
    answer:
      "Yes. A new USCIS framework applies to green card applications filed on or after September 18, 2026. Consular officers are also applying expanded public charge screening.",
  },
  {
    question: "Can my spouse work while the green card is pending?",
    answer:
      "If your spouse is in the U.S. and files the I-485, they can apply for a work permit (I-765) at the same time. They can work once it's approved.",
  },
  {
    question: "What if my child turns 21 while we wait?",
    answer:
      "The Child Status Protection Act can protect some children from \"aging out,\" depending on the category and dates. Planning early helps.",
  },
  {
    question: "What is a conditional green card?",
    answer:
      "If you were married less than 2 years when approved, your green card lasts 2 years. You file Form I-751 in the 90 days before it expires to make it permanent.",
  },
  {
    question: "Can a spouse of an H-1B worker work?",
    answer:
      "Only with an H-4 work permit, which is available in certain cases, such as an approved I-140. L-2 spouses can work, and J-2 spouses can apply for a work permit.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares family immigration documents and evidence. We don't provide legal advice or representation, and we aren't affiliated with USCIS or the State Department. For legal advice, consult a licensed legal professional.",
  },
];

export function FamilyFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="Family-Based Immigration FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={familyFaqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
