import type { Metadata } from "next";
import { E1Hero } from "@/components/services/e1/E1Hero";
import { E1Overview } from "@/components/services/e1/E1Overview";
import { E1CheckCountry } from "@/components/services/e1/E1CheckCountry";
import { E1Requirements } from "@/components/services/e1/E1Requirements";
import { E1Process } from "@/components/services/e1/E1Process";
import { E1Costs } from "@/components/services/e1/E1Costs";
import { E1FamilyCompare } from "@/components/services/e1/E1FamilyCompare";
import { E1Updates } from "@/components/services/e1/E1Updates";
import { E1Faq, e1Faqs } from "@/components/services/e1/E1Faq";
import { E1WhyBais } from "@/components/services/e1/E1WhyBais";
import { E1FinalCta } from "@/components/services/e1/E1FinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "E-1 Treaty Trader Visa: Requirements, Cost & Process | BAIS",
  description:
    "E-1 treaty trader visa help: country check, substantial & principal trade tests, business plan, filing, spouse work and renewals. Free E-1 review in Fremont, CA.",
  alternates: { canonical: "/services/e-1-treaty-trader" },
};

const pageUrl = `${site.url}/services/e-1-treaty-trader`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-1 Treaty Trader Visa Preparation",
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
        name: "Business Immigration",
        item: `${site.url}/services#business-investor`,
      },
      { "@type": "ListItem", position: 4, name: "E-1 Treaty Trader", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "E-1 Treaty Trader Visa: Run Your U.S.–Treaty-Country Trade Business From the U.S.",
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
    mainEntity: e1Faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function E1TreatyTraderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <E1Hero />
      <E1Overview />
      <E1CheckCountry />
      <E1Requirements />
      <E1Process />
      <E1Costs />
      <E1FamilyCompare />
      <E1Updates />
      <E1Faq />
      <E1WhyBais />
      <E1FinalCta />
    </>
  );
}
