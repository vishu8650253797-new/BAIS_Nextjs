import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    title: "Choose the right structure",
    description:
      "Your U.S. company must be a parent, branch, subsidiary or affiliate. Most exporters form a U.S. subsidiary owned by the foreign company, or have the same owners hold both (an affiliate). Document it with share certificates, operating agreements and a corporate chart.",
  },
  {
    title: "Form & register the entity",
    description:
      "Form an LLC or corporation in your chosen state, get an EIN (federal tax ID), open a U.S. business bank account, and obtain the city, county or state licenses and permits your industry requires.",
  },
  {
    title: "Secure a physical office",
    description:
      "USCIS requires sufficient physical premises: a signed lease for a real office, warehouse or commercial space that fits your plan. Virtual offices and mailbox addresses are generally not enough.",
  },
  {
    title: "Fund the U.S. company",
    description:
      "Transfer enough capital to cover rent, salaries and operations for the first year. Keep wire records and U.S. bank statements. They prove your ability to pay the manager and grow the office.",
  },
  {
    title: "Build a one-year business plan",
    description:
      "Cover the market, your U.S. customers and sales targets, a hiring plan showing who will report to the manager, and 12-month projections. It must show the office will support a true managerial role within a year.",
  },
  {
    title: "Prove real business activity",
    description:
      "Include U.S. purchase orders, contracts, invoices, bills of lading and buyer letters of intent. Add the foreign company's financials, tax filings and payroll to show it is active and will keep operating.",
  },
];

const docs = [
  "Corporate chart & ownership documents",
  "Articles & EIN",
  "U.S. bank account & funding proof",
  "Signed office lease + photos",
  "One-year business plan",
  "U.S. & foreign org charts",
  "Foreign company financials & payroll",
  "U.S. customer contracts, POs, invoices",
  "Transferee résumé, pay slips & job letters",
];

export function L1aNewOffice() {
  return (
    <section className="bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          New office L-1A
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Opening a New U.S. Office: What Your Company Needs
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          A &ldquo;new office&rdquo; L-1A is for companies that don&apos;t
          yet have an operating U.S. business, or whose U.S. company has been
          doing business for less than one year. USCIS reviews these cases
          closely. It wants to see that the office is real, funded and able
          to support a managerial or executive role within one year.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 50}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-xl hover:shadow-ink/10">
                <span className="flex size-9 items-center justify-center rounded-lg bg-cream text-sm font-bold text-maroon">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-sm font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-body">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-cream p-7">
          <h3 className="text-base font-bold text-ink">New office checklist</h3>
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
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
            >
              Get Your Free New Office Checklist
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
            >
              Book a New Office Strategy Call
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
