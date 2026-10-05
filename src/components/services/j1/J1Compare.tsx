import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  {
    label: "Purpose",
    j1: "Cultural and educational exchange via a sponsor",
    f1: "Academic study",
    h1b: "Specialty-occupation employment",
  },
  {
    label: "Document",
    j1: "DS-2019 (designated sponsor)",
    f1: "I-20 (school)",
    h1b: "I-129 (employer)",
  },
  { label: "Lottery", j1: "No", f1: "No", h1b: "Yes (cap-exempt at universities)" },
  {
    label: "Work",
    j1: "Within program rules",
    f1: "CPT / OPT",
    h1b: "For the petitioning employer",
  },
  {
    label: "Spouse can work",
    j1: "Yes, with a J-2 EAD",
    f1: "No (F-2)",
    h1b: "Only with H-4 EAD eligibility",
  },
  { label: "Two-year home rule", j1: "Possible (212(e))", f1: "No", h1b: "No" },
  {
    label: "Admission (from September 15, 2026)",
    j1: "Program end date, up to 4 years",
    f1: "Program end date, up to 4 years",
    h1b: "Petition dates",
  },
];

export function J1Compare() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          J-1 vs F-1 vs H-1B: Which Fits Your Plans?
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink"></th>
                <th className="p-3 font-bold text-ink">J-1</th>
                <th className="p-3 font-bold text-ink">F-1</th>
                <th className="p-3 font-bold text-ink">H-1B</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className="p-3 text-body">{row.j1}</td>
                  <td className="p-3 text-body">{row.f1}</td>
                  <td className="p-3 text-body">{row.h1b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </Container>
    </section>
  );
}
