/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: '#5f367b',
        turquoise: '#238c93',
        sky:'#42bfc3',
        white: '#eeebf0',
        gray: {
          DEFAULT: '#86868b',
          100: '#94928d',
          150: "#e5d3ed",
          200: '#afafaf',
          300: '#42424570',
          350: "#abb0ae",
          400: "#7a7974",
          500: "#60605a",
          600: "#585855",
          700: "#4f4f4f",
        },
        blue: {
          100:"#48cae4",
          200:"#00b4d8",
          300:"#0096c7",
          400:"#0077b6",
          500:"#023e8a",
          600:"#032174",
        },
        eminence: {
          600: "#6C3082",
        },
        zinc: "#101010",
        shinysilver: "#C0C0C0",
      },
    },
    invert: {
      10: '0.10',
      25: '0.25',
      50: '0.5',
      75: '0.75',
      95: '0.95',
    },
  },
  plugins: [],
};