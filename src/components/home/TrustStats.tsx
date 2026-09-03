import { BellRing, Calendar, DollarSign, FileEdit, LayoutGrid, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { FOUNDED_YEAR, site, yearsInBusiness } from "@/data/site";

const stats = [
  {
    icon: Calendar,
    label: "Experience",
    value: `${yearsInBusiness()}+ years`,
    description: `Immigration consulting experience, founded in ${FOUNDED_YEAR}.`,
  },
  {
    icon: DollarSign,
    label: "Consultation",
    value: "$100",
    description: "A detailed case consultation, applied toward your service.",
  },
  {
    icon: LayoutGrid,
    label: "Coverage",
    value: "5 categories",
    description: "From employment and family visas to citizenship.",
  },
];

const teamWorkflow = [
  {
    icon: ShieldCheck,
    title: "Consultants assess & strategize",
    description:
      "Your case is reviewed against current USCIS and Department of Labor guidance before anything is filed.",
  },
  {
    icon: FileEdit,
    title: "Specialists prepare & file",
    description:
      "Our dedicated documentation team drafts, edits, and submits your complete petition packet.",
  },
  {
    icon: BellRing,
    title: "Coordinators track & support",
    description:
      "Real-time case alerts and RFE support, delivered from your own client account.",
  },
];

export function TrustStats() {
  return (
    <section className="relative overflow-hidden bg-cream py-24">
      <div
        className="pointer-events-none absolute -right-40 -top-24 size-[28rem] rounded-full bg-gradient-to-br from-maroon/10 via-accent/10 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            By the Numbers
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Experienced Immigration Consultants for Your Needs
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 80}>
              <div className="group relative overflow-hidden rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-maroon transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span className="flex size-11 items-center justify-center rounded-full bg-cream text-maroon">
                  <stat.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-body/50">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-bold text-maroon sm:text-4xl">{stat.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-body">{stat.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 rounded-[1.75rem] border border-border/60 bg-white/70 p-8 shadow-lg shadow-ink/5 backdrop-blur-sm sm:p-10">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            How Our Team Works
          </p>
          <h3 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
            Three roles, one coordinated case
          </h3>

          <div className="relative mt-10 grid gap-10 sm:grid-cols-3">
            <span
              className="absolute left-0 right-0 top-6 hidden h-px bg-border sm:block"
              aria-hidden="true"
            />
            {teamWorkflow.map((step) => (
              <div key={step.title} className="relative">
                <span className="relative z-10 flex size-12 items-center justify-center rounded-full bg-ink text-white shadow-md shadow-ink/20">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <h4 className="mt-5 text-base font-bold text-ink">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-body">{step.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
      <p className="sr-only">{site.consultationFee}</p>
    </section>
  );
}
