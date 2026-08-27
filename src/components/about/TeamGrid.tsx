import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { team } from "@/data/team";

export function TeamGrid() {
  const usTeam = team.filter((member) => member.chapter === "US");
  const indiaTeam = team.filter((member) => member.chapter === "India");

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          title="The People Behind Your Case"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
              U.S. Chapter
            </h3>
            <ul className="mt-6 space-y-5">
              {usTeam.map((member, index) => (
                <FadeIn key={member.name} delay={index * 50} as="li" className="border-b border-border pb-4">
                  <p className="font-bold text-ink">{member.name}</p>
                  <p className="text-sm text-body">{member.title}</p>
                </FadeIn>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
              India Chapter
            </h3>
            <ul className="mt-6 space-y-5">
              {indiaTeam.map((member, index) => (
                <FadeIn key={member.name} delay={index * 50} as="li" className="border-b border-border pb-4">
                  <p className="font-bold text-ink">{member.name}</p>
                  <p className="text-sm text-body">{member.title}</p>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
