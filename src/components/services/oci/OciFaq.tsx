import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";
import { FadeIn } from "@/components/shared/FadeIn";

export const ociFaqs = [
  {
    question: "Do I have to renounce Indian citizenship before applying for OCI?",
    answer:
      "If you ever held Indian citizenship and became a U.S. citizen, yes. India doesn't allow dual citizenship, so you must surrender your Indian passport and obtain a Surrender (Renunciation) Certificate first. You then submit that certificate with your OCI application.",
  },
  {
    question: "Can I keep my Indian passport after becoming a U.S. citizen?",
    answer:
      "No. After you acquire U.S. citizenship you cease to be an Indian citizen and must surrender your last Indian passport to the Indian mission. Holding or traveling on it afterward is an offense under Indian law and can bring penalties. The mission cancels it and returns it with your certificate.",
  },
  {
    question: "How much does the OCI card cost from the U.S.?",
    answer:
      "As of 2026 the consular fee for a new OCI card is $275, plus a $3 community welfare fee and a VFS service charge (about $19), roughly $297 before courier. Surrendering an Indian passport costs $40 plus $3 and the service charge. Fees vary, so confirm on the Indian embassy site.",
  },
  {
    question: "How long does the surrender and OCI process take?",
    answer:
      "The Indian mission typically issues the Surrender Certificate in a few working days after receiving your documents, plus mailing, so plan for one to three weeks. OCI processing then takes additional weeks, and since May 2026 the application is filed fully online. Times vary by mission and season.",
  },
  {
    question: "What if I lost my Indian passport?",
    answer:
      "You can obtain a Renunciation Declaration Certificate instead, based on a sworn affidavit of loss and the other required documents. Either a Surrender Certificate or a Renunciation Declaration Certificate is accepted for an OCI application.",
  },
  {
    question: "Can my child born in the U.S. get an OCI card?",
    answer:
      "Often yes, if the parents' status qualifies: eligibility depends on the parents' Indian citizenship or origin and status at the child's birth. Minors need the birth certificate, parents' documents and photos. A minor can't hold an Indian and a foreign passport at the same time under the 2026 rules.",
  },
  {
    question: "What changed for OCI in 2026?",
    answer:
      "India's Citizenship (Amendment) Rules, 2026 took effect May 1, 2026. OCI services are now fully online, an electronic e-OCI can be issued, cards are re-issued only once after a new passport after age 20, and renouncing OCI means surrendering the physical card. PIO cards are no longer valid for travel.",
  },
  {
    question: "Is BAIS part of the Government of India, and is it a law firm?",
    answer:
      "No to both. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) that helps you prepare OCI and surrender documents. We aren't affiliated with the Government of India, the Indian consulates or VFS Global, and we don't give legal advice. For legal advice, consult a licensed legal professional.",
  },
];

export function OciFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions &amp; Answers"
          title="OCI and Renunciation FAQs"
          align="center"
          className="mx-auto"
        />
        <FadeIn className="mt-12">
          <Accordion items={ociFaqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
