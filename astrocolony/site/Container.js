
import React from 'react'
import { Box } from 'axs'

const Container = props =>
  <Box {...props}
    mx='auto'
    px={[ 2, 3 ]}
    css={cx} />

const cx = {
  maxWidth: 768,
  overflow: 'hidden'
}

export default Container
