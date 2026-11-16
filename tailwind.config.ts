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
        brand: {
          yellow: "#FFD400",
          yellowHover: "#E6BF00",
          charcoal: "#171717",
          black: "#0D0D0D",
          white: "#FFFFFF",
          lightGrey: "#F3F3F3",
          surface: "#F8F8F8",
          secondaryText: "#707070",
          border: "#E5E5E5",
          borderLight: "#ECECEC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(23, 23, 23, 0.05)",
        card: "0 10px 30px -10px rgba(23, 23, 23, 0.08)",
        glow: "0 0 35px rgba(255, 212, 0, 0.35)",
        hover: "0 20px 40px -15px rgba(23, 23, 23, 0.12)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marqueeReverse 40s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
