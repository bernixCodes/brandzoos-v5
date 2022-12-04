/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-red": "#C12026",
        "c-black": "#28293E",
        "b-blue": "#2B83C5",
        "b-overlay": "rgba(0, 0, 0, 0.74);",
        "dark-grey": "#737587",
      },
    },
    boxShadow: {
      default: "0px 4px 16px rgba(173, 190, 215, 0.25)",
      md: "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, .25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, .3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      focus: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      custom: "0 14px 26px -12px rgba(0,0,0,.1)",
      none: "none",
    },
  },
  plugins: [],
};
