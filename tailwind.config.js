/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        bg: {
          100: '#242424',
          200: '#242424',
        },
        text: {
          100: '#769DFE',
          200: '#DBDBDB',
        },
      },
      fontFamily: {
        body: ['Open sans', 'sans-serif'],
        title: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
