import React from 'react'
import { Box, Text } from 'axs'
import { Flex } from 'axs-ui'

const SummaryItem = props => (
  <Flex alignItems="center" mb2>
    <Box
      is="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={16}
      height={16}
      fill="none"
      stroke="currentcolor"
      strokeWidth={2}
      css={{ flexShrink: 0 }}
      mr2
    >
      <path d="M5 1.0606601717798212 L11.939339828220179 8 L5 14.939339828220179" />
    </Box>
    <Text fontSize={3} my0 css={{ lineHeight: 1.25 }} {...props} />
  </Flex>
)

export default SummaryItem
