import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const categories = [
  {
    title: "Skilled workers",
    description:
      "At least 2 years of training or experience. The job requires 2+ years (not temporary or seasonal).",
  },
  {
    title: "Professionals",
    description: "A U.S. bachelor's degree or foreign equivalent. The job normally requires the degree.",
  },
  {
    title: "Other workers",
    description: "Unskilled roles (under 2 years of training). A separate, longer visa queue.",
  },
];

const requirements = [
  "A full-time, permanent job offer",
  "PERM certification (unless Schedule A)",
  "Worker qualifications met before joining (with exceptions)",
  "Employer ability to pay from the priority date",
];

export function Eb3Categories() {
  return (
    <section id="categories" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Categories
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-3 Categories: Skilled Workers, Professionals and Other Workers
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {categories.map((item, index) => (
            <FadeIn key={item.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">Schedule A shortcut</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              <strong className="text-ink">
                Registered nurses and physical therapists
              </strong>{" "}
              skip DOL recruitment. The employer files the I-140 directly
              with an uncertified ETA-9089, a prevailing wage determination
              and a posted notice.
            </p>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-white">Every EB-3 case needs</h3>
            <ul className="mt-4 space-y-2.5">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
