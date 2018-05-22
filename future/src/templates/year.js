import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Container, Card, Heading, Text, Box } from '@hackclub/design-system'

import Body from '../components/Body'

Card.a = Card.withComponent('article')

export default ({ data: { markdownRemark } }) => {
  if (markdownRemark) {
    const { frontmatter: { year }, html } = markdownRemark
    return (
      <Container maxWidth={36} p={3}>
        <Helmet title={`${year} – Future`} />
        <Card.a bg="white" p={4} mx={[-3, -4]}>
          <Heading.h1 f={6} m={0}>
            {year}
          </Heading.h1>
          <Text mt={2} f={2} color="grey" caps>
            Age {year - 2001}
          </Text>
          <Body mt={2} dangerouslySetInnerHTML={{ __html: html }} />
        </Card.a>
      </Container>
    )
  } else {
    return null
  }
}

export const pageQuery = graphql`
  query YearByYear($year: Int!) {
    markdownRemark(frontmatter: { year: { eq: $year } }) {
      html
      frontmatter {
        year
      }
    }
  }
`
