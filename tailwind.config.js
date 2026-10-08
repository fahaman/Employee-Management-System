/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        creamBg: '#FFFAD3',
        peachLight: '#FFDBB0',
        peachMedium: '#FFCCB8',
        coralPink: '#FFB1B1',
        textDark: '#4A2E2B',
        textMuted: '#8C5A55',
      }
    },
  },
  plugins: [],
}




