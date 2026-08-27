import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bay Area Immigration Services. Call, email, or send us a message to schedule your consultation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <Image
          src="/images/contact-office.jpg"
          alt="Modern office building exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />

        <Container className="relative py-20 sm:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream/80">
            Contact Us
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Schedule a consultation or send us a message, and our team will
            help you find the right path forward.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <ContactInfo />

            <div className="rounded-2xl border border-border p-8 sm:p-10">
              <h2 className="text-xl font-bold text-ink">Send Us a Message</h2>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Fields marked with <span className="text-maroon">*</span> are required.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
