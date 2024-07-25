/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      "brick-red": "#CC2D4A",
      "picton-blue": "#61AEC9",
      'light-grey': "#CCCCCC",
      black: "#000000",
      citrus: "#8FA206",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "card": "0px 3px 3px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
