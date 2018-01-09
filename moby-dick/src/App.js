import React, { Fragment } from 'react'
import { Provider, Banner, Container, Box, Heading, Text } from 'rebass'
import styled from 'styled-components'
import theme, { colors, mx } from './theme'

const Article = Container.extend.attrs({ p: 3 })`
  > p {
    font-size: 1.25rem;
    font-family: ${theme.serif};
    line-height: 1.75;
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
  @supports (-webkit-initial-letter: 2) {
    .first_letter:first-letter {
      -webkit-initial-letter: 2;
      color: ${colors.primary};
      font-weight: bold;
      font-style: italic;
      padding-right: 0.75rem;
    }
  }

  img {
    width: 100%;
  }

  h2, blockquote {
    font-style: italic;
    color: ${colors.primary};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5;
    em { font-style: normal; }
    position: relative;
    &:before {
      content: '';
      left: -4rem;
      position: absolute;
      font-size: 6rem;
      line-height: 1;
      color: ${colors.smoke};
    }
    p { margin: .5rem 0; }
  }

  ${mx[1]} {
    display: grid;
    grid-template-columns: 1fr 36rem;
    grid-column-gap: 2rem;
    justify-content: center;
    > div {
      grid-column: 2;
      margin: 1rem 0 1rem -8rem;
    }
    > p, > ol {
      grid-column: 2;
    }
    h2, blockquote {
      grid-column: 2;
      margin-left: -8rem;
    }
    img {
      grid-column: 1;
    }
  }

  @media print {
    > p {
      font-size: 1rem;
      max-width: 32rem;
      margin: 1rem auto .5rem;
    }
  }
`

const Footnotes = Box.extend.attrs({
  is: 'ol',
  bg: 'smoke',
  color: 'slate',
  px: 4,
  py: 3,
  mx: [null, -4]
})`
  border-radius: .5rem;
  word-break: break-word;
  &:before {
    content: 'Endnotes';
    display: block;
    font-weight: 700;
    letter-spacing: .1em;
    margin-bottom: .25rem;
    text-transform: uppercase;
  }
`

const Slide = Banner.extend.attrs({ color: 'white', p: [2, 3, 4] })`
  height: 50vh;
  max-height: 100vh;
  text-shadow: 0 .25rem .5rem rgba(0,0,0,.5);
  h1, h2 { font-weight: 800; }
  @media print {
    background: none !important;
    color: black !important;
    text-shadow: none !important;
    padding: 2rem !important;
    min-height: auto !important;
    height: auto !important;
  }
`
const HeaderSlide = Slide.extend`
  min-height: 100vh;
  text-align: center;
`
const LastBanner = Banner.extend.attrs({ color: 'white', mt: 3, mb: 2 })`
  background-color: #00bacb;
  background-image: linear-gradient(-32deg, rgba(0,255,255,1), rgba(255,0,0,1));
  background-blend-mode: overlay;
  min-height: 40vh !important;
  h2 {
    font-weight: 800;
    text-shadow: 0 .125rem .5rem rgba(0,0,0,.25);
  }
  @media print {
    background: none !important;
    color: black !important;
    text-shadow: none !important;
    padding: 2rem !important;
    height: auto !important;
  }
`

const Footer = Box.extend.attrs({
  is: 'footer',
  color: 'slate',
  bg: 'smoke',
  f: 2,
  pt: 4,
  pb: 5
})`text-align: center;`

