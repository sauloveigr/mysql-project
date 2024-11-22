/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {},
      colors: {
         "primary-grey": "#F6F6F6",
         "light-grey": "#ACADAC",
         "primary-blue": "#4461F2",
         white: "#ffffff",
      },
      fontSize: {
         xs: "0.75rem", // 12px
         sm: "0.875rem", // 14px
         base: "1rem", // 16px
         lg: "1.125rem", // 18px
         xl: "1.25rem", // 20px
         "2xl": "1.5rem", // 24px
         "3xl": "1.875rem", // 30px
         "4xl": "2.25rem", // 36px
         "5xl": "3rem", // 48px
         "6xl": "3.75rem", // 60px
         "7xl": "4.5rem", // 72px
         "8xl": "6rem", // 96px
         "9xl": "8rem", // 128px
      },
      fontFamily: {
         body: ["Lato", "sans-serif"],
      },
   },
   plugins: [],
};
