/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- ini penting!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
