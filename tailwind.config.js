/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(max-height: 800px)' },
        // => @media (min-height: 800px) { ... }
      },
      modalwithTall: {
        '95': '95%',
      },
      modalwithNotTall: {
        '70': '70%',
      },

    }
  },
  plugins: [],
}