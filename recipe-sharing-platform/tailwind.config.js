/** @type {import('tailwindcss').Config} */
export default {
  purge: [
"./src/**/*.{js,jsx,ts,tsx}",
 "./public/index.html"
  ],
  media:false,
  theme: {
    extend: {
      screens:{
        "sm":"360px",
        "md":"768px"
      }
    },
  },
  plugins: [],
}

