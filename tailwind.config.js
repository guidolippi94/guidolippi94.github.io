/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#736CED",
        accent: "#F2DFD7",
        background: "#FEF9FF",
      },
    },
  },
  plugins: [],
};
