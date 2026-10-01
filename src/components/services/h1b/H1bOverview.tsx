import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const facts = [
  { label: "Visa type", value: "Nonimmigrant (temporary) work visa, Form I-129" },
  { label: "Who it's for", value: "Specialty-occupation roles requiring a bachelor's degree or equivalent" },
  { label: "Annual cap", value: "65,000 regular + 20,000 U.S. master's degree exemption" },
  { label: "Selection method", value: "Wage-weighted selection (since FY 2027): higher wage levels receive more entries" },
  { label: "Registration window", value: "March (next: March 2027 for FY 2028)" },
  { label: "Petition filing window", value: "At least 90 days, opening April 1" },
  { label: "Earliest start date", value: "October 1" },
  { label: "Length of stay", value: "3 years + 3-year extension (6 total); longer with a pending green card under AC21" },
  { label: "Dependents", value: "Spouse & children under 21 on H-4; some spouses qualify for H-4 EAD" },
  { label: "Green card path", value: "Yes (dual intent), typically PERM → I-140 → I-485" },
  { label: "Cap-exempt employers", value: "Universities, affiliated nonprofits, nonprofit & government research organizations" },
];

export function H1bOverview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is an H-1B Visa?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            The <strong>H-1B visa</strong> is a U.S. nonimmigrant work visa
            that lets employers hire foreign professionals in{" "}
            <strong>specialty occupations</strong>, meaning roles that
            require at least a bachelor&apos;s degree or its equivalent. It
            is granted for up to <strong>3 years</strong>, extendable to{" "}
            <strong>6 years</strong>. It allows <strong>dual intent</strong>,
            so holders can pursue a green card. New cap-subject H-1Bs are
            limited to <strong>85,000 per year</strong>.
          </div>
        </FadeIn>

        <h2 className="mt-12 text-2xl font-bold text-ink sm:text-3xl">
          H-1B Visa Key Facts (2026)
        </h2>
        <FadeIn delay={80} className="mt-6 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <tbody>
              {facts.map((fact, index) => (
                <tr
                  key={fact.label}
                  className={`transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream" : "bg-white"}`}
                >
                  <td className="w-1/3 border-t border-border p-3 font-semibold text-ink first:border-t-0">
                    {fact.label}
                  </td>
                  <td className="border-t border-border p-3 text-body first:border-t-0">
                    {fact.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-sm">
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-maroon hover:text-maroon-dark"
          >
            Not sure if your role qualifies? Ask us free →
          </Link>
        </p>
      </Container>
    </section>
  );
}
