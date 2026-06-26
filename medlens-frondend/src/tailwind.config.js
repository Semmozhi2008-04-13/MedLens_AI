/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'cyber-blue': '#00f0ff',
        'cyber-purple': '#7c3aed',
      },
    },
  },
  plugins: [],
}