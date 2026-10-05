import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const categories = [
  {
    category: "College & University Student",
    who: "Degree, non-degree and student-intern programs",
    duration: "Degree: length of the program · Non-degree: 24 months · Student intern: 12 months",
  },
  {
    category: "Intern",
    who: "Current students or recent graduates (12 months) of a foreign post-secondary institution",
    duration: "12 months",
  },
  {
    category: "Trainee",
    who: "Foreign degree + 1 year of experience abroad, or 5 years of experience abroad",
    duration: "18 months (12 in hospitality & tourism)",
  },
  {
    category: "Professor & Research Scholar",
    who: "Teaching, lecturing, observing, consulting, research",
    duration: "5 years",
  },
  {
    category: "Short-Term Scholar",
    who: "Short lecturing, observing, consulting or collaboration visits",
    duration: "6 months",
  },
  {
    category: "Specialist",
    who: "Experts sharing specialized knowledge",
    duration: "1 year",
  },
  {
    category: "Teacher",
    who: "Accredited U.S. primary or secondary schools",
    duration: "3 years (extensions possible)",
  },
  {
    category: "Physician",
    who: "Graduate medical education (ECFMG)",
    duration: "Generally 7 years",
  },
  {
    category: "Other",
    who: "Au pair, camp counselor, summer work travel, secondary school student, government and international visitor",
    duration: "Varies",
  },
];

export function J1Categories() {
  return (
    <section id="categories" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Categories
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          J-1 Visa Categories: Who It&apos;s For and How Long You Can Stay
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Category</th>
                <th className="p-3 font-bold text-ink">Who it&apos;s for</th>
                <th className="p-3 font-bold text-ink">Maximum duration*</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((item, index) => (
                <tr
                  key={item.category}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{item.category}</td>
                  <td className="p-3 text-body">{item.who}</td>
                  <td className="p-3 text-body/70">{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          *Durations come from Department of State category rules. Exact
          dates are set by your sponsor on the DS-2019. From September 15,
          2026, admission is capped at your program end date, up to 4 years
          at a time.
        </p>

        <Link
          href="/services#employment-immigration"
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-maroon hover:text-maroon-dark"
        >
          J-1 Teachers: see our Teacher Exchange guide →
        </Link>
      </Container>
    </section>
  );
}
