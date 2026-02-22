"use client";

import { motion } from "framer-motion";
import SectionHeader from "../UI/SectionHeader";

export default function About() {
  return (
    <section id="about" className="mb-24 scroll-mt-24">
      <SectionHeader title="About" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-text-secondary leading-relaxed"
      >
        <p>
          I&apos;m a security engineer and computer science student
          specializing in the Ethereum ecosystem. I deepen my security
          engineering by building what I study: full-stack DeFi protocols,
          CRE oracle workflows, and open source contributions, all grounded
          in EVM internals and protocol security.
        </p>

        <p>
          My path into crypto started in 2018 when Ethereum clicked as more than
          just &ldquo;digital money.&rdquo; What began as curiosity evolved into
          a focus on security — understanding how protocols break before they
          break. Now I&apos;m extending that foundation into quantitative
          development: building systematic trading strategies grounded in deep
          protocol knowledge.
        </p>

        <p>
          I&apos;m most interested in the space where security and quant overlap
          — MEV, liquidation mechanics, oracle manipulation, arbitrage. The same
          skills that identify vulnerabilities can identify edges. Currently
          balancing university coursework with independent study, shipping what
          I learn along the way.
        </p>
      </motion.div>
    </section>
  );
}
