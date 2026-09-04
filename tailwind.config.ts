import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0a0a0a",
        graphite: "#1a1a1a",
        ivory: "#fdfbf7",
        gold: "#d4af37",
        goldAccent: "#ebd177"
      },
      backgroundImage: {
        'chess-pattern': "url('/chess-bg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
