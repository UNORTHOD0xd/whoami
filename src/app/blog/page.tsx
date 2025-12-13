import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/UI/BlogCard";

export const metadata: Metadata = {
  title: "Blog | unorthod0xd",
  description:
    "Thoughts on blockchain security, smart contract auditing, and building in web3.",
  openGraph: {
    title: "Blog | unorthod0xd",
    description:
      "Thoughts on blockchain security, smart contract auditing, and building in web3.",
    url: "https://unorthod0xd.xyz/blog",
    siteName: "unorthod0xd",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <header className="mb-12">
        <h1 className="font-mono text-3xl font-bold text-accent-primary mb-4">
          Blog
        </h1>
        <p className="text-text-secondary max-w-lg">
          Thoughts on blockchain security, smart contract auditing, tutorials,
          and building in web3.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="grid gap-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-text-tertiary">No posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
