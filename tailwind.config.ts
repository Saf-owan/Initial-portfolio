import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0d1117",
        line: "rgba(148, 163, 184, 0.18)"
      },
      boxShadow: {
        glow: "0 20px 80px rgba(45, 212, 191, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
