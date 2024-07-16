/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        githubbg: "rgb(13, 17, 23)",
        navBlack: "rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
