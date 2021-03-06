module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        page: "80vh;",
      },
      minHeight: {
        page: "80vh;",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
