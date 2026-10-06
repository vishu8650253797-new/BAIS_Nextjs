import { Clock, FolderOpen, MapPin, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const values = [
  {
    label: "2001",
    title: "PERM & I-140 Since 2001",
    description: "A core BAIS practice for employers.",
  },
  {
    icon: FolderOpen,
    title: "Audit-Ready Files",
    description: "Every recruitment step documented.",
  },
  {
    icon: Clock,
    title: "H-1B Cliff Tracker",
    description: "Start PERM on time.",
  },
  {
    label: "2↔3",
    title: "EB-2/EB-3 Strategy",
    description: "Monthly bulletin checks and downgrade options.",
  },
  {
    icon: MapPin,
    title: "Fremont, Bay Area & Remote",
    description: "All of California.",
  },
  {
    icon: ShieldCheck,
    title: "Registered & Bonded",
    description: "Bond No. 5317191.",
  },
];

export function Eb3WhyBais() {
  return (
    <section className="bg-white py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Why BAIS
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Why Employers and Employees Choose BAIS for EB-3
        </h2>

        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 50}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-sm font-bold text-maroon">
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
