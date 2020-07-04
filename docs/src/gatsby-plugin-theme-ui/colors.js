import { transparentize } from 'polished'
import { mapObjIndexed } from 'ramda'

export const midTransparentize = transparentize(0.6)
export const highTransparentize = transparentize(0.75)


export const vibrantColors = {
  blue: '#3976E9',
  red: '#E4456F',
  green: '#2AC87D',
  yellow: '#E99608',
  gray: '#9CC6E9'
}

export const dullColors = {
  blue: '#4168AE',
  red: '#925666',
  green: '#569276',
  yellow: '#D49E41',
  gray: '#8E959B'
}

export const paleColors = {
  blue: '#7ea6f1',
  red: '#ed86a1',
  green: '#74dbaa',
  yellow: '#f1bb5e',
  gray: '#bfdaf1'
}

export const baseColors = {
  ...vibrantColors,
  vibrantHighlights: mapObjIndexed(midTransparentize, vibrantColors),
  dark: ['#282c30', '#383e43', '#484f56'],
  light: ['#E0E3E5', '#c0c2c4', '#a0a1a3'],
  white: ['#f9fbfc', '#f0f2f3', '#e8ebec']
}

export const colors = {
  ...baseColors,
  primary: baseColors.blue,
  accent: baseColors.yellow,
  inputFocus: transparentize(0.2, baseColors.blue)
}

export const light = {
  ...colors,
  blue: [colors.blue, dullColors.blue],
  red: [colors.red, dullColors.red],
  green: [colors.green, dullColors.green],
  yellow: [colors.yellow, dullColors.yellow],
  fgHighlights: mapObjIndexed(midTransparentize, dullColors),
  bgHighlights: mapObjIndexed(midTransparentize, paleColors),
  bgLightHighlights: mapObjIndexed(highTransparentize, paleColors),
  gray: [colors.gray, dullColors.gray],
  text: colors.dark[0],
  muted: midTransparentize(colors.dark[0]),
  background: colors.white[0],
  bgs: colors.white,
  fgs: colors.dark,
  fgPales: colors.dark.map(midTransparentize),
  border: transparentize(0.8, baseColors.dark[0]),
  highlight: transparentize(0.9, baseColors.dark[0]),
  code: {
    color: '#0451a5',
    backgroundColor: '#ffffff',
    prolog: '#001080',
    comment: '#008000',
    keyword: '#0000FF',
    number: '#09885a',
    constant: '#0000ff',
    variable: '#001080',
    string: '#a31515',
    selector: '#800000',
    tag: '#800000',
    operator: '#000000',
    punctuation: '#000000',
    function: '#795e26',
    className: '#267f99',
    char: '#a31515'
  }
}

export const dark = {
  ...colors,
  blue: [colors.blue, paleColors.blue],
  red: [colors.red, paleColors.red],
  green: [colors.green, paleColors.green],
  yellow: [colors.yellow, paleColors.yellow],
  gray: [colors.gray, paleColors.gray],
  fgHighlights: mapObjIndexed(midTransparentize, paleColors),
  bgHighlights: mapObjIndexed(midTransparentize, dullColors),
  text: colors.light[0],
  muted: midTransparentize(colors.light[0]),
  background: colors.dark[0],
  bgs: colors.dark,
  fgs: colors.light,
  fgPales: colors.light.map(midTransparentize),
  border: transparentize(0.8, baseColors.light[0]),
  highlight: transparentize(0.9, baseColors.light[0]),
  code: {
    color: '#9CDCFE',
    backgroundColor: '#1E1E1E',
    prolog: '#9cdcfe',
    comment: 'rgb(106, 153, 85)',
    keyword: 'rgb(86, 156, 214)',
    number: 'rgb(181, 206, 168)',
    constant: 'rgb(86, 156, 214)',
    variable: 'rgb(156, 220, 254)',
    string: 'rgb(206, 145, 120)',
    selector: 'rgb(215, 186, 125)',
    tag: 'rgb(86, 156, 214)',
    operator: '#808080',
    punctuation: 'rgb(212, 212, 212)',
    function: 'rgb(220, 220, 170)',
    className: 'rgb(78, 201, 176)',
    char: 'rgb(209, 105, 105)'
  }
}
