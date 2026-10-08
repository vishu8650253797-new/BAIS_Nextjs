import {
  Clock,
  FileSearch,
  GraduationCap,
  Landmark,
  Package,
  PenLine,
  Receipt,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const values = [
  {
    icon: Clock,
    title: "Rapid Triage & Deadline Calendar",
    description: "Your printed date, mapped backward.",
  },
  {
    icon: FileSearch,
    title: "Point-by-Point Gap Analysis",
    description: "Every request in the notice answered.",
  },
  {
    label: "350+",
    title: "Professors & Industry Experts",
    description: "Independent letters aimed at the officer's concern.",
  },
  {
    icon: Receipt,
    title: "Academic & Credential Evaluations",
    description: "Degree and expertise proof in one place.",
  },
  {
    icon: PenLine,
    title: "Signer-Reviewed Letters",
    description: "Authentic letters in the signer's own voice.",
  },
  {
    icon: Package,
    title: "One-Package Discipline",
    description: "A single, complete, indexed response, never installments.",
  },
  {
    icon: Scale,
    title: "Denial-to-Motion Support",
    description: "I-290B data, evidence and exhibits, in time.",
  },
  {
    icon: Landmark,
    title: "Law-Firm Back-Office",
    description: "Your attorney directs; we assemble.",
  },
  {
    icon: ShieldCheck,
    title: "Since 2001 · Registered & Bonded",
    description: "Bond No. 5317191 · English & Hindi.",
  },
];

export function RfeWhyBais() {
  return (
    <section className="bg-cream py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Our USP
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Why Clients Choose BAIS for RFE Help: The Deadline-Safe Response
          System
        </h2>

        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 40}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <span className="flex size-11 items-center justify-center rounded-full bg-cream text-sm font-bold text-maroon">
                  {value.icon ? (
                    <value.icon className="size-5" aria-hidden="true" />
                  ) : (
                    value.label
                  )}
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
