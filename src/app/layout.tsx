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

export const metadata: Metadata = {
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
  openGraph: {
    title: "unorthod0xd | Blockchain Security Engineer",
    description:
      "Building at the intersection of smart contract security and quantitative finance.",
    url: "https://unorthod0xd.xyz",
    siteName: "unorthod0xd",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "unorthod0xd | Blockchain Security Engineer",
    description:
      "Building at the intersection of smart contract security and quantitative finance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
