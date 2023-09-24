/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "380px",
        xmd: "768px",
        sxl: "1024px",
      },
      fontFamily: {
        lato: ['Lato'],
        roboto: ['Roboto+Slab'],
        ubuntu: ['Ubuntu'],
      }
    },
  },
  plugins: [],
}