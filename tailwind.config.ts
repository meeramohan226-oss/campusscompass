import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060b18",
          900: "#0a0f1d",
          800: "#0f172a",
          700: "#162036",
          600: "#1e293b",
          500: "#334155",
        },
        brand: {
          primary: "#ff8a1f",
          "primary-hover": "#e5770d",
          "primary-light": "#ffaa54",
          "primary-muted": "rgba(255, 138, 31, 0.15)",
          secondary: "#00e5ff",
          "secondary-hover": "#00b8d4",
          "secondary-muted": "rgba(0, 229, 255, 0.15)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif-heading)", "Georgia", "serif"],
        sans: ["var(--font-sans-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
