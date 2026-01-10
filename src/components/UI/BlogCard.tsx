"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  readingTime,
}: BlogCardProps) {
  const formattedDate = new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Link
        href={`/blog/${slug}`}
        className="group block rounded-lg border border-border bg-bg-card/50 p-6 hover:border-accent-primary/50 hover:bg-bg-card hover:scale-[1.02] transition-all duration-300"
      >
        <h3 className="font-medium text-lg text-text-primary group-hover:text-accent-primary transition-colors mb-2">
          {title}
        </h3>

        <p className="text-sm text-text-secondary mb-4 leading-relaxed line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-text-tertiary">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} strokeWidth={1.5} />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} strokeWidth={1.5} />
            {readingTime} min read
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
