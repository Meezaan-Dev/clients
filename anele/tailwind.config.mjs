/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#10131b",
        paper: "#f7f5ee",
        bone: "#f1eee8",
        mist: "#dedbd3",
        signal: "#0ea5c6",
        rust: "#ae633f",
        olive: "#6b7c4e",
        coral: "#e07a62",
        forest: "#2d4a3e",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gallery: "0 22px 80px rgb(16 19 27 / 0.10)",
      },
    },
  },
  plugins: [],
};
