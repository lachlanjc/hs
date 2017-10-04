import React from 'react'
import { Box } from 'axs'
import { replace } from 'lodash'

const Icon = ({ name = 'square', fill = '#ffffff', size = 16, ...props }) => (
  <Box
    is="img"
    src={`//icon.now.sh/${name}/${size}/${replace(fill, '#', '')}`}
    alt={`${name} icon`}
    width={size}
    height={size}
    display="inline-block"
    {...props}
  />
)

export default Icon
