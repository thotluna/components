// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const choices = {
  color: {
    brand: {
      blueAngel: '#B4D1FE',
      lightSlateBlue: '#7B61FF',
      mercury: '#E5E5E5',
      midGray: '#595F68',
      mistBlue: '#676E79',
      charcoalGray: '#3B3F45',
      blossomPing: '#FEB4EF',
      shockingPing: '#FB0ECC',
    },

    base: {
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
    },
  },
  spacing: {
    none: 0,
    xs: 5,
    sm: 15,
    md: 20,
    lg: 40,
  },
  mediaQuery: {
    minWidth: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    maxWidth: {
      xs: '575.98px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199px',
    },
  },
  fontFamily: {
    sans: ["'Open Sans'", 'Arial', 'Helvetica', 'sans-serif'],
    title: ["'Architects Daughter'", 'Arial', 'Helvetica', 'sans-serif'],
  },
  fontSize: {
    base: '10px',
    xs: '1.1rem',
    sm: '1.3rem',
    md: '1.8rem',
    lg: '2rem',
    xl: '2.1rem',
    '2xl': '6rem',
  },
  fontWeight: {
    hairline: 100,
    normal: 400,
    bold: 700,
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  boxShadow: {
    noneT: 'none',
    xsT: '0px 3px 6px rgba(0, 0, 0, 0.05)',
    smT: '0px 4px 5px rgba(0, 0, 0, 0.07)',
  },
  borderRadius: {
    none: '0',
    sm: '10px',
    md: '20px',
    lg: '30px',
    full: '9999px',
  },
  borderWidth: {
    none: '0',
    thin: '1px',
    thick: '2px',
  },
  opacity: {
    0: '0',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1',
  },
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
  },
}

const decisions = {
  color: {
    background: choices.color.brand.charcoalGray,
    primary: choices.color.brand.blueAngel,
    secondary: choices.color.brand.blossomPing,
    font: {
      base: choices.color.brand.blueAngel,
      primary: choices.color.brand.charcoalGray,
      error: choices.color.brand.shockingPing,
    },
  },
  button: {
    base: {
      background: choices.color.base.transparent,
      color: choices.color.brand.blueAngel,
      colorBorder: choices.color.brand.blueAngel,
    },
    primary: {
      background: choices.color.brand.blueAngel,
      color: choices.color.brand.charcoalGray,
      colorBorder: choices.color.brand.blueAngel,
    },
    secondary: {
      background: choices.color.brand.blossomPing,
      color: choices.color.brand.charcoalGray,
      colorBorder: choices.color.brand.blueAngel,
    },
  },
  container: {
    maxWidth: '800px',
  },
}

module.exports = { choices, decisions }
