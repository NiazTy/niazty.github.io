/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "anton": [ "Anton", "sans-serif" ],
      "courier-prime": [ "'Courier Prime'", "serif" ],
      "ibm-plex-sans": [ "'IBM Plex Sans'", "sans-serif" ],
      "libre-baskerville": [ "'Libre Baskerville'", "serif" ]
    },
    extend: {
      colors: {
        "background": "#FDFEFE",
        "paragraph": "#98A1C4",
        "white-snow": "#DB4A2B"
      },
    },
  },
  plugins: [],
}