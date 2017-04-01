
import React from 'react'
import { Box } from 'axs'

const Divider = ({
  bg = 'base',
  width = 64,
  ...props
}) =>
  <Box
    my2
    {...props}
    bg={bg}
    width={width}
    css={{
      height: 4
    }}
  />

export default Divider
