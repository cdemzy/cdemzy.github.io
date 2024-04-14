/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'g-1': '#2a2a2a',
        'g-2': '#111',
        'g-3': '#222',
        'g-4': '#2e2e2e',
        'primary-d': '#eee',
        'secondary-d': '#b4b4b4',
        'L-1': '#333333',
        'L-2': '#646464',
        'h1-L': '#202020'
      },
    },
  },
  plugins: [],
}

