import React from 'react'
import { Box, Text } from 'axs'
import { Span } from 'axs-ui'
import Container from './Container'
import { colors } from '../config'

export const Lead = props => (
  <Text fontSize={2} center css={{ fontWeight: 300 }} {...props} />
)

export const SubLead = props => (
  <Text fontSize={3} center color={colors.grey} {...props} />
)

export const UL = props => <Text is="ul" css={{ paddingLeft: 24 }} {...props} />

export const OL = props => <Text is="ol" css={{ paddingLeft: 24 }} {...props} />

export const LI = props => <Text is="li" css={{ marginBottom: 4 }} {...props} />

export const B = props => <Span color={colors.blue} {...props} />
export const G = props => <Span color={colors.grey} {...props} />

export const TwoCols = ({ col1, col2, ...props }) => (
  <Container display="flex" flexDirection={['column', 'row']} px={0} {...props}>
    <Box width={[1, 0.5]} children={col1} />
    <Box px={[0, 2, 3]} />
    <Box width={[1, 0.5]} children={col2} />
  </Container>
)

export const Separator = props => (
  <Box
    is="hr"
    mt={128}
    mx="auto"
    bg={colors.blue}
    css={{
      width: 128,
      height: 2,
      border: 0
    }}
    {...props}
  />
)

export const Step = ({ children, ...props }) => (
  <Box {...props}>
    <Separator bg={colors.smoke} my3 />
    <Box
      m0
      fontSize={3}
      color={colors.black}
      css={{ lineHeight: 1.375 }}
      children={children}
    />
  </Box>
)

export const StepDetail = props => <G is="p" mt1 mb0 fontSize={4} {...props} />
