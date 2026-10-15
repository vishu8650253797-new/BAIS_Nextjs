import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const termsFaqs = [
  {
    question: "Are you a law firm?",
    answer:
      "No. BAIS is a California-registered and bonded immigration consultant. We prepare documents and evidence, and we don't give legal advice or legal representation.",
  },
  {
    question: "Do you guarantee approval?",
    answer:
      "No. Only the government decides, and no honest provider can promise an outcome or a timeline.",
  },
  {
    question: "Is my free consultation confidential or privileged?",
    answer:
      "We keep your information private as our Privacy Policy describes, but a consultation with an immigration consultant is not protected by legal privilege.",
  },
  {
    question: "When do my fees, cancellation and refund rights apply?",
    answer:
      "They are set out in the signed written services agreement for your service. Website quotes are estimates, and government fees are separate.",
  },
  {
    question: "Can I rely on the information on your website?",
    answer:
      "Use it as general information. Rules, fees and timelines change, so confirm with official sources and ask us about your own case.",
  },
];

export function TermsFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Questions &amp; Answers" title="Terms FAQs" align="center" className="mx-auto" />
        <FadeIn className="mt-12">
          <Accordion items={termsFaqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
