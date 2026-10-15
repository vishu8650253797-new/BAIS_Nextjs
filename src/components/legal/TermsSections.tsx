import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

type Block =
  | { type: "p"; content: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; content: string };

type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

const sections: Section[] = [
  {
    id: "who-we-are",
    title: "1. Who we are and agreeing to these terms",
    blocks: [
      {
        type: "p",
        content: `These Terms & Conditions ("Terms") govern your use of ${site.url.replace("https://www.", "")} and any information, forms or tools on it (the "Site"). The Site is operated by ${site.legalName} ("BAIS," "we," "us"), a California-registered and bonded immigration consultant (Bond No. 5317191), ${site.address.full}. By using the Site you agree to these Terms and to our Privacy Policy. If you do not agree, please do not use the Site. You must be at least 18 to use it.`,
      },
    ],
  },
  {
    id: "what-we-are",
    title: "2. What we are, and what we are not",
    blocks: [
      {
        type: "ul",
        items: [
          "We are an immigration consultant. We prepare and organize documents and evidence under your direction.",
          "We are not a law firm and do not provide legal advice or legal representation. We cannot tell you which legal strategy to choose or represent you before a government agency.",
          "We are not affiliated with USCIS, the U.S. Department of State, U.S. Customs and Border Protection, the Government of India or any other government agency, consulate or service provider.",
          "Using this Site, sending a message, or attending a free consultation does not create a legal representation relationship, and our communications are not protected by legal privilege. For legal advice, consult a licensed legal professional.",
        ],
      },
    ],
  },
  {
    id: "site-information",
    title: "3. Information on the Site",
    blocks: [
      {
        type: "p",
        content:
          "Content on the Site is general information, not advice for your situation. Immigration rules, fees, forms, wait times and processing times change often, and some content may be out of date. We show \"Last reviewed\" dates where we can. Always confirm with official sources (uscis.gov, travel.state.gov and the relevant agency) and ask us about your case. We do not guarantee that Site content is complete, current or error-free.",
      },
    ],
  },
  {
    id: "no-guarantees",
    title: "4. No guarantees",
    blocks: [
      {
        type: "p",
        content:
          "We do not guarantee any outcome, including approval, processing time, a visa number, a green card or admission to the United States. Government officials make every decision. Testimonials and examples reflect individual experiences; results vary. Expert opinion letters are the independent professional opinions of the experts, and the government decides how much weight to give them.",
      },
    ],
  },
  {
    id: "consultations-services",
    title: "5. Free consultations, quotes and services",
    blocks: [
      {
        type: "ul",
        items: [
          "Your first consultation is free and without obligation. It is informational only.",
          "We provide services only under a signed written services agreement, which states the scope, fees, timelines, cancellation and refund terms and your rights, as California law requires. If these Terms and the agreement conflict, the agreement controls for that service.",
          "Fee quotes on the Site or by phone are estimates until you sign an agreement. Government filing fees are separate and change.",
          "How we handle your original documents, including whether and when we return them, is set out in your signed services agreement.",
        ],
      },
    ],
  },
  {
    id: "your-responsibilities",
    title: "6. Your responsibilities",
    blocks: [
      {
        type: "ul",
        items: [
          "Give us accurate, complete and truthful information and documents, and tell us promptly if anything changes.",
          "Review and sign every form yourself. You are responsible for what you sign and submit.",
          "Meet deadlines, attend interviews and appointments, and respond to government notices. Send us any notice you receive right away.",
          "Do not ask us to include false, altered or misleading information. We may decline or stop work if we believe a request is fraudulent or unlawful.",
        ],
      },
    ],
  },
  {
    id: "forms-messages",
    title: "7. Forms, messages and consent",
    blocks: [
      {
        type: "p",
        content:
          "When you submit a form, you confirm the information is accurate and you agree that we may contact you by phone, text and email about your inquiry. See the Text Message Terms below. Submitting a form does not create a client relationship or a services agreement.",
      },
    ],
  },
  {
    id: "text-message-terms",
    title: "8. Text message terms",
    blocks: [
      {
        type: "ul",
        items: [
          "Program: BAIS Updates: messages about your inquiry or matter and, if you agreed, our services and immigration updates.",
          "Consent is not required to buy any service. Message frequency varies. Message and data rates may apply.",
          "Opt out: reply STOP at any time. Help: reply HELP or call " +
            site.phone +
            ". We honor opt-outs made by any reasonable method.",
          "We send texts between 8:00 AM and 9:00 PM in your local time unless you ask for something sooner. Carriers are not liable for delayed or undelivered messages.",
          "We do not sell or share your mobile number or opt-in information with third parties or affiliates for marketing. See our Privacy Policy.",
        ],
      },
    ],
  },
  {
    id: "third-party",
    title: "9. Third-party websites and tools",
    blocks: [
      {
        type: "p",
        content:
          "The Site links to and uses third-party sites and tools (for example government sites, consulates, scheduling and payment tools). We do not control them, and your use of them is under their terms. A link is not an endorsement.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "10. Intellectual property",
    blocks: [
      {
        type: "p",
        content:
          "The Site, its text, graphics, logos and tools belong to BAIS or its licensors and are protected by law. You may view and print Site content for your own personal, non-commercial use. You may not copy, republish, scrape or sell it without our written permission.",
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "11. Acceptable use",
    blocks: [
      {
        type: "p",
        content:
          "Do not use the Site to break the law, submit information about someone else without their authority, impersonate anyone, upload malware, interfere with the Site, or send misleading or abusive content.",
      },
    ],
  },
  {
    id: "disclaimer-warranties",
    title: "12. Disclaimer of warranties",
    blocks: [
      {
        type: "p",
        content:
          "To the fullest extent the law allows, the Site and its content are provided \"as is\" and \"as available,\" without warranties of any kind, express or implied.",
      },
    ],
  },
  {
    id: "limitation-liability",
    title: "13. Limitation of liability",
    blocks: [
      {
        type: "p",
        content:
          "To the fullest extent the law allows, BAIS and its owners, employees and contractors are not liable for indirect, incidental, special, consequential or punitive damages, or for loss of profits, data or opportunities, arising from your use of the Site or reliance on its content. Our total liability for claims about the Site is limited to $100. Services are governed by your signed services agreement. Nothing in these Terms limits liability that cannot be limited by law.",
      },
      {
        type: "note",
        content:
          "Pending counsel review: this $100 cap is a placeholder and must be confirmed against our insurance coverage before this page is finalized.",
      },
    ],
  },
  {
    id: "indemnity",
    title: "14. Indemnity",
    blocks: [
      {
        type: "p",
        content:
          "You agree to defend and hold BAIS harmless from claims, losses and costs arising from your misuse of the Site or your violation of these Terms or the law, to the extent the law allows.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "15. Governing law and disputes",
    blocks: [
      {
        type: "p",
        content:
          "These Terms are governed by the laws of the State of California, without regard to conflict-of-law rules. Any dispute about the Site will be brought in the state or federal courts located in Alameda County, California, and you consent to that venue.",
      },
      {
        type: "note",
        content:
          "Pending counsel review: whether to add an arbitration clause or a class-action waiver has not yet been decided.",
      },
    ],
  },
  {
    id: "changes-termination",
    title: "16. Changes and termination",
    blocks: [
      {
        type: "p",
        content:
          "We may update these Terms. The \"Last updated\" date shows the current version, and continued use after a change means you accept it. We may suspend or end access to the Site at any time.",
      },
    ],
  },
  {
    id: "accessibility",
    title: "17. Accessibility",
    blocks: [
      {
        type: "p",
        content: `We want the Site to be usable by everyone and aim to follow the Web Content Accessibility Guidelines (WCAG 2.1 AA). If you have trouble using any part of it, tell us at ${site.phone} or ${site.email} and we will help.`,
      },
    ],
  },
  {
    id: "general",
    title: "18. General",
    blocks: [
      {
        type: "p",
        content:
          "If any part of these Terms is unenforceable, the rest stays in effect. Our failure to enforce a term is not a waiver. These Terms, our Privacy Policy and any signed services agreement are the whole agreement about the Site and the services.",
      },
    ],
  },
  {
    id: "contact-us",
    title: "19. Contact us",
    blocks: [
      {
        type: "p",
        content: `${site.legalName} · ${site.address.full} · ${site.phone} · ${site.email} · ${site.hours.weekdays} (Pacific)`,
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

export function TermsSections() {
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
