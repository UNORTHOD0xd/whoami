"use client";

import { motion } from "framer-motion";
import SectionHeader from "../UI/SectionHeader";

const skillCategories = [
  {
    title: "Blockchain",
    skills: ["Solidity", "Foundry", "Hardhat", "EVM", "DeFi"],
  },
  {
    title: "Security",
    skills: ["Smart Contract Auditing", "Vulnerability Research", "Fuzzing", "Formal Verification"],
  },
  {
    title: "Languages",
    skills: ["Solidity", "TypeScript", "Python", "Rust", "MQL5"],
  },
  {
    title: "Tools",
    skills: ["Foundry", "Hardhat", "Git", "Linux", "Docker", "Next.js", "React"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-24 scroll-mt-24">
      <SectionHeader title="Skills" />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            className="rounded-lg border border-border bg-bg-card/50 p-5"
          >
            <h3 className="font-mono text-sm font-medium text-accent-primary mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-bg-elevated px-3 py-1 text-xs text-text-secondary border border-border hover:border-accent-primary/50 hover:text-accent-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
