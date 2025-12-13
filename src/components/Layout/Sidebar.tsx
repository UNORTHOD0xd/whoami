"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SocialLinks from "../UI/SocialLinks";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#now" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[300px] lg:flex-col lg:justify-between lg:py-24 lg:pr-12">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <Image
              src="/avatar.jpg"
              alt="unorthod0xd"
              width={120}
              height={120}
              className="rounded-full border-2 border-accent-primary/20 hover:border-accent-primary transition-colors duration-300"
              priority
            />
          </div>

          <h1 className="font-mono text-3xl font-bold text-accent-primary mb-2">
            unorthod0xd
          </h1>

          <h2 className="text-lg font-medium text-text-primary mb-4">
            Blockchain Security Engineer
          </h2>

          <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
            Building at the intersection of smart contract security and
            quantitative finance.
          </p>
        </motion.div>

        <nav className="mt-12 hidden lg:block">
          <ul className="space-y-4">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href;
              return (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <a
                    href={item.href}
                    className={`group flex items-center transition-colors ${
                      isActive
                        ? "text-accent-primary"
                        : "text-text-secondary hover:text-accent-primary"
                    }`}
                  >
                    <span
                      className={`mr-4 h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-accent-primary"
                          : "w-8 bg-text-tertiary group-hover:w-16 group-hover:bg-accent-primary"
                      }`}
                    />
                    <span className="text-sm font-medium uppercase tracking-widest">
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 lg:mt-0"
      >
        <SocialLinks />
      </motion.div>
    </aside>
  );
}
