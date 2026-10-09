/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { display: ['Sora', 'sans-serif'], sans: ['Manrope', 'sans-serif'] },
      colors: { brand: { 500: '#4f6bed', 600: '#4457d9', 700: '#3b46b8' }, violet2: '#7c5cff' },
    },
  },
  plugins: [],
}
