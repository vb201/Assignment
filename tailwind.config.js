/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "#1E262F",
        secondary: "#101317",
        cyan: "#36F5C7",
      },
      textColor: {
        primary: "#FFFFFF",
        secondary: "#BDBCBE",
      },
    },
  },
  plugins: [],
};
