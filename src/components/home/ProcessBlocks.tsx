import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { PathwayCard } from "@/components/home/mockups/PathwayCard";
import { TimelineCard } from "@/components/home/mockups/TimelineCard";
import { DashboardCard } from "@/components/home/mockups/DashboardCard";

const blocks = [
  {
    number: "01",
    eyebrow: "Consultation",
    title: "A detailed consultation, applied to your case",
    description:
      "We offer a detailed consultation for $100, including an assessment of your situation and an overview of your case — applied toward your service if you choose to proceed with us.",
    points: [
      "A $100 consultation, applied toward your service",
      "Our main source of knowledge is USCIS and the Department of Labor",
      "A clear recommendation before any paperwork begins",
    ],
    mockup: <PathwayCard />,
    reverse: false,
  },
  {
    number: "02",
    eyebrow: "Documentation",
    title: "Careful preparation of every document",
    description:
      "Our business specializes in the preparation of the paperwork and documents needed to obtain visas. Once carefully prepared and edited, we submit the documentation packet to USCIS.",
    points: [
      "A dedicated team preparing and reviewing your documentation",
      "Careful editing before anything is submitted to USCIS",
      "Timely and affordable service, from consultation to filing",
    ],
    mockup: <TimelineCard />,
    reverse: true,
  },
  {
    number: "03",
    eyebrow: "Ongoing Support",
    title: "Track your case from your own account",
    description:
      "Each and every client has their own account from where they can track case progress and case alerts from time to time.",
    points: [
      "Track your case progress from your own account",
      "Case alerts as your filing moves forward",
      "Support if a Request for Evidence (RFE) arises",
    ],
    mockup: <DashboardCard />,
    reverse: false,
  },
];

export function ProcessBlocks() {
  return (
    <section className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Why Bay Area Immigration Services
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Quality documentation, timely and affordable service
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-body">
            Our expert team of reliable immigration consultants and document
            specialists is dedicated to getting you fast, effective, and
            affordable service.
          </p>
        </div>

        <div className="mt-16 space-y-14">
          {blocks.map((block) => (
            <FadeIn key={block.number}>
            <div className="grid items-center gap-10 rounded-2xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 sm:p-10 lg:grid-cols-2 lg:gap-16">
              <div className={block.reverse ? "lg:order-2" : undefined}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-bold text-body">
                  {block.number}
                  <span className="text-body/40">·</span>
                  {block.eyebrow}
                </span>
                <h3 className="mt-5 text-2xl font-bold leading-snug text-ink sm:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-body">{block.description}</p>

                <ul className="mt-6 space-y-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-body">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={block.reverse ? "lg:order-1" : undefined}>{block.mockup}</div>
            </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
