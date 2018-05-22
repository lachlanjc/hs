import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Container, Card, Heading, Text, Box } from '@hackclub/design-system'

import Body from '../components/Body'

Card.a = Card.withComponent('article')

const LinkBlock = Card.withComponent('a').extend`
  border: 1px solid ${({ theme }) => theme.colors.smoke};
  padding: ${({ theme }) => theme.space[3]}px;
`

export default ({ data }) => {
  if (!data.markdownRemark) return null
  const { frontmatter: { author, name, url }, html } = data.markdownRemark
  return (
    <Container maxWidth={36} p={3}>
      <Helmet title={`Happy birthday, Max!`} />
      <Card.a bg="white" p={4} mx={[-3, -4]}>
        <LinkBlock href={url} target="_blank">
          <Heading.h1 color="primary" f={4} m={0} caps children={name} />
          <Text color="muted" f={2} caps mt={2} children={author} />
        </LinkBlock>
        <Body mt={2} dangerouslySetInnerHTML={{ __html: html }} />
      </Card.a>
    </Container>
  )
}

export const pageQuery = graphql`
  query BySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        name
        author
      }
    }
  }
`
