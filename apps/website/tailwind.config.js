const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: '#4075D6',
      accent: colors.orange,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
