/** @type {import('tailwindcss').Config} */
module.exports = {
  // Use class-based dark mode so we can toggle with a 'dark' class on <html>
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // cream background palette — slightly darker/warmer to reduce brightness
        cream: {
          50: '#fbf7f1',
          100: '#f6efe2',
          200: '#efe3cc',
          300: '#e6d3b0',
          400: '#d4b992',
        },
        // muted accent for buttons/links (softer, less saturated)
        accent: {
          400: '#6ba79a',
          500: '#5f8f85'
        },
        // warmer/darker slate for comfortable reading
        slate: {
          50: '#f8faf9',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#55606a',
          600: '#3e4a56',
          700: '#2b3740',
          800: '#1b262c',
          900: '#0b1417'
        }
      }
    },
  },
  plugins: [],
}
