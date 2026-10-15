import type { Metadata } from "next";
import { TermsHero } from "@/components/legal/TermsHero";
import { TermsToc } from "@/components/legal/TermsToc";
import { TermsSections } from "@/components/legal/TermsSections";
import { TermsFaq, termsFaqs } from "@/components/legal/TermsFaq";
import { TermsFinalCta } from "@/components/legal/TermsFinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | Bay Area Immigration Services",
  description:
    "Terms for using the Bay Area Immigration Services website: what we do and don't do, no guarantees, services agreements and text messages.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const pageUrl = `${site.url}/terms`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions",
    url: pageUrl,
    dateModified: "2026-10-08",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: termsFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TermsHero />
      <TermsToc />
      <TermsSections />
      <TermsFaq />
      <TermsFinalCta />
    </>
  );
}
