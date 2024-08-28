/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-text': '#27251f',
        'light-gray': '#d0d1d2',
        'footer-gray': '#f4f3f1',
      },
    },
  },
  plugins: [],
}