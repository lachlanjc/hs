import React from 'react'
import { Flex } from 'axs-ui'

const Slide = ({ bg, ...props }) => (
  <Flex
    p={[3, 4]}
    white
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    css={{
      backgroundColor: bg,
      backgroundImage: 'linear-gradient(-120deg, rgba(0, 255, 255, 1), rgba(255, 0, 0, 1))',
      backgroundBlendMode: 'overlay',
      minHeight: '100vh'
    }}
    {...props}
  />
)

export default Slide
