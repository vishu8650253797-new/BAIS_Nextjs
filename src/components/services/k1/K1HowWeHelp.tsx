import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const items = [
  {
    title: "Free consultation",
    description:
      "Eligibility, the meeting rule, IMBRA questions, and K-1 vs spouse visa strategy.",
  },
  {
    title: "Relationship evidence plan",
    description:
      "Photos, travel, communication, engagement proof and letters of intent, organized.",
  },
  {
    title: "I-129F preparation",
    description:
      "The complete petition with an indexed exhibit list, reviewed before filing.",
  },
  {
    title: "RFE support",
    description: "A focused response if USCIS asks for more evidence.",
  },
  {
    title: "Consular preparation",
    description:
      "DS-160 guidance, a country checklist, and medical and police certificate steps.",
  },
  {
    title: "Interview coaching",
    description: "Practice on common questions and a document review.",
  },
  {
    title: "Arrival & marriage checklist",
    description:
      "A 90-day planner, marriage certificate steps and what not to do.",
  },
  {
    title: "Green card package",
    description:
      "I-485, I-864, I-765, I-131, I-693 coordination and interview prep.",
  },
  {
    title: "Removal of conditions",
    description: "A reminder and preparation for the I-751 when it's due.",
  },
];

export function K1HowWeHelp() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Our process
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          How BAIS Handles Your K-1 Case
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 40}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-9 items-center justify-center rounded-full bg-cream text-sm font-bold text-maroon">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={site.bookingUrl} target="_blank" rel="noopener noreferrer" size="lg">
            Book Your Free K-1 Consultation
          </Button>
          <Button href={site.phoneHref} variant="secondary" size="lg">
            Call {site.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
