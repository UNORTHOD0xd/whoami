"use client";

import { motion } from "framer-motion";
import SectionHeader from "../UI/SectionHeader";

const timelineItems = [
  {
    year: "2025",
    title: "Building in Public",
    description: "Redoing Cyfrin course with Git tracking. Competed in Chainlink & Intellibus hackathons. Launched this site to document my journey.",
    type: "achievement",
  },
  {
    year: "2024",
    title: "First Hackathon & University",
    description: "Competed in first Chainlink hackathon, met brilliant minds from Singapore and India. Started Cyfrin Updraft course. Returned to university.",
    type: "milestone",
  },
  {
    year: "2023",
    title: "Database Admin & Deep Dives",
    description: "Remote DB admin role at a startup. Joined Chainlink and ZKsync communities, diving deep into their tech stacks.",
    type: "achievement",
  },
  {
    year: "2022",
    title: "Surviving the Bear",
    description: "Funds trapped in FTX collapse. Local banks blacklisted crypto. The Merge sparked my technical journey into Ethereum's infrastructure.",
    type: "milestone",
  },
  {
    year: "2021",
    title: "Hard Lessons Learned",
    description: "Joined crypto Twitter during peak bullrun. Lost money on memecoins. Pivoted to utility tokens and L2s, started reading documentation seriously.",
    type: "milestone",
  },
  {
    year: "2019",
    title: "NFT Experiments",
    description: "Introduced friends to NFTs. Traded and launched a few collections with basic JS. Learned how the game worked.",
    type: "milestone",
  },
  {
    year: "2018",
    title: "The Beginning",
    description: "Received my first 2 ETH (~$300) for photography at a Miami car show. The concept reminded me of in-game currencies - fascinating.",
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
