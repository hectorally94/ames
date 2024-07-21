/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a202c', // Customize as needed
        'dark-text': '#edf2f7', // Customize as needed
      },
    },
  },
  darkMode: 'media', //class if you prefer customize the code or 'media' if you prefer automatic based on user's system preference
  plugins: [],
}
