const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        12: '12px',
      },
      colors: {
        'purple-site': '#8751BD',
        'blue-site': '#2859B6',
      },
      animation: {
        'fade-in': 'fade 3s ease-in-out',
      },
    },
  },
  plugins: [],
});
