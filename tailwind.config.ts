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
        festive: {
          maroon: {
            DEFAULT: "#701a1e",
            dark: "#4a0e12",
            light: "#8a2429",
            deep: "#36080b",
          },
          saffron: {
            DEFAULT: "#ea580c",
            dark: "#c2410c",
            light: "#f97316",
            amber: "#d97706",
          },
          gold: {
            DEFAULT: "#d4af37",
            light: "#f3e5ab",
            dark: "#aa8012",
            warm: "#f59e0b",
          },
          ivory: {
            DEFAULT: "#fdfbf7",
            soft: "#fbf6ec",
            cream: "#f7eed7",
          },
          brown: {
            DEFAULT: "#3b2314",
            light: "#5c3a21",
            muted: "#785b44",
          },
        },
      },
      fontFamily: {
        devanagari: [
          "'Noto Sans Devanagari'",
          "'Rozha One'",
          "'Tiro Devanagari Hindi'",
          "'Devanagari Sangam MN'",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "flame": "flame 1.5s ease-in-out infinite alternate",
        "bell-swing": "bellSwing 1.2s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        flame: {
          "0%": { transform: "scale(0.95) rotate(-1deg)", opacity: "0.9" },
          "100%": { transform: "scale(1.05) rotate(1deg)", opacity: "1" },
        },
        bellSwing: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(15deg)" },
          "40%": { transform: "rotate(-15deg)" },
          "60%": { transform: "rotate(8deg)" },
          "80%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
