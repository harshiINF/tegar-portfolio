/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          outfit: ['Outfit', 'sans-serif'],
        },
        colors: {
          dark: '#0f0f0f',
          primary: '#7F00FF',
        },
      },
    },
    plugins: [],
  }
  