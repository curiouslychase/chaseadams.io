module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/views/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans:
        "'Ringside Regular SSm A', Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    },
    extend: {
      colors: {
        black: "hsl(251, 80%, 4%)",
        "blue-500": "#3469F1",
        "blue-400": "#5E87F4",
        "blue-300": "#87A5F8",
        "blue-200": "#B0C3FA",
        "blue-100": "#D7E1FE",
        "blue-50": "#E0E8FE",
      },
    },
  },
  plugins: [],
};
