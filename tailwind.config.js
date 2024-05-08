/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontSize: {
        "4xl": "2.25rem", // Equivalent to 36px
      },
      colors: {
        primary: {
          DEFAULT: "#0D1F3D",
        },
      },
    },
  },
  plugins: [],
};
