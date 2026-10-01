import type { Metadata } from "next";
import { L1aHero } from "@/components/services/l1a/L1aHero";
import { L1aOverview } from "@/components/services/l1a/L1aOverview";
import { L1aAbout } from "@/components/services/l1a/L1aAbout";
import { L1aNewOffice } from "@/components/services/l1a/L1aNewOffice";
import { L1aRoleFit } from "@/components/services/l1a/L1aRoleFit";
import { L1aFamily } from "@/components/services/l1a/L1aFamily";
import { L1aUpdates } from "@/components/services/l1a/L1aUpdates";
import { L1aServicesGrid } from "@/components/services/l1a/L1aServicesGrid";
import { L1aProcess } from "@/components/services/l1a/L1aProcess";
import { L1aGreenCardPath } from "@/components/services/l1a/L1aGreenCardPath";
import { L1aWhyBais } from "@/components/services/l1a/L1aWhyBais";
import { L1aReviews } from "@/components/services/l1a/L1aReviews";
import { L1aFaq, l1aFaqs } from "@/components/services/l1a/L1aFaq";
import { L1aGuides } from "@/components/services/l1a/L1aGuides";
import { L1aFinalCta } from "@/components/services/l1a/L1aFinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "L-1A Visa for Business Owners & Exporters | New U.S. Office | BAIS",
  description:
    "Open or expand your U.S. office on an L-1A visa. New office setup, manager & executive petitions, L-2 family & EB-1C green card path. Free consultation.",
  alternates: { canonical: "/services/l-1a-visa" },
};

const pageUrl = `${site.url}/services/l-1a-visa`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "L-1A Visa Preparation",
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
        name: "Work Visas",
        item: `${site.url}/services#employment-immigration`,
      },
      { "@type": "ListItem", position: 4, name: "L-1A Visa", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "L-1A Visa for Business Owners & Exporters",
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
    mainEntity: l1aFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function L1aVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <L1aHero />
      <L1aOverview />
      <L1aAbout />
      <L1aNewOffice />
      <L1aRoleFit />
      <L1aFamily />
      <L1aUpdates />
      <L1aServicesGrid />
      <L1aProcess />
      <L1aGreenCardPath />
      <L1aWhyBais />
      <L1aReviews />
      <L1aGuides />
      <L1aFaq />
      <L1aFinalCta />
    </>
  );
}
