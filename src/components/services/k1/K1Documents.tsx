import Link from "next/link";
import { ArrowRight, FileCheck2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const checklists = [
  {
    title: "U.S. citizen petitioner",
    items: [
      "Proof of citizenship",
      "Passport-style photo",
      "Prior marriage termination documents",
      "Proof of meeting within 2 years",
      "Statement of intent to marry",
      "Relationship evidence",
      "Financial evidence (I-134)",
    ],
  },
  {
    title: "Foreign fiancé(e)",
    items: [
      "Valid passport & photo",
      "Birth certificate",
      "Police certificates",
      "Prior marriage termination documents",
      "Panel physician medical exam",
      "Statement of intent to marry",
      "DS-160 confirmation",
    ],
  },
  {
    title: "After arrival (green card)",
    items: [
      "Marriage certificate",
      "I-94 record",
      "I-864 + tax transcripts",
      "I-693 medical & vaccinations",
      "Passport-style photos",
    ],
  },
];

export function K1Documents() {
  return (
    <section id="documents" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Documents
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          K-1 Visa Documents Checklist
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {checklists.map((group, index) => (
            <FadeIn key={group.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="text-base font-bold text-ink">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
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
          Download the Free K-1 Document Checklist
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