export default () => (
  <Fragment>
    <title>Moby Dick</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <Provider theme={theme}>
      <HeaderSlide backgroundImage="https://images.unsplash.com/photo-1501397889449-0d4c5ce35275">
        <Container maxWidth={48 * 16}>
          <Heading is="h1" f={[6, 7]}>
            Whales For Three
          </Heading>
          <Heading f={[3, 4]} style={{ fontWeight: 500 }}>
            <em>An essay by Lachlan Campbell</em>
          </Heading>
        </Container>
      </HeaderSlide>

      <Article py={[4, 5]}>
        <blockquote>
          <p>
            In Herman Melville’s novel <em>Moby Dick</em>, the whale, key at
            every stage of the <em>Pequod</em>’s journey, plays a different role
            for Melville himself, for our narrator Ishmael, and for the modern
            reader—but ultimately connects to the human experience at a deep
            level.
          </p>
        </blockquote>
      </Article>

      <Slide backgroundImage="https://images.unsplash.com/photo-1465103692162-a9bf9c7bd0fc">
        <Heading f={[5, 6]}>For Melville</Heading>
      </Slide>
      <Article>
        <blockquote>
          <p>
            Inside the closed system of the <em>Pequod</em>, with no outsiders
            to regulate their culture, whales and Moby Dick specifically become
            god-like creatures with no human match.
          </p>
        </blockquote>

        <p className="first_letter">
          After the ship sets sail, the culture of the <em>Pequod</em> becomes a
          closed system, isolated with no connection to the outside world. With
          a group of only men there for three years, and with no cultural
          regulation from the rest of society, the attitudes which develop over
          the voyage are entirely different from anything back in Nantucket.
        </p>

        <p>
          Chiefly, the ship has Ahab at the helm, a man whose mental capacities
          beyond endlessly pursuing utter revenge are questionable. Melville
          does illuminate the more human side of the captain sharing details
          about his life with Starbuck. As he reflects in “The Symphony,” Ahab
          finds himself lonely after forty years at sea. He slew his first whale
          at age eighteen, and has barely even paused, only returning to
          Nantucket to see his wife a few times over his life. Nonetheless, the
          captain resolves more strongly than ever to continue his fixation,
          pursuing the White Whale until the bitter end. In the chapter “Moby
          Dick,” Ishmael says, “with the mad secret of his unabated rage bolted
          up and keyed in him, Ahab had purposely sailed upon the present voyage
          with the one only and all-engrossing object of hunting the White
          Whale.”
        </p>

        <p>
          Meanwhile, the crew remains entirely captivated by the same goal, to
          finish the quest (an oath for accomplishing Ahab reminds them of
          frequently). Though Ahab wants to save Starbuck’s life by keeping him
          on the main ship during the hunt, “The White Whale swam before him as
          the monomaniac incarnation of all those malicious agencies which some
          deep men feel eating in them, till they are left living on with half a
          heart and half a lung.” In the end, everyone is willing to die for
          what they see as justice on the magnificent creature. Ishmael sums it
          up: “Here, then, was this grey-headed, ungodly old man, chasing with
          curses a Job’s whale round the world, at the head of a crew, too,
          chiefly made up of mongrel renegades, and castaways, and cannibals…”
        </p>

        <p>
          The language the narrator/Ishmael use to refer to the whale indicates
          the royal esteem in which they hold whales. Describing groups of the
          “fish” in “Schools and Schoolmasters,” he directly compares whales to
          religious figures: “Gently he insinuates his vast bulk among them
          again and revels there awhile, still in tantalizing vicinity to young
          Lothario, like pious Solomon devoutly worshipping among his thousand
          concubines.” The grandiose language continues at every turn; he
          describes “a wild, mystical, sympathetical feeling” on the boat from
          “the peculiar terror [Moby Dick] bred” and the “monomaniac incarnation
          of all those malicious agencies” as the whale with its “supernatural
          surmisings” “haunted those uncivilized seas.”
        </p>

        <p>
          Most beings could never acquire such significance that so many people
          would pursue them in this fashion until the end of time (or their
          death, whichever came first). But in the novel, Moby Dick ascends to
          being a higher force, and the demise of the creature becomes
          irresistible for Ahab and the ship’s crew to pursue. Melville’s
          perceives whales as awe-inspiring creations, and he brings such a
          feeling at an extreme level to his cast of characters on the{' '}
          <em>Pequod</em>.
        </p>
      </Article>

      <Slide backgroundImage="https://news.nationalgeographic.com/content/dam/news/2017/03/28/whale-gallery/13-whale-gallery.ngsversion.1490882403990.adapt.1190.2.jpg">
        <Heading f={[5, 6]}>For Ishmael</Heading>
      </Slide>
      <Article>
        <blockquote>
          <p>
            Though Ishmael appreciates whales as God-like figures, he also views
            whales as a truly wondrous scientific curiosity at which to marvel.
          </p>
        </blockquote>

        <p className="first_letter">
          “Cetology,” “The Sperm Whale&#39;s Head—Contrasted View,” “The Right
          Whale’s Head—Contrasted View,” “The Battering-Ram,” “The Great
          Heidelburgh Tun,” “The Prairie,” “The Nut,” and “A Bower in the
          Arsacides” are just a few of the literally dozens of chapters devoted
          to facts and information about whales throughout the novel. While
          Melville penned <em>Moby Dick</em> in most decidedly a pre-Twitter
          era, it could clearly be a much shorter book if Ishmael had chosen to
          omit the whale facts. As modern readers we can grow exhausted of this
          information (though we certainly experience our narrator’s true
          passion with every additional page detailing their skeletons), but it
          is not superfluous to Ishmael. He finds the creatures’ anatomies and
          inner workings critical to conveying the story, even if the true
          action can at points feel like an afterthought. He is obsessed with
          the scientific analysis of whales.<sup>
            <a id="ffn1" href="#fn1">
              1
            </a>
          </sup>
        </p>

        <p>
          At one point while inspecting a whale’s body, Ishmael writes “I have
          been blessed with an opportunity to dissect him in miniature.” He
          apologizes for any inaccuracies in his measurements of the various
          bones. He spends more chapters correcting misconceptions about whales,
          as people with true passions are wont to do; in what he must see as a
          service to his readers, he spends many pages explaining the incorrect
          details saved in various drawings of whales. “Serious fault might be
          found with the anatomical details of this whale,” he comments of one.
        </p>

        <p>
          Readers would likely not consider the scientific perspective if
          Ishmael was not so adamant about including it. With our modern
          societal approach towards animals of assuming we know everything
          important, we lose the sense of unending curiosity so clearly
          occupying Ishmael. The perspective he brings by studying whales in the
          book deepens their character in the narrative: he makes them no longer
          merely hunter’s victims or gods, but rather augments them with another
          dimension.
        </p>
      </Article>

      <Slide backgroundImage="https://images.unsplash.com/photo-1496044601873-3f373ec781b5">
        <Heading f={[5, 6]}>For Modern Readers</Heading>
      </Slide>
      <Article>
        <blockquote>
          <p>
            For modern readers looking back at the whaling industry so
            uncompromisingly depicted in <em>Moby Dick</em>, the hunting of
            millions of whales for oil seems a horrific demonstration of
            humanity’s lack of care for the environment. But it was a drop in
            the ocean compared to the damage humans do to the environment every
            day now.
          </p>
        </blockquote>

        <p className="first_letter">
          The voyages of the <em>Pequod</em> are for whaling: hunters attempt to
          spear as many whales as possible and extract their oil for sale and
          profit. The <em>Pequod</em>’s crew kills dozens of whales through the
          story, and pass many other whaling ships along the way doing the same,
          giving readers the sense that thousands of whales were being killed.
          According to scientists’ estimates, though, over three million whales
          were slaughtered just over the course of the twentieth century.
          Sail-powered whaling ships took 300,000 sperm whales in the eighteenth
          and nineteenth centuries, and their progress continued growing until
          around 1960, finally ending for the most part in the 1980s.<sup>
            <a id="ffn2" href="#fn2">
              2
            </a>
          </sup>{' '}
          The total number killed is likely in the many tens of millions. This
          may seem like terrible cruelty, considering what significant and
          intelligent animals whales are, though at least we can be happy
          knowing that humans have essentially stopped hunting whales in the
          time since.
        </p>

        <p>
          The state of the planet Earth right now can be described as nothing
          short of utter calamity. Ballooning human carbon emissions have
          drastically altered the balance of the natural ecosystems, and every
          species is trying to adapt in the face of insane changes on impossibly
          short timelines. Meanwhile, humans are only accelerating their damage,
          not slowing down or reversing. After several years of plateauing
          worldwide emissions, 2017 is setting a new record for global carbon
          emissions. The scientific community has come to the consensus that 350
          parts per million of carbon dioxide in the atmosphere is safe, but
          measurements from this morning are 406 ppm, following the breach of
          410 ppm last April.<sup>
            <a id="ffn3" href="#fn3">
              3
            </a>
          </sup>{' '}
          International biodiversity faces a crisis of epic proportions as
          humans make extinct species never even identified: climate change
          alone is projected to threaten a quarter or more of all species by
          2050.<sup>
            <a id="ffn4" href="#fn4">
              4
            </a>
          </sup>{' '}
          Storms, wildfires, droughts, and glacial melting are increasingly
          ferocious (climate scientists say the Arctic “shows no sign of
          returning to reliably frozen”<sup>
            <a id="ffn5" href="#fn5">
              5
            </a>
          </sup>). Every single day, the damage humanity does to our natural
          environment, the only truly hospitable place discovered so far, is
          vast—we emit a billion tons only of carbon dioxide into the atmosphere
          every ten days.<sup>
            <a id="ffn6" href="#fn6">
              6
            </a>
          </sup>{' '}
          Or as anticipatory design systems theorist Buckminster Fuller put it,
          “Humans beings always do the most intelligent thing…after they’ve
          tried every stupid alternative and none of them have worked.” This can
          be hard to argue with considering issues like the damage done by the
          energy use of the Bitcoin network, an infinitesimal side project in
          the map of all human activities.<sup>
            <a id="ffn7" href="#fn7">
              7
            </a>
          </sup>
        </p>

        <p>
          In the chapter “Does the Whale’s Magnitude Diminish?—Will He Perish?,”
          Ishmael begins to consider the possibility of it not all being “honour
          and glory of the whale-ship.” He brings up the concern that whalers
          could be hunting whales to extinction, and postulates whales having
          shrunken since the start of human whaling, because the ones described
          by ancient Roman naturalists were larger. As a capitalist, a man whose
          main drive is for profit, Ishmael naturally concludes there are no
          moral issues with whaling. He justifies this nonsense by
          hypothesizing, without any evidence of such a shift, that the pattern
          in which whales swim is more spread out than it was in the past.<sup>
            <a id="ffn8" href="#fn8">
              8
            </a>
          </sup>{' '}
          Ishmael feels so many whales exist, they could never go the way of the
          American buffalo from just a few hunts (13,000, to be specific). He
          dismisses all these concerns, concluding, “we account the whale
          immortal in his species, however perishable in his individuality,” and
          “the eternal whale will still survive, and…spout his frothed defiance
          to the skies.”
        </p>

        <p>
          Ishmael remained in denial of the possibility of his actions
          contributing to true damage of what he loved most dearly<sup>
            <a id="ffn9" href="#fn9">
              9
            </a>
          </sup>{' '}
          because it terrified him. In a depressing look back at this period of
          human history, the modern human can conclude that these actions barely
          qualify as a footnote of humanity’s environmental atrocities, the
          scope of which have only increased exponentially with no end in sight.
          Ishmael’s beloved whale carcasses left behind to litter the oceans are
          just one drop, among so, so many.
        </p>
      </Article>

      <LastBanner>
        <Heading f={[5, 6]}>For Three</Heading>
      </LastBanner>
      <Article>
        <p className="first_letter">
          Melville’s genius in <em>Moby Dick</em> lies in showing so many
          dimensions of the whale. He creates a magnificent creature who can
          humble its isolated hunters as if he were a god. Yet the whale is also
          the subject of Ishmael’s obsessive studying. And even a century and a
          half later, the character of the whale can bring a completely
          different perspective to readers, one deeply intertwined with science
          and religion and the human experience. The whale is not one symbol,
          two shapes, or three dimensions, but triumphs in transcending these
          boundaries. It captivates everyone by speaking to all of us in
          dramatically different ways. Melville’s story is not one of religion,
          petty revenge, or environmental tragedy, but ultimately humanity.
        </p>

        <Footnotes>
          <li id="fn1">
            Did Ishmael consider whales frequently before joining the whaling
            ship? It is an interesting dynamic as he is using whaling as an
            alternative to suicide. <a href="#ffn1">&#x21A9;&#xFE0E;</a>
          </li>
          <li id="fn2">
            <a href="https://www.nature.com/news/world-s-whaling-slaughter-tallied-1.17080#whales">
              https://www.nature.com/news/world-s-whaling-slaughter-tallied-1.17080#whales
            </a>{' '}
            <a href="#ffn2">&#x21A9;&#xFE0E;</a>
          </li>
          <li id="fn3">
            <a href="https://www.co2.earth/">https://www.co2.earth/</a> Because
            so many more trees exist in the Northern hemisphere, CO2
            concentrations go down when it is summer in the North, then rise in
            the winter. <a href="#ffn3">&#x21A9;&#xFE0E;</a>
          </li>
          <li id="fn4">
            <a href="https://chge.hsph.harvard.edu/climate-change-and-biodiversity-loss">
              https://chge.hsph.harvard.edu/climate-change-and-biodiversity-loss
            </a>{' '}
            <a href="#ffn4">&#x21A9;&#xFE0E;</a>
          </li>
          <li id="fn5">
            <a href="http://grist.org/article/let-it-go-the-arctic-will-never-be-frozen-again/">
              http://grist.org/article/let-it-go-the-arctic-will-never-be-frozen-again/
            </a>{' '}
            <a href="#ffn5">&#x21A9;&#xFE0E;</a>
          </li>
          <li id="fn6">
            <a href="https://www.newyorker.com/magazine/2017/11/20/can-carbon-dioxide-removal-save-the-world">
              https://www.newyorker.com/magazine/2017/11/20/can-carbon-dioxide-removal-save-the-world
            </a>{' '}
            <a href="#ffn6">&#x21A9;&#xFE0E;</a>
          </li>
          <li id="fn7">
            Approximately three-quarters of worldwide electricity is from
            non-renewable sources, with 750g of CO2 released per kWh. Bitcoin
            uses about 32TWh/year, so fairly optimistically, 18 million metric
            tons of carbon dioxide are released by Bitcoin annually.{' '}
            <a href="#ffn7">&#x21A9;&#xFE0E;</a>
          </li>
          <li id="fn8">
            And, in a blame-the-victim moment, mentions that whales would not go
            extinct if only they swam toward the poles.{' '}
            <a href="#ffn8">&#x21A9;&#xFE0E;</a>
          </li>
          <li id="fn9">
            Besides Queequeg. <a href="#ffn9">&#x21A9;&#xFE0E;</a>
          </li>
        </Footnotes>
      </Article>
      <Footer>Made with ♥️ by Lachlan Campbell, 2017.</Footer>
    </Provider>
  </Fragment>
)

const css = `
*{box-sizing:border-box}body{line-height:1.5;margin:0}a{color:${colors.primary}}
@font-face{font-family:Slack-Averta;font-style:normal;font-weight:400;src:url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-regular.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-regular.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Averta;font-style:normal;font-weight:700;src:url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-bold.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-bold.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Averta;font-style:normal;font-weight:900;src:url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-black.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-black.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Averta;font-style:italic;font-weight:400;src:url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-regular-italic.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-regular-italic.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Tiempos;font-style:normal;font-weight:400;src:url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-headline/tiempos-headline-regular.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-headline/tiempos-headline-regular.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Tiempos;font-style:italic;font-weight:400;src:url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-text/tiempos-text-regular-italic.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-text/tiempos-text-regular-italic.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Tiempos;font-style:normal;font-weight:700;src:url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-headline/tiempos-headline-bold.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-headline/tiempos-headline-bold.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
`
