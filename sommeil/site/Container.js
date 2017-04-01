
import React from 'react'
import { Box } from 'axs'

const cx = {
  maxWidth: 64 * 16,
  overflow: 'hidden'
}

const Container = props =>
  <Box {...props}
    mx='auto'
    px={[ 2, 3 ]}
    css={cx} />

export default Container
