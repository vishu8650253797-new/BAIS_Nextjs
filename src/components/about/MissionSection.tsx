import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const values = [
  {
    title: "Quality Documentation",
    description:
      "Our goal is to be known for quality documentation across every immigrant and nonimmigrant petition we prepare.",
  },
  {
    title: "Timely & Affordable",
    description:
      "A dedicated team of immigration consultants and document specialists focused on fast, effective, affordable service.",
  },
  {
    title: "Informed by USCIS & DOL",
    description:
      "We follow USCIS and Department of Labor guidance closely, so our process reflects current requirements.",
  },
];

export function MissionSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <SectionHeading
          eyebrow="Our Mission"
          title="Guidance You Can Rely On, Stated Honestly"
          align="center"
          className="mx-auto [&_h2]:text-white [&_p]:text-white/70"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 80} className="rounded-xl border border-white/10 p-7">
              <h3 className="font-bold text-white">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {value.description}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mx-auto mt-14 max-w-2xl border-l-2 border-accent pl-6 text-center sm:text-left">
          <p className="text-lg italic leading-relaxed text-white/85">
            &ldquo;{site.missionQuote}&rdquo;
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
