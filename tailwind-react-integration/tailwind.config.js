/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
darkMode:false,
  theme: {
    extend: {
      screens:{
        "sm":"360px",
        "md":"768px"
      }
    },
  },
  variants:{extend:{}},
  plugins: [],
}

