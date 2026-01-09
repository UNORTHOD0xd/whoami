import Link from "next/link";
import Image from "next/image";
import ParticleNetwork from "@/components/Background/ParticleNetwork";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ParticleNetwork />

      <div className="mx-auto min-h-screen max-w-screen-md px-6 py-12 md:px-12">
        <nav className="flex items-center justify-between mb-12 pb-6 border-b border-border">
          <Link
            href="/"
            className="flex items-center gap-3 text-text-secondary hover:text-accent-primary transition-colors"
          >
            <Image
              src="/avatar.jpg"
              alt="unorthod0xd"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-mono font-bold text-accent-primary">
              unorthod0xd
            </span>
          </Link>

          <Link
            href="/blog"
            className="text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors uppercase tracking-widest"
          >
            Blog
          </Link>
        </nav>

        <main>{children}</main>

        <footer className="mt-16 pt-8 border-t border-border text-sm text-text-tertiary">
          <p>
            Built with{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>{" "}
            and{" "}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
              Tailwind CSS
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  );
}
