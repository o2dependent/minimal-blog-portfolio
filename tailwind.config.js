module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#EFF1F5",
          800: "#1D232F",
          900: "#101319",
        },
      },
      spacing: {
        15: "3.75rem",
        17: "4.375rem",
        23: "5.875rem",
        25: "6.25rem",
        108: "27rem",
      },
      gridTemplateColumns: {
        "auto-post-display": "repeat(auto-fill, minmax(475px, 1fr))",
        "post-display": "repeat(3, minmax(475px, 1fr))",
        "post-display-mobile": "repeat(3, minmax(300px, 1fr))",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  plugins: [],
}
