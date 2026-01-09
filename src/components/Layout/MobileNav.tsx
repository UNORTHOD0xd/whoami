"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../UI/SocialLinks";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Focus", href: "#now" },
  { label: "Journey", href: "#timeline" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const blogLink = { label: "Blog", href: "/blog" };

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/avatar.jpg"
            alt="unorthod0xd"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-mono text-lg font-bold text-accent-primary">
            unorthod0xd
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-text-primary p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-text-secondary hover:text-accent-primary transition-colors text-sm font-medium uppercase tracking-widest"
                >
                  {item.label}
                </a>
              ))}

              {/* Prominent Blog Link */}
              <div className="pt-4 border-t border-border">
                <Link
                  href={blogLink.href}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-accent-primary/40 rounded-full text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary transition-all duration-300"
                >
                  <BookOpen size={16} />
                  <span className="text-sm font-medium uppercase tracking-widest">
                    {blogLink.label}
                  </span>
                </Link>
                <p className="mt-2 text-xs text-text-tertiary">
                  Documenting my journey
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <SocialLinks />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
