import { split, map, join } from 'lodash'
import { config } from 'axs'

export const colors = {
  pink: '#f7067f',
  red: '#f70606',
  orange: '#f77f06',
  green: '#05df73',
  blue: '#067df7',
  navy: '#0352a1',

  white: '#ffffff',
  snow: '#f8f9fa',
  smoke: '#dde1e4',
  grey: '#7d8a99',
  greyDark: '#606d7b',
  black: '#384048'
}

config.set({ colors })

export const toRGB = hex => {
  const match = hex.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
  if (!match) {
    return [0, 0, 0]
  }

  let colorString = match[0]

  if (match[0].length === 3) {
    colorString = join(
      map(split(colorString, ''), char => {
        return char + char
      })
    )
  }

  const integer = parseInt(colorString, 16)
  const r = (integer >> 16) & 0xff
  const g = (integer >> 8) & 0xff
  const b = integer & 0xff

  return [r, g, b]
}

export const makeRGBA = (rgb, opacity) =>
  `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity || 1})`

export const toRGBA = (hex, opacity) => makeRGBA(toRGB(hex), opacity)

export const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
