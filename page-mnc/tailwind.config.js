/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // muda conforme sua identidade visual
        secondary: "#FBBF24",
      },
    },
  },
  plugins: [require("preline/plugin")],
}
