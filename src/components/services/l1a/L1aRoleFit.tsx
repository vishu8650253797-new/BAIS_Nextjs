import Link from "next/link";
import { ArrowRight, Briefcase, Settings, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const roles = [
  {
    icon: Briefcase,
    title: "Executive",
    description:
      "Directs the company or a major part of it, sets goals and policies, and makes key decisions with little day-to-day supervision. Typical titles: CEO, Managing Director, Country Head.",
  },
  {
    icon: Users,
    title: "People manager",
    description:
      "Manages the organization, a department or function, and supervises other managers, supervisors or professionals, with authority to hire, fire or recommend personnel actions.",
  },
  {
    icon: Settings,
    title: "Function manager",
    description:
      "Manages an essential function, such as U.S. sales, supply chain or finance, at a senior level, even without many direct reports, while others do the day-to-day work.",
  },
];

const whatUscisWants = [
  "Duty breakdown with the % of time on each task",
  "Org charts for both companies: names, titles, duties",
  "Others handling routine tasks like sales calls, shipping and bookkeeping",
  "For new offices, a hiring plan for year one",
];

const rfeReasons = [
  "Owner or manager doing hands-on operational work",
  "No real staff below the transferee",
  "Vague, generic job descriptions",
  "Unclear ownership between the two companies",
  "A thin business plan, or no growth at the 1-year extension",
];

export function L1aRoleFit() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          The L-1A role
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Does Your Role Qualify as Manager or Executive?
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          L-1A depends on <strong>what the person actually does</strong>, not
          on their job title. USCIS looks at both the role held abroad and
          the role planned in the U.S.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {roles.map((role, index) => (
            <FadeIn key={role.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-11 items-center justify-center rounded-full bg-cream text-maroon">
                  <role.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{role.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">What USCIS wants to see</h3>
            <ul className="mt-4 space-y-2.5">
              {whatUscisWants.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={80} className="rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-white">
              Common reasons L-1A cases get an RFE
            </h3>
            <ul className="mt-4 space-y-2.5">
              {rfeReasons.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Have Us Review Your Role Description Free
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
