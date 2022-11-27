/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      prefix: 'tw-',
      colors: {
        bg: {
          100: '#242424',
          200: '#323232',
        },
        text: {
          100: '#769DFE',
          200: '#DBDBDB',
          300: '#536eb2',
        },
      },
      fontFamily: {
        body: ['Open sans', 'sans-serif'],
        title: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
