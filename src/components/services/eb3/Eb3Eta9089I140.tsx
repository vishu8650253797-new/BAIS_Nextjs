import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const eta9089Points = [
  "Filed in FLAG after the quiet period",
  "The filing date becomes the priority date",
  "DOL average analyst review: 336 days (August 2026 decisions); reviewing November 2025 filings; audits at December 2025",
  "No premium processing",
];

const i140Points = [
  "Filed within 180 days of certification",
  "Proves qualifications and ability to pay",
  "Premium: 15 business days ($2,965)",
  "Fee $715 + Asylum Program Fee ($600 / $300 small / $0 nonprofit)",
  "After 180 days approved, the priority date is generally kept if you change employers",
];

export function Eb3Eta9089I140() {
  return (
    <section id="i-140" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          PERM step 3 + I-140
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          PERM Step 3: Filing Form ETA-9089, Then the I-140
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">ETA-9089 (PERM application)</h3>
            <ul className="mt-4 space-y-2.5">
              {eta9089Points.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">I-140 (immigrant petition)</h3>
            <ul className="mt-4 space-y-2.5">
              {i140Points.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
