
import React from 'react'
import { Box, Text } from 'axs'
import { Heading } from 'axs-ui'
import Container from './Container'

export default () =>
  <Box
    is='header'
    color='white'
    bg='base'
    center>
    <Container>
      <Box
        py={72}>
        <Heading level={1}>AstroColony</Heading>
        <Text fontSize={4} mt2 css={{ fontStyle: 'italic' }}>"Astronomy compels the soul to look upward, and leads us from this world to another." – Plato</Text>
      </Box>
    </Container>
  </Box>
