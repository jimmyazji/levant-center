/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts}",
    "./src/views/**/*.{vue,js,ts}",
    "./src/components/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        tory: {
          50: "#6AB0ED",
          100: "#58A6EB",
          200: "#3493E7",
          300: "#1A7FD8",
          400: "#1569B3",
          500: "#11548F",
          600: "#0B375D",
          700: "#05192B",
          800: "#000000",
          900: "#000000",
        },
        curious: {
          50: "#B0D7EE",
          100: "#9FCEEB",
          200: "#7EBDE4",
          300: "#5CACDD",
          400: "#3A9BD6",
          500: "#2886BF",
          600: "#1E6591",
          700: "#154562",
          800: "#0B2434",
          900: "#010405",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#11548F",
          secondary: "#662382",
          accent: "#2886BF",
          neutral: "#191D24",
          "base-100": "#f7f9ff",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
