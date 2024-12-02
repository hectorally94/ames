/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a202c', // Customize as needed
        'dark-text': '#edf2f7', // Customize as needed
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Default font family
        slab: ['Roboto Slab', 'serif'], // Custom slab font family
      },
    },
  },
  darkMode: 'media', // Change to 'class' if you prefer manual dark mode control
  plugins: [],
}
