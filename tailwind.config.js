/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#757575",
          "200": "#292b37",
          "300": "#252734",
          "400": "rgba(255, 255, 255, 0.8)",
          "500": "rgba(255, 255, 255, 0.7)",
          "600": "rgba(255, 255, 255, 0.6)",
          "800": "rgba(255, 255, 255, 0.3)",
          "900": "rgba(255, 255, 255, 0.05)",
        },
        darkslategray: {
          "100": "#2a2c39",
          "200": "#2a2c38",
        },
        dimgray: "#5f5f5f",
        snow: "#fff7f7",
        tomato: "#fd5956",
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "3xl": "22px",
      xl: "20px",
      "13xl": "32px",
      "5xl": "24px",
      "45xl": "64px",
      "29xl": "48px",
      "11xl": "30px",
      "91xl": "110px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
