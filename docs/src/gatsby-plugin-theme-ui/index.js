import preset from '@rebass/preset'
import merge from 'lodash.merge'
import { dark, light } from './colors'
import styles from './styles'

export default merge(preset, {
  initialColorModeName: 'light',
  colors: {
      ...light,
    modes: {
      dark
    }
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  sizes: {
    wide: 1280,
  },
  shadows: {
    small: `0 0 0px 1px rgba(0, 0, 0, 0.25)`,
  },
  buttons: {
    primary: {
      color: 'white',
    },
    big: {
      // variant: 'buttons.primary',
      px: 4,
      py: 3,
      fontSize: 3,
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    },
    transparent: {
      color: 'inherit',
      bg: 'transparent',
      ':hover,:focus': {
        color: 'primary',
        outline: 'none',
        boxShadow: '0 0 0 2px',
      }
    },
  },
  links: {
    nav: {
      m: 0,
      px: 3,
      py: 2,
      textDecoration: 'none',
      fontSize: 1,
      fontWeight: 'bold',
      color: 'text',
      display: 'block',
      ':hover': {
        backgroundColor: 'highlight'
      }
    },
  },
  text: {
    heading: {
      a: {
        color: 'inherit',
        textDecoration: 'none',
        ':hover': {
          textDecoration: 'underline',
        }
      }
    }
  },
  variants: {
    badge: {
      display: 'inline-block',
      px: 2,
      color: 'background',
      bg: 'primary',
      borderRadius: 'circle',
    },
  },
  styles
})
