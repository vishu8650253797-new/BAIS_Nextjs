import Link from "next/link";
import { ArrowRight, FileCheck2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const groups = [
  {
    title: "Everyone",
    items: [
      "I-539 (or the employer's I-129)",
      "I-94 record",
      "Passport valid for the period",
      "Current visa and approvals",
      "Proof you've kept status",
      "Filing fee",
    ],
  },
  {
    title: "To F-1",
    items: [
      "Form I-20",
      "SEVIS I-901 receipt",
      "Proof of funds",
      "Explanation of the change in plans",
      "Evidence of ties",
    ],
  },
  {
    title: "To H-1B, O-1 or L-1",
    items: [
      "The employer's petition",
      "Degree or achievement evidence",
      "LCA (H-1B)",
      "Advisory opinion (O-1)",
    ],
  },
  {
    title: "Dependents",
    items: [
      "Marriage or birth certificates",
      "The principal's approval or receipt",
    ],
  },
];

export function CosDocuments() {
  return (
    <section id="documents" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Documents
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Change of Status Documents Checklist
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 60}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="text-base font-bold text-ink">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-body">
                      <FileCheck2 className="mt-0.5 size-4 shrink-0 text-maroon" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Download the Free Change of Status Checklist
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
