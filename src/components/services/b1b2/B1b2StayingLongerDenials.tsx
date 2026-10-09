import Link from "next/link";
import { AlertTriangle, Clock, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const cards = [
  {
    icon: Clock,
    title: "Staying longer",
    description:
      "Your I-94 date sets your stay. File Form I-539 before it expires. Overstays can cancel your visa and trigger 3-year or 10-year bars. Want to study or work? A change of status may be possible.",
  },
  {
    icon: AlertTriangle,
    title: "Why visas are refused (214(b))",
    description:
      "The officer isn't convinced you'll return home: weak ties, an unclear purpose, or signs you plan to stay or work. Fix: a clear purpose, honest consistent answers, matching documents and real ties. You can reapply.",
  },
  {
    icon: ShieldAlert,
    title: "Scam warning",
    description:
      "The State Department never sells appointment slots through social media or messaging apps. Beware of anyone who guarantees a visa or \"reserves\" interview dates.",
  },
];

const links = [
  { label: "Change of status", href: "/services/change-of-status" },
  { label: "H-1B", href: "/services/h-1b-visa" },
];

export function B1b2StayingLongerDenials() {
  return (
    <section id="staying-longer" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Staying longer and denials
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Staying Longer, Denials and Scams
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-11 items-center justify-center rounded-full bg-cream text-maroon">
                  <card.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{card.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 flex flex-wrap gap-x-2 gap-y-1 text-sm">
          {links.map((link, index) => (
            <span key={link.href} className="inline-flex items-center gap-2">
              <Link href={link.href} className="font-semibold text-maroon hover:text-maroon-dark">
                {link.label} →
              </Link>
              {index < links.length - 1 && <span className="text-body/40">·</span>}
            </span>
          ))}
        </p>
      </Container>
    </section>
  );
}
