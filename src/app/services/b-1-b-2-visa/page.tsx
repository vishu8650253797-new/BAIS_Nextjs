import type { Metadata } from "next";
import { B1b2Hero } from "@/components/services/b1b2/B1b2Hero";
import { B1b2Overview } from "@/components/services/b1b2/B1b2Overview";
import { B1b2CompareOptions } from "@/components/services/b1b2/B1b2CompareOptions";
import { B1b2AllowedNotAllowed } from "@/components/services/b1b2/B1b2AllowedNotAllowed";
import { B1b2Process } from "@/components/services/b1b2/B1b2Process";
import { B1b2Costs } from "@/components/services/b1b2/B1b2Costs";
import { B1b2StayingLongerDenials } from "@/components/services/b1b2/B1b2StayingLongerDenials";
import { B1b2Updates } from "@/components/services/b1b2/B1b2Updates";
import { B1b2Faq, b1b2Faqs } from "@/components/services/b1b2/B1b2Faq";
import { B1b2WhyBais } from "@/components/services/b1b2/B1b2WhyBais";
import { B1b2FinalCta } from "@/components/services/b1b2/B1b2FinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "B-1/B-2 Visitor Visa: Requirements, Process & Costs | BAIS",
  description:
    "B-1 business and B-2 tourist visa help: purpose check, DS-160 documents, interview prep, 2026 fees, visa bonds and extensions. Free review.",
  alternates: { canonical: "/services/b-1-b-2-visa" },
};

const pageUrl = `${site.url}/services/b-1-b-2-visa`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "B-1/B-2 Visitor Visa Documentation",
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
        name: "Temporary Visas",
        item: `${site.url}/services#employment-immigration`,
      },
      { "@type": "ListItem", position: 4, name: "B-1/B-2 Visitor Visa", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "B-1/B-2 Visitor Visa: Business and Tourist Travel to the U.S., Done Right",
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
    mainEntity: b1b2Faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function B1B2VisitorVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <B1b2Hero />
      <B1b2Overview />
      <B1b2CompareOptions />
      <B1b2AllowedNotAllowed />
      <B1b2Process />
      <B1b2Costs />
      <B1b2StayingLongerDenials />
      <B1b2Updates />
      <B1b2Faq />
      <B1b2WhyBais />
      <B1b2FinalCta />
    </>
  );
}
