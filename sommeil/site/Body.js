
import React from 'react'
import { Box, Text } from 'axs'
import { Heading, Flex } from 'axs-ui'
import Graph from './Graph'
import Container from './Container'
import Divider from './Divider'
import { colors, palette } from './config'

const Subheading = ({ l = 3, ...props }) => <Heading level={l} fontSize={l} mt2 mb1 {...props} />
const Img = (props) =>
  <Box
    my={[ 1, 2 ]}
    {...props}
    is='img'
    css={{
      maxWidth: '100%',
      maxHeight: '24rem'
    }}
  />

export default () =>
  <Container py3>
    <Flex flexDirection={[ 'column', 'row' ]} py2>
      <Box width={[ 1, 0.5 ]}>
        <Divider />
        <Subheading>Un tiers de sa vie</Subheading>
        <Text>
          On passe un tiers de sa vie en dormant. (Ou au moins, on devrait!) Le sommeil est comment le corps se repose et comment le corps guérit. Mais aussi, il est important pour le cerveau, et le sommeil impact l’humeur et les sentiments.
        </Text>
        <Img src='baby.jpg' mb0 />
        <Divider mt3 />
        <Subheading>Les heures</Subheading>
        <Text>
          La recommandation pour le nombre d’heures pour on dormir change contre l’age du personne:¹
        </Text>
        <ul>
          <li>Les nouveau-né: 14–17 heures/jour</li>
          <li>2 années: 11–12 heures pendant la nuit, et de plus, une sieste 1–2 heures</li>
          <li>3–5 années: 10–13 heures</li>
          <li>6–13 années: 9–11 heures</li>
          <li>14–17 années: 8–10 heures</li>
          <li>Les adultes: 7–9 heures</li>
        </ul>
      </Box>
      <Box px={3} display={[ 'none', 'inline-block' ]} />
      <Box width={[ 1, 0.5 ]}>
        <Divider />
        <Subheading>Comment dormir</Subheading>
        <Text>
          Le manière du sommeil fait une grande différence pour la qualité du sommeil. Il est nécessaire qu’on prenne en considération l’environnement pour le sommeil. Des éléments incluent:
        </Text>
        <Text is='ul' my2>
          <li>La temperature</li>
          <li>Le bruit</li>
          <li>La lumière</li>
          <li>Le confort</li>
          <li>Les électroniques</li>
        </Text>
        <Text>
          Il est normale que la lumière environnant soit le facteur principal qui affect l’horloge circadienne, qui est la système pour le cours comprendre le temps. À supposer que vous utilisiez les électroniques, avant on dors, il est recommandé qu’on éteigne les ordinateurs, les portables, et les autres appareils qui ont les écrans. La raison pour cette recommandation est que les écrans émettent la lumière bleue. Il est naturelle que les yeux voient la lumière bleue pendant le soleil est visible. Le cours deviendra désorienté s’il pense que le soleil est brillant pendant la nuit! Éteigniez-vous les appareils permettre que vous puissiez dormir.
        </Text>
        <Img src='https://hbr.org/resources/images/article_assets/2015/08/AUG15_31_558175165_b.jpg' />
      </Box>
    </Flex>
    <Box py2>
      <Graph />
    </Box>
    <Flex justifyContent='center' mt2>
      <Divider />
    </Flex>
    <Text mt2 center fontSize={3} css={{ fontStyle: 'italic' }}>
      Si vous ne suivez pas ce conseil, votre corps souffrirez!
    </Text>
    <Flex justifyContent='center' mt2>
      <Divider />
    </Flex>
    <Subheading>Les autres ressources</Subheading>
    <Text
      is='ul'
      css={{
        'a': { color: colors.blue }
      }}>
      <li><a href="http://www.sfrms-sommeil.org">SFRMS</a> est La Société Française de Recherche et Médecine du Sommeil. Si vous êtes un docteur, il est heureux que ce site existe.</li>
      <li>Sans que vous ayez la connaissance médicale, <a href="http://sommeil.org">Sommeil.org</a> a la nouvelle du sommeil.</li>
      <li><a href="https://fondationsommeil.com">La Fondation Sommeil</a> présente l’information pour les personnes qui souffrent de troubles du sommeil.</li>
    </Text>
    <Text mt3 fontSize={5} color={palette.gray[6]}>
      ¹Gronfier, Claude. "Et Si La Lumière Bleue Stimulait Notre Activité Cérébrale ?" SFRMS. La Société Française De Recherche Et Médecine Du Sommeil, 20 Nov. 2014. Web. 06 Feb. 2017.
    </Text>
  </Container>
