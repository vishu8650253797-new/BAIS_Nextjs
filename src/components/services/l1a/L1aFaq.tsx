import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const l1aFaqs = [
  {
    question: "What is the L-1A visa?",
    answer:
      "The L-1A is a U.S. work visa for managers and executives transferring from a foreign company to its related U.S. office, whether a parent, branch, subsidiary or affiliate. The employee must have worked abroad for the company for one continuous year in the past three years. It allows up to seven years in the U.S.",
  },
  {
    question: "Can I get an L-1A visa to open a new U.S. office?",
    answer:
      "Yes. A new office L-1A is for companies starting U.S. operations. You must show a qualifying ownership link, secured physical premises, funding, and a plan for the office to support a managerial or executive role within one year. The first approval is for up to one year.",
  },
  {
    question: "Can a small exporter or family business qualify?",
    answer:
      "Yes. There is no minimum company size. What matters is a real, active foreign business; a qualifying ownership link; one year of qualifying work abroad; and a credible U.S. plan. Existing U.S. customers, orders and invoices strengthen an exporter's case.",
  },
  {
    question: "Does my U.S. company need a physical office?",
    answer:
      "Yes, for a new office L-1A you must show you have secured sufficient physical premises, usually a signed commercial lease. Virtual offices and mailbox addresses are generally not enough. The space should fit your business and hiring plan.",
  },
  {
    question: "What counts as a manager or executive for L-1A?",
    answer:
      "USCIS looks at actual duties, not titles. Executives direct the company and set policy. Managers supervise other managers or professionals, or manage an essential function. A clear duty breakdown, org charts and evidence that others handle routine work are key.",
  },
  {
    question: "What does USCIS need at the one-year new office extension?",
    answer:
      "Proof the U.S. office is operating and growing: payroll records showing staff hired, financial statements, tax filings, customer contracts and an updated org chart showing the manager directing others rather than doing daily operational work. Start collecting this from month one.",
  },
  {
    question: "Can my spouse work on an L-2 visa?",
    answer:
      "Yes. L-2 spouses are authorized to work for any U.S. employer as part of their status, and their I-94 is marked \"L-2S.\" A separate work permit application is generally not required. Spouses can also study in the U.S.",
  },
  {
    question: "Can my children study in the U.S. on L-2?",
    answer:
      "Yes. Unmarried children under 21 on L-2 status can attend school, college or university in the U.S. They cannot work on L-2. Their status generally matches the L-1A holder's dates, so file extensions together.",
  },
  {
    question: "Can Canadian citizens apply for L-1 at the border?",
    answer:
      "Canadian citizens may generally present an individual L-1 petition directly at a U.S. port of entry or preclearance location instead of filing with USCIS first. Many still file with USCIS for predictability, and new office cases benefit from careful preparation either way.",
  },
  {
    question: "How long does the L-1A process take?",
    answer:
      "With premium processing, USCIS typically decides within 15 business days, not counting RFEs. Setting up a new U.S. company, the lease, funding and the business plan usually takes four to eight weeks beforehand. Visa interview waits vary by country.",
  },
  {
    question: "Should I choose L-1A or E-2?",
    answer:
      "L-1A works for any nationality and leads directly to the EB-1C green card, but requires one year of work abroad. E-2 is only for treaty-country nationals, such as those from Canada and Mexico but not India, and requires a substantial investment. It has no direct green card route.",
  },
  {
    question: "Can I get a green card from an L-1A?",
    answer:
      "Yes. Most L-1A managers and executives qualify for the EB-1C green card, which needs no PERM labor certification. Generally, the U.S. company must have been doing business for at least one year, and your spouse and children under 21 are included.",
  },
  {
    question: "How much does an L-1A cost?",
    answer:
      "USCIS filing fees depend on company size. Add optional premium processing ($2,965), consular visa fees and document preparation fees. Your first consultation with BAIS is free, and we provide a clear written quote before work begins.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. Bay Area Immigration Services is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares L-1A and other immigration documentation. We do not provide legal advice or representation, and we are not affiliated with USCIS.",
  },
];

export function L1aFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="L-1A Visa FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={l1aFaqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
