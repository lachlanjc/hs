
import React from 'react'
import { Box, config } from 'axs'

const Logo = ({
  size = 32,
  color = 'base',
  ...props
}) =>
  <Box
    is='svg'
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    fill={config.colors[color]}
    stroke={config.colors[color]}
    viewBox='0 0 24 24'
    width={size}
    height={size}>
    <path d='M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z' />
  </Box>

export default Logo
