/* eslint-disable max-len */
/* eslint-disable no-undef */
module.exports = {
  content: [],
  theme: {
    spacing: {
      none: '0',
      0: '0',
      1: '.063rem',
      2: '.125rem',
      3: '.188rem',
      4: '.25rem',
      8: '.5rem',
      16: '1rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
      48: '3rem',
      56: '3.5rem',
      64: '4rem',
      72: '4.5rem',
      80: '5rem',
      96: '6rem',
      104: '6.5rem',
      112: '7rem',
      120: '7.5rem',
      128: '8rem',
      160: '10rem',
      200: '12.5rem',
      320: '20rem',
      348: '21.75rem',
      720: '45rem',
      944: '59rem',
      1024: '64rem',
      1200: '75rem',
      1224: '76.5rem',
      1920: '120rem',
      full: '100%',
    },
    colors: {
      'transparent': 'transparent',
      'black': '#171827',
      'white': '#FAFBFC',
      'neutral': {
        'lighter': '#D7DAe0',
        'light': '#BDC4d1',
        'main': '#5c6575',
        'dark': '#303640',
        'darker': '#232933',
      },
      'alert': {
        'main': '#DFA700',
        'light': '#fcf5de',
        'dark': '#705400',
      },
      'danger': {
        'main': '#e6251e',
        'light': '#feecec',
        'dark': '#95120e',
      },
      'positive': {
        'main': '#238661',
        'light': '#E5FAf3',
        'dark': '#184e39',
      },
    },
    fontFamily: {
      base: ['proxima-nova', 'sans-serif'],
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      default: '100%',
      tiny: '120%',
      distant: '150%',
    },
    fontSize: {
      xxs: '.875rem',
      xs: '1rem',
      sm: '1.25rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      md: '.25rem',
      lg: '.5rem',
      pill: '9999px',
    },
    borderWidth: {
      none: '0',
      hairline: '.125rem',
      thin: '.1875',
      thick: '.25rem',
      heavy: '.5rem',
    },
    opacity: {
      'level-light': '.16',
      'level-medium': '.32',
      'level-semiintense': '.48',
      'level-intense': '.64',
      'level-semiopaque': '.8',
    },
    boxShadow: {
      'level-1':
        // eslint-disable-next-line max-len
        '0 -0.0625rem .5rem 0 rgba(0, 0, 0, .08), 0 .125rem .125rem 0 rgba(0, 0, 0, .16)',
      'level-2': '0 -0.0625rem .5rem 0 rgba(0, 0, 0, .08)',
    },
    screens: ({theme}) => ({
      'phone': {min: theme('spacing.320'), max: '719px'},
      'portrait-tablet': {min: theme('spacing.720'), max: '1023px'},
      'landscape-tablet': {min: theme('spacing.1024'), max: '1199px'},
      'desktop': {min: theme('spacing.1200'), max: '1919px'},
      'big-desktop': {min: theme('spacing.1920')},
      'sm': {min: theme('spacing.320'), max: '719px'},
      'md': {min: theme('spacing.720'), max: '1023px'},
      'lg': {min: theme('spacing.1024'), max: '1199px'},
      'xl': {min: theme('spacing.1200'), max: '1919px'},
      '2xl': {min: theme('spacing.1920')},
    }),
    gap: ({theme}) => ({
      '4': theme('spacing.4'),
      '8': theme('spacing.8'),
      '16': theme('spacing.16'),
      '24': theme('spacing.24'),
      '32': theme('spacing.32'),
      'sm': theme('spacing.16'),
      'md': theme('spacing.16'),
      'lg': theme('spacing.16'),
      'xl': theme('spacing.16'),
      '2xl': theme('spacing.32'),
    }),
    container: ({theme}) => ({
      'phone': theme('spacing.full'),
      'portrait-tablet': theme('spacing.full'),
      'landscape-tablet': theme('spacing.994'),
      'desktop': theme('spacing.944'),
      'big-desktop': theme('spacing.1224'),
      'sm': theme('spacing.full'),
      'md': theme('spacing.full'),
      'lg': theme('spacing.944'),
      'xl': theme('spacing.944'),
      '2xl': theme('spacing.1224'),
      'center': true,
      'padding': {
        'DEFAULT': theme('spacing.32'),
        'phone': theme('spacing.16'),
        'portrait-tablet': theme('spacing.40'),
        'landscape-tablet': theme('spacing.40'),
        'desktop': theme('spacing.128'),
        'big-desktop': theme('spacing.348'),
        'sm': theme('spacing.16'),
        'md': theme('spacing.40'),
        'lg': theme('spacing.40'),
        'xl': theme('spacing.128'),
        '2xl': theme('spacing.348'),
      },
    }),
    extend: {
      'container': ({theme}) => ({
        screens: {
          'sm': theme('spacing.full'),
          'md': theme('spacing.full'),
          'lg': theme('screens.lg'),
          'xl': theme('screens.xl'),
          '2xl': theme('screens.2xl'),
        },
      }),
      'gutter': ({theme}) => ({
        16: theme('spacing.16'),
        32: theme('spacing.32'),
        112: theme('spacing.112'),
        160: theme('spacing.160'),
      }),
      'breakpoint': ({theme}) => ({
        'phone': theme('screens.phone'),
        'portrait-tablet': theme('screens.portrait-tablet'),
        'landscape-tablet': theme('screens.landscape-tablet'),
        'desktop': theme('screens.desktop'),
        'big-desktop': theme('screens.big-desktop'),
      }),
      'flexbox': {
        'wrap': 'wrap',
        'row': 'row',
        'flex': 'flex',
        'row-reverse': 'row-reverse',
        'column-reverse': 'column-reverse',
        'flex-start': 'flex-start',
        'center': 'center',
        'start': 'start',
        'space-around': 'space-around',
        'space-between': 'space-between',
      },
      'shadow': ({theme}) => ({
        'level-1': theme('boxShadow.level-1'),
        'level-2': theme('boxShadow.level-2'),
      }),
    },
  },
  variants: {
    gradients: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};