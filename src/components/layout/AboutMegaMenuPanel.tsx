"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { yearsInBusiness } from "@/data/site";
import { team } from "@/data/team";

const founder = team[0];

const companyLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Our Mission", href: "/about" },
  { label: "Our Team", href: "/about" },
];

const reasons = [
  `Founded in 2001, ${yearsInBusiness()}+ years of experience`,
  "Personalized, consultant-led case guidance",
  "Transparent, timely, and affordable service",
];

export function AboutMegaMenuPanel({
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
                <p className="text-xs font-bold uppercase tracking-wide text-accent">About Us</p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-ink">
                  Who We Are
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  An immigration consultancy built on experience, honesty,
                  and personalized guidance since 2001.
                </p>
              </div>
              <Link
                href="/about"
                onClick={onClose}
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-maroon"
              >
                Learn more
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-maroon">Our Company</p>
              <ul className="mt-3 space-y-2">
                {companyLinks.map((link) => (
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

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-maroon">Why Choose Us</p>
              <ul className="mt-3 space-y-2.5">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-2.5 text-sm leading-snug text-body">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-maroon" aria-hidden="true" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-ink p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="relative size-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white/15">
                  <Image
                    src="/images/founder-placeholder.jpg"
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-accent">Founder</p>
                  <p className="text-sm font-bold">{founder.name}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Leading Bay Area Immigration Services since 2001.
              </p>
            </div>
          </div>

          <div className="border-t border-ink/10 bg-ink">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
              <p className="text-sm text-white/70">Want to know more about our team?</p>
              <Link
                href="/about"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-cream"
              >
                Visit the About page
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
