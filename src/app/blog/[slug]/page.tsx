import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | unorthod0xd",
    };
  }

  return {
    title: `${post.title} | unorthod0xd`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://unorthod0xd.xyz/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="min-h-screen">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors mb-8 group"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to blog
      </Link>

      <header className="mb-8 pb-8 border-b border-border">
        <h1 className="font-mono text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-text-tertiary">
          <span className="flex items-center gap-1.5">
            <Calendar size={16} strokeWidth={1.5} />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={16} strokeWidth={1.5} />
            {post.readingTime} min read
          </span>
        </div>
      </header>

      <div
        className="prose prose-invert max-w-none
          prose-headings:font-mono prose-headings:text-text-primary
          prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
          prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-4
          prose-a:text-accent-primary prose-a:no-underline hover:prose-a:text-accent-secondary hover:prose-a:underline
          prose-strong:text-text-primary prose-strong:font-bold
          prose-ul:text-text-secondary prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
          prose-ol:text-text-secondary prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
          prose-li:leading-relaxed prose-li:mb-2
          prose-blockquote:border-l-2 prose-blockquote:border-accent-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-text-secondary
          prose-code:bg-bg-card prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-accent-primary prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto prose-pre:mb-4 prose-pre:font-mono prose-pre:text-sm
          prose-hr:border-border prose-hr:my-8"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <footer className="mt-12 pt-8 border-t border-border">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to all posts
        </Link>
      </footer>
    </article>
  );
}
