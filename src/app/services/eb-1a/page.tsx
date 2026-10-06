import type { Metadata } from "next";
import { Eb1aHero } from "@/components/services/eb1a/Eb1aHero";
import { Eb1aOverview } from "@/components/services/eb1a/Eb1aOverview";
import { Eb1aCriteria } from "@/components/services/eb1a/Eb1aCriteria";
import { Eb1aWhoWeHelp } from "@/components/services/eb1a/Eb1aWhoWeHelp";
import { Eb1aExpertLetters } from "@/components/services/eb1a/Eb1aExpertLetters";
import { Eb1aWaitTimes } from "@/components/services/eb1a/Eb1aWaitTimes";
import { Eb1aProcess } from "@/components/services/eb1a/Eb1aProcess";
import { Eb1aFamily } from "@/components/services/eb1a/Eb1aFamily";
import { Eb1aCompare } from "@/components/services/eb1a/Eb1aCompare";
import { Eb1aUpdates } from "@/components/services/eb1a/Eb1aUpdates";
import { Eb1aWhyBais } from "@/components/services/eb1a/Eb1aWhyBais";
import { Eb1aReviews } from "@/components/services/eb1a/Eb1aReviews";
import { Eb1aFaq, eb1aFaqs } from "@/components/services/eb1a/Eb1aFaq";
import { Eb1aGuides } from "@/components/services/eb1a/Eb1aGuides";
import { Eb1aFinalCta } from "@/components/services/eb1a/Eb1aFinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "EB-1A Extraordinary Ability Green Card & Expert Letters | BAIS",
  description:
    "Self-petition EB-1A green card with independent expert opinion letters from our 350+ professors & industry experts. 10 criteria, final merits. Free review.",
  alternates: { canonical: "/services/eb-1a" },
};

const pageUrl = `${site.url}/services/eb-1a`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EB-1A Extraordinary Ability Green Card",
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
    areaServed: "US",
    url: pageUrl,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Green Cards",
        item: `${site.url}/services#permanent-immigration`,
      },
      { "@type": "ListItem", position: 4, name: "EB-1A", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "EB-1A Green Card for Extraordinary Ability: Self-Petition Without an Employer",
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
    mainEntity: eb1aFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function Eb1aGreenCardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Eb1aHero />
      <Eb1aOverview />
      <Eb1aCriteria />
      <Eb1aWhoWeHelp />
      <Eb1aExpertLetters />
      <Eb1aWaitTimes />
      <Eb1aProcess />
      <Eb1aFamily />
      <Eb1aCompare />
      <Eb1aUpdates />
      <Eb1aWhyBais />
      <Eb1aReviews />
      <Eb1aFaq />
      <Eb1aGuides />
      <Eb1aFinalCta />
    </>
  );
}
