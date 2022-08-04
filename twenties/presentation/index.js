// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Slide,
  Text,
  S,
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const blue = '#1FB6FF'
const colors = {
  primary: blue,

  pink: '#FF49DB',
  red: '#FF4949',
  green: '#13CE66',
  blueLight: '#85D7FF',
  blue,

  white: '#FFFFFF',
  snow: '#F9FAFC',
  smoke: '#E0E6ED',
  grey: '#8492A6',
  steel: '#273444',
  black: '#1F2D3D',
}

const century = 'Century Schoolbook L, ui-serif, Spectral, serif'
const theme = createTheme(colors, {
  primary: 'Futura, system-ui, sans-serif',
  secondary: century,
})

const I = (props) => <S type="italic" {...props} />
const B = (props) => <S type="bold" {...props} />
const H = (props) => <S type="normal" textColor="blue" {...props} />
const R = (props) => <S type="normal" textColor="red" {...props} />
const G = (props) => <S type="normal" textColor="green" {...props} />
const M = (props) => <S type="normal" textColor="grey" {...props} />
const UL = (props) => (
  <List
    textColor="snow"
    textFont={century}
    style={{ listStylePosition: 'outside' }}
    {...props}
  />
)

const fs = [64, 48, 32, 24, 16]
const caps = { textTransform: 'uppercase', letterSpacing: '.1em' }

