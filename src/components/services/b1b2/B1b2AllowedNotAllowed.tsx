import Link from "next/link";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const allowed = [
  "Meetings, conferences, trade shows",
  "Negotiating and signing contracts",
  "Consulting with business associates",
  "Installing or servicing equipment you sold (under warranty)",
];

const notAllowed = [
  "Working for a U.S. employer or being paid from a U.S. source",
  "Full-time study for credit",
  "Birth tourism (traveling mainly to give birth in the U.S.)",
  "Local employment, internships or \"productive work\"",
];

const greenCardLinks = [
  { label: "L-1A", href: "/services#employment-immigration" },
  { label: "E-2", href: "/services/e-2-treaty-investor" },
  { label: "EB-5", href: "/services#business-investor" },
];

export function B1b2AllowedNotAllowed() {
  return (
    <section id="allowed" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s allowed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What You Can and Can&apos;t Do
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">B-1 business visitor: allowed</th>
                <th className="p-3 font-bold text-ink">Not allowed on B-1 or B-2</th>
              </tr>
            </thead>
            <tbody>
              {allowed.map((item, index) => (
                <tr
                  key={item}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 text-body">
                    <span className="inline-flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                      {item}
                    </span>
                  </td>
                  <td className="p-3 text-body">
                    <span className="inline-flex items-start gap-2">
                      <X className="mt-0.5 size-4 shrink-0 text-maroon" aria-hidden="true" />
                      {notAllowed[index]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-sm leading-relaxed text-body">
          <strong className="text-ink">B-2 is for:</strong> leisure,
          visiting family, social events, short recreational courses, and
          medical treatment.
        </p>

        <FadeIn delay={120} className="mt-5 rounded-2xl bg-ink p-6 text-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/30">
          <p className="text-sm leading-relaxed text-white/75">
            <strong className="text-white">
              Business owner thinking about a green card?
            </strong>{" "}
            B-1 is <strong className="text-white">not</strong> a path to
            permanent residence. See{" "}
            {greenCardLinks.map((link, index) => (
              <span key={link.href}>
                <Link href={link.href} className="font-semibold text-accent hover:text-accent-dark">
                  {link.label}
                </Link>
                {index < greenCardLinks.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
