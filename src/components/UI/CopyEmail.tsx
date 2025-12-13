"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyEmailProps {
  email: string;
}

export default function CopyEmail({ email }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded border border-border px-4 py-2 text-sm text-text-secondary hover:border-accent-primary hover:text-accent-primary transition-colors"
      aria-label="Copy email address"
    >
      {copied ? (
        <>
          <Check size={16} className="text-accent-primary" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy size={16} />
          <span>{email}</span>
        </>
      )}
    </button>
  );
}
