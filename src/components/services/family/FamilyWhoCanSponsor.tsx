import Link from "next/link";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  { relative: "Spouse", citizen: "Immediate relative (no wait)", greenCard: "F2A (wait)" },
  { relative: "Unmarried child under 21", citizen: "Immediate relative", greenCard: "F2A (wait)" },
  { relative: "Unmarried son or daughter, 21+", citizen: "F1 (wait)", greenCard: "F2B (wait)" },
  { relative: "Married son or daughter", citizen: "F3 (wait)", greenCard: null },
  { relative: "Parent", citizen: "Immediate relative (you must be 21+)", greenCard: null },
  { relative: "Brother or sister", citizen: "F4 (wait) (you must be 21+)", greenCard: null },
  { relative: "Fiancé(e)", citizen: "K-1 visa (see K-1 page)", greenCard: null },
];

function Cell({ value }: { value: string | null }) {
  if (!value) {
    return (
      <span className="inline-flex items-center gap-1.5 text-body/50">
        <X className="size-4 text-body/40" aria-hidden="true" />
        Not eligible
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5">
      <Check className="size-4 shrink-0 text-emerald-600" aria-hidden="true" />
      {value}
    </span>
  );
}

export function FamilyWhoCanSponsor() {
  return (
    <section id="who-can-sponsor" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Who can sponsor
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Who Can You Sponsor?
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink">Relative</th>
                <th className="p-3 font-bold text-ink">If you&apos;re a U.S. citizen</th>
                <th className="p-3 font-bold text-ink">If you&apos;re a green card holder</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.relative}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.relative}</td>
                  <td className="p-3 text-body"><Cell value={row.citizen} /></td>
                  <td className="p-3 text-body"><Cell value={row.greenCard} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-sm leading-relaxed text-body">
          If you&apos;re a green card holder and want to sponsor parents or
          siblings, becoming a <strong className="text-ink">U.S.
          citizen</strong> first often changes everything.{" "}
          <Link href="/services/us-citizenship" className="font-semibold text-maroon hover:text-maroon-dark">
            See U.S. Citizenship →
          </Link>
        </p>
      </Container>
    </section>
  );
}
