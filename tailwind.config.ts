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
        primary: "#1c1c1c", // Almost Black
        secondary: "#f4f4f0", // Stone / Warm White
        accent: "#c0a080", // Muted Bronze
        background: "#ffffff", // Pure White
        text: "#2d2d2d", // Dark Grey
        "text-light": "#757575", // Medium Grey
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)', 'serif'],
        sans: ['var(--font-lato)', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.2em', // Increased for that luxury label look
      },
    },
  },
  plugins: [],
};
export default config;
