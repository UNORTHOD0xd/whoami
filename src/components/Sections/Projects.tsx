"use client";

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
    title: "Emerald DAO Frontend",
    description:
      "React-based web interface for the Emerald DAO. Connects to smart contracts for proposal creation, voting, and treasury visualization.",
    tags: ["TypeScript", "React", "Web3"],
    githubUrl: "https://github.com/UNORTHOD0xd/Emerald-DAO-Frontend",
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

export default function Projects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <SectionHeader title="Projects" />

      <div className="grid gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <p className="mt-6 text-sm text-text-tertiary">
        More projects coming as I continue building in public.
      </p>
    </section>
  );
}
