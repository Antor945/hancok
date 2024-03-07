/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pops': ['Poppins', 'sans-serif'],
    },
    colors: {
      'primary':'#F40404',
      'secoundry':'#6C6C6C',
      'white':'#fff',
      'bgColor':' rgba(0, 0, 0, 0.60);'
    },
    maxWidth: {
      'container': '1144px',
      
    },
    backgroundImage: {
      'banner': "url(./src/assets/banner.png)",
      'Services1':"url(./src/assets/Services1.png)",
      'Services2':"url(./src/assets/Services2.png)",
      'Services3':"url(./src/assets/Services3.png)",
      'Services4':"url(./src/assets/Services4.png)",
      'AboutImg': "url(./src/assets/AboutImg.png)",
      'BlogImg': "url(./src/assets/BlogImg.png)",
    }
  },
  plugins: [],
}