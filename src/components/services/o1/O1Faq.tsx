import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const o1Faqs = [
  {
    question: "What is the difference between O-1A and O-1B?",
    answer:
      "O-1A is for extraordinary ability in the sciences, education, business or athletics, and needs 3 of 8 criteria. O-1B is for the arts and the motion picture and television industry, and needs 3 of 6 criteria. Arts use a \"distinction\" standard; film and TV use the higher \"extraordinary achievement\" standard.",
  },
  {
    question: "How many criteria do I need for an O-1?",
    answer:
      "O-1A needs a major international award or at least three of eight criteria. O-1B needs a significant award or nomination, or three of six criteria. Meeting three is the first step. USCIS then reviews all evidence together to confirm sustained acclaim.",
  },
  {
    question: "Can I get an O-1 visa without an employer?",
    answer:
      "You can't self-petition, but you don't need a traditional employer. A U.S. agent can petition for freelancers or people with multiple clients, and founders can often be sponsored by their own U.S. company if there's a genuine employer-employee arrangement.",
  },
  {
    question: "How long does the O-1 process take?",
    answer:
      "Preparing evidence, letters and the advisory opinion usually takes four to six weeks. With premium processing, USCIS acts within 15 business days, not counting RFEs. Regular processing varies. Consular appointments add time if you're abroad.",
  },
  {
    question: "How long is an O-1 visa valid?",
    answer:
      "USCIS approves O-1 status for the time needed for your work or events, up to three years initially. Extensions are granted in one-year increments to continue the same work, with no lifetime maximum.",
  },
  {
    question: "Can my spouse work on an O-3 visa?",
    answer:
      "No. O-3 spouses and children can live and study in the U.S. but cannot work. A spouse who wants to work needs their own work authorization, for example their own H-1B, L-1 or O-1 petition.",
  },
  {
    question: "What is an O-1 advisory opinion?",
    answer:
      "It's a written consultation from a peer group, labor union or management organization in your field, confirming your work and qualifications. Most O-1 petitions require one. Film and TV O-1B cases need opinions from both a union and a management organization.",
  },
  {
    question: "What is an O-2 visa?",
    answer:
      "O-2 is for essential support personnel accompanying an O-1A athlete or O-1B artist or entertainer, with critical skills and experience. It isn't available for O-1A in science, education or business. O-2 holders must keep a foreign residence.",
  },
  {
    question: "Does the $100,000 H-1B fee apply to O-1?",
    answer:
      "No. The $100,000 proclamation fee and the proposed $103,265 cap-subject fee apply only to H-1B petitions. O-1 petitions pay the standard Form I-129 fees, plus optional premium processing ($2,965).",
  },
  {
    question: "Can I switch from H-1B or F-1 to O-1?",
    answer:
      "Yes. If you're in the U.S. in valid status, your petitioner can request a change of status to O-1 on Form I-129. Many H-1B workers and F-1/OPT graduates with strong records switch to O-1 to avoid the lottery or H-1B limits.",
  },
  {
    question: "Can I get a green card while on O-1?",
    answer:
      "Yes. O-1 has no foreign-residence requirement, so you can generally pursue a green card. Common routes are EB-1A, which builds on the same type of evidence, and EB-2 NIW. Spouses and children under 21 are included.",
  },
  {
    question: "Can I work for more than one employer on O-1?",
    answer:
      "Yes, through a U.S. agent petition covering multiple employers with an itinerary, or separate petitions from each employer. Work is limited to the employers and activities in your approved petition.",
  },
  {
    question: "How much does an O-1 cost?",
    answer:
      "USCIS filing fees, optional premium processing ($2,965), advisory opinion fees if charged, consular fees if abroad, and document preparation fees. Government fees may change. Your first consultation with BAIS is free, with a written quote before work begins.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. Bay Area Immigration Services is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares O-1 and other immigration documentation. We do not provide legal advice or representation, and we are not affiliated with USCIS or the Department of State.",
  },
];

export function O1Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="O-1 Visa FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={o1Faqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
