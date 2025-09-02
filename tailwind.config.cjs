/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // scan these files for Tailwind classes
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
