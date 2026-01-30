/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // ou 'media' se quiser seguir o sistema
  theme: {
    extend: {},
  },
  plugins: [],
}
