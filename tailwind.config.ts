import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#000000",
          elevated: "#0a0a0a",
          card: "#111111",
        },
        accent: {
          primary: "#00ff9f",
          secondary: "#00d4aa",
          glow: "rgba(0, 255, 159, 0.1)",
        },
        text: {
          primary: "#ffffff",
          secondary: "#a0a0a0",
          tertiary: "#666666",
        },
        border: "#222222",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "Fira Code", "monospace"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
