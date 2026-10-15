import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

type Block =
  | { type: "p"; content: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; content: string }
  | { type: "table"; headers: string[]; rows: string[][] };

type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

const collectionTable: string[][] = [
  ["Contact information", "Name, email, phone number, mailing address, city", "You"],
  [
    "Inquiry and case information",
    "The visa or green card you ask about, country of birth, travel and status dates, family relationships, employer and job details, education and work history",
    "You, or someone you authorize (such as an employer or family member)",
  ],
  [
    "Identity and government documents (sensitive)",
    "Passport, visa, I-94, green card, receipt notices, birth and marriage certificates, A-number, driver license, Social Security number (only when a form requires it)",
    "You",
  ],
  ["Citizenship and immigration status (sensitive)", "Current status, prior applications, nationality", "You"],
  [
    "Financial information (sensitive)",
    "Tax returns, pay records, bank statements, sponsor income. Card payments are handled by our payment processor; we do not store full card numbers.",
    "You",
  ],
  ["Health information (sensitive)", "Medical exam forms or records, only when a form requires them", "You"],
  [
    "Communications",
    "Emails, texts, chat messages, voicemails, call notes, booking details",
    "You and us",
  ],
  [
    "Website and device data",
    "IP address, browser, device, pages viewed, referring site, approximate location, cookie IDs",
    "Collected automatically",
  ],
  ["Information about children", "Only provided by a parent or legal guardian for the child's application", "Parent or guardian"],
];

