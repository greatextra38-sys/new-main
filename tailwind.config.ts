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
        primary: "#1e293b", // Deep Slate Blue / Charcoal
        secondary: "#f8f5f2", // Soft Cream / Off-white
        accent: "#c5a059", // Muted Gold / Bronze
        background: "#ffffff", // Pure White
        text: "#333333", // Dark Charcoal for text
        "text-light": "#64748b", // Muted Slate for secondary text
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)', 'serif'],
        sans: ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
