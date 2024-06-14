/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGreen: '#6F850E',
        customGreenDark: '#5a6f08',
        customBlack: '#333333',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      maxHeight: {
        '3/4': '75vh',
        '9/10': '90vh',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
