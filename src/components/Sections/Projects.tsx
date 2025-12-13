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
    title: "Smart Contract Security Coursework",
    description:
      "Cyfrin Updraft exercises, practice audits, and security pattern implementations. Documenting the journey from fundamentals to advanced vulnerability detection.",
    tags: ["Solidity", "Foundry", "Security"],
    githubUrl: "https://github.com/UNORTHOD0xd",
    status: "Coursework",
  },
  {
    title: "EVM Deep-Dive Notes",
    description:
      "Documentation of EVM architecture study including opcode analysis, gas optimization patterns, and post-Merge execution layer internals.",
    tags: ["EVM", "Technical Writing", "Ethereum"],
    githubUrl: "https://github.com/UNORTHOD0xd",
    status: "Personal",
  },
  {
    title: "NexusChain",
    description:
      "Blockchain-based supply chain tracking system built during the Intellibus AI Hackathon 2025. Real-time transparency and verification for product lifecycle.",
    tags: ["Blockchain", "Supply Chain", "Hackathon"],
    githubUrl: "https://github.com/UNORTHOD0xd",
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
