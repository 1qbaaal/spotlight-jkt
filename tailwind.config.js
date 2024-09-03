/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "639px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
      fhd: { min: "1920px" },
      qhd: { min: "2560px" },
      uhd: { min: "3840px" },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [],
  plugins: [daisyui],
};
