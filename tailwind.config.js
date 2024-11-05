/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins'],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/img/Onda-sonido.jpg')"
      },
      animation: {
        carousel: 'carousel 20s linear infinite',
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}