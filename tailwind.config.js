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
          200: '#afafaf',
          300: '#42424570',
        },
        eminence: {
          600: "#6C3082",
        },
        zinc: "#101010",
        shinysilver: "#C0C0C0",
      },
    },
  },
  plugins: [],
};