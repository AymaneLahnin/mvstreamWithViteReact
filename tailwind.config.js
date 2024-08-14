/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      screens:{
       "others" :{'min': '340px', 'max':'1200px'}
      }
    },
  },
  plugins: [],
}