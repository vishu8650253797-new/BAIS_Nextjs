import Link from "next/link";
import { Container } from "@/components/ui/Container";

const entries = [
  { id: "who-we-are", label: "1. Who we are and agreeing to these terms" },
  { id: "what-we-are", label: "2. What we are, and what we are not" },
  { id: "site-information", label: "3. Information on the Site" },
  { id: "no-guarantees", label: "4. No guarantees" },
  { id: "consultations-services", label: "5. Free consultations, quotes and services" },
  { id: "your-responsibilities", label: "6. Your responsibilities" },
  { id: "forms-messages", label: "7. Forms, messages and consent" },
  { id: "text-message-terms", label: "8. Text message terms" },
  { id: "third-party", label: "9. Third-party websites and tools" },
  { id: "intellectual-property", label: "10. Intellectual property" },
  { id: "acceptable-use", label: "11. Acceptable use" },
  { id: "disclaimer-warranties", label: "12. Disclaimer of warranties" },
  { id: "limitation-liability", label: "13. Limitation of liability" },
  { id: "indemnity", label: "14. Indemnity" },
  { id: "governing-law", label: "15. Governing law and disputes" },
  { id: "changes-termination", label: "16. Changes and termination" },
  { id: "accessibility", label: "17. Accessibility" },
  { id: "general", label: "18. General" },
  { id: "contact-us", label: "19. Contact us" },
];

export function TermsToc() {
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
