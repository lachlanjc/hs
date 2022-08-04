import React from 'react'
import Link from 'gatsby-link'
import { Container, Box, Card, Heading, Text } from '@hackclub/design-system'
import Body from '../components/Body'
import Years from '../components/Years'

Card.a = Card.withComponent('article')

export default ({ data: { allMarkdownRemark: { edges } } }) => (
  <Years>
    {edges.map(({ node: { excerpt, frontmatter: { year } } }) => (
      <Card.a p={4} bg="white" key={year}>
        <Heading.h3 f={5} mb={1} color="primary">
          <Link to={`/${year}`}>{year}</Link>
        </Heading.h3>
        <Body f={1} dangerouslySetInnerHTML={{ __html: excerpt }} />
      </Card.a>
    ))}
    <Card.a p={4} bg="white" style={{ gridColumn: 'span 2' }}>
      <Heading.h3 f={5} mb={1} color="primary" align="center" caps>
        <Link to="/goals">Goals</Link>
      </Heading.h3>
    </Card.a>
  </Years>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___year], order: ASC }
      limit: 1024
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            year
          }
        }
      }
    }
  }
`
