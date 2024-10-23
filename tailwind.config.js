/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
          'bebas': ['"Bebas Neue"', 'cursive'],
          'teko': ['"Teko"', 'sans-serif'],
        },
      },
  },
  plugins: [],
}

