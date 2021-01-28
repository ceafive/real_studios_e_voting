module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "2/3": "66.7%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
