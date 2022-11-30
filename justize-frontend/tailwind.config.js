/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Jost": ["Jost", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}