const Presentation = () => (
  <Deck
    transition={['slide']}
    transitionDuration={256}
    progress="number"
    theme={theme}
  >
    <Slide
      bgColor="steel"
      maxWidth={768}
      transition="slide"
      align="center center"
    >
      <Heading textColor="snow" size={2} style={caps} lineHeight={1.3}>
        <H>Consumerism</H> in the 1920s
      </Heading>
      <Text
        textColor="smoke"
        textFont="Century Schoolbook L"
        size={1}
        margin="3rem 0"
      >
        Lachlan Campbell
      </Text>
      <Text
        textFont={century}
        textColor="smoke"
        margin="0"
        textSize={20}
        lineHeight={1.3}
        italic
      >
        Futura by Paul Rand (1927) &<br />
        Century Schoolbook by Morris Fuller Benton (1924)
      </Text>
    </Slide>
    <Slide
      bgColor="steel"
      maxWidth={768}
      transition="slide"
      align="center center"
    >
      <Fit>
        <Text
          textColor="snow"
          textFont={century}
          lineHeight={1.3}
          textAlign="left"
        >
          In the 1920s, the <H>economic boom</H> following World War I meant
          Americans were becoming richer than ever, and spending their money on
          a wide array of <H>innovative new technologies</H> and devices. They
          bought the newly-advertised <H>consumer goods</H> through{' '}
          <H>credit</H>, a new option that allowed the purchase of{' '}
          <H>cars and appliances</H> to be spread out over time, with interest.
          This created a <H>massive shift in the economy</H> towards today's.
        </Text>
      </Fit>
    </Slide>
    <Slide bgColor="steel" transition="slide" align="center center">
      <Heading
        teztColor="snow"
        size={1}
        textSize={fs[1]}
        style={caps}
        textAlign="left"
      >
        American wealth
      </Heading>
      <UL>
        <ListItem>
          Per capita income: <G>↑9%</G>
        </ListItem>
        <ListItem>
          For the top 1%: <G>↑75%</G>
        </ListItem>
        <ListItem>Savings: top .1% held 1/3, top 2.3% held 2/3</ListItem>
        <ListItem>
          <H>80%</H> of Americans had <R>no savings</R>
        </ListItem>
      </UL>
      <Text
        textColor="blue"
        textFont={century}
        textSize={fs[2]}
        textAlign="left"
        italic
      >
        Most were getting richer, the wealthy absurdly so.
      </Text>
    </Slide>
    <Slide bgColor="steel" transition="slide" align="center center">
      <Layout>
        <Fill>
          <Image
            height={512}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Alvin_Langdon_Coburn_-_House_of_a_Thousand_Windows_-_Google_Art_Project.jpg/791px-Alvin_Langdon_Coburn_-_House_of_a_Thousand_Windows_-_Google_Art_Project.jpg"
          />
          <Text textColor="smoke" textFont={century} textSize={fs[3]}>
            Alvin Langdon Coburn, 1912
          </Text>
        </Fill>
        <Fill>
          <Image
            height={512}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Lewis_Hine_Power_house_mechanic_working_on_steam_pump.jpg/735px-Lewis_Hine_Power_house_mechanic_working_on_steam_pump.jpg"
          />
          <Text textColor="smoke" textFont={century} textSize={fs[3]}>
            Lewis Hine, 1920
          </Text>
        </Fill>
      </Layout>
    </Slide>
    <Slide bgColor="steel" transition="slide" align="center center">
      <Heading
        teztColor="snow"
        size={1}
        textSize={fs[1]}
        style={caps}
        textAlign="left"
      >
        Industrial tech
      </Heading>
      <UL>
        <ListItem>Mass production</ListItem>
        <ListItem>Assembly lines</ListItem>
        <ListItem>Skyscrapers</ListItem>
        <ListItem>Elevators</ListItem>
        <ListItem>Air travel</ListItem>
        <ListItem>Oil drilling</ListItem>
      </UL>
    </Slide>
    <Slide bgColor="steel" transition="slide" align="center center">
      <Layout>
        <Fill>
          <Heading
            teztColor="snow"
            size={1}
            textSize={fs[1]}
            style={caps}
            textAlign="left"
          >
            Home tech
          </Heading>
          <UL>
            <ListItem>Home electricty</ListItem>
            <ListItem>Electric lights</ListItem>
            <ListItem>Washing machines</ListItem>
            <ListItem>Vacuums</ListItem>
            <ListItem>Refrigerators</ListItem>
            <ListItem>Toasters</ListItem>
          </UL>
        </Fill>
        <Fill>
          <Heading
            teztColor="snow"
            size={1}
            textSize={fs[1]}
            style={caps}
            textAlign="left"
          >
            Leisure
          </Heading>
          <UL>
            <ListItem>Radios</ListItem>
            <ListItem>Baseball</ListItem>
            <ListItem>Dancing</ListItem>
            <ListItem>Boxing</ListItem>
            <ListItem>Vacations</ListItem>
            <ListItem>Movies</ListItem>
          </UL>
        </Fill>
      </Layout>
    </Slide>
    <Slide bgColor="steel" transition="slide" align="center center">
      <Layout>
        <Fill>
          <Image
            height={512}
            src="http://cdn.loc.gov/service/pnp/cph/3c10000/3c11000/3c11700/3c11716r.jpg"
          />
          <Text textColor="smoke" textFont={century} textSize={fs[3]}>
            Herbert Hoover, 1925
          </Text>
        </Fill>
        <Fill>
          <Image
            height={512}
            src="http://images.metmuseum.org/CRDImages/ph/web-large/DP233028.jpg"
          />
          <Text textColor="smoke" textFont={century} textSize={fs[3]}>
            Paul Strand, 1922
          </Text>
        </Fill>
      </Layout>
    </Slide>
    <Slide bgColor="steel" transition="slide" align="center center">
      <Layout>
        <Fill>
          <Heading
            teztColor="snow"
            size={1}
            textSize={fs[1]}
            style={caps}
            textAlign="left"
          >
            Credit + debt
          </Heading>
          <UL>
            <ListItem>
              <H>Installment plans</H> <M>(and interest)</M>
            </ListItem>
            <ListItem>Debt becoming acceptable</ListItem>
            <ListItem>
              <H>Credit cards</H> <M>(effectively debt)</M>
            </ListItem>
          </UL>
        </Fill>
        <Fill>
          <Image height={512} src="/twenties/nyt.png" />
        </Fill>
      </Layout>
    </Slide>
    <Slide
      bgColor="steel"
      maxWidth={768}
      transition="slide"
      align="center center"
    >
      <Heading size={1} textColor="smoke" style={caps} fit>
        significant
      </Heading>
      <Heading size={1} textColor="green" style={caps} fit>
        economic
      </Heading>
      <Heading size={1} textColor="blue" style={caps} fit>
        change
      </Heading>
    </Slide>
    <Slide bgColor="steel" transition="slide" align="center center">
      <Heading textColor="snow" size={1} textSize={fs[0]} style={caps}>
        Thank you.
      </Heading>
    </Slide>
    <Slide bgColor="steel" transition="slide" align="center center">
      <Heading
        teztColor="snow"
        size={1}
        textSize={fs[1]}
        style={caps}
        textAlign="left"
      >
        Citations
      </Heading>
      <Text
        textColor="smoke"
        textFont={century}
        textSize={fs[3]}
        lineHeight={1.6}
        textAlign="left"
        margin="2rem 0 0"
      >
        "The 1920s Credit Bubble." Daily Kos. Kos Media, LLC, 14 Jan. 2008. Web.
        28 Apr. 2017.
        <br />
        "1920s consumption." Khan Academy. Khan Academy, n.d. Web. 28 Apr. 2017.
        <br />
        "American Credit Situation Seen in London as Menacing." The New York
        Times. The New York Times, 15 Oct. 1928. Web. 28 Apr. 2017.
        <br />
        Green, John. "The Roaring 20's: Crash Course US History #32." Crash
        Course. YouTube, 04 Oct. 2013. Web. 28 Apr. 2017.
        <br />
        "[Herbert Hoover, Three-quarter Length Portrait, Seated, Facing Slightly
        Right, Listening to Radio]." Library of Congress. U.S. Government, 01
        Jan. 1970. Web. 28 Apr. 2017.
        <br />
        "House of a Thousand Windows." Wikimedia Commons. Wikimedia Project, 30
        Jan. 2013. Web. 28 Apr. 2017.
        <br />
        "Paul Strand, Akeley Motion Picture Camera." The Met Museum. The
        Metropolitan Museum of Art, n.d. Web. 28 Apr. 2017.
        <br />
        Wikimedia Commons. Wikimedia Project, 24 Apr. 2005. Web. 28 Apr. 2017.
      </Text>
    </Slide>
  </Deck>
)
export default Presentation
