/** @type {import('tailwindcss').Config} */
import font from './app/lib/font'
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1080px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1700px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      screens: {
        'xs': {'min': '10px', 'max': '576px'},
        // Customize screen size for all mobile devices min-width: 300px and max-width:576px
      },
      fontFamily:{
        pop:['Poppins', 'sans-serif'],
        poppins: ["var(--poppins)",'sans-serif'],
        roboto : ["var(--roboto)", 'sans-serif'],
        inter: ["var(--inter)", 'sans-serif'],
        nunito : ["var(--nunito)", 'sans-serif'],
      
      }
    },
  },
  plugins: [],
}
