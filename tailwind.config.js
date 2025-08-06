/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        adminMainColor: "#FFFFFF",
        adminAddItem: "#28A745",
        adminSubPath: "#F6FBFF",
        adminAddButton: "#4880FF",
        adminSecondAddButton: "#28A745",
      },
      screens: {
        "3xl": "1400px",
        ...defaultTheme.screens,
      },
      boxShadow: {
        "custom-shadow": "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
});
