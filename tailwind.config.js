/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        pink: {
          default: "#ed018b",
        },
      },
    },
  },
  plugins: [],
};
