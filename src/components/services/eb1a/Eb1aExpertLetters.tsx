import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const stats = [
  { value: "350+", label: "Professors & industry experts in our network" },
  { value: "Independent", label: "Matched for credentials and no prior working relationship" },
  { value: "Evidence-tied", label: "Every claim cross-referenced to your exhibits" },
  { value: "RFE-ready", label: "New targeted letters when USCIS raises a concern" },
];

const letterTypes = [
  {
    label: "Who writes it",
    independent: "A recognized expert with no prior working relationship with you",
    dependent: "A supervisor, co-author, mentor or colleague",
  },
  {
    label: "What it proves",
    independent: "Your reputation and impact extend beyond your own circle, which is key for \"sustained acclaim\"",
    dependent: "First-hand detail on your specific contributions and role",
  },
  { label: "Typical weight", independent: "Generally higher", dependent: "Supporting", good: true },
  { label: "In a strong petition", independent: "Usually the majority", dependent: "Some, for detail" },
];

const steps = [
  { title: "Criteria map", description: "Which criteria and final-merits points each letter must address." },
  { title: "Expert match", description: "Recognized experts in your field, chosen for credentials and independence." },
  { title: "Expert review", description: "The expert studies your record: papers, patents, products, citations, data." },
  { title: "Opinion & signature", description: "Their own professional opinion, on letterhead, with a signature and CV." },
  { title: "Integration", description: "Every claim cross-referenced to exhibits in your petition." },
];

const persuasivePoints = [
  "The expert's credentials and why they can judge your field",
  "The relationship (or lack of one) stated clearly",
  "Specific contributions with real-world impact: adoption, citations, revenue, users",
  "Comparison to the field: why your work stands above peers'",
  "A conclusion tied to the legal standard, not generic praise",
];

export function Eb1aExpertLetters() {
  return (
    <section id="expert-letters" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Independent expert opinion letters
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Expert Opinion Letters for EB-1A: From Our Network of 350+
          Professors and Industry Experts
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          In an EB-1A petition, much of the case is about{" "}
          <strong className="text-ink">judgment</strong>. Are your
          contributions &quot;of major significance&quot;? Is your role
          &quot;critical&quot;? Have you reached the top of your field?
          Expert opinion letters are where recognized authorities explain
          that judgment to a USCIS officer who isn&apos;t an expert in your
          field. Letters from <strong className="text-ink">independent
          experts</strong>, people who know your work but have never worked
          with you, generally carry the most weight.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 60}>
              <div className="h-full rounded-2xl bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <p className="text-xl font-bold text-maroon">{stat.value}</p>
                <p className="mt-2 text-xs text-body/60">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <h3 className="mt-10 text-lg font-bold text-ink">
          Independent vs dependent letters: why the mix matters
        </h3>
        <FadeIn delay={80} className="mt-5 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink"></th>
                <th className="p-3 font-bold text-ink">Independent expert letter</th>
                <th className="p-3 font-bold text-ink">Dependent (collaborator) letter</th>
              </tr>
            </thead>
            <tbody>
              {letterTypes.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className={`p-3 ${row.good ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.independent}
                  </td>
                  <td className="p-3 text-body">{row.dependent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
        <p className="mt-4 text-xs leading-relaxed text-body/60">
          Most strong EB-1A petitions include roughly five to eight letters
          with a deliberate mix. There&apos;s no fixed number; quality and
          specificity matter more than quantity.
        </p>

        <h3 className="mt-10 text-lg font-bold text-ink">
          How the BAIS expert letter process works
        </h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 50}>
              <div className="h-full rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="font-serif text-xl font-bold text-maroon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 text-sm font-bold text-ink">{step.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-body">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">
              What makes an expert letter persuasive
            </h3>
            <ul className="mt-4 space-y-2.5">
              {persuasivePoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-white">
              Expert letters for RFE responses
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              If USCIS questions a criterion or the final merits, a{" "}
              <strong className="text-white">new</strong> letter from a
              different independent expert, targeted to the officer&apos;s
              specific concern, is often one of the most effective
              responses.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              <strong className="text-white">Fields:</strong> AI/ML ·
              computer science · software · data science · biotech ·
              medicine · engineering · physics · business &amp; finance ·
              arts &amp; design · education · sports
            </p>
          </FadeIn>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
          >
            Get Matched With an Independent Expert
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
          >
            Ask About Expert Letters for Your RFE
          </Link>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Experts provide their own independent professional opinions based
          on your evidence and are not asked to state anything they
          don&apos;t believe. Letters are evidence: USCIS decides their
          weight, and they don&apos;t replace primary documentation. Expert
          availability depends on field. Expert letters don&apos;t guarantee
          approval.
        </p>
      </Container>
    </section>
  );
}
