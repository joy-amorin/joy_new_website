/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#222222",
        foreground: "#ffffff",
        primary: "#9340ff",
      },
      fontFamily: {
        logo: ["Megrim", "cursive"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};