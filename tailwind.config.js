/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          100: "hsl(259, 100%, 65%)",
          200: "hsl(0, 100%, 67%)",
        },
        secondary: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(0, 0%, 94%)",
          300: "hsl(0, 0%, 86%)",
          400: "hsl(0, 1%, 44%)",
          500: "hsl(0, 0%, 8%)",
        },
      },
      fontSize: {
        primary: "36px",
      },
    },
  },
  plugins: [],
};
