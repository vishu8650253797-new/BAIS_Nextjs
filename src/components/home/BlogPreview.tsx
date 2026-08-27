import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FeaturedBlogCard } from "@/components/blog/FeaturedBlogCard";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog";

export function BlogPreview() {
  const [featured, ...rest] = blogPosts;
  const recent = rest.slice(0, 3);

  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="News Brief"
            title="What is Happening?"
            description="Stay informed with our news briefs, where we share the latest updates and important developments."
          />
          <Button href="/blog" variant="secondary">
            View All Resources
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-3">
            <FeaturedBlogCard post={featured} />
          </div>
          {recent.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
