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
        whitevs: '#E5E9F0',
        purplevs: {
          500: '#4D5BCE',
          700: '#7000FF',
        },
        grayvs: {
          500: '#607B96',
          700: '#1E2D3D',
        },
        greenvs: {
          500: '#43D9AD',
        },
        pinkvs: {
          500: '#E99287',
        },
        bluevs: {
          500: "#011221"
        }
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
};
