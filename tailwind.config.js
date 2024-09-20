/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of the template files in your project
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, and TSX files in the pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, and TSX files in the components directory
    "./app/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, and TSX files in the app directory
  ],
  theme: {
    // Extend the default Tailwind CSS theme
    extend: {},
  },
  // Add any plugins here
  plugins: [],
};
