const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./**/*.js', './**/*.jsx', './**/*.css'],
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.accent.400'),
              '&:hover': {
                color: theme('colors.accent.500'),
              },
            },

            code: {
              backgroundColor: theme('colors.blue.100'),
              color: theme('colors.primary'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
