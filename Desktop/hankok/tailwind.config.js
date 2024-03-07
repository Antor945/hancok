/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      width: "1320px",
      center: true,
    },
    colors:{
      primary : "#FF4655",
      secondary :"#212121",
      blacks:"#121212",
      white:"#ffff"
    },
    fontFamily:{
      Oswald: ["Oswald", "sans-serif"],
      Barlow: ["Barlow", "sans-serif"]
    },
    backgroundImage:{
      bannerImg :"url('https://i.ibb.co/JzxwmSC/banner.png')"
    }
  },
  plugins: [],
}