import palx from 'palx'

const black = '#1f2d3d'
const grey = '#8492a6'
const lightGrey = '#eff2f7'
const blue = '#398bc6'
const violet = '#283593'
const cyan = '#02ffd5'

export const colors = {
  black,
  grey,
  lightGrey,
  violet,
  blue,
  cyan,
  primary: violet
}

export const palette = palx(colors.primary)
