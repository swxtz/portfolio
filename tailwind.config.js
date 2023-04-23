/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#070707',
        "whitevs": "#E5E9F0",
        "purplevs": {
          500: "#7000FF",
          700: "#4D5BCE"
        }
      },

      
    },
  },
  plugins: [],
};
