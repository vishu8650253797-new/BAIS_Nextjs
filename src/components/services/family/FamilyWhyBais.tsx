import { Calendar, ClipboardList, Compass, FolderOpen, Mic, Wallet } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const values = [
  {
    icon: ClipboardList,
    title: "Family Case Map",
    description: "One page: category, priority date, expected wait, steps and costs.",
  },
  {
    icon: Wallet,
    title: "I-864 Support Planner",
    description: "Income check and joint-sponsor prep before you file.",
  },
  {
    icon: Calendar,
    title: "Visa Bulletin Watch",
    description: "We track your date monthly.",
  },
  {
    icon: FolderOpen,
    title: "Relationship Evidence Binder",
    description: "Organized proof of a genuine relationship.",
  },
  {
    icon: Mic,
    title: "Interview Preparation",
    description: "Practice and a document review.",
  },
  {
    icon: Compass,
    title: "Whole-Journey Support",
    description: "I-130 to green card to I-751 to citizenship to OCI.",
  },
];

export function FamilyWhyBais() {
  return (
    <section className="bg-white py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Our USP
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Why Families Choose BAIS: The Family Case Map
        </h2>

        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 50}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-maroon">
                  <value.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{value.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
