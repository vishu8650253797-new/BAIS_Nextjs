import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const docs = [
  "U.S. & foreign org charts",
  "Duty breakdown with % of time",
  "Subordinates' roles & qualifications",
  "U.S. payroll & quarterly tax filings",
  "Corporate & ownership documents",
  "Financial statements & tax returns",
  "Contracts, invoices, bank statements",
  "Your foreign pay records",
];

export function Eb1cEvidence() {
  return (
    <section className="bg-cream py-16">
      <Container>
        <FadeIn>
          <h3 className="text-lg font-bold text-ink">
            Evidence we help you organize
          </h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {docs.map((doc) => (
              <span
                key={doc}
                className="rounded-full border border-border bg-white px-4 py-1.5 text-sm text-ink transition-colors duration-200 hover:border-maroon/40 hover:text-maroon"
              >
                {doc}
              </span>
            ))}
          </div>
        </FadeIn>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
        >
          Get the Free EB-1C Evidence Checklist
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
