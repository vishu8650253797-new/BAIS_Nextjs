import { CheckCircle2, XCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const dos = [
  "Keep following the rules of your current status",
  "Keep copies of your receipt notice",
  "Respond quickly to any RFE or biometrics notice",
  "Update your address with USCIS within 10 days of moving",
];

const donts = [
  "Start the new activity (school or work) before approval",
  "Travel abroad: leaving generally abandons a pending change of status",
  "Let your current I-94 expire without a plan",
  "Work without authorization",
];

export function CosWhilePending() {
  return (
    <section id="while-pending" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          While pending
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          While Your Change of Status Is Pending: Do&apos;s and Don&apos;ts
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-hidden rounded-2xl border border-border transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-emerald-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4" aria-hidden="true" /> Do
                  </span>
                </th>
                <th className="p-3 font-bold text-maroon">
                  <span className="flex items-center gap-1.5">
                    <XCircle className="size-4" aria-hidden="true" /> Don&apos;t
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {dos.map((item, index) => (
                <tr
                  key={item}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 text-body">{item}</td>
                  <td className="p-3 text-body">{donts[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </Container>
    </section>
  );
}
