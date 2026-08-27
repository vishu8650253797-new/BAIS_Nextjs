import Link from "next/link";
import { Award, Briefcase, Building2, ChevronRight, Users } from "lucide-react";

const paths = [
  {
    icon: Briefcase,
    title: "Work & Career",
    subtitle: "H-1B, L-1, O-1 and more",
    href: "/services#employment-immigration",
  },
  {
    icon: Building2,
    title: "Business & Investment",
    subtitle: "E-1, E-2 and more",
    href: "/services#business-investor",
  },
  {
    icon: Users,
    title: "Family Sponsorship",
    subtitle: "Family-Based, K-1, I-130",
    href: "/services#family-immigration",
  },
  {
    icon: Award,
    title: "Permanent Residency",
    subtitle: "EB-1, EB-2, EB-5 and more",
    href: "/services#permanent-immigration",
  },
];

export function VisaPathCard() {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-xl shadow-ink/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-ink/15 sm:p-7">
      <p className="text-xs font-bold uppercase tracking-wide text-accent">Find Your Path</p>
      <h3 className="mt-2 text-xl font-bold text-ink">What Brings You to the U.S.?</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-body">
        Select a category to explore the visa options that fit your situation.
      </p>

      <ul className="mt-5 space-y-2">
        {paths.map((path) => (
          <li key={path.title}>
            <Link
              href={path.href}
              className="group flex items-center gap-3 rounded-xl border border-border p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-maroon/20 hover:bg-cream/60 hover:shadow-md hover:shadow-ink/5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cream text-maroon">
                <path.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-bold text-ink">{path.title}</span>
                <span className="block text-xs text-body/70">{path.subtitle}</span>
              </span>
              <ChevronRight
                className="size-4 shrink-0 text-body/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-maroon"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/services"
        className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-lg bg-maroon px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-maroon-dark"
      >
        Explore All Services
        <ChevronRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
