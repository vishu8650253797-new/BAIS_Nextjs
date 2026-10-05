import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  { title: "Free Case Review", description: "Category, sponsor stage, 212(e) exposure, goals." },
  { title: "Document Plan", description: "A checklist for your category and country." },
  { title: "Host Support", description: "DS-7002 drafting and supporting documents." },
  { title: "Visa Preparation", description: "DS-160 review, SEVIS fee, interview coaching." },
  { title: "J-2 Family", description: "Visas and the I-765 work permit." },
  { title: "Status Maintenance", description: "Extension reminders and the new I-539 filings." },
  { title: "212(e)", description: "Advisory opinion and waiver packages." },
  { title: "Next Visa", description: "H-1B, O-1, EB-1A, NIW or EB-1B planning." },
];

export function J1HowWeHelp() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Our process
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          How BAIS Handles Your J-1 Documentation
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 40}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="font-serif text-2xl font-bold text-maroon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={site.bookingUrl} target="_blank" rel="noopener noreferrer" size="lg">
            Book a Free J-1 Consultation
          </Button>
          <Button href={site.phoneHref} variant="secondary" size="lg">
            Call {site.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
