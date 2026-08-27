"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

const reachItems = [
  { icon: Phone, label: site.phone, href: site.phoneHref },
  { icon: Mail, label: site.email, href: site.emailHref },
  { icon: MapPin, label: site.address.full, href: "/contact" },
];

const quickLinks = [
  { label: "Schedule a Consultation", href: "/contact" },
  { label: "Explore Our Services", href: "/services" },
  { label: "Read Our FAQs", href: "/#faq" },
];

export function ContactMegaMenuPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="absolute inset-x-0 top-full z-40 border-b border-border/60 bg-cream shadow-xl shadow-ink/10"
        >
          <div className="mx-auto grid w-full max-w-7xl grid-cols-4 gap-8 px-5 py-10 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between rounded-xl bg-white p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-accent">Contact Us</p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-ink">
                  Let&apos;s Talk
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Schedule a consultation or send us a message — our team
                  responds promptly to every inquiry.
                </p>
              </div>
              <Link
                href="/contact"
                onClick={onClose}
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-maroon"
              >
                Get in touch
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-maroon">Reach Us</p>
              <ul className="mt-3 space-y-3">
                {reachItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-start gap-2.5 text-sm leading-snug text-body transition-colors duration-150 hover:text-ink"
                    >
                      <item.icon
                        className="mt-0.5 size-4 shrink-0 text-maroon"
                        aria-hidden="true"
                      />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-maroon">Quick Links</p>
              <ul className="mt-3 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-sm text-body transition-colors duration-150 hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-ink p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-wide text-accent">
                Free Case Overview
              </p>
              <p className="mt-3 text-3xl font-bold">$100</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                A detailed consultation, applied toward your service if you
                choose to proceed with us.
              </p>
            </div>
          </div>

          <div className="border-t border-ink/10 bg-ink">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
              <p className="text-sm text-white/70">Ready to start your case?</p>
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-cream"
              >
                Schedule a consultation
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
