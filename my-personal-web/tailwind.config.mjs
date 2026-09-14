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
        background: "#000000",
        foreground: "#F5F5F5",
        primary: "#ffffff",
        muted: "#A3A3A3",
        surface: "#111111",
        border: "#242424",
      },
      fontFamily: {
        logo: ["Megrim", "cursive"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};