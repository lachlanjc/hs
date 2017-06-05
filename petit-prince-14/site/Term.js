import React from 'react'
import { Box, Text } from 'axs'
import { Heading, Flex, Span } from 'axs-ui'

const cx = {
  boxShadow: '0 .25rem 1rem rgba(0,0,0,.25)',
  '@media (min-width: 52em)': {
    width: 'calc(50% - 2rem)'
  }
}

const Term = ({ emoji, term, definition }) => (
  <Flex alignItems="center" p3 m={[0, 2]} mt2 bgWhite rounded css={cx}>
    <Span fontSize={64} css={{ lineHeight: 1 }}>{emoji}</Span>
    <Box ml3>
      <Heading level={3} fontSize={2} black>{term}</Heading>
      <Text fontSize={3} gray8>{definition}</Text>
    </Box>
  </Flex>
)

export default Term
