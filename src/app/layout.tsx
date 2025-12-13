import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "unorthod0xd",
  url: "https://unorthod0xd.xyz",
  jobTitle: "Blockchain Security Engineer",
  description:
    "Blockchain security engineer specializing in smart contract auditing and DeFi protocol security.",
  sameAs: [
    "https://github.com/UNORTHOD0xd",
    "https://x.com/un_orthodoxd",
  ],
  knowsAbout: [
    "Smart Contract Security",
    "Solidity",
    "DeFi",
    "Ethereum",
    "Blockchain",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://unorthod0xd.xyz"),
  title: "unorthod0xd | Blockchain Security Engineer",
  description:
    "Blockchain security engineer specializing in smart contract auditing and DeFi protocol security. Building at the intersection of security and quantitative finance.",
  keywords: [
    "blockchain security",
    "smart contract auditing",
    "DeFi",
    "Ethereum",
    "Solidity",
    "security engineer",
  ],
  authors: [{ name: "unorthod0xd" }],
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    title: "unorthod0xd | Blockchain Security Engineer",
    description:
      "Building at the intersection of smart contract security and quantitative finance.",
    url: "https://unorthod0xd.xyz",
    siteName: "unorthod0xd",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "unorthod0xd - Blockchain Security Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "unorthod0xd | Blockchain Security Engineer",
    description:
      "Building at the intersection of smart contract security and quantitative finance.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
