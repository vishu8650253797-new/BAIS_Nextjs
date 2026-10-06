import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const checklist = [
  "U.S. passport (Form DS-11, the first time)",
  "Register to vote in California",
  "Update Social Security",
  "Children under 18 with green cards may become citizens automatically; get proof with a passport or N-600",
  "Sponsor family: parents, spouse, children, siblings",
];

export function CitizenshipAfterOath() {
  return (
    <section id="after-oath" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          After your oath · our USP
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          After Your Oath: Passport, Voting, and OCI for Indian-Born Citizens
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">Your Oath-to-Passport checklist</h3>
            <ul className="mt-4 space-y-2.5">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-white">Citizenship to OCI, in one place</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              India doesn&apos;t allow dual citizenship. After naturalizing,
              you <strong className="text-white">surrender your Indian
              passport</strong> (renunciation) and can apply for an{" "}
              <strong className="text-white">OCI card</strong> for lifelong
              visa-free travel to India. BAIS prepares both.
            </p>
            <Link
              href="/services#other-services"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Plan My Renunciation &amp; OCI →
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
