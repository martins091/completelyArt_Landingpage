/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.html"], // Include all HTML files in the root
  theme: {
    extend: {
      colors:{
        primary: '#f0e2fe',
        accent:'#2e5ef7',
        accentLight:'#e467ee',
        textPrimary: '#e0befe',
      }
    },
  },
  plugins: [],
};