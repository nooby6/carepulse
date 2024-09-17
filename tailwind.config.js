/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Scans the pages directory for Tailwind class names
    "./components/**/*.{js,ts,jsx,tsx}", // Scans the components directory
    "./app/**/*.{js,ts,jsx,tsx}", // Scans the app directory if you're using the new app structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
