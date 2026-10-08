/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#092328',
        cardBg: '#12544F',
        brandGreen: '#247B62',
        lightMint: '#85BB92',
      }
    },
  },
  plugins: [],
}



