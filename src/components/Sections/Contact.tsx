"use client";

import { motion } from "framer-motion";
import SectionHeader from "../UI/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="mb-24 scroll-mt-24">
      <SectionHeader title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <p className="text-text-secondary leading-relaxed max-w-lg">
          I&apos;m currently open to blockchain security roles, audit
          collaborations, and conversations about DeFi protocol development.
          Whether you have a question or just want to connect, feel free to
          reach out.
        </p>

        <div className="space-y-3">
          <a
            href="mailto:contact@unorthod0xd.xyz"
            className="inline-flex items-center gap-2 rounded border border-accent-primary px-6 py-3 text-sm font-medium text-accent-primary hover:bg-accent-primary/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
