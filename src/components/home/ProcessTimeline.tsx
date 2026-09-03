import {
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  LayoutDashboard,
  Phone,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { FOUNDED_YEAR, site, yearsInBusiness } from "@/data/site";

const steps = [
  {
    icon: PhoneCall,
    title: "Reach out",
    description:
      "Call us or request a consultation. We learn about your goals, your timeline, and what brought you to the U.S.",
  },
  {
    icon: ClipboardList,
    title: "Case assessment",
    description:
      "A detailed $100 consultation reviews your situation against USCIS and Department of Labor guidance — applied toward your service if you move forward.",
  },
  {
    icon: FileCheck2,
    title: "Documentation & filing",
    description:
      "We prepare, edit, and submit your full documentation packet, tailored to the visa category that fits your case.",
  },
  {
    icon: LayoutDashboard,
    title: "Ongoing tracking",
    description:
      "Follow your case from your own account, with alerts as it moves forward and support if a Request for Evidence arises.",
  },
];

const trustPoints = [
  `${yearsInBusiness()}+ years, since ${FOUNDED_YEAR}`,
  "100% confidential",
  "Response within 24 hours",
];

export function ProcessTimeline() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            How It Works
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            A clear process, from first call to approval
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-body">
            No confusing back-and-forth — just a straightforward path, with a
            consultant you can call at any step.
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_400px] lg:items-start lg:gap-16">
          <ul className="space-y-2">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 80} as="li">
                <div className="group flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-maroon to-accent-dark text-white shadow-lg shadow-maroon/30 ring-4 ring-maroon/10 transition-transform duration-300 group-hover:scale-105">
                      <step.icon className="size-5" aria-hidden="true" />
                      <span className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full border-2 border-white bg-ink text-[10px] font-bold text-white">
                        {index + 1}
                      </span>
                    </span>
                    {index !== steps.length - 1 && (
                      <span
                        className="mt-2 w-px flex-1 bg-gradient-to-b from-maroon/30 to-border"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className={index !== steps.length - 1 ? "pb-10" : undefined}>
                    <p className="text-xs font-bold uppercase tracking-wide text-body/50">
                      Step 0{index + 1}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </ul>

          <FadeIn className="relative lg:sticky lg:top-24">
            <div
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-maroon/30 via-accent/20 to-transparent blur-2xl"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-ink via-ink to-maroon-dark p-8 text-white shadow-2xl shadow-ink/30">
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-accent/20 blur-3xl"
                aria-hidden="true"
              />

              <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white/80">
                <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
                Limited consultation slots this month
              </span>

              <div className="relative mt-6 flex items-center gap-3">
                <span className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/20 motion-reduce:hidden" />
                  <PhoneCall className="relative size-5" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold">Ready when you are.</h3>
              </div>
              <p className="relative mt-3 text-sm leading-relaxed text-white/70">
                Call our consultants directly, or book your consultation
                online — no forms, no waiting for a callback.
              </p>

              <div className="relative mt-6 flex items-end justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                <div>
                  <p className="text-3xl font-bold text-white">$100</p>
                  <p className="text-xs text-white/60">Consultation fee</p>
                </div>
                <p className="max-w-[9rem] text-right text-xs leading-relaxed text-white/60">
                  Applied toward your service if you move forward
                </p>
              </div>

              <div className="relative mt-6 space-y-3">
                <a
                  href={site.phoneHref}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-maroon/40 transition-all duration-200 hover:scale-[1.02] hover:bg-maroon-dark"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {site.phone}
                </a>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                >
                  <CalendarCheck className="size-4" aria-hidden="true" />
                  Book a Consultation Online
                </a>
              </div>

              <ul className="relative mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-5">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-1.5 text-xs text-white/60">
                    <CheckCircle2 className="size-3.5 text-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
