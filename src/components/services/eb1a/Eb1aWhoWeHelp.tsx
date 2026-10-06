import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const profiles = [
  {
    profile: "AI, ML & data scientists",
    criteria: "Original contributions, judging (peer review), scholarly articles, critical role",
  },
  {
    profile: "Software & product engineers",
    criteria: "Critical role, high salary, original contributions (patents, adopted systems), judging",
  },
  {
    profile: "Startup founders",
    criteria: "Critical role, media coverage, awards, high compensation or funding as comparable evidence",
  },
  {
    profile: "Researchers & professors",
    criteria: "Scholarly articles, citations as evidence of contributions, judging, memberships",
  },
  {
    profile: "Artists, musicians, designers",
    criteria: "Exhibitions, awards, media, commercial success",
  },
  {
    profile: "Athletes & coaches",
    criteria: "Awards and rankings, memberships, media, critical role",
  },
];

export function Eb1aWhoWeHelp() {
  return (
    <section className="bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Who we help
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-1A for Researchers, Engineers, Founders and Artists
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Profile</th>
                <th className="p-3 font-bold text-ink">Typical strongest criteria</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((item, index) => (
                <tr
                  key={item.profile}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{item.profile}</td>
                  <td className="p-3 text-body">{item.criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link href="/blog" className="font-semibold text-maroon hover:text-maroon-dark">
            AI &amp; data scientists: read our EB-1 guide →
          </Link>
          <Link href="/blog" className="font-semibold text-maroon hover:text-maroon-dark">
            No major award? Read this →
          </Link>
        </div>
      </Container>
    </section>
  );
}
