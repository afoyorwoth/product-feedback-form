
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#202020",
        dark: "#171717",
        lime: "#C8F542",
        blush: "#F3A8D0",
        card: "#707070",
        light: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
