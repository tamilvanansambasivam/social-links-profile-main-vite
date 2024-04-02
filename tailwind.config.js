/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        // Add more custom font families as needed
      },

      colors: {
        // Primary colors
        primaryGreen: "hsl(75, 94%, 57%)",

        // Neutral colors
        whiteFM: "hsl(0, 0%, 100%)",
        greyFM: "hsl(0, 0%, 20%)",
        darkGrey: "hsl(0, 0%, 12%)",
        offBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};

// ## Colors

// ### Primary

// - Green: hsl(75, 94%, 57%)

// ### Neutral

// - White: hsl(0, 0%, 100%)
// - Grey: hsl(0, 0%, 20%)
// - Dark Grey: hsl(0, 0%, 12%)
// - Off Black: hsl(0, 0%, 8%)
