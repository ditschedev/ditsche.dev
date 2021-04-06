const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.jsx', './components/**/*.jsx', './layouts/**/*.jsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ECF9F9',
          100: '#D0F7F4',
          200: '#9EF1E7',
          300: '#5FE7DA',
          400: '#1DD1D6',
          500: '#09BDA7',
          600: '#08A289',
          700: '#0D846F',
          800: '#106658',
          900: '#105347',
        },
        coal: '#040506',
        highlight: 'linear-gradient(120deg, rgba(142,253,210,.4) 0%, rgba(142,253,210,.4) 100%)'
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        serif: ['Merriweather', ...fontFamily.serif]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.600'),
              textDecoration: false,
              transaction: theme('transition'),
              '&:hover': {
                color: theme('colors.primary.700')
              },
              code: { color: theme('colors.primary.400') }
            },
            strong: {
              fontWeight: '700',
            },
            blockquote: {
              fontFamily: 'Merriweather, serif'
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            code: {
              color: theme('colors.primary.500'),
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.400')
              },
              code: { color: theme('colors.primary.400') }
            },
            strong: {
              color: theme('colors.white')
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
              fontFamily: 'Merriweather, serif'
            },
            'h2,h3,h4': {
              color: theme('colors.primary.100'),
              'scroll-margin-top': spacing[32]
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') }
              }
            },
            thead: {
              color: theme('colors.gray.100')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
