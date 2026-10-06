import type { Metadata } from "next";
import { CitizenshipHero } from "@/components/services/citizenship/CitizenshipHero";
import { CitizenshipOverview } from "@/components/services/citizenship/CitizenshipOverview";
import { CitizenshipEligibility } from "@/components/services/citizenship/CitizenshipEligibility";
import { CitizenshipForms } from "@/components/services/citizenship/CitizenshipForms";
import { CitizenshipProcess } from "@/components/services/citizenship/CitizenshipProcess";
import { CitizenshipTimeline } from "@/components/services/citizenship/CitizenshipTimeline";
import { CitizenshipTest } from "@/components/services/citizenship/CitizenshipTest";
import { CitizenshipGoodMoralCharacter } from "@/components/services/citizenship/CitizenshipGoodMoralCharacter";
import { CitizenshipAfterOath } from "@/components/services/citizenship/CitizenshipAfterOath";
import { CitizenshipBayArea } from "@/components/services/citizenship/CitizenshipBayArea";
import { CitizenshipWhyBais } from "@/components/services/citizenship/CitizenshipWhyBais";
import { CitizenshipReviews } from "@/components/services/citizenship/CitizenshipReviews";
import { CitizenshipFaq, citizenshipFaqs } from "@/components/services/citizenship/CitizenshipFaq";
import { CitizenshipGuides } from "@/components/services/citizenship/CitizenshipGuides";
import { CitizenshipFinalCta } from "@/components/services/citizenship/CitizenshipFinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "U.S. Citizenship Help in the Bay Area | N-400 Prep | Fremont, CA | BAIS",
  description:
    "Become a U.S. citizen with a Fremont team since 2001. N-400 prep, 2025 civics test practice, interview coaching, and OCI after your oath. Free review.",
  alternates: { canonical: "/services/us-citizenship" },
};

const pageUrl = `${site.url}/services/us-citizenship`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "U.S. Citizenship (Naturalization) Documentation",
    serviceType: "Immigration document preparation",
    provider: {
      "@type": "LegalService",
      name: site.name,
      url: site.url,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: ["Fremont", "San Jose", "Oakland", "San Francisco", "Bay Area", "California"],
    url: pageUrl,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: "U.S. Citizenship", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Become a U.S. Citizen, With Help You Can Trust in the Bay Area",
    url: pageUrl,
    dateModified: "2026-10-07",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: citizenshipFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function UsCitizenshipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CitizenshipHero />
      <CitizenshipOverview />
      <CitizenshipEligibility />
      <CitizenshipForms />
      <CitizenshipProcess />
      <CitizenshipTimeline />
      <CitizenshipTest />
      <CitizenshipGoodMoralCharacter />
      <CitizenshipAfterOath />
      <CitizenshipBayArea />
      <CitizenshipWhyBais />
      <CitizenshipReviews />
      <CitizenshipFaq />
      <CitizenshipGuides />
      <CitizenshipFinalCta />
    </>
  );
}
