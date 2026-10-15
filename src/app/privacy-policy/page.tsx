import type { Metadata } from "next";
import { PrivacyHero } from "@/components/legal/PrivacyHero";
import { PrivacyToc } from "@/components/legal/PrivacyToc";
import { PrivacySections } from "@/components/legal/PrivacySections";
import { PrivacyFaq, privacyFaqs } from "@/components/legal/PrivacyFaq";
import { PrivacyFinalCta } from "@/components/legal/PrivacyFinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Bay Area Immigration Services",
  description:
    "How Bay Area Immigration Services collects, uses and protects your personal information, documents, texts and cookies, plus your California privacy rights.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const pageUrl = `${site.url}/privacy-policy`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: pageUrl,
    dateModified: "2026-10-08",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: privacyFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PrivacyHero />
      <PrivacyToc />
      <PrivacySections />
      <PrivacyFaq />
      <PrivacyFinalCta />
    </>
  );
}
