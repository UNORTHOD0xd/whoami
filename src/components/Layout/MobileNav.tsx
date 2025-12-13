"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  { label: "Blog", href: "/blog", isExternal: true },
];

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
              {navItems.map((item) => {
                const LinkComponent = item.isExternal ? Link : "a";
                return (
                  <LinkComponent
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-text-secondary hover:text-accent-primary transition-colors text-sm font-medium uppercase tracking-widest"
                  >
                    {item.label}
                  </LinkComponent>
                );
              })}
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
