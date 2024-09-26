/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './assets/**/*.html',
    './assets/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
