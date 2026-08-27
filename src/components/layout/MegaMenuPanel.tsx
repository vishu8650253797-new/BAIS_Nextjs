"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { serviceCategories } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const [employment, family, permanent, business, other] = serviceCategories;
const highlight = testimonials[0];

function CategoryLinks({
  category,
  onNavigate,
}: {
  category: (typeof serviceCategories)[number];
  onNavigate: () => void;
}) {
  return (
    <div>
      <Link
        href={`/services#${category.slug}`}
        onClick={onNavigate}
        className="group flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-maroon"
      >
        {category.title}
        <ArrowRight className="size-3 -translate-x-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
      </Link>
      <ul className="mt-3 space-y-2">
        {category.services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services#${category.slug}`}
              onClick={onNavigate}
              className="text-sm text-body transition-colors duration-150 hover:text-ink"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MegaMenuPanel({
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
                <p className="text-xs font-bold uppercase tracking-wide text-accent">Services</p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-ink">
                  Find the Right Immigration Path
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Explore documentation and case-support services across every
                  category we handle.
                </p>
              </div>
              <Link
                href="/services"
                onClick={onClose}
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-maroon"
              >
                View all services
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="space-y-8">
              <CategoryLinks category={employment} onNavigate={onClose} />
              <CategoryLinks category={family} onNavigate={onClose} />
            </div>

            <div className="space-y-8">
              <CategoryLinks category={permanent} onNavigate={onClose} />
              <CategoryLinks category={business} onNavigate={onClose} />
            </div>

            <div className="space-y-8">
              <CategoryLinks category={other} onNavigate={onClose} />

              <div className="rounded-xl bg-ink p-5 text-white">
                <div className="flex gap-0.5 text-accent" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  &ldquo;{highlight.quote}&rdquo;
                </p>
                <p className="mt-3 text-xs font-semibold text-white/60">{highlight.attribution}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-ink/10 bg-ink">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
              <p className="text-sm text-white/70">Ready to get started?</p>
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
