module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'color-change': 'colorChange 2s ease-in-out infinite',
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: 'black' },
          '50%': { color: 'blue' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
