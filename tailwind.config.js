/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // HTML aur JS files ki path
    "./index.html", // Agar aapka index.html hai
  ],
  theme: {
    extend: {
      colors : {
       'primary' : '#3238f2',
      },
      fontFamily : {
        'display' : ['Poppins' ,'sans-serif'],
        'body' : ['Inter','sans-serif'],
      }
    },
  },
  plugins: [],
};
