"use client";

import { useState } from "react";
import SectionHeader from "../UI/SectionHeader";
import ProjectCard from "../UI/ProjectCard";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: "Coursework" | "Personal" | "In Progress";
}

const projects: Project[] = [
  {
    title: "Foundry DeFi Stablecoin",
    description:
      "A decentralized stablecoin system built with Foundry. Implements collateralized debt positions, liquidation mechanisms, and price oracle integration.",
    tags: ["Solidity", "Foundry", "DeFi"],
    githubUrl: "https://github.com/UNORTHOD0xd/Foundry-Defi-Stablecoin",
    status: "Personal",
  },
  {
    title: "Emerald DAO",
    description:
      "Decentralized autonomous organization built for the 2025 Chainlink Hackathon. Features governance mechanisms, proposal voting, and on-chain treasury management.",
    tags: ["Solidity", "Chainlink", "DAO"],
    githubUrl: "https://github.com/UNORTHOD0xd/EMERALD-DAO",
    status: "Personal",
  },
  {
    title: "ETH Analyzer",
    description:
      "Rust CLI tool for Ethereum blockchain analysis. Query address balances, inspect blocks, and analyze transactions with detailed gas metrics.",
    tags: ["Rust", "Ethereum", "CLI"],
    githubUrl: "https://github.com/UNORTHOD0xd/eth-analyzer",
    status: "Personal",
  },
  {
    title: "Prediction Market",
    description:
      "Decentralized prediction market on Ethereum Sepolia using Chainlink CRE for automated AI-driven settlement via Google Gemini.",
    tags: ["Solidity", "Chainlink", "TypeScript", "AI"],
    githubUrl: "https://github.com/UNORTHOD0xd/Prediction-Market",
    status: "Personal",
  },
  {
    title: "Nexus Chain",
    description:
      "Blockchain-based supply chain tracking system. Real-time transparency and verification for product lifecycle management.",
    tags: ["JavaScript", "Blockchain", "Supply Chain"],
    githubUrl: "https://github.com/UNORTHOD0xd/Nexus-Chain",
    status: "Personal",
  },
];

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? projects.filter((p) => p.tags.includes(activeFilter))
    : projects;

  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <SectionHeader title="Projects" />

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveFilter(null)}
          className={`px-3 py-1 text-xs rounded-full border transition-colors ${
            activeFilter === null
              ? "border-accent-primary bg-accent-primary/10 text-accent-primary"
              : "border-border text-text-secondary hover:border-accent-primary/50"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag === activeFilter ? null : tag)}
            className={`px-3 py-1 text-xs rounded-full border transition-colors ${
              activeFilter === tag
                ? "border-accent-primary bg-accent-primary/10 text-accent-primary"
                : "border-border text-text-secondary hover:border-accent-primary/50"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-text-tertiary text-sm">No projects match this filter.</p>
      )}

      <p className="mt-6 text-sm text-text-tertiary">
        More projects coming as I continue building in public.
      </p>
    </section>
  );
}
