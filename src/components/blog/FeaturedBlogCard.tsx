import type { BlogPost } from "@/data/blog";

export function FeaturedBlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-border bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-xl hover:shadow-ink/5 sm:p-10">
      <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-maroon">
        {post.category}
      </span>
      <h3 className="mt-5 max-w-2xl text-2xl font-bold leading-snug text-ink sm:text-3xl">
        {post.title}
      </h3>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-body">{post.excerpt}</p>
      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-body/60">
        Full article coming soon
      </p>
    </article>
  );
}
