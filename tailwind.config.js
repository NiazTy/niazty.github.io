/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "karla": [ "Karla", "sans-serif" ],
      "rubik": [ "Rubik", "sans-serif" ],
      "spectral": [ "Spectral", "serif" ]
    },
    extend: {
      colors: {
        "blue-de-france": "#3da9fc",
        "slate-gray": "#094067",
        "mauve-taupe": "#5f6c7b",
        "white-snow": "#fffffe"
      },
    },
  },
  plugins: [],
}

