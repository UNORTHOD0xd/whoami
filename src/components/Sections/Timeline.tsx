"use client";

import { motion } from "framer-motion";
import SectionHeader from "../UI/SectionHeader";

const timelineItems = [
  {
    year: "2025",
    title: "Chainlink Hackathon",
    description: "Built Emerald DAO - a decentralized governance platform with on-chain treasury management.",
    type: "achievement",
  },
  {
    year: "2024 - Present",
    title: "Cyfrin Updraft Security Course",
    description: "Advanced smart contract security, auditing methodologies, and vulnerability research.",
    type: "education",
  },
  {
    year: "2023 - Present",
    title: "Computer Science Degree",
    description: "Pursuing BS in Computer Science with focus on algorithms, systems, and security.",
    type: "education",
  },
  {
    year: "2018",
    title: "Entered Crypto",
    description: "First exposure to Ethereum and smart contracts. Started learning Solidity.",
    type: "milestone",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="mb-24 scroll-mt-24">
      <SectionHeader title="Journey" />

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              <div
                className={`absolute left-0 top-1 w-2 h-2 rounded-full bg-accent-primary md:left-1/2 md:-translate-x-1/2`}
              />

              <div
                className={`md:max-w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <span className="font-mono text-xs text-accent-primary">
                  {item.year}
                </span>
                <h3 className="font-medium text-text-primary mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
