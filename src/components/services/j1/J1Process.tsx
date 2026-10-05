import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const steps = [
  {
    step: "Find a designated sponsor",
    what: "A university, exchange organization or category sponsor (State Department sponsor search)",
    who: "You / host",
  },
  {
    step: "Acceptance & plan",
    what: "Sponsor screening; DS-7002 signed by the host and sponsor for trainees and interns",
    who: "Sponsor / host",
  },
  {
    step: "DS-2019 issued",
    what: "Entered in SEVIS: program dates, category, funding",
    who: "Sponsor",
  },
  {
    step: "SEVIS I-901 fee",
    what: "Generally $220 ($35 for au pair, camp counselor, SWT; none for some government programs)",
    who: "You",
  },
  {
    step: "DS-160 & visa fee",
    what: "Online application; social media profiles set to public",
    who: "You",
  },
  {
    step: "Visa interview",
    what: "DS-2019, SEVIS receipt, funding, home ties",
    who: "You",
  },
  {
    step: "Enter the U.S.",
    what: "Up to 30 days before the start date; the I-94 shows a fixed end date",
    who: "You",
  },
  {
    step: "Maintain status",
    what: "Sponsor check-in, insurance, program rules, address updates",
    who: "You / sponsor",
  },
  {
    step: "Extend, transfer or finish",
    what: "Sponsor extension + USCIS filing if staying past the admission date; 30-day grace period",
    who: "You / sponsor",
  },
  {
    step: "Next step",
    what: "Return home, 212(e) waiver, or H-1B / O-1 / green card where eligible",
    who: "You / BAIS",
  },
];

export function J1Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          The complete process
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The J-1 Visa Process: Step by Step
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">#</th>
                <th className="p-3 font-bold text-ink">Step</th>
                <th className="p-3 font-bold text-ink">What happens</th>
                <th className="p-3 font-bold text-ink">Who</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((item, index) => (
                <tr
                  key={item.step}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-bold text-maroon">{index + 1}</td>
                  <td className="p-3 font-semibold text-ink">{item.step}</td>
                  <td className="p-3 text-body">{item.what}</td>
                  <td className="p-3 text-body/70">{item.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Fees and procedures are set by the Department of State, DHS and
          your sponsor, and change periodically. Confirm current amounts
          before paying.
        </p>
      </Container>
    </section>
  );
}
