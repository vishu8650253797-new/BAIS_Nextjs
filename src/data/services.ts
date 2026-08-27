export type Service = {
  slug: string;
  name: string;
  blurb: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  description: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "employment-immigration",
    title: "Employment Immigration",
    description:
      "Documentation support for the work visa categories we handle most, largely for clients in IT and healthcare.",
    services: [
      {
        slug: "h-1b",
        name: "H-1B Specialty Occupation",
        blurb: "Petition support for specialty-occupation work visas.",
      },
      {
        slug: "l-1",
        name: "L-1 Intracompany Transferee",
        blurb: "L-1A manager/executive and L-1B specialized-knowledge transfers.",
      },
      {
        slug: "o-1",
        name: "O-1 Extraordinary Ability",
        blurb: "For individuals with extraordinary ability or achievement.",
      },
      {
        slug: "j-1",
        name: "J-1 Exchange Visitor",
        blurb: "Support for students, trainees, scholars, and researchers.",
      },
      {
        slug: "tn",
        name: "TN Visa",
        blurb: "USMCA professional work authorization for Canadian and Mexican citizens.",
      },
      {
        slug: "employment-based-immigration",
        name: "Employment-Based Immigration",
        blurb: "An overview of employer-sponsored paths, from petitions to green cards.",
      },
    ],
  },
  {
    slug: "family-immigration",
    title: "Family Immigration",
    description:
      "Guidance for bringing family members to the United States and keeping households together.",
    services: [
      {
        slug: "family-based-immigration",
        name: "Family-Based Immigration",
        blurb: "Immediate relative and family preference category support.",
      },
      {
        slug: "k-1",
        name: "K-1 Fiancé Visa",
        blurb: "Documentation for fiancé(e) visas and follow-on adjustment of status.",
      },
      {
        slug: "i-130",
        name: "I-130 Petition for Alien Relative",
        blurb: "Petition preparation to establish a qualifying family relationship.",
      },
    ],
  },
  {
    slug: "permanent-immigration",
    title: "Permanent Immigration (Green Cards)",
    description:
      "Preparation support across the employment- and merit-based green card categories.",
    services: [
      {
        slug: "green-cards",
        name: "Green Cards Overview",
        blurb: "A guide to family-based, employment-based, and investment-based paths.",
      },
      {
        slug: "eb-1",
        name: "EB-1 Priority Workers",
        blurb: "Extraordinary ability, outstanding researchers, and multinational executives.",
      },
      {
        slug: "eb-2-niw",
        name: "EB-2 / EB-2 NIW",
        blurb: "Advanced-degree and exceptional-ability petitions, including National Interest Waiver.",
      },
      {
        slug: "eb-3",
        name: "EB-3 Skilled & Professional Workers",
        blurb: "Skilled worker, professional, and other-worker green card categories.",
      },
      {
        slug: "eb-5",
        name: "EB-5 Immigrant Investor",
        blurb: "Investment-based permanent residency documentation support.",
      },
      {
        slug: "green-card-lottery",
        name: "U.S. Green Card Lottery",
        blurb: "Diversity Visa program guidance and application support.",
      },
      {
        slug: "us-citizenship",
        name: "U.S. Citizenship",
        blurb: "Naturalization (Form N-400) preparation support.",
      },
    ],
  },
  {
    slug: "business-investor",
    title: "Business & Investor Immigration",
    description:
      "Support for entrepreneurs, treaty traders and investors, and companies establishing a U.S. presence.",
    services: [
      {
        slug: "business-immigration",
        name: "Business Immigration Overview",
        blurb: "An introduction to visa options for founders and companies.",
      },
      {
        slug: "e-1",
        name: "E-1 Treaty Trader",
        blurb: "For nationals of treaty countries conducting substantial trade with the U.S.",
      },
      {
        slug: "e-2",
        name: "E-2 Treaty Investor",
        blurb: "For nationals of treaty countries investing in a U.S. business.",
      },
      {
        slug: "b-1",
        name: "B-1 Business Visitor",
        blurb: "Short-term business visitor documentation.",
      },
      {
        slug: "accounting-solutions",
        name: "Accounting Solutions",
        blurb: "Entity formation support — C-Corp, S-Corp, LLC, and registered agent services.",
      },
    ],
  },
  {
    slug: "other-services",
    title: "Other Services",
    description:
      "Additional compliance and case-support services for individuals and employers.",
    services: [
      {
        slug: "i-9-verification",
        name: "I-9 Verification",
        blurb: "Remote I-9 completion and verification support.",
      },
      {
        slug: "e-verify",
        name: "E-Verify",
        blurb: "Electronic employment eligibility verification support for employers.",
      },
      {
        slug: "rfe-assistance",
        name: "RFE Assistance",
        blurb: "Response support for Requests for Evidence across visa categories.",
      },
      {
        slug: "global-mobility",
        name: "Global Mobility",
        blurb: "Relocation management and cross-cultural transition support.",
      },
      {
        slug: "change-of-status",
        name: "Change of Status",
        blurb: "Support transitioning between visa categories, e.g. F-1 to H-1B.",
      },
      {
        slug: "oci-renunciation",
        name: "OCI & Renunciation",
        blurb: "Overseas Citizen of India card and Indian citizenship renunciation support.",
      },
    ],
  },
];

export const allServices: (Service & { categorySlug: string; categoryTitle: string })[] =
  serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      ...service,
      categorySlug: category.slug,
      categoryTitle: category.title,
    })),
  );
