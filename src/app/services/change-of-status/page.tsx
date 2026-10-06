import type { Metadata } from "next";
import { CosHero } from "@/components/services/cos/CosHero";
import { CosOverview } from "@/components/services/cos/CosOverview";
import { CosVsAdjustment } from "@/components/services/cos/CosVsAdjustment";
import { CosEligibility } from "@/components/services/cos/CosEligibility";
import { CosPathways } from "@/components/services/cos/CosPathways";
import { CosProcess } from "@/components/services/cos/CosProcess";
import { CosDocuments } from "@/components/services/cos/CosDocuments";
import { CosWhilePending } from "@/components/services/cos/CosWhilePending";
import { CosWhyBais } from "@/components/services/cos/CosWhyBais";
import { CosUpdates } from "@/components/services/cos/CosUpdates";
import { CosReviews } from "@/components/services/cos/CosReviews";
import { CosFaq, cosFaqs } from "@/components/services/cos/CosFaq";
import { CosGuides } from "@/components/services/cos/CosGuides";
import { CosFinalCta } from "@/components/services/cos/CosFinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Change of Status (Form I-539) Help | Switch Visas in the U.S. | BAIS",
  description:
    "Change your U.S. visa status without leaving: B-2 to F-1, F-1 to H-1B, H-4 to F-1 & more. I-539 & I-129 prep, no-gap status plan. Free review.",
  alternates: { canonical: "/services/change-of-status" },
};

const pageUrl = `${site.url}/services/change-of-status`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Change of Status Documentation",
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
      { "@type": "ListItem", position: 3, name: "Change of Status", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Change of Status in the U.S.: Switch Your Visa Without Leaving the Country",
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
    mainEntity: cosFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function ChangeOfStatusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CosHero />
      <CosOverview />
      <CosVsAdjustment />
      <CosEligibility />
      <CosPathways />
      <CosProcess />
      <CosDocuments />
      <CosWhilePending />
      <CosWhyBais />
      <CosUpdates />
      <CosReviews />
      <CosFaq />
      <CosGuides />
      <CosFinalCta />
    </>
  );
}
