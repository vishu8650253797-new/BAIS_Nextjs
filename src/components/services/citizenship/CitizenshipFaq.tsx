import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const citizenshipFaqs = [
  {
    question: "How long do I need a green card before applying for citizenship?",
    answer:
      "Usually 5 years. If you're married to and living with a U.S. citizen, it's 3 years, as long as your spouse has been a citizen that whole time. You can file up to 90 days early.",
  },
  {
    question: "What form do I use to become a U.S. citizen?",
    answer:
      "Form N-400, the Application for Naturalization. Children who became citizens through a parent use Form N-600 to get a Certificate of Citizenship.",
  },
  {
    question: "How much does the N-400 cost in 2026?",
    answer:
      "The fee is $760 on paper or $710 online. Reduced fees and fee waivers are available for eligible households. Fees change, so we confirm the current amount before you file.",
  },
  {
    question: "How long does citizenship take in the Bay Area?",
    answer:
      "It depends on your USCIS field office (usually San Francisco or San Jose). Many applicants interview several months after filing, and the oath can be the same day or a few weeks later.",
  },
  {
    question: "What's on the 2025 citizenship test?",
    answer:
      "If you filed on or after October 20, 2025, the officer asks up to 20 civics questions from a list of 128, and you need 12 correct. You also take English reading, writing and speaking tests.",
  },
  {
    question: "Can I skip the English test?",
    answer:
      "Yes, if you're 50+ with 20 years as a permanent resident, or 55+ with 15 years. You still take civics, in your language. Some disabilities qualify with Form N-648.",
  },
  {
    question: "Do long trips abroad affect my application?",
    answer:
      "They can. A trip over 6 months may raise questions about continuous residence, and a year or more usually breaks it. We count every trip in your Travel-Days Report.",
  },
  {
    question: "What is \"good moral character\"?",
    answer:
      "An honest, law-abiding record during your residence period. Since 2025, USCIS also looks at positive factors like taxes, work and community involvement. Talk to us first about any arrests or tax issues.",
  },
  {
    question: "Can my children become citizens when I do?",
    answer:
      "Often, yes. Children under 18 with green cards who live with you may automatically become citizens when you naturalize. Get proof with a U.S. passport or Form N-600.",
  },
  {
    question: "What happens at the citizenship interview?",
    answer:
      "An officer reviews your N-400 with you under oath, then gives the English and civics tests. Many applicants get a decision the same day.",
  },
  {
    question: "What if my N-400 is denied?",
    answer:
      "You can usually request a hearing with Form N-336 within 30 days, or reapply once the issue is fixed. We'll review the reason and your best next step.",
  },
  {
    question: "Can I keep my Indian citizenship?",
    answer:
      "No. India doesn't allow dual citizenship. After becoming a U.S. citizen, you renounce Indian citizenship and can apply for an OCI card. BAIS helps with both.",
  },
  {
    question: "Does the U.S. allow dual citizenship?",
    answer:
      "U.S. law doesn't require you to give up another citizenship, but your other country may not allow it. India is one example.",
  },
  {
    question: "Are you USCIS?",
    answer:
      "No. We are a private, registered and bonded company that helps you prepare your application. USCIS is the government agency that decides your case. You can always file directly at uscis.gov.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares citizenship documents. We don't provide legal advice. For criminal records or complex issues, we recommend a licensed attorney.",
  },
];

export function CitizenshipFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="U.S. Citizenship FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={citizenshipFaqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
