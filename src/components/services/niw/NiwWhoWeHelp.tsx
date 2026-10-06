import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const profiles = [
  { profile: "Software, AI & data", examples: "Cybersecurity, AI safety, healthcare AI, critical infrastructure software" },
  { profile: "Researchers & PhDs", examples: "Clean energy, semiconductors, biotech, materials science" },
  { profile: "Physicians & healthcare", examples: "Care in underserved areas, public health, medical research" },
  { profile: "Engineers", examples: "Infrastructure, aerospace, manufacturing, energy" },
  { profile: "Entrepreneurs & founders", examples: "U.S. startups creating jobs and innovation in key industries" },
  { profile: "Educators & policy experts", examples: "STEM education, economic policy, public-sector innovation" },
];

export function NiwWhoWeHelp() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Who we help
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-2 NIW for STEM, Healthcare, Research and Founders
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink">Profile</th>
                <th className="p-3 font-bold text-ink">Example endeavors</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((item, index) => (
                <tr
                  key={item.profile}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{item.profile}</td>
                  <td className="p-3 text-body">{item.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </Container>
    </section>
  );
}
