import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const privacyFaqs = [
  {
    question: "Do you sell my personal information?",
    answer:
      "No. We do not sell personal information, and we do not share your phone number or text opt-in with anyone for marketing.",
  },
  {
    question: "What do you do with my passport and other documents?",
    answer:
      "We use them only to prepare the application or evidence you ask us to prepare, store them with access limited to staff who need them, and share them with a government agency only when you ask us to submit your case.",
  },
  {
    question: "How do I stop text messages?",
    answer:
      "Reply STOP to any message. You can also tell us in any reasonable way, such as \"stop texting me,\" or email us.",
  },
  {
    question: "How do I see or delete my information?",
    answer:
      "Email us or call (510) 770-8700. We verify your identity, confirm within 10 business days and respond within 45 days. Some records must be kept by law.",
  },
  {
    question: "Do you send my case details to advertising platforms?",
    answer:
      "No. We do not send the contents of your documents or case details to advertising platforms.",
  },
];

export function PrivacyFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Questions &amp; Answers" title="Privacy FAQs" align="center" className="mx-auto" />
        <FadeIn className="mt-12">
          <Accordion items={privacyFaqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
