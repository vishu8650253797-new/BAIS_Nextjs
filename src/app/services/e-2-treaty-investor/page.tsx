import type { Metadata } from "next";
import { E2Hero } from "@/components/services/e2/E2Hero";
import { E2Overview } from "@/components/services/e2/E2Overview";
import { E2CheckCountry } from "@/components/services/e2/E2CheckCountry";
import { E2Requirements } from "@/components/services/e2/E2Requirements";
import { E2Process } from "@/components/services/e2/E2Process";
import { E2Costs } from "@/components/services/e2/E2Costs";
import { E2Family } from "@/components/services/e2/E2Family";
import { E2Compare } from "@/components/services/e2/E2Compare";
import { E2Updates } from "@/components/services/e2/E2Updates";
import { E2Faq, e2Faqs } from "@/components/services/e2/E2Faq";
import { E2WhyBais } from "@/components/services/e2/E2WhyBais";
import { E2FinalCta } from "@/components/services/e2/E2FinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "E-2 Treaty Investor Visa: Requirements, Cost & Process | BAIS",
  description:
    "E-2 treaty investor visa help: country check, investment, business plan, filing, spouse work and renewals. Free E-2 review in Fremont, CA.",
  alternates: { canonical: "/services/e-2-treaty-investor" },
};

const pageUrl = `${site.url}/services/e-2-treaty-investor`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-2 Treaty Investor Visa Preparation",
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
      { "@type": "ListItem", position: 4, name: "E-2 Treaty Investor", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "E-2 Treaty Investor Visa: Invest in a U.S. Business and Live and Work Here",
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
    mainEntity: e2Faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function E2TreatyInvestorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <E2Hero />
      <E2Overview />
      <E2CheckCountry />
      <E2Requirements />
      <E2Process />
      <E2Costs />
      <E2Family />
      <E2Compare />
      <E2Updates />
      <E2Faq />
      <E2WhyBais />
      <E2FinalCta />
    </>
  );
}
