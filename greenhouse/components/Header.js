import React from 'react'
import { Box, Text } from 'axs'
import { Flex, Heading, Span } from 'axs-ui'
import { colors } from '../config'

export default () => (
  <Flex
    is="header"
    color="white"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    center
    css={{
      backgroundPositionY: '25%',
      backgroundSize: 'cover',
      height: '100vh',
      position: 'relative',
      textShadow: '0 2px 1px rgba(0, 0, 0, .75)',
      boxShadow: 'inset 0 0 50vh 50vw rgba(0,0,0,.25)'
    }}
    style={{ backgroundImage: 'url(/static/hero.jpg)' }}
  >
    <Heading level={1}>
      Climate change is a <Span color={colors.red}>serious threat.</Span>
    </Heading>
    <Heading level={2} css={{ fontWeight: 300 }} mt2>
      And we need to take action.
    </Heading>
    <Box css={{ opacity: 0.8 }}>
      <Box
        is="hr"
        css={{ width: 72, height: 3, border: 0, backgroundColor: 'white' }}
        mx="auto"
        my3
      />
      <Text fontSize={4} caps>
        By Lachlan Campbell
      </Text>
    </Box>
    <Flex
      justifyContent="center"
      css={{ position: 'absolute', bottom: 0 }}
      width={1}
      pb4
    >
      <Box
        is="img"
        src={`//microicon-clone.vercel.app/chevron/down/ffffff/32?strokeWidth=1`}
        css={{
          animation: 'pulse .9s ease-in-out infinite'
        }}
      />
    </Flex>
  </Flex>
)
