import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {
  Container,
  Box,
  Card,
  Heading,
  Text,
  LargeButton
} from '@hackclub/design-system'
import Body from '../components/Body'
import Cards from '../components/Cards'

Card.a = Card.withComponent('article')

export default ({ data: { allMarkdownRemark: { edges } } }) => (
  <Box.main align="center">
    <Helmet title="Synthesis" />
    <Cards align="left">
      {edges.map(({ node: { excerpt, id, frontmatter: { author } } }) => (
        <Card.a p={4} bg="white" key={author}>
          <Heading.h3 f={5} mb={1} color="primary">
            <Link to={`/${id}`}>{author}</Link>
          </Heading.h3>
          <Body f={1} dangerouslySetInnerHTML={{ __html: excerpt }} />
        </Card.a>
      ))}
    </Cards>
  </Box.main>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___author], order: ASC }
      limit: 1024
    ) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            author
          }
        }
      }
    }
  }
`
