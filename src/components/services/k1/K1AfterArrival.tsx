import { Heart, FileText, Briefcase, Plane, Clock, Baby } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const items = [
  {
    icon: Heart,
    title: "Marry within 90 days",
    description:
      "The K-1 can't be extended. Adjustment is only through marriage to the petitioner.",
  },
  {
    icon: FileText,
    title: "File the I-485",
    description:
      "With the I-864, plus the optional I-765 work permit and I-131 advance parole.",
  },
  {
    icon: Briefcase,
    title: "Work",
    description:
      "Only after a work permit is approved. Most couples request it with the I-485.",
  },
  {
    icon: Plane,
    title: "Travel carefully",
    description:
      "Leaving without advance parole once the I-485 is filed can abandon the case.",
  },
  {
    icon: Clock,
    title: "Conditional green card",
    description:
      "Married less than 2 years at approval = a 2-year card. File the I-751 in the 90 days before it expires.",
  },
  {
    icon: Baby,
    title: "Children (K-2)",
    id: "children",
    description:
      "Unmarried children under 21, listed on the I-129F (no extra fee). They file their own I-485 after the marriage.",
  },
];

export function K1AfterArrival() {
  return (
    <section id="after-arrival" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          After arrival
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          After the K-1 Visa: Marriage Within 90 Days and Your Green Card
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 50}>
              <div
                id={item.id}
                className="h-full scroll-mt-24 rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-cream text-maroon">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
