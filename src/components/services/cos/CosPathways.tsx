import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const pathways = [
  {
    from: "B-1/B-2 → F-1",
    form: "I-539 + I-20 + SEVIS fee",
    notes: "Can't start classes until approved; plan around start dates; intent evidence is critical",
  },
  {
    from: "F-1 → H-1B",
    form: "I-129 (employer)",
    notes: "Cap-gap may extend F-1 and OPT work authorization to October 1 for selected cap petitions",
  },
  {
    from: "F-1 → O-1",
    form: "I-129 (employer or agent)",
    notes: "No lottery; extraordinary-ability evidence",
  },
  {
    from: "H-1B → O-1",
    form: "I-129",
    notes: "For top talent avoiding H-1B limits",
  },
  {
    from: "H-4 → F-1",
    form: "I-539",
    notes: "Spouses moving to their own study status",
  },
  {
    from: "H-4 / L-2 → H-1B",
    form: "I-129 (employer)",
    notes: "Cap-subject unless previously counted or cap-exempt",
  },
  {
    from: "J-1 → H-1B / O-1",
    form: "I-129",
    notes: "Only if not subject to 212(e) or with a waiver",
  },
  {
    from: "H-1B (laid off) → B-2 or H-4",
    form: "I-539",
    notes: "Can buy time within the up-to-60-day grace period",
  },
  {
    from: "F-2 → F-1",
    form: "I-539",
    notes: "Dependents starting full-time study",
  },
  {
    from: "Dependents (H-4, L-2, O-3, E)",
    form: "I-539",
    notes: "Filed with or after the principal's I-129",
  },
];

export function CosPathways() {
  return (
    <section id="pathways" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Pathways
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Most Common Change of Status Pathways
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">From → To</th>
                <th className="p-3 font-bold text-ink">Form</th>
                <th className="p-3 font-bold text-ink">Key points</th>
              </tr>
            </thead>
            <tbody>
              {pathways.map((item, index) => (
                <tr
                  key={item.from}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{item.from}</td>
                  <td className="p-3 text-body">{item.form}</td>
                  <td className="p-3 text-body">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-sm">
          <Link href="/services/h-1b-visa" className="font-semibold text-maroon hover:text-maroon-dark">
            H-1B transfers →
          </Link>
          <span className="text-body/40">·</span>
          <Link href="/services#employment-immigration" className="font-semibold text-maroon hover:text-maroon-dark">
            O-1 →
          </Link>
          <span className="text-body/40">·</span>
          <Link href="/services/j-1-visa" className="font-semibold text-maroon hover:text-maroon-dark">
            J-1 &amp; 212(e) →
          </Link>
        </p>
      </Container>
    </section>
  );
}
