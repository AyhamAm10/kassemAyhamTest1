/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.02em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
      extraWide: "0.2em",
      superWide: "0.3em",
    },
    colors: {
      primery: "#F8F8F8",
      red: "#EF4C3C",
      black: "#0A0A0A",
      ofblack: "#828283",
      textLight: "#959595",
      dark: "#333",
      ofwhite: "#E0E0E0",
      white: "#FFFFFF",
      yalwe: "#FFC21B",
      green: "#3CB44B",
      p:"#274C5B"
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1280px",
      // => @media (min-width: 1024px) { ... }

      xl: "1636px",
      // => @media (min-width: 1280px) { ... }

      // "2xl": "1636px",
      // => @media (min-width: 1536px) { ... }
    },
    borderRadius: {
      sm: "4px",
      md: "8px",
      lg: "16px",
      xl: "24px",
      "2xl": "30px",
      "3xl": "36px",
      full: "9999px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundColor: {
        'linear': ' bg-gradient-to-r from-red to-yalwe',
      },
    },
  },
  plugins: [],
}