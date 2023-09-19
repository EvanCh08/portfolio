/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "380px"
      },
      fontFamily: {
        lato: ['Lato'],
        roboto: ['Roboto+Slab']
      }
    },
  },
  plugins: [],
}