import Link from "next/link";
import { ArrowRight, Briefcase, Settings, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const roles = [
  {
    icon: Briefcase,
    title: "Executive",
    description: "Directs the company or a major part of it and sets goals and policy.",
  },
  {
    icon: Users,
    title: "People manager",
    description: "Supervises other managers or professionals, with hiring and firing authority.",
  },
  {
    icon: Settings,
    title: "Function manager",
    description: "Manages an essential function at a senior level while others do the daily work.",
  },
];

const rfeReasons = [
  "Too few staff under the beneficiary",
  "Owner doing sales, operations or bookkeeping",
  "Generic duty descriptions",
  "U.S. entity doing business for less than 1 year",
  "Unclear ownership chain",
  "Weak ability-to-pay evidence",
];

export function Eb1cManagerTypes() {
  return (
    <section className="bg-white py-20">
      <Container>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Manager or Executive: What USCIS Looks For
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {roles.map((role, index) => (
            <FadeIn key={role.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-maroon">
                  <role.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{role.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-body">
          For small and mid-size companies, USCIS looks at whether staffing
          is reasonable for the company&apos;s stage and industry, and
          whether the manager is relieved from day-to-day operational work.
        </p>

        <FadeIn className="mt-6 rounded-2xl bg-ink p-7 text-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/30">
          <h3 className="text-base font-bold text-white">
            Common reasons EB-1C petitions get an RFE
          </h3>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {rfeReasons.map((reason) => (
              <li key={reason} className="flex items-start gap-2.5 text-sm text-white/75">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {reason}
              </li>
            ))}
          </ul>
        </FadeIn>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Have Us Review Your Case Free
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
