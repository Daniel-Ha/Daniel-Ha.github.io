/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'bigger': '32rem',  // Custom width
        'parent-bigger': '36rem' //custom width
      },
      colors: {
        'custom-gray': '#525659',
      },
    },
  },
  plugins: [],
}
