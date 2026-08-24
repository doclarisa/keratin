/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf6f3",
          100: "#fbe9e2",
          200: "#f4cdbd",
          300: "#e9a98e",
          400: "#da7c59",
          500: "#c25a37",
          600: "#a4442a",
          700: "#833424",
          800: "#5f2519",
          900: "#3f1810",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
