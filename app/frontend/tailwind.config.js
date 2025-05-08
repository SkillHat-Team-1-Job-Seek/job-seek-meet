// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode using the 'dark' class
  theme: {
    extend: {
      colors: {
        "custom-teal": "#83C4CC",
        "light-teal": "#138797",
        "secondary-warm-yellow": "#FCDB32",
        "custom-primary-teal": "#138797",
        "custom-primary-yellow": "#FCDB32",
        "custom-teal-2": "#26A69A",
        "custom-teal-border": "#26A69A",
        "customTeal": "#138797",
        "customYellow": "#FCDB32",
      },
    },
  },
  plugins: [],
};
