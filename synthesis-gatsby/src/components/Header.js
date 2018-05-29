import React from 'react'
import { Heading, Text } from '@hackclub/design-system'
import Link from 'gatsby-link'

const Header = props => (
  <Link to="/">
    <Heading.h1 my={3} f={[5, 6]} style={{ fontWeight: 900 }} {...props}>
      Synthesis
    </Heading.h1>
  </Link>
)

export default Header