const sections: Section[] = [
  {
    id: "who-we-are",
    title: "1. Who we are and what this policy covers",
    blocks: [
      {
        type: "p",
        content: `This Privacy Policy explains how ${site.legalName} ("BAIS," "we," "us") collects, uses, shares and protects personal information when you visit ${site.url.replace("https://www.", "")}, contact us, or use our services. BAIS is a California-registered and bonded immigration consultant (Bond No. 5317191) located at ${site.address.full}.`,
      },
      {
        type: "p",
        content:
          "We are not a law firm and do not provide legal advice. We are not affiliated with USCIS, the U.S. Department of State, the Government of India or any other government agency.",
      },
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information we collect",
    blocks: [
      {
        type: "table",
        headers: ["Category", "Examples", "Where it comes from"],
        rows: collectionTable,
      },
      {
        type: "p",
        content:
          "We collect information about other people (for example a spouse or an employer) only from you. Please make sure you have their permission before you share it.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "3. How we use information",
    blocks: [
      {
        type: "ul",
        items: [
          "Answer your questions and schedule consultations",
          "Prepare and organize the forms, evidence and documents you ask us to prepare",
          "Communicate about your matter, including deadlines and next steps",
          "Process payments and keep business records",
          "Send updates and marketing where the law allows (you can opt out at any time)",
          "Operate, secure and improve our website and services, and prevent fraud",
          "Comply with the law and enforce our Terms & Conditions",
        ],
      },
      {
        type: "p",
        content:
          "We use sensitive personal information only to provide the services you request, for security and fraud prevention, to comply with the law, and for other purposes California law permits. We do not use it to infer characteristics about you.",
      },
    ],
  },
  {
    id: "how-we-share",
    title: "4. How we share information",
    blocks: [
      {
        type: "ul",
        items: [
          "Service providers that work for us under contract, such as customer-relationship and messaging tools, case-management software, email and cloud storage, scheduling, payment processing, website hosting, analytics and advertising measurement. They may use your information only to provide services to us.",
          "Government agencies, only when you ask us to prepare or submit your application, or when the law requires.",
          "Independent experts and evaluators, with your permission, when your case needs an expert opinion letter or a credential evaluation.",
          "Professional advisors, such as accountants and insurers, who are bound by confidentiality.",
          "Legal and safety reasons: to follow the law, respond to lawful requests, or protect rights and safety.",
          "A business transfer, such as a merger or sale, with notice where required.",
          "People you name, such as your employer, sponsor or family member, at your direction.",
        ],
      },
      {
        type: "p",
        content:
          "We do not sell personal information. We do not share your phone number or text-message opt-in information with third parties or affiliates for their marketing.",
      },
    ],
  },
  {
    id: "cookies-ads",
    title: "5. Cookies, analytics and advertising",
    blocks: [
      {
        type: "p",
        content:
          "We use cookies and similar technologies (such as pixels and tags) to keep the site working, understand how it is used (for example Google Analytics), and measure our advertising (for example Google Ads). Under California law, some advertising cookies may count as \"sharing\" personal information for cross-context behavioral advertising.",
      },
      {
        type: "p",
        content:
          "We do not send the contents of your documents or your case details to advertising platforms.",
      },
      {
        type: "ul",
        items: [
          "Your choices: use the \"Cookie Settings\" link in our footer, your browser settings, or Google's Ads Settings and analytics opt-out tools.",
          "Global Privacy Control: we treat a valid Global Privacy Control signal from your browser as an opt-out of sharing.",
          "Do Not Track: there is no common standard for Do Not Track signals, so we respond to Global Privacy Control but not to other Do Not Track signals.",
        ],
      },
      {
        type: "note",
        content:
          "Pending confirmation: whether our current advertising tools legally count as \"sharing\" data, and whether Global Privacy Control is technically wired up on the site, need to be confirmed before this section is final.",
      },
    ],
  },
  {
    id: "texts-calls",
    title: "6. Text messages and calls",
    blocks: [
      {
        type: "p",
        content:
          "With your consent (the checkbox on our forms), we may call or text you about your inquiry or matter and, if you agreed, about our services. Consent is not a condition of any purchase or service. Message frequency varies. Message and data rates may apply. Reply STOP to opt out and HELP for help. We honor opt-out requests made by any reasonable method, such as replying \"stop texting me.\" Carriers are not liable for delayed or undelivered messages.",
      },
      {
        type: "p",
        content:
          "We do not sell or share your mobile number or text opt-in information with third parties or affiliates for marketing or promotional purposes.",
      },
    ],
  },
  {
    id: "retention",
    title: "7. How long we keep information",
    blocks: [
      {
        type: "ul",
        items: [
          "Inquiries that do not become a client matter: 24 months",
          "Client files and case records: 7 years after the matter closes, or as the services agreement or the law requires",
          "Marketing contacts: until you opt out (we then keep a minimal suppression record so we honor your choice)",
          "Website logs and analytics: 14 to 26 months",
        ],
      },
      {
        type: "p",
        content:
          "When we no longer need information, we delete or de-identify it, unless the law requires us to keep it.",
      },
      {
        type: "note",
        content:
          "Pending confirmation: the retention periods above are placeholders and need sign-off from counsel and operations before this section is final.",
      },
    ],
  },
  {
    id: "security",
    title: "8. How we protect information",
    blocks: [
      {
        type: "p",
        content:
          "We use reasonable administrative, technical and physical safeguards, such as secure document upload, encryption in transit, access limited to staff who need it, staff training and vendor review. No method of storage or transmission is 100% secure.",
      },
      {
        type: "p",
        content:
          "Please do not send passport numbers, Social Security numbers or card numbers by regular email or text. Use our secure upload. We will never ask for your passwords, one-time codes or full card numbers by text or email. If a breach affects your information, we will notify you as the law requires.",
      },
    ],
  },
  {
    id: "california-rights",
    title: "9. Your California privacy rights",
    blocks: [
      {
        type: "p",
        content: "If you are a California resident, you can ask us to:",
      },
      {
        type: "ul",
        items: [
          "Tell you what personal information we collect, use, disclose and share, and give you a copy",
          "Delete personal information we collected from you, with legal exceptions",
          "Correct inaccurate personal information",
          "Opt out of the sale or sharing of your personal information",
          "Limit the use of your sensitive personal information (we use it only for the purposes in Section 3)",
          "Not be treated unfairly for using these rights",
        ],
      },
      {
        type: "p",
        content: `How to ask: email ${site.email}, call ${site.phone}, or write to us at the address in Section 14. We will confirm your request within 10 business days and respond within 45 days (we may extend once by 45 days and will tell you why). We must verify your identity first, and we may ask for details that match what we hold. An authorized agent may submit a request for you with your written permission.`,
      },
      {
        type: "p",
        content:
          "Last 12 months: we collected the categories listed in Section 2 and disclosed them to service providers for the business purposes in Section 4. We have not sold personal information. We do not sell or share personal information of anyone we know is under 16. Under California's \"Shine the Light\" law, you may ask for information about disclosures to third parties for their direct marketing; we make none.",
      },
      {
        type: "note",
        content:
          "Pending confirmation: whether the CCPA formally applies to BAIS (based on revenue and consumer-volume thresholds), and whether a toll-free request number is required, have not yet been confirmed with counsel. This section is treated as a voluntary practice commitment until that is resolved.",
      },
    ],
  },
  {
    id: "other-states",
    title: "10. Residents of other states",
    blocks: [
      {
        type: "p",
        content:
          "Depending on where you live, you may have similar rights to access, correct or delete your information and to opt out of targeted advertising. Contact us using Section 14 and we will respond as the law requires.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    title: "11. Children's privacy",
    blocks: [
      {
        type: "p",
        content:
          "Our website is not directed to children under 13, and we do not knowingly collect information from them online. When a child's immigration matter requires it, we collect the child's information from a parent or legal guardian.",
      },
    ],
  },
  {
    id: "where-processed",
    title: "12. Where information is processed",
    blocks: [
      {
        type: "p",
        content: "We process information in the United States.",
      },
      {
        type: "note",
        content:
          "Pending confirmation: if any staff or vendors outside the U.S. can access leads or client documents, this section needs to name the countries and the safeguards used, and access to sensitive documents (passports, IDs, financial and health records) should be limited accordingly.",
      },
    ],
  },
  {
    id: "links",
    title: "13. Links to other websites",
    blocks: [
      {
        type: "p",
        content:
          "Our site links to other sites, such as government agencies, consulates and service providers. We do not control them and are not responsible for their privacy practices.",
      },
    ],
  },
  {
    id: "contact-us",
    title: "14. Contact us",
    blocks: [
      {
        type: "p",
        content: `${site.legalName} · ${site.address.full} · ${site.phone} · ${site.email} · ${site.hours.weekdays} (Pacific)`,
      },
    ],
  },
  {
    id: "changes",
    title: "15. Changes to this policy",
    blocks: [
      {
        type: "p",
        content:
          "We review this policy at least once a year and update it when our practices change. We show the \"Last updated\" date at the top, and we will notify you of material changes on our site or by email where the law requires.",
      },
    ],
  },
];

function SectionBlock({ block }: { block: Block }) {
  if (block.type === "p") {
    return <p className="mt-3 text-sm leading-relaxed text-body">{block.content}</p>;
  }
  if (block.type === "note") {
    return (
      <p className="mt-3 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900">
        {block.content}
      </p>
    );
  }
  if (block.type === "table") {
    return (
      <div className="mt-3 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="bg-cream text-left">
              {block.headers.map((header) => (
                <th key={header} className="p-3 font-bold text-ink">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, index) => (
              <tr
                key={row[0]}
                className={`border-t border-border ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-3 align-top text-body">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <ul className="mt-3 space-y-2.5">
      {block.items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PrivacySections() {
  return (
    <section className="bg-white pb-20">
      <Container className="max-w-3xl">
        <div className="space-y-10">
          {sections.map((section, index) => (
            <FadeIn key={section.id} delay={Math.min(index * 15, 200)}>
              <div id={section.id} className="scroll-mt-24">
                <h2 className="text-xl font-bold text-ink">{section.title}</h2>
                {section.blocks.map((block, blockIndex) => (
                  <SectionBlock key={blockIndex} block={block} />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
