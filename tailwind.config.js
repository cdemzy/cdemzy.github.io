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
        'g-5' : '#191919',
        'g-6' : '#f0f0f0',
        'g-7' : '#b4b4b4',
        'primary-d': '#eee',
        'secondary-d': '#b4b4b4',
        'third-d': '#6e6e6e',
        'L-1': '#333333',
        'L-2': '#646464',
        'W-1': '#e5e7eb',
        'w-2': '#f9f9f9',
        'h1-L': '#202020'
      },
    },
  },
  plugins: [],
}

