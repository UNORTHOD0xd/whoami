"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import TechTag from "./TechTag";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: "Coursework" | "Personal" | "In Progress";
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  status,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-lg border border-border bg-bg-card/50 p-6 hover:border-accent-primary/50 hover:bg-bg-card hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-3">
          {status && (
            <span className="text-xs text-text-tertiary font-mono">
              {status}
            </span>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={18} strokeWidth={1.5} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors"
              aria-label="View live site"
            >
              <ExternalLink size={18} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-text-secondary mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>
    </motion.div>
  );
}
