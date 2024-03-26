/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: "1320px"
      },
      fontFamily: {
        'popps': ['Poppins', 'sans-serif'],
  
      },
      backgroundColor:{
        'hbg':'#282828'
      },
      backgroundImage:{
        bnbg: "url(./src/assets/banner.png)",
        srbg: "url(./src/assets/service1.png)",
        rbg: "url(./src/assets/service2.png)",
        bbg: "url(./src/assets/service3.png)"
      }
    },
  },
  plugins: [],
}

