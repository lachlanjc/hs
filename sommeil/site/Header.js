
import React from 'react'
import { Box, Text } from 'axs'
import { Heading } from 'axs-ui'
import Container from './Container'

export default () =>
  <Box
    is='header'
    color='white'
    center
    css={{
      backgroundImage: 'url(hero.jpg)',
      backgroundPositionY: '25%',
      backgroundSize: 'cover'
    }}>
    <Container style={{ maxWidth: 16 * 42 }}>
      <Box
        py={72}>
        <Heading level={1}>Le sommeil</Heading>
        <Text fontSize={2} mt2 css={{ fontStyle: 'italic' }}>
          Est-ce que vous êtes fatigué?
        </Text>
        <Text fontSize={3} mt2>
          Si oui, vous n’êtes pas seul. En réalité, beaucoup de personnes sont chroniquement fatigués.
        </Text>
      </Box>
    </Container>
  </Box>
