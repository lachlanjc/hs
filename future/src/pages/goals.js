import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Container, Card, Heading, Text, Box } from '@hackclub/design-system'

import Body from '../components/Body'

Card.a = Card.withComponent('article')

export default () => (
  <Container maxWidth={36} p={3}>
    <Helmet title={`Goals – Future`} />
    <Card.a bg="white" p={4} mx={[-3, -4]}>
      <Heading.h1 f={5} m={0} caps>
        Goals
      </Heading.h1>
      <Text color="grey" f={2} mt={1} caps>
        All by the end of this school year
      </Text>
      <Body mt={2} pl={4}>
        <ol>
          <li>Grow Hack Club at State High attendance to 20 members/week</li>
          <li>Launch a new political app for contacting Congress</li>
          <li>Secure an internship at [company] for Design Systems</li>
        </ol>
      </Body>
    </Card.a>
  </Container>
)
