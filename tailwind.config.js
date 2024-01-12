/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        btn: "-4px 0px 14px 5px inherit;",
      },
    },
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1023px" },
      "2md": { max: "920px" },
      md: { max: "767px" },

      sm: { max: "639px" },
    },
  },
  plugins: [],
};
