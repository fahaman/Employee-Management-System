/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          taupe: '#a29890',
          sand: '#cbbeb5',
          cream: '#d6cbc4',
          blue: '#407294',
          navy: '#0e2f44',
          navyLight: '#143d57',
          navyDark: '#081c29',
        }
      }
    },
  },
  plugins: [],
}


