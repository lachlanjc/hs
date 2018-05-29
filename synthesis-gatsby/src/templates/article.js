import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import {
  BackgroundImage,
  Container,
  Card,
  Heading,
  Text,
  Box
} from '@hackclub/design-system'

import Body from '../components/Body'

Card.a = Card.withComponent('article')

const LinkBlock = Card.withComponent('a').extend`
  display: block;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
  transition: ${({ theme }) => theme.transition} box-shadow;
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadows[2]};
  }
  h1 {
    font-weight: 900;
  }
  h1 ~ p {
    font-weight: 500;
    letter-spacing: .0625em;
  }
`
const Image = BackgroundImage.extend`
  max-heigh: 16rem;
`

export default ({ data }) => {
  if (!data.markdownRemark) return null
  const {
    image,
    publisher,
    description,
    frontmatter: { author, name, url, img },
    html
  } = data.markdownRemark
  return (
    <Container maxWidth={42} p={3}>
      <Helmet title={`${name} by ${author}`} />
      <LinkBlock href={url} target="_blank" p={[3, 4]}>
        <Image src={image} />
        <Heading.h1 color="black" f={[4, 5]} m={0} children={name} />
        <Text
          color="muted"
          f={[1, 2]}
          caps
          mt={1}
          children={`${author}, ${publisher}`}
        />
        <Text color="muted" f={2} mt={2} children={description} />
      </LinkBlock>
      <Card.a bg="white" p={[3, 4]} mt={3}>
        <Body mt={2} dangerouslySetInnerHTML={{ __html: html }} />
      </Card.a>
    </Container>
  )
}

export const pageQuery = graphql`
  query BySlug($slug: String!) {
    markdownRemark(id: { eq: $slug }) {
      html
      image
      publisher
      description
      frontmatter {
        name
        author
        url
      }
    }
  }
`
