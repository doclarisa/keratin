/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Clay / cream palette
        brand: {
          50: "#FBF7F1", // cream
          100: "#F3EBE0", // cream-2
          200: "#E4D7C6", // line
          300: "#D9BFA0",
          400: "#C89B5A", // gold
          500: "#C97A55", // light clay
          600: "#B5533A", // clay (primary)
          700: "#9A4430", // clay-deep (hover)
          800: "#6E2C20", // deep clay
          900: "#241A15", // ink / footer
        },
      },
      fontFamily: {
        sans: ["Figtree", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(74,43,28,.35)",
      },
    },
  },
  plugins: [],
};
