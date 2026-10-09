import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  {
    situation: "Naturalized U.S. citizen who held an Indian passport",
    need: "Surrender the Indian passport → Surrender Certificate → OCI",
  },
  {
    situation: "Lost your Indian passport",
    need: "Renunciation Declaration Certificate (sworn affidavit) → OCI",
  },
  {
    situation: "U.S.-born child of Indian-origin parent(s)",
    need: "OCI for a minor (no renunciation). Eligibility depends on the parents' status; we check it free.",
  },
  {
    situation: "PIO card holder",
    need: "PIO cards are no longer valid for travel; the conversion window closed in December 2025: apply fresh for OCI",
  },
  {
    situation: "OCI holder who wants to give up OCI",
    need: "Declare renunciation of OCI online and surrender the physical card",
  },
  {
    situation: "Spouse of an Indian citizen or OCI holder",
    need: "Special OCI rules apply; we check them free",
  },
];

export function OciWhichPath() {
  return (
    <section id="which-path" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Which path fits you?
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Which Path Fits You?
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink">Your situation</th>
                <th className="p-3 font-bold text-ink">What you need</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.situation}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.situation}</td>
                  <td className="p-3 text-body">{row.need}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </Container>
    </section>
  );
}
