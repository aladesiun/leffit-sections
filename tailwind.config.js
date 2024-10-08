/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-text': '#27251f',
        'dark-border': '#27251f',
        'dark-bg': '#27251f',
        'light-gray': '#d0d1d2',
        'footer-gray': '#f4f3f1',
        'gray-text': '#d0d1d2',
         primary: "#ffcad4"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}