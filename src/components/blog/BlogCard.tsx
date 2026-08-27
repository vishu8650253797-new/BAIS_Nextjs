import Image from "next/image";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-lg hover:shadow-ink/5">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-full bg-cream px-3 py-1 text-xs font-semibold text-maroon">
          {post.category}
        </span>
        <h3 className="mt-4 text-base font-bold leading-snug text-ink">{post.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{post.excerpt}</p>
        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-body/60">
          Full article coming soon
        </p>
      </div>
    </article>
  );
}
