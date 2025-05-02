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
  darkMode: 'class', // Enable dark mode using the 'dark' class
  theme: {
    extend: {
      colors: {
        'custom-teal': '#83C4CC',
        'light-teal': '#138797'
      },
    },
  },
  plugins: [],
};

