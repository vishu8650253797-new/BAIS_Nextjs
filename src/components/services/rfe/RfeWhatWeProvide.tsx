import {
  Clock,
  FileSearch,
  GraduationCap,
  Landmark,
  Package,
  PenLine,
  Receipt,
  Scale,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const items = [
  {
    icon: Clock,
    title: "Rapid triage & deadline calendar",
    description: "We read your notice, calendar the printed date and list every point USCIS raised.",
  },
  {
    icon: FileSearch,
    title: "Gap analysis",
    description: "Point by point: what the officer wants, what you have, what's missing.",
  },
  {
    icon: GraduationCap,
    title: "Independent expert opinion letters",
    description: "From 350+ professors and industry experts: their own opinion on your evidence, aimed at the officer's concern.",
  },
  {
    icon: Receipt,
    title: "Academic & credential evaluations",
    description: "Degree equivalency and expertise evaluations from qualified evaluators.",
  },
  {
    icon: PenLine,
    title: "Letter drafting support",
    description: "Structure, formatting and fact-checking for letters the signer reviews and signs.",
  },
  {
    icon: Package,
    title: "Complete response package",
    description: "A cover letter and an indexed exhibit set mapped to every point, prepared for your (or your attorney's) review and signature.",
  },
  {
    icon: FileSearch,
    title: "Denial review",
    description: "The reasons explained in plain English, with your options laid out.",
  },
  {
    icon: Scale,
    title: "Motion / appeal preparation",
    description: "I-290B data, evidence and exhibits for a motion to reopen, reconsider or an appeal.",
  },
  {
    icon: Landmark,
    title: "Back-office for law firms",
    description: "Evidence, letter coordination, indexing and tracking under your direction.",
  },
];

export function RfeWhatWeProvide() {
  return (
    <section id="what-we-provide" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What you get
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What You Get From BAIS
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 40}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
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
