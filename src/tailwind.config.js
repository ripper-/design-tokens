/* eslint-disable no-undef */
module.exports = {
  presets: [require('../configs/tailwind.config')],
  theme: {
    extend: {
      colors: {
        'primary': {
          'main': '#ebf1ff',
          'light': '#2b5cc3',
          'dark': '#083281',
        },
        'secondary': {
          'main': '#7243d0',
          'light': '#f2ecfe',
          'dark': '#481087',
        },
        'gradient': {
          'from': '#7243d0',
          'to': '#f2ecfe',
        },
      },
    },
  },
};
