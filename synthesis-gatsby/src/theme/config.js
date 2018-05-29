import { theme } from '@hackclub/design-system'

export const grays = {
  black: '#1F2D3D',
  slate: '#3C4858',
  silver: '#8492a6',
  smoke: '#E0E6ED',
  snow: '#F9FAFC',
  white: '#ffffff'
}

export const brand = {
  primary: '#f13a59',
  accent: '#371eac',
  success: '#00d480',
  info: '#00a2c7',
  warning: '#ff5b0f',
  error: '#d32d4a',
  muted: grays.silver
}

export const colors = {
  ...grays,
  ...brand
}

theme.colors = colors

export default theme
