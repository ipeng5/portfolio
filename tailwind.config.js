/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
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
        body: ['Montserrat', 'sans-serif'],
        title: ['Sora', 'sans-serif'],
      },
      keyframes: {
        moveInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '100' },
        },
        moveInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': {
            transform: 'translateX(0)',
            opacity: '100',
          },
        },
      },
      animation: {
        moveInLeft: 'moveInLeft 1s ease-in-out',
        moveInRight: 'moveInRight 1.5s ease-in-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
