/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
      screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
      },
      extend: {
          colors: {
              BackGround: '#040710',
              Yellowsea: '#fca404',
              Electricviolet: '#644bfc',
              Electricvioletbright: '#7963ff',
              Burningorange: '#ff7440',
          },
      },
  },
  plugins: [],
}
