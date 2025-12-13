"use client";

import { motion } from "framer-motion";
import SectionHeader from "../UI/SectionHeader";
import TechTag from "../UI/TechTag";

interface FocusItem {
  title: string;
  status: string;
  description: string;
  tags: string[];
}

const focusItems: FocusItem[] = [
  {
    title: "Cyfrin Updraft Security Course",
    status: "In Progress",
    description:
      "Smart contract auditing, vulnerability patterns, and security best practices.",
    tags: ["Solidity", "Foundry", "Security"],
  },
  {
    title: "EVM Mastery Roadmap",
    status: "In Progress",
    description:
      "Post-Merge architecture, execution layer internals, and opcode-level understanding.",
    tags: ["EVM", "Architecture", "Ethereum"],
  },
  {
    title: "Statistics & Probability",
    status: "University",
    description:
      "Distributions, hypothesis testing, and quantitative foundations for trading systems.",
    tags: ["Statistics", "Probability", "Quant"],
  },
  {
    title: "Trading Systems Development",
    status: "Ongoing",
    description:
      "MQL5 Expert Advisors and systematic strategy development for automated trading.",
    tags: ["MQL5", "Trading", "Automation"],
  },
];

export default function Now() {
  return (
    <section id="now" className="mb-24 scroll-mt-24">
      <SectionHeader title="Current Focus" />

      <div className="space-y-6">
        {focusItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group rounded-lg border border-border bg-bg-card/50 p-5 hover:border-accent-primary/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                {item.title}
              </h3>
              <span className="text-xs text-accent-secondary font-mono">
                {item.status}
              </span>
            </div>
            <p className="text-sm text-text-secondary mb-3">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <TechTag key={tag} label={tag} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
