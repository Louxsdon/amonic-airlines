const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  // mode: "jit",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: colors.orange,
        secondary: colors.green,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
        info: colors.sky,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
