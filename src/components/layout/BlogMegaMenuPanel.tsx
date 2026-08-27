"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

const recentPosts = blogPosts.slice(0, 3);
const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

function PostImageCard({
  post,
  onNavigate,
}: {
  post: (typeof blogPosts)[number];
  onNavigate: () => void;
}) {
  return (
    <Link
      href="/blog"
      onClick={onNavigate}
      className="group block overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-lg hover:shadow-ink/5"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="220px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="inline-flex rounded-full bg-cream px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-maroon">
          {post.category}
        </span>
        <p className="mt-2 line-clamp-2 text-sm font-semibold leading-snug text-ink">
          {post.title}
        </p>
      </div>
    </Link>
  );
}

export function BlogMegaMenuPanel({
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
          <div className="mx-auto grid w-full max-w-7xl grid-cols-4 gap-6 px-5 py-10 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between rounded-xl bg-white p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-accent">News Brief</p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-ink">
                  Insights &amp; Updates
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  The latest immigration news, policy updates, and filing
                  guidance from our team.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full bg-cream px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-maroon"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/blog"
                onClick={onClose}
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-maroon"
              >
                View all articles
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            {recentPosts.map((post) => (
              <PostImageCard key={post.slug} post={post} onNavigate={onClose} />
            ))}
          </div>

          <div className="border-t border-ink/10 bg-ink">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
              <p className="text-sm text-white/70">Have questions about a recent update?</p>
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
