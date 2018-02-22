import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Container,
  Card,
  BackgroundImage,
  Link,
  theme
} from '@hackclub/design-system'
import { ThemeProvider } from 'styled-components'
import snarkdown from 'snarkdown'

const dots = {
  backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
  backgroundSize: '1rem 1rem',
  backgroundPosition: '.5rem .5rem'
}

const Dots = Box.extend`
  background-color: #111;
  width: 100%;
  min-width: 100vh;
  max-width: 100vw;
  font-family: 'SFMono-Regular', Menlo, monospaced;
  ${dots};
`

const Banner = BackgroundImage.extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Superheading = Heading.h1.extend`
  background-color: #000;
  color: #fff;
  display: inline-block;
  mix-blend-mode: multiply;
  letter-spacing: 0.125em;
  opacity: 0.75;
`

const Grid = Container.extend`
  > div {
    margin: 1rem 0;
  }
  ${props => props.theme.mediaQueries.md} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    > div {
      margin: 1rem 0;
      &:nth-child(odd) {
        grid-column: 1 / span 4;
      }
      &:nth-child(even) {
        grid-column: 3 / span 4;
        text-align: right;
      }
      &:last-child {
        text-align: left;
        grid-column: 2 / span 4;
      }
    }
  }
  h2 {
    letter-spacing: 0.125em;
  }
  p {
    text-transform: lowercase;
    opacity: 0.875;
  }
`

const signs = `Talking about **wanting to die** or to kill oneself
Looking for a way to **kill oneself**
Talking about feeling **hopeless** or purposeless
Talking about feeling **trapped** or seeking revenge
Talking about being a **burden** to others
Increasing the use of **alcohol**/drugs
Acting **anxious**/agitated/reckless
**Sleeping** too much/too little
Withdrawing or feeling **isolated**
Displaying extreme **mood** swings or rage`

const Via = ({ href, children, ...props }) => (
  <Text f={1} color="#AAA" mt={2} {...props}>
    via <Link underline color="#DDD" href={href} children={children} />↗
  </Text>
)

export default () => (
  <ThemeProvider theme={theme}>
    <Dots color="white">
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>SUICIDE</title>
      <Banner image="photo.jpg">
        <Container maxWidth={56} w={1} px={3} py={6} align="left">
          <Superheading f={5} mt={0} mb={2} px={3} py={1} caps>
            Suicide
          </Superheading>
          <Text color="#333" f={[1, 2]}>
            site by lachlan campbell
          </Text>
        </Container>
      </Banner>
      <Grid maxWidth={56} px={[0, 3]} py={5}>
        <Box p={4} bg="#1A1A1A">
          <Heading.h2 caps f={3} mb={2}>
            facts about suicide
          </Heading.h2>
          <Text>1. Nearly 800,000 people die by suicide yearly</Text>
          <Text>2. 2nd leading cause of death for 15–29-year-olds</Text>
          <Text>3. it happens most often in the spring</Text>
          <Text>4. men make up 79% of suicides</Text>
          <Text>5. over half of suicides utilise firearms</Text>
          <Via href="http://www.who.int/mediacentre/factsheets/fs398/en/">
            who.int
          </Via>
        </Box>
        <Box p={4} bg="#1A1A1A">
          <Heading.h2 caps f={3} mb={2}>
            know the signs
          </Heading.h2>
          {signs
            .split('\n')
            .map((text, i) => (
              <Text
                key={i}
                dangerouslySetInnerHTML={{ __html: snarkdown(text) }}
              />
            ))}
          <Via href="https://save.org/about-suicide/warning-signs-risk-factors-protective-factors/">
            save.org
          </Via>
        </Box>
        <Box p={4} bg="#222">
          <Heading.h2 caps f={3}>
            how do you find help?
          </Heading.h2>
          <Text mt={3}>Call the National Suicide Prevention Lifeline.</Text>
          <Text f={6} color="#FA114F" bold>
            1-800-273-8255
          </Text>
          <Via href="https://suicidepreventionlifeline.org/">
            suicidepreventionlifeline.org
          </Via>
        </Box>
        <Box p={4} bg="#444">
          <Heading.h2 caps f={4} mb={2}>
            we can all help.
          </Heading.h2>
          <Text f={3} bold color="#1EEAEF">
            1. know the signs
          </Text>
          <Text f={3} bold color="#92E82A">
            2. be aware
          </Text>
          <Text f={3} bold color="#FA114F">
            3. get help{' '}
            <Text.span f={2} regular color="#DDD">
              (for you or someone else)
            </Text.span>
          </Text>
        </Box>
      </Grid>
    </Dots>
  </ThemeProvider>
)
