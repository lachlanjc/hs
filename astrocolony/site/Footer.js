
import React from 'react'
import { Flex, Span } from 'axs-ui'
import Container from './Container'
import { palette } from './config'

export default () =>
  <Container is='footer'>
    <Flex alignItems='center' mb4>
      <Span
        bold
        caps
        mr2
        fontSize={4}
        children='Astrocolony'
      />
      <Span
        children='MMXVII'
        color={palette.gray[7]}
        ml='auto'
      />
    </Flex>
  </Container>
