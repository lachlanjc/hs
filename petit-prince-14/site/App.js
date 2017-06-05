import React from 'react'
import { Box, Text } from 'axs'
import { Flex, Heading, Span } from 'axs-ui'
import Slide from './Slide'
import SummaryItem from './SummaryItem'
import Term from './Term'

import { map, split, trim } from 'lodash'

const terms = [
  ['🔆', 'réverbère', 'lampe de rue'],
  ['🤴', 'le roi', 'l’homme qui règne'],
  ['🍸', 'le buveur', 'le personne qui boit de l’alcool'],
  ['🕰', 'l’époque', 'periode de l’histoire'],
  ['👩‍💼', 'fidèle', 'attaché à une profession'],
  ['🤔', 'un sens', 'une raison d’être'],
  ['🏃', 'poursuivre', 'suivre vivement'],
  ['🚶', 'enjambées', 'les pas'],
  ['🙆', 'parvenir', 'étendre les bras'],
  ['😘', 'bénir', 'consacrer'],
  ['📃', 'la consigne', 'instruction formelle'],
  ['🛁', 'éponger', 'débarrasser de l’eau'],
  ['❌', 'méprisé', 'se tromper']
]
const B = props => <Span cyan1 bold {...props} />
const App = () => (
  <Box>
    <Slide bg="#f50">
      <Box>
        <Heading level={1} fontSize={0} mb1 center>Chapitre 14</Heading>
        <Heading level={2} fontSize={4} mb4 center caps>
          Lachlan + Ashley
        </Heading>
        <Box
          display={['block', 'flex']}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            is="img"
            src="http://lepetitprinceexupery.free.fr/illustrations/14-01.jpg"
            width={256}
            bgWhite
            p2
            css={{
              borderRadius: 6,
              boxShadow: '0 .25rem 1rem rgba(0,0,0,.25)'
            }}
          />
          <Box ml3>
            <Heading level={4} mb1 caps>Nous rencontrons</Heading>
            <Heading level={1}>l'allumeur</Heading>
          </Box>
        </Box>
      </Box>
    </Slide>
    <Slide bg="#0af">
      <Heading level={1} mb2 center>Vocabulaire</Heading>
      <Box
        display={['block', 'flex']}
        flexWrap="wrap"
        justifyContent="center"
        p={[0, 3]}
      >
        {map(terms, row => (
          <Term
            emoji={row[0]}
            term={row[1]}
            definition={row[2]}
            key={`term-${row[0]}`}
          />
        ))}
      </Box>
    </Slide>
    <Box
      p={[3, 4]}
      white
      css={{
        backgroundColor: '#8492A6',
        backgroundImage: 'linear-gradient(-120deg, rgba(255, 255, 255, .25), rgba(0, 0, 0, .25))',
        minHeight: '100vh'
      }}
    >
      <Heading level={1} fontSize={0} mb1 center>Le résumé</Heading>
      <SummaryItem>
        Le Petit Prince va à <B>la cinquième planète</B> lors de son voyage.
      </SummaryItem>
      <SummaryItem>
        La cinquième planète est <B>la plus petite</B>, et sur la planète il
        n'y a qu'un réverbère et un allumeur de réverbère.
      </SummaryItem>
      <SummaryItem>
        Là, <B>il rencontre l'allumeur</B>, qui allume le réverbère la nuit
        et l'éteint le matin.
      </SummaryItem>
      <SummaryItem>
        Le Petit Prince demande au allumeur pourquoi il allume et éteint le réverbère,
        et l'allumeur dit que c'est <B>la consigne</B>.
      </SummaryItem>
      <SummaryItem>
        L'allumeur ne sait pas pourquoi il allume et éteint le réverbère, il
        ne sait que c'est la consigne.
      </SummaryItem>
      <SummaryItem>
        Il dit qu'il fait un métier terrible, parce que la planète continue
        de <B>tourner plus vite</B>, et les jours restent plus courts.
      </SummaryItem>
      <SummaryItem>
        À cause de ça, l'allumeur doit allumer ou éteindre le réverbère{' '}
        <B>deux fois par minute</B>.
      </SummaryItem>
      <SummaryItem>
        Le Petit Prince aime l'allumeur beaucoup parce qu'
        <B>il est très fidèle à son travail</B>,
        alors il lui dit que pour se reposer, il doit marcher autour de
        sa planète, donc c'est toujours le jour.
      </SummaryItem>
      <SummaryItem>
        L'allumeur répond qu'<B>il n'aime que dormir</B>, alors le conseil du
        Petit Prince ne fonctionnent pas.
      </SummaryItem>
      <SummaryItem>
        Puis, le Petit Prince quitte la planète du allumeur.
      </SummaryItem>
      <SummaryItem>
        Il pense qu'il serait amis avec l'allumeur si sa planète était assez grande pour deux personnes.
      </SummaryItem>
    </Box>
    <Slide bg="#f0a">
      <Heading level={2} caps mb2 center>La leçon</Heading>
      <Heading
        level={3}
        fontSize={48}
        center
        mx="auto"
        css={{ fontStyle: 'italic', fontWeight: 'normal', maxWidth: 48 * 16 }}
      >
        La vie est plus significative si on fais pour les autres.
      </Heading>
    </Slide>
    <Slide bg="#fa0">
      <Heading level={2} caps mb2 center>La citation importante</Heading>
      <Heading
        level={3}
        fontSize={48}
        center
        mx="auto"
        css={{ fontStyle: 'italic', fontWeight: 'normal', maxWidth: 48 * 16 }}
      >
        Peut-être bien que cet homme est absurde. Cependant il est moins absurde
        que le roi, que le vaniteux, que le businessman et que le buveur.
        Au moins son travail a-t-il un sens. […] C'est un occupation très jolie.
        C'est véritablement utile puisque c'est joli.
      </Heading>
    </Slide>
    <Slide bg="#a0f">
      <Heading level={1} fontSize={96} my0>Loto!</Heading>
    </Slide>
  </Box>
)
export default App
