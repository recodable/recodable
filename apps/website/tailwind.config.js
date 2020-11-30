const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: colors.blue['500'],
      accent: colors.green,
    },
    extend: {
      width: {
        'lg-screen': '1024px',
      },
      maxWidth: {
        'lg-screen': '1024px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
