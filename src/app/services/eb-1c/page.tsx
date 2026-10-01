import type { Metadata } from "next";
import { Eb1cHero } from "@/components/services/eb1c/Eb1cHero";
import { Eb1cOverview } from "@/components/services/eb1c/Eb1cOverview";
import { Eb1cWaitTimes } from "@/components/services/eb1c/Eb1cWaitTimes";
import { Eb1cEligibility } from "@/components/services/eb1c/Eb1cEligibility";
import { Eb1cEvidence } from "@/components/services/eb1c/Eb1cEvidence";
import { Eb1cL1aPath } from "@/components/services/eb1c/Eb1cL1aPath";
import { Eb1cManagerTypes } from "@/components/services/eb1c/Eb1cManagerTypes";
import { Eb1cFamily } from "@/components/services/eb1c/Eb1cFamily";
import { Eb1cUpdates } from "@/components/services/eb1c/Eb1cUpdates";
import { Eb1cProcess } from "@/components/services/eb1c/Eb1cProcess";
import { Eb1cServicesGrid } from "@/components/services/eb1c/Eb1cServicesGrid";
import { Eb1cWhyBais } from "@/components/services/eb1c/Eb1cWhyBais";
import { Eb1cReviews } from "@/components/services/eb1c/Eb1cReviews";
import { Eb1cFaq, eb1cFaqs } from "@/components/services/eb1c/Eb1cFaq";
import { Eb1cGuides } from "@/components/services/eb1c/Eb1cGuides";
import { Eb1cFinalCta } from "@/components/services/eb1c/Eb1cFinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "EB-1C Green Card for Multinational Managers & Executives | No PERM | BAIS",
  description:
    "EB-1C green card for multinational managers & executives: no PERM, current for most countries. L-1A to green card path, family included. Free case review.",
  alternates: { canonical: "/services/eb-1c" },
};

const pageUrl = `${site.url}/services/eb-1c`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EB-1C Green Card Preparation",
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
      { "@type": "ListItem", position: 4, name: "EB-1C", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "EB-1C Green Card for Multinational Managers & Executives",
    url: pageUrl,
    dateModified: "2026-09-30",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: eb1cFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function Eb1cPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Eb1cHero />
      <Eb1cOverview />
      <Eb1cWaitTimes />
      <Eb1cEligibility />
      <Eb1cEvidence />
      <Eb1cL1aPath />
      <Eb1cManagerTypes />
      <Eb1cFamily />
      <Eb1cUpdates />
      <Eb1cProcess />
      <Eb1cServicesGrid />
      <Eb1cWhyBais />
      <Eb1cReviews />
      <Eb1cFaq />
      <Eb1cGuides />
      <Eb1cFinalCta />
    </>
  );
}
