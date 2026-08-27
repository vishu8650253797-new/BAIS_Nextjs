import Image from "next/image";
import type { BlogPost } from "@/data/blog";

export function FeaturedBlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group grid overflow-hidden rounded-2xl border border-border bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-xl hover:shadow-ink/5 lg:grid-cols-2">
      <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center p-8 sm:p-10">
        <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-maroon">
          {post.category}
        </span>
        <h3 className="mt-5 text-2xl font-bold leading-snug text-ink sm:text-3xl">
          {post.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-body">{post.excerpt}</p>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-body/60">
          Full article coming soon
        </p>
      </div>
    </article>
  );
}
