
import React from 'react'
import { Box, Text } from 'axs'
import { Heading, Flex } from 'axs-ui'
import Container from './Container'
import Divider from './Divider'
import { palette } from './config'

const Subheading = ({ l = 3, ...props }) => <Heading level={l} fontSize={l} mt2 mb1 {...props} />
const Img = (props) => <Box my={[ 1, 2 ]} {...props} is='img' css={{ maxWidth: '100%' }} />

export default () =>
  <Container py4>
    <Text css={{ fontSize: 20 }} center>
      The AstroColony offers a wide variety of recreational activities, investment opportunities, and alternative lifestyles.
    </Text>
    <Text mt1 center>
      Experience the ultimate space colony lifestyle aboard the AstroColony!
    </Text>
    <Img src='http://sciencenewsjournal.com/wp-content/uploads/2016/07/Titan-Moon.jpg' />
    <Flex flexDirection={[ 'column', 'row' ]} py2>
      <Box width={[ 1, 0.5 ]}>
        <Divider />
        <Subheading>Location</Subheading>
        <Text>Originally planned to be located on the surface of Titan, a moon of Saturn, the AstroColony benefits effectively from the abundant resources on Titan, Enceladus, and nearby asteroids while orbiting around this moon. The environment of Titan proved challenging for colonization and in order to maximize the moon’s usefulness, so the AstroColony maintains an orbit around Titan instead of remaining on the surface. Although Titan is one of the least hostile places (for humans) in the outer solar system, its composition of methane, its lack of water and oxygen on the surface, and its distance from the Sun renders it fairly inhospitable to humans.</Text>
        <Subheading l={4}>Radiation and Protection</Subheading>
        <Img src='http://i4.photobucket.com/albums/y131/Kvess/Other%20Stuff/plasmashield-physics.jpg' />
        <Divider />
        <Subheading>Investment Opportunities</Subheading>
        <Subheading l={4}>Exploratory construction projects/Materials testing</Subheading>
        <Text>Due to the lack of gravity in space, various segmented areas surrounding Titan may be leased to explore the effect of deep space on various construction materials and the resulting structures.</Text>
        <Img src='http://www.mining.com/wp-content/uploads/2013/01/7113041915_5fdf679a55_k.jpg' mb0 />
        <Text color={palette.gray[7]} fontSize={5} center>right click, "Open Image in New Tab" to enlarge</Text>
      </Box>
      <Box px={[ 0, 2 ]} />
      <Box width={[ 1, 0.5 ]}>
        <Divider />
        <Subheading>Recreation</Subheading>
        <Subheading l={4}>Zero gravity bungee jumping</Subheading>
        <Text>With the protection of insulated space wear, colonists may soon be able to participate in zero gravity bungee jumping on the surface of Titan.</Text>
        <Img src='http://resize.indiatvnews.com/en/centered/oldbucket/750_533/entertainmentmasala/IndiaTvb5fe08_BUNGEE.jpg' />
        <Subheading l={4}>Community gardening</Subheading>
        <Text>The AstroColony encourages a strong sense of community, and with developing agricultural growing procedures, colonists will soon participate in recreational plant growth to encourage a sense of communal partnership in addition to contributing to the colony at large.</Text>
        <Img src='https://s-media-cache-ak0.pinimg.com/736x/b2/50/28/b25028215f98f4cdf50226877ca9ab6c.jpg' />
        <Subheading l={4}>Electric Skateboards</Subheading>
        <Text>Travel around the AstroColony in a fast and fun way with the electric skateboard transport system!</Text>
        <Img src='https://www.wired.com/wp-content/uploads/images_blogs/gamelife/2009/11/thride_highangle.jpg' />
      </Box>
    </Flex>
    <Flex justifyContent='center'>
      <Divider />
    </Flex>
    <Img src='https://public.3.basecamp.com/p/vqKHzDKR6JgbMaamBJHTMaFR/uploads/356148265/download/IMG_0573.JPEG' />
    <Img src='https://public.3.basecamp.com/p/RXS9cgGDb3CDAwJXWDNpG9xT/uploads/356148062/download/IMG_0568.JPEG' />
    <Flex flexDirection={[ 'column', 'row' ]}>
      <Box width={[ 1, 0.5 ]}>
        <Img src='https://public.3.basecamp.com/p/piHNtkjYHCH5WzCcQKJXfihn/uploads/356148006/download/IMG_0571.JPEG' />
        <Img src='https://public.3.basecamp.com/p/8MijN2feGPrbMLURgA2nYwbb/uploads/356148104/download/IMG_0572.JPEG' />
      </Box>
      <Box px={[ 0, 2 ]} />
      <Box width={[ 1, 0.5 ]}>
        <Img src='https://public.3.basecamp.com/p/3HXarYz8eqYYdkh1ZTK3LCP1/uploads/356147987/download/IMG_0570.JPEG' />
        <Img src='https://public.3.basecamp.com/p/emW81kXy96pbLdAeKKdZpkUM/uploads/356148146/download/IMG_0567.JPEG' />
      </Box>
    </Flex>
  </Container>
