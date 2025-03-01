import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Green and brown theme as you requested
        primary: {
          50: "#f5f8f3",
          100: "#e6f0e0",
          200: "#c8e0c1",
          300: "#a9d0a1",
          400: "#8ac082",
          500: "#6bb063",
          600: "#4a9e43", // Primary green
          700: "#427a3a",
          800: "#3a6332",
          900: "#32512b",
        },
        secondary: {
          50: "#f9f6f3",
          100: "#f1ece4",
          200: "#e2d8c8",
          300: "#d3c4ac",
          400: "#c4af90",
          500: "#b59b74", // Earthy brown
          600: "#a68759",
          700: "#86714c",
          800: "#6b5a3e",
          900: "#504532",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;