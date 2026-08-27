import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { homeFAQs } from "@/data/faq";

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Common Questions About Working With Us"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12">
          <Accordion items={homeFAQs} />
        </div>
      </Container>
    </section>
  );
}
