import Link from "next/link";
import { ArrowRight, FileCheck2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const coreDocs = [
  "Valid passport",
  "Form DS-2019",
  "SEVIS I-901 receipt",
  "DS-160 confirmation & photo",
  "Proof of funding",
  "Ties to your home country",
  "Credentials",
];

const byCategory = [
  "Interns/trainees: signed DS-7002, degree or enrollment proof, CV, experience letters",
  "Scholars: invitation letter, CV, publications",
  "Students: admission and funding letters",
];

export function J1Documents() {
  return (
    <section id="documents" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Documents
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          J-1 Visa Documents and Requirements
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <FadeIn className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">Core documents</h3>
            <ul className="mt-4 space-y-2.5">
              {coreDocs.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <FileCheck2 className="mt-0.5 size-4 shrink-0 text-maroon" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={70} className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">By category</h3>
            <ul className="mt-4 space-y-2.5">
              {byCategory.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <FileCheck2 className="mt-0.5 size-4 shrink-0 text-maroon" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={140} className="h-full rounded-2xl bg-ink p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-white">Insurance &amp; English</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              J-1 and J-2 need health insurance meeting Department of State
              minimums for medical, repatriation and evacuation, with capped
              deductibles. Your sponsor confirms the amounts. Sponsors also
              verify English proficiency.
            </p>
          </FadeIn>
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Get Your Free J-1 Document Checklist
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
