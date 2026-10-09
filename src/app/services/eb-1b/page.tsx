import type { Metadata } from "next";
import { Eb1bHero } from "@/components/services/eb1b/Eb1bHero";
import { Eb1bOverview } from "@/components/services/eb1b/Eb1bOverview";
import { Eb1bThresholds } from "@/components/services/eb1b/Eb1bThresholds";
import { Eb1bCriteria } from "@/components/services/eb1b/Eb1bCriteria";
import { Eb1bProcess } from "@/components/services/eb1b/Eb1bProcess";
import { Eb1bEmployers } from "@/components/services/eb1b/Eb1bEmployers";
import { Eb1bWaitTimesCosts } from "@/components/services/eb1b/Eb1bWaitTimesCosts";
import { Eb1bCompare } from "@/components/services/eb1b/Eb1bCompare";
import { Eb1bFaq, eb1bFaqs } from "@/components/services/eb1b/Eb1bFaq";
import { Eb1bUpdates } from "@/components/services/eb1b/Eb1bUpdates";
import { Eb1bWhyBais } from "@/components/services/eb1b/Eb1bWhyBais";
import { Eb1bFinalCta } from "@/components/services/eb1b/Eb1bFinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "EB-1B Green Card for Outstanding Professors & Researchers | BAIS",
  description:
    "EB-1B employer-filed green card for outstanding professors & researchers. No PERM. Evidence map, 350+ expert letters, process, fees & 2026 wait times. Free review.",
  alternates: { canonical: "/services/eb-1b" },
};

const pageUrl = `${site.url}/services/eb-1b`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EB-1B Outstanding Professor & Researcher Green Card",
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
      { "@type": "ListItem", position: 4, name: "EB-1B", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "EB-1B Green Card for Outstanding Professors and Researchers",
    url: pageUrl,
    dateModified: "2026-10-08",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: eb1bFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function Eb1bGreenCardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Eb1bHero />
      <Eb1bOverview />
      <Eb1bThresholds />
      <Eb1bCriteria />
      <Eb1bProcess />
      <Eb1bEmployers />
      <Eb1bWaitTimesCosts />
      <Eb1bCompare />
      <Eb1bUpdates />
      <Eb1bWhyBais />
      <Eb1bFaq />
      <Eb1bFinalCta />
    </>
  );
}
