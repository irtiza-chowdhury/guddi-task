/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FEFCF5',
        black: '#2A220E',
        gray: '#868686',
        'card-outer': '#CAC5B7',
        teal: '#4E90A8',
        meron: '#D82E3F',
      },
      fontSize: {
        sm: ['12px', '16.8px'],
        base: ['16px', '22.4px'],
        lg: ['22px', '30.8px'],
        xl: ['48px', '55px'],
        large: ['24px', '28px'],
      },
    },
  },
  plugins: [],
};
