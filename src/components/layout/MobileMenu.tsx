"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav, servicesMegaMenu } from "@/data/navigation";
import { site } from "@/data/site";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/Button";

const recentPosts = blogPosts.slice(0, 6);

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [openKey, setOpenKey] = useState<"services" | "blog" | null>(null);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-ink/40 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="text-sm font-semibold text-ink">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-2 text-ink transition-colors hover:bg-cream"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-5 py-4">
          {mainNav.map((item) =>
            item.hasMegaMenu ? (
              <div key={item.label} className="border-b border-border">
                <button
                  type="button"
                  aria-expanded={openKey === item.hasMegaMenu}
                  onClick={() =>
                    setOpenKey((v) => (v === item.hasMegaMenu ? null : item.hasMegaMenu!))
                  }
                  className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-ink"
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "size-4 transition-transform duration-200",
                      openKey === item.hasMegaMenu && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300",
                    openKey === item.hasMegaMenu ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0 space-y-4">
                    {item.hasMegaMenu === "services" &&
                      servicesMegaMenu.map((category) => (
                        <div key={category.title}>
                          <Link
                            href={category.href}
                            onClick={onClose}
                            className="text-sm font-bold text-maroon"
                          >
                            {category.title}
                          </Link>
                          <ul className="mt-2 space-y-1.5 pl-3">
                            {category.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  onClick={onClose}
                                  className="text-sm text-body"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                    {item.hasMegaMenu === "blog" && (
                      <ul className="space-y-2.5 pl-1">
                        {recentPosts.map((post) => (
                          <li key={post.slug}>
                            <Link
                              href="/blog"
                              onClick={onClose}
                              className="text-sm leading-snug text-body"
                            >
                              {post.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="border-b border-border py-3 text-base font-semibold text-ink"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="space-y-4 border-t border-border px-5 py-5">
          <Button href="/contact" className="w-full" onClick={onClose}>
            Schedule a Consultation
          </Button>
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 text-sm font-semibold text-maroon"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
