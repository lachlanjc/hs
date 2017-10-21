import palx from 'palx'

const orange = '#ffa235'
export const palette = palx(orange)

export const grays = {
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  grey: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  brown: '#877457',
  bg: '#f5efe6',
  white: '#ffffff'
}

export const brand = {
  primary: orange,
  accent: palette.fuschia[5],
  muted: grays.silver,
  success: palette.teal[5],
  info: palette.blue[5],
  danger: palette.red[5]
}

export const colors = {
  ...brand,
  ...grays,
  ...palette
}

export const mp = [32, 48, 64, 80]
export const mx = mp.map(w => `@media screen and (min-width:${w}em)`)
export const mm = mp.map(w => `@media screen and (max-width:${w}em)`)

const theme = {
  colors,
  radius: 4,
  weights: [400, 700],
  font: 'Slack-Averta, -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
  serif: 'Slack-Tiempos, "Times New Roman", Georgia, serif'
}

export default theme
