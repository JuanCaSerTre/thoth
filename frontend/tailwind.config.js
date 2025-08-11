/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Escanea todos los HTML y TS en src
  ],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", "ui-sans-serif", "system-ui"] },
    },
  },
  plugins: [],
};
