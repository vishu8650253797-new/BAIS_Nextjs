import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const rfeFaqs = [
  {
    question: "What is an RFE?",
    answer:
      "An RFE is a Request for Evidence: a USCIS notice saying it needs more proof before deciding your case. It isn't a denial, but it needs a complete, on-time response.",
  },
  {
    question: "How long do I have to respond to an RFE?",
    answer:
      "Up to 12 weeks, but USCIS may set a shorter date. The date printed on your notice controls, and extensions aren't granted.",
  },
  {
    question: "Can I get more time on an RFE?",
    answer:
      "No. USCIS can't grant more time than the regulations allow, so calendar the printed date immediately and plan backward.",
  },
  {
    question: "Can USCIS deny my case without sending an RFE?",
    answer:
      "Yes. Since August 5, 2026, officers may deny a case without an RFE or NOID if required initial evidence is missing or eligibility isn't established. That's why filing a complete case matters.",
  },
  {
    question: "What is a NOID?",
    answer:
      "A Notice of Intent to Deny. USCIS intends to deny your case and explains why. You generally have 30 days to rebut it with evidence and explanation.",
  },
  {
    question: "Should I send my RFE response in parts?",
    answer:
      "No. If you send any response, even a partial one, USCIS may treat it as asking for a decision on the existing record. Send one complete package.",
  },
  {
    question: "Do expert opinion letters help with an RFE?",
    answer:
      "They can, especially when the RFE questions judgment, such as significance, specialized knowledge or the nature of the job. A letter from an independent expert, aimed at the officer's concern, can be effective. USCIS decides the weight, and letters don't guarantee approval.",
  },
  {
    question: "What is a credential evaluation?",
    answer:
      "A written opinion on how a foreign degree compares to a U.S. degree, commonly used for H-1B, EB-2 and EB-3 cases. USCIS isn't bound by it, but a well-reasoned evaluation helps.",
  },
  {
    question: "Can you write my recommendation letters?",
    answer:
      "We provide drafting support: we help the signer organize their own facts and examples, structure the letter and check it against your exhibits. The signer reviews, edits, adopts and signs every word, and the letter must reflect what they personally know and believe.",
  },
  {
    question: "What is the difference between a motion to reopen and a motion to reconsider?",
    answer:
      "A motion to reopen asks the same office to reopen based on new facts and evidence. A motion to reconsider asks it to reconsider because it applied the law or policy incorrectly based on the existing record.",
  },
  {
    question: "How much is Form I-290B?",
    answer:
      "$800 as of 2026. It's used for appeals and motions, and a combined motion to reopen and reconsider needs one fee. Fee waivers exist in limited cases. Confirm on the USCIS fee schedule.",
  },
  {
    question: "What is the deadline to file a motion or appeal?",
    answer:
      "Generally 30 calendar days from the decision, or 33 if it was mailed. Some revocation appeals have 15 days (18 if mailed). Your denial notice states the deadline that applies.",
  },
  {
    question: "Should I refile, file a motion or appeal after a denial?",
    answer:
      "It depends on the denial reason, your deadlines, your status and whether you have new evidence. We compare the options, and for legal strategy we recommend working with an attorney.",
  },
  {
    question: "Do you work with immigration attorneys?",
    answer:
      "Yes. We provide evidence and back-office support under the attorney's direction: expert matching, letter coordination, credential evaluations, exhibit indexing and deadline tracking. The attorney keeps all legal judgment, signatures and responsibility.",
  },
  {
    question: "Is BAIS a law firm?",
    answer:
      "No. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that prepares immigration documents and evidence. We don't provide legal advice or representation, and we aren't affiliated with USCIS. For legal advice about your notice, consult a licensed attorney.",
  },
  {
    question: "What happens if I miss my RFE or motion deadline?",
    answer:
      "A late RFE response is generally treated as if none was filed, and your case is decided on the existing record, often resulting in denial. Late motions and appeals are rarely accepted. Send your response or notice to us as soon as you receive it.",
  },
];

export function RfeFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="RFE, NOID &amp; Denial FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={rfeFaqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
