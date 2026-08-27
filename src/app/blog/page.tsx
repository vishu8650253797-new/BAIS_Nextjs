import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FeaturedBlogCard } from "@/components/blog/FeaturedBlogCard";
import { BlogCard } from "@/components/blog/BlogCard";
import { CTASection } from "@/components/shared/CTASection";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News briefs and updates from Bay Area Immigration Services on work visas, green cards, and family-based immigration.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const recent = blogPosts.slice(1, 5);

  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <Image
          src="/images/blog-meeting-room.jpg"
          alt="Minimalist meeting room with a long table"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />

        <Container className="relative py-20 sm:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream/80">
            News Brief
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            What is Happening?
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Stay informed with our news briefs, where we share the latest
            updates and important developments in U.S. immigration.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <FeaturedBlogCard post={featured} />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recent.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a Question We Didn't Cover?"
        description="Schedule a consultation and our team will walk you through your specific situation."
      />
    </>
  );
}
