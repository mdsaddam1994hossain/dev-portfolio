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
          "1000": "#202020",
          "1400": "rgba(0, 0, 0, 0.6)",
          "1600": "rgba(0, 0, 0, 0.7)",
          "1900": "rgba(255, 255, 255, 0.1)",
        },
        darkslategray: {
          "100": "#2a2c39",
          "200": "#2a2c38",
        },
        dimgray: "#5f5f5f",
        snow: {
          "100": "#fff9f9",
          "200": "#fff7f7",
        },
        tomato: {
          "100": "#fd5956",
          "200": "#fd5955",
          "300": "rgba(253, 89, 86, 0.8)",
        },
        black: "#000",
        whitesmoke: "#f2f2f2",
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        manrope: "Manrope",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "3xl": "22px",
      xl: "20px",
      lg: "18px",
      "13xl": "32px",
      "9xl": "28px",
      "45xl": "64px",
      "37xl": "56px",
      "17xl": "36px",
      "5xl": "24px",
      "11xl": "30px",
      "91xl": "110px",
      "51xl": "70px",
      "95xl": "114px",
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
