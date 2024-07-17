import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        slate: {
          300: "hsl(212, 45%, 89%)",
          500: "hsl(216, 15%, 48%)",
          900: "hsl(218, 44%, 22%)",
        },
        attribution: "hsl(228, 45%, 44%)",
      },
    },
  },
  plugins: [],
};
export default config;
