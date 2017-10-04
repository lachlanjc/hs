import React from 'react'
import { Span } from 'axs-ui'
import Icon from './Icon'
import Container from './Container'
import { colors } from '../config'

export default () => (
  <Container is="footer" display="flex" alignItems="center" py4>
    <Icon name="public" fill={colors.blue} mr1 />
    <Span bold caps fontSize={4} color={colors.blue} mr="auto">
      Respect the climate
    </Span>
    <Icon name="build" fill={colors.blue} mr1 />
    <Span children="by @lachlanjc" color={colors.grey} mr1 />
    <Icon name="favorite" fill={colors.pink} />
  </Container>
)
