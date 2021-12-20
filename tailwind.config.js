module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['"Ringside Regular SSm A"', "Helvetica Neue", "sans-serif"],
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
