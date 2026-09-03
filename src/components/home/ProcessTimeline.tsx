import {
  Bell,
  CalendarCheck,
  ClipboardList,
  Clock,
  FileEdit,
  Landmark,
  Lock,
  Phone,
  PhoneCall,
  Shield,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { FOUNDED_YEAR, site, yearsInBusiness } from "@/data/site";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Consultation",
    description:
      "Call us or request a consultation. We learn about your goals, your timeline, and what brought you to the U.S.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Case Assessment",
    description:
      "A detailed consultation reviews your situation against USCIS and Department of Labor guidance — applied toward your service if you move forward.",
  },
  {
    number: "03",
    icon: FileEdit,
    title: "Documentation & Filing",
    description:
      "We prepare, edit, and submit your full documentation packet, tailored to the visa category that fits your case.",
  },
  {
    number: "04",
    icon: Bell,
    title: "Ongoing Case Tracking",
    description:
      "Follow your case from your own account, with alerts as it moves forward and support if a Request for Evidence arises.",
  },
];

const trustPoints = [
  { icon: Shield, text: `${yearsInBusiness()}+ years, since ${FOUNDED_YEAR}` },
  { icon: Lock, text: "100% confidential" },
  { icon: Clock, text: "Response within 24 hours" },
];

export function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream/40 to-white py-24">
      <Container className="relative grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-start">
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            How It Works
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight tracking-normal text-ink sm:text-5xl">
            A clear process,
            <br />
            from first call to approval
          </h2>
          <span className="mt-5 block h-1 w-14 rounded-full bg-maroon" aria-hidden="true" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-body">
            No confusing back-and-forth — just a straightforward path, with a
            consultant you can call at any step.
          </p>

          <div className="relative mt-16">
            <div
              className="absolute inset-x-[12%] top-10 hidden h-px bg-maroon/25 sm:block"
              aria-hidden="true"
            />
            {[25, 50, 75].map((position) => (
              <span
                key={position}
                className="absolute top-10 hidden size-1.5 -translate-y-1/2 rounded-full bg-maroon/50 sm:block"
                style={{ left: `${position}%` }}
                aria-hidden="true"
              />
            ))}

            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-4 sm:gap-x-4 sm:gap-y-10">
              {steps.map((step, index) => (
                <FadeIn key={step.title} delay={index * 80}>
                  <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
                    <span className="relative z-10 flex size-20 items-center justify-center rounded-full bg-white text-maroon shadow-md shadow-ink/5 ring-1 ring-maroon/10">
                      <step.icon className="size-7" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <p className="mt-6 font-serif text-5xl text-maroon">{step.number}</p>
                    <span className="mt-2 h-0.5 w-5 bg-maroon" aria-hidden="true" />
                    <h3 className="mt-3 text-base font-bold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <svg
            className="pointer-events-none absolute -top-4 right-0 h-48 w-full text-ink/[0.07]"
            viewBox="0 0 400 180"
            fill="none"
            aria-hidden="true"
          >
            <path d="M15 160 L15 100 L30 100 L30 80 L45 80 L45 160" stroke="currentColor" strokeWidth="1.5" />
            <path d="M65 160 L65 65 L88 65 L88 160" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="76.5" cy="50" r="11" stroke="currentColor" strokeWidth="1.5" />
            <path d="M105 160 L105 110 L128 110 L128 160" stroke="currentColor" strokeWidth="1.5" />
            <path d="M35 45 Q 170 -5 345 35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
            <path d="M328 24 L352 35 L326 44 L332 35 Z" fill="currentColor" />
          </svg>

          <div className="relative flex items-start justify-center pt-6 sm:justify-end sm:pr-6">
            <div className="relative h-44 w-32 rotate-[-6deg] rounded-xl bg-gradient-to-br from-ink to-body p-4 shadow-xl shadow-ink/25 sm:h-52 sm:w-36">
              <div className="mx-auto flex size-9 items-center justify-center rounded-full border border-white/30">
                <Shield className="size-4 text-white/70" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p className="mt-5 text-center font-serif text-sm tracking-[0.2em] text-white/80">
                PASSPORT
              </p>
            </div>
            <div className="relative -ml-10 mt-12 h-40 w-32 rotate-[5deg] rounded-xl border border-border bg-white p-4 shadow-xl shadow-ink/10 sm:h-48 sm:w-36">
              <div className="flex items-start gap-2">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-maroon/30 text-maroon">
                  <Landmark className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <p className="text-[9px] font-semibold leading-tight text-ink">
                  U.S. Citizenship
                  <br />
                  and Immigration
                  <br />
                  Services
                </p>
              </div>
              <div className="mt-4 space-y-1.5">
                <span className="block h-1 w-full rounded-full bg-border" />
                <span className="block h-1 w-4/5 rounded-full bg-border" />
                <span className="block h-1 w-full rounded-full bg-border" />
                <span className="block h-1 w-3/5 rounded-full bg-border" />
              </div>
            </div>
          </div>

          <FadeIn className="relative mt-10">
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

              <div className="relative mt-6 flex items-start gap-4">
                <span className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/20 motion-reduce:hidden" />
                  <PhoneCall className="relative size-5" aria-hidden="true" />
                </span>
                <p className="pt-2 text-sm leading-relaxed text-white/80">
                  Call our consultants directly, or book your consultation
                  online — no forms, no waiting for a callback.
                </p>
              </div>

              <div className="relative mt-6 flex items-end justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                <div>
                  <p className="text-3xl font-bold text-white">$100</p>
                  <p className="text-xs text-white/60">Consultation fee</p>
                </div>
                <p className="max-w-[9rem] text-right text-xs leading-relaxed text-white/60">
                  Applied toward your service if you move forward
                </p>
              </div>

              <div className="relative mt-6 grid grid-cols-[1.3fr_1fr] gap-3">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-maroon px-4 py-3 text-center text-sm font-bold text-white shadow-lg shadow-maroon/40 transition-all duration-200 hover:scale-[1.02] hover:bg-maroon-dark"
                >
                  <CalendarCheck className="size-4 shrink-0" aria-hidden="true" />
                  Book a Consultation Online
                </a>
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  {site.phone}
                </a>
              </div>

              <ul className="relative mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5">
                {trustPoints.map((point) => (
                  <li key={point.text} className="flex items-center gap-1.5 text-xs text-white/60">
                    <point.icon className="size-3.5 text-white/40" aria-hidden="true" />
                    {point.text}
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
