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
        primary: {
          light: '#d4f5e7', // light green
          DEFAULT: '#34d399', // primary green
          dark: '#065f46', // dark green
        },
        secondary: {
          light: '#a7f3d0', // secondary light green
          DEFAULT: '#10b981', // secondary green
          dark: '#047857', // secondary dark green
        },
      },
    },
  },
  plugins: [],
};
export default config;
