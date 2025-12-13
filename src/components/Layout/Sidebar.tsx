"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SocialLinks from "../UI/SocialLinks";
import TypeWriter from "../UI/TypeWriter";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Focus", href: "#now" },
  { label: "Journey", href: "#timeline" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog", isExternal: true },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = "";
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = `#${section.id}`;
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

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
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8Amu9G3RHqmgyrp8shjvIWfxwyOMBhnOB9z2Kv7P3pp0O7NKlumSOFbyEvI5wFUOMkn4BWS+OCSO+6K0tsLHFWzJlZoP/Z"
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
            <TypeWriter
              text="Building at the intersection of smart contract security and quantitative finance."
              delay={30}
            />
          </p>
        </motion.div>

        <nav className="mt-12 hidden lg:block">
          <ul className="space-y-4">
            {navItems.map((item, index) => {
              const isActive = !item.isExternal && activeSection === item.href;
              const LinkComponent = item.isExternal ? Link : "a";
              return (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <LinkComponent
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
                  </LinkComponent>
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
