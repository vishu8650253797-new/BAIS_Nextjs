import type { Metadata } from "next";
import { H1bHero } from "@/components/services/h1b/H1bHero";
import { H1bOverview } from "@/components/services/h1b/H1bOverview";
import { H1bUpdates } from "@/components/services/h1b/H1bUpdates";
import { H1bWhoWeHelp } from "@/components/services/h1b/H1bWhoWeHelp";
import { H1bServicesGrid } from "@/components/services/h1b/H1bServicesGrid";
import { H1bProcess } from "@/components/services/h1b/H1bProcess";
import { H1bRequirements } from "@/components/services/h1b/H1bRequirements";
import { H1bWhyBais } from "@/components/services/h1b/H1bWhyBais";
import { H1bReviews } from "@/components/services/h1b/H1bReviews";
import { H1bFaq, h1bFaqs } from "@/components/services/h1b/H1bFaq";
import { H1bGuides } from "@/components/services/h1b/H1bGuides";
import { H1bFinalCta } from "@/components/services/h1b/H1bFinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "H-1B Visa Services in Fremont, CA | Cap, Transfer & Extension | BAIS",
  description:
    "H-1B petition preparation for Bay Area employers & professionals since 2001: cap registration, transfers, extensions, amendments & RFEs. Free consultation.",
  alternates: { canonical: "/services/h-1b-visa" },
};

const pageUrl = `${site.url}/services/h-1b-visa`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "H-1B Visa Preparation",
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
      { "@type": "ListItem", position: 4, name: "H-1B Visa", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "H-1B Visa Services for Bay Area Employers & Professionals",
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
    mainEntity: h1bFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function H1bVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <H1bHero />
      <H1bOverview />
      <H1bUpdates />
      <H1bWhoWeHelp />
      <H1bServicesGrid />
      <H1bProcess />
      <H1bRequirements />
      <H1bWhyBais />
      <H1bReviews />
      <H1bFaq />
      <H1bGuides />
      <H1bFinalCta />
    </>
  );
}
