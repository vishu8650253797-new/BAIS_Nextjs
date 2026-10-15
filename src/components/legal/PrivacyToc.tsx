import Link from "next/link";
import { Container } from "@/components/ui/Container";

const entries = [
  { id: "who-we-are", label: "1. Who we are and what this policy covers" },
  { id: "information-we-collect", label: "2. Information we collect" },
  { id: "how-we-use", label: "3. How we use information" },
  { id: "how-we-share", label: "4. How we share information" },
  { id: "cookies-ads", label: "5. Cookies, analytics and advertising" },
  { id: "texts-calls", label: "6. Text messages and calls" },
  { id: "retention", label: "7. How long we keep information" },
  { id: "security", label: "8. How we protect information" },
  { id: "california-rights", label: "9. Your California privacy rights" },
  { id: "other-states", label: "10. Residents of other states" },
  { id: "childrens-privacy", label: "11. Children's privacy" },
  { id: "where-processed", label: "12. Where information is processed" },
  { id: "links", label: "13. Links to other websites" },
  { id: "contact-us", label: "14. Contact us" },
  { id: "changes", label: "15. Changes to this policy" },
];

export function PrivacyToc() {
  return (
    <section className="bg-white py-10">
      <Container className="max-w-3xl">
        <p className="text-sm font-bold text-ink">Contents</p>
        <div className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {entries.map((entry) => (
            <Link
              key={entry.id}
              href={`#${entry.id}`}
              className="text-sm text-maroon transition-colors duration-200 hover:text-maroon-dark hover:underline"
            >
              {entry.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
