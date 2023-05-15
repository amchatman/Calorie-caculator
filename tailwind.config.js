/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}'
],
  theme: {
    fontFamily:{
      'display':["Roboto Mono", "monospace"],
      'sans':["Roboto","sans-serif"]
     
    },
    extend: {},
  },
  plugins: [],
}

