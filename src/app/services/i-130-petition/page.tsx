import type { Metadata } from "next";
import { I130Hero } from "@/components/services/i130/I130Hero";
import { I130Overview } from "@/components/services/i130/I130Overview";
import { I130WhoCanFile } from "@/components/services/i130/I130WhoCanFile";
import { I130Evidence } from "@/components/services/i130/I130Evidence";
import { I130Process } from "@/components/services/i130/I130Process";
import { I130Costs } from "@/components/services/i130/I130Costs";
import { I130Faq, i130Faqs } from "@/components/services/i130/I130Faq";
import { I130Updates } from "@/components/services/i130/I130Updates";
import { I130WhyBais } from "@/components/services/i130/I130WhyBais";
import { I130FinalCta } from "@/components/services/i130/I130FinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Form I-130 Petition for Alien Relative: Help & Process | BAIS",
  description:
    "Form I-130 help for U.S. citizens and green card holders: who can file, evidence by relationship, fees, timelines and next steps. Free review.",
  alternates: { canonical: "/services/i-130-petition" },
};

const pageUrl = `${site.url}/services/i-130-petition`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Form I-130 Petition for Alien Relative Preparation",
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
        name: "Family Immigration",
        item: `${site.url}/services#family-immigration`,
      },
      { "@type": "ListItem", position: 4, name: "Form I-130", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Form I-130, Petition for Alien Relative: File It Right the First Time",
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
    mainEntity: i130Faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function I130PetitionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <I130Hero />
      <I130Overview />
      <I130WhoCanFile />
      <I130Evidence />
      <I130Process />
      <I130Costs />
      <I130Updates />
      <I130Faq />
      <I130WhyBais />
      <I130FinalCta />
    </>
  );
}
