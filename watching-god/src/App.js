import React from 'react'
import {
  Provider,
  Banner,
  Container,
  Flex,
  Box,
  Heading,
  Subhead,
  Text,
  Lead,
  Image,
  Button
} from 'rebass'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import theme, { colors } from './theme'

const TopBanner = Banner.extend.attrs({ bg: 'pink.5', color: 'white', mb: 3 })`
  background-image: linear-gradient(-120deg, rgba(0,255,255,1), rgba(255,0,0,1));
  background-blend-mode: overlay;
  text-align: left;
  min-height: 50vh;
  h2 { font-weight: 800; }
  p { font-family: ${theme.font}; }
`

const Article = Container.extend.attrs({ py: 2 })`
  display: grid;
  grid-template-columns: 1fr 36rem;
  grid-column-gap: 2rem;
  justify-content: center;

  > p {
    font-size: 1.25rem;
    font-family: ${theme.serif};
    line-height: 1.75;
    margin-top: .5rem;
    margin-bottom: .5rem;
    grid-column: 2;
  }
  @supports (-webkit-initial-letter: 3) {
    #intro:first-letter {
      -webkit-initial-letter: 3;
      color: ${colors.primary};
      font-weight: bold;
      font-style: italic;
      margin-right: 0.5rem;
    }
  }

  a {
    color: ${colors.info};
  }

  h2, blockquote {
    font-style: italic;
    grid-column: 2;
    margin-left: -8rem;
    em { font-style: normal; }
  }
  h2 {
    color: ${colors.primary};
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.25;
  }
  blockquote {
    color: ${colors.info};
    font-size: 1.5rem;
    font-family: ${theme.serif};
    font-weight: 500;
    line-height: 1.5;
    position: relative;
    &:before {
      content: '“';
      left: -4rem;
      position: absolute;
      font-size: 6rem;
      line-height: 1;
      color: ${colors.smoke};
    }
    p { margin: .5rem 0; }
  }

  img {
    grid-column: 1;
    width: 100%;
  }

  > div {
    grid-column: 2;
    margin: 1rem 0 1rem -8rem;
  }
`
const Aside = Box.extend.attrs({ is: 'aside', w: 1, bg: 'smoke' })``
const AsideArticle = Article.extend.attrs({ mt: 5, py: 4 })`
  display: block !important;

  > p {
    max-width: 36rem;
  }
  h2 {
    color: ${colors.info};
    margin: 1rem 0;
  }
`

const Jump = Button.extend.attrs({
  is: 'a',
  bg: 'info',
  f: 3,
  px: 4,
  py: 3
})`
  color: #fff !important;
  font-family: ${theme.font};
`

const Filmstrip = Box.extend.attrs({ bg: '#111', p: 3, my: 4, w: 1 })``
const FilmstripContainer = Box.extend`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  img {
    max-height: 12rem;
    margin: 0.5rem;
  }
`

const Footer = Box.extend.attrs({
  is: 'footer',
  color: 'grey',
  f: 2,
  py: 5
})`
  text-align: center;
`

const App = () => (
  <Provider theme={theme}>
    <TopBanner>
      <Container maxWidth={48 * 16}>
        <Heading>“Grab them by the p*ssy. You can do anything.”</Heading>
        <Text f={3} mt={2}>
          — President of the United States of America
        </Text>
      </Container>
    </TopBanner>
    <Article>
      <p id="intro">
        Donald Trump proudly {' '}
        <a href="https://www.washingtonpost.com/politics/trump-recorded-having-extremely-lewd-conversation-about-women-in-2005/2016/10/07/3b9ce776-8cb4-11e6-bf8a-3d26847eeed4_story.html">
          said these infamous words in 2005
        </a>{' '}
        about women, and {' '}
        <a href="https://www.washingtonpost.com/politics/trumps-history-of-flippant-misogyny/2015/08/08/891f1bec-3de4-11e5-9c2d-ed991d848c48_story.html">
          has said many more
        </a>. Every day, we see more examples of sexism around the world.
        Celebrities, CEOs, managers, husbands, students, and so many others make
        sexist and misogynistic comments all the time. In Zora Neale Hurston’s {' '}
        <em>Their Eyes Were Watching God</em>, sexism defines the narrative at
        every stage of the story. If sexism weren’t not so pervasive, this story
        would not have been written.
      </p>
      <h2>
        Men have taken advantage of women for all of history, forcing them to
        stay at home, care for children, and leave men to do the {' '}
        <em>real work</em>.
      </h2>

      <p>
        One of the first instances of sexism occurs when Janie’s grandmother,
        Nanny, tells Janie about the world. Nanny was the daughter of a slave
        who had been raped by her white master, and Janie’s mother had been
        raped by a schoolteacher. Janie would not exist if not for these rapes.
        Nanny tells this story as a mother of a seventeen-year-old daughter:
      </p>

      <blockquote>
        <p>
          Ah took a lantern and went round askin’ everybody but nobody ain’t
          seen her. De next mornin’ she come crawlin’ in on her hands and knees.
          A sight to see. Dat school teacher had done hid her in de woods all
          night long, and he had done raped mah baby and run on off just before
          day.
        </p>
      </blockquote>

      <img
        src="https://pbs.twimg.com/media/DMlm6z1XkAAEvAX?format=png"
        style={{ gridColumn: 2 }}
      />
      <Text
        f={2}
        color="grey"
        style={{
          textAlign: 'center',
          fontStyle: 'italic',
          marginTop: 0,
          fontFamily: theme.font
        }}
      >
        A New Yorker cartoon
      </Text>

      <p>
        Men do their best to make women subservient all the time, but {' '}
        <a href="https://en.m.wikipedia.org/wiki/Nevertheless,_she_persisted">
          nevertheless, Nanny persisted
        </a>
        , just like women must do so often in our patriarchical society. She
        remarks to Janie soon after telling this story: “Ah don’t want yo’
        feathers always crumpled by folks throwin’ up things in yo’ face.”
      </p>

      <p>
        During her first marriage, Janie became used to being a lower-class,
        invisible woman supporting her husband and overseeing no one. After Mr.
        Starcks, Janie’s second husband, is elected the first mayor of
        Eatonville, Florida, she becomes the most important woman in town, Mrs.
        Mayor Starcks. Her husband, though, has very clearly defined what women
        should do around him. Right after he is enthusiastically elected:
      </p>

      <blockquote>
        <p>
          “And now we’ll listen tuh uh few words uh encouragement from Mrs.
          Mayor Starks.”
        </p>
        <p>
          The burst of applause was cut short by Joe taking the floor himself.
        </p>
        <p>
          “Thank yuh fuh yo’ compliments, but mah wife don’t know nothin’ ’bout
          no speech-makin’. Ah never married her for nothin’ lak dat. She’s uh
          woman and her place is in de home.”
        </p>
        <p>
          Janie made her face laugh after a short pause, but it wasn’t too easy.
          She had never thought of making a speech, and didn’t know if she cared
          to make one at all. It must have been the way Joe spoke out without
          giving her a chance to say anything one way or another that took the
          bloom off of things.
        </p>
      </blockquote>

      <p>
        The author could have brushed off Mr. Starcks’ quote with “Janie
        laughed”; instead, she wrote that Janie “made her face laugh” and only
        “after a short pause” because “it wasn’t easy”. She very deliberately
        spends several sentences explaining how Joe’s clear, unapologetic sexism
        made him a less desirable partner for Janie—perhaps a message to male
        readers of the book.
      </p>
    </Article>

    <Filmstrip>
      <Subhead align="center" color="white" mt={3} mb={1}>
        Belle Glade, FL
      </Subhead>
      <FilmstripContainer>
        {[
          'http://cdn.loc.gov/service/pnp/fsa/8b28000/8b28400/8b28483r.jpg',
          'http://cdn.loc.gov/service/pnp/fsa/8c09000/8c09500/8c09512r.jpg',
          'http://cdn.loc.gov/service/pnp/fsa/8c09000/8c09500/8c09527r.jpg',
          'http://cdn.loc.gov/service/pnp/fsa/8c09000/8c09600/8c09689r.jpg'
        ].map(src => <Image key={`f-${src}`} src={src} />)}
      </FilmstripContainer>
      <Text f={2} color="grey" align="center" style={{ fontStyle: 'italic' }}>
        Images from the Library of Congress
      </Text>
    </Filmstrip>

    <Article>
      <p>
        Later, the town holds a funeral for the mule Mr. Starcks purchases, and
        he does not permit Janie to attend. Following the funermule, Joe comes
        back to his store, which Janie has been running while he was away, and
        reflects on the power dynamic in their relationship (emphasis mine):
      </p>

      <blockquote>
        <p>
          Joe returned to the store full of pleasure and good humor but he
          didn’t want Janie to notice it because he saw that she was sullen and
          he resented that.{' '}
          <strong>
            She had no right to be, the way he thought things out.
          </strong>{' '}
          She wasn’t even appreciative of his efforts and she had plenty cause
          to be. Here he was just pouring honor all over her; building a high
          chair for her to sit in and overlook the world and she here pouting
          over it!
        </p>
      </blockquote>

      <p>
        While Joe clearly believes that the way in which he treats his wife is
        perfect, he consistently denies Janie her power to make her own choices
        (“she had no right to be”). He creates a pattern of sexist behavior
        instead of empowerment, and thinks that everyone, especially his wife,
        should be much more grateful to him for his actions (“she wasn’t even
        appreciative of his efforts”).
      </p>

      <h2>
        Sexism was not a new phenomenon at this point in history, and
        absolutely extends to the modern day.
      </h2>

      <img src="https://user-images.githubusercontent.com/5074763/31848262-12c29ab8-b5fc-11e7-9bbf-e91aa61e9855.png" />

      <p>
        Several centuries ago, Thomas Jefferson, one of the most famous
        political figures in the history of the United States, who declared that
        “all men are created equal”, owned slaves. One of them was Sally
        Hemings, a slave through inheritance, who Jefferson made pregnant before
        returning from France when she was just fifteen or sixteen years old.
        Hemings would go on to have six children, and DNA evidence shows that
        Jefferson was the father. Many historians have labeled this just a love
        affair or said Hemings could have left Jefferson. But{' '}
        <a href="http://www.feministe.us/blog/archives/2009/08/20/thomas-jefferson-the-face-of-a-rapist/">
          as one writer reminds us
        </a>
        :
      </p>

      <blockquote>
        <p>
          Once they returned to the US, he had the power to have her flogged, or
          even put to death.&nbsp;At anytime he could have sold her children
          away from her. For a relationship based in love to exist, both parties
          must be equal and due to the power differential between Jefferson and
          Hemings what occurred cannot be described as anything other than rape.
        </p>
      </blockquote>

      <p>
        The quote shows one way in which this country was founded by white men
        who took advantage of their enormous privilege. Jefferson is deeply
        connected to the largest ideals of democracy and equality, yet his
        relationship with Hemings is never uttered in the same breath as talk of
        his writings.
      </p>

      <p>
        One would hope that society could leave this terrible injustice in the
        past, but instead, modern society remains full of new and different
        examples. Journalists and newscasters{' '}
        <a href="https://www.huffingtonpost.com/entry/rio-2016-sexism-media_us_57a840dbe4b056bad215f03c">
          enforce the patriarchy
        </a>{' '}
        as they cover regular events. The {' '}
        <a href="https://www.si.com/swimsuit/">
          Sports Illustrated Swimsuit Edition
        </a>{' '}
        only features objectified female models, designed for the enjoyment of
        straight men. Fox News, one of the {' '}
        <a href="http://www.adweek.com/tvnewser/the-top-cable-news-programs-of-may-2017/330624">
          largest cable television networks
        </a>
        , continues to allow male hosts to make misogynistic comments, even
        after the star and sex offender Bill O’Reilly was fired (once
        advertisers saw too many allegations of sexual harassment). Carlos Maza
        of Vox demonstrates how entrenched the behavior is on his show
        Strikethrough:
      </p>

      <ReactPlayer
        url="https://youtu.be/nFCPdVtB8gI"
        width={768}
        height={432}
        config={{ youtube: { playerVars: { showinfo: 1 } } }}
      />

      <p id="jump">
        <Jump href="#aside">→ Read a (long) aside on Silicon Valley</Jump>
      </p>

      <p>
        Research demonstrates that {' '}
        <a href="https://www.forbes.com/sites/womenintech/2012/10/09/do-women-make-startups-more-successful-if-so-how/#25d812d368ea">
          female-run organizations last longer and are more profitable
        </a>{' '}
        than their male-run counterparts (even if {' '}
        <a href="http://knowledge.wharton.upenn.edu/article/vcs-arent-funding-women-led-startups/">
          venture capitalists turn them away
        </a>). After the Great Recession in 2008, the bank that survived the
        crash was{' '}
        <a href="https://www.theguardian.com/world/2009/feb/22/iceland-women">
          female-run, in Iceland
        </a>. Michael Moore interviewed these women in his film {' '}
        <em>Where to Invade Next</em>:
      </p>

      <ReactPlayer
        url="https://youtu.be/J1mg_GreRDg"
        width={768}
        height={432}
        config={{ youtube: { playerVars: { showinfo: 1 } } }}
      />

      <p>
        Sexism is damaging to companies, organizations, and people in so many
        ways, and has been around since prehistoric times, yet it continues to
        pervade all areas of our society, from our media to our politicians.
        What Janie spent her whole life fighting, the men around her trying to
        establish their superiority over her, made her the strong character Zora
        Neale Hurston wrote a story about.
      </p>
    </Article>

    <Aside id="aside">
      <AsideArticle>
        <Heading mb={0}>A (long) aside on Silicon Valley</Heading>

        <p>
          Every week, it seems, there is a new case of misconduct in Silicon
          Valley. Men, content in the power their invisible privilege provides
          them every day, objectify, harass, and assault women. At the majority
          of tech companies, it is baked in to {' '}
          <a href="https://www.wired.com/2017/03/techs-harassment-crisis-now-has-an-arsenal-of-smoking-guns/">
            company culture
          </a>
          , such as {' '}
          <a href="https://www.theguardian.com/world/2017/mar/01/silicon-valley-sexual-harassment-startups">
            at Twitter, Facebook, Google, Apple, Tesla, Oracle, Reddit,
            Squarespace, dozens of venture capital firms
          </a>
          , and so many others. Last winter Uber was rocked by reports of
          blatant, culture-encouraged sexual harassment. A female former
          engineer, Susan Fowler, {' '}
          <a href="https://www.susanjfowler.com/blog/2017/2/19/reflecting-on-one-very-strange-year-at-uber">
            wrote about her horrific experience
          </a>{' '}
          at the company. Travis Kalanick, Uber’s CEO, {' '}
          <a href="https://www.nbcnews.com/tech/tech-news/uber-s-handling-susan-fowler-scandal-will-determine-it-fate-n723596">
            called it
          </a>{' '}
          “abhorrent and against everything Uber stands for and believes in”,
          yet {' '}
          <a href="http://www.businessinsider.com/travis-kalanick-uber-meditating-arianna-huffington-2017-6">
            used his office’s lactation room for meditation
          </a>
          , proving his own company’s “values” failed to extend to his own
          behavior. He also went to Seoul as part of a company trip in 2014,
          where he {' '}
          <a href="https://www.theguardian.com/technology/2017/mar/27/uber-execs-including-travis-kalanick-went-to-escortkaraoke-bar">
            visited an escort/karaoke bar
          </a>{' '}
          and encouraged a female employee to tell press they “had a good time”,
          demonstrating his complete lack of respect for women. Only very
          recently have these reports been followed by any punishments, such as {' '}
          <a href="https://www.nytimes.com/2017/06/21/technology/uber-ceo-travis-kalanick.html">
            Kalanick’s exit from Uber
          </a>
          {', '}
          <a href="https://www.forbes.com/sites/janetwburns/2017/07/03/500-startups-dave-mcclure-elizabeth-yin-resign-as-sexual-harassment-claims-mount/#6f814a7c6b80">
            a top venture capitalist’s resignation
          </a>
          {' in July '}
          <a href="https://www.nytimes.com/2017/07/03/technology/silicon-valley-sexual-harassment.html">
            after countless reports
          </a>
          , and a {' '}
          <a href="https://www.axios.com/tech-ceo-arrested-for-child-rape-and-attempted-murder-2499134528.html">
            CEO going to prison after raping a child
          </a>
          .
        </p>

        <p>
          Despite all this, technology in Silicon Valley is still dominated by
          white men. Every year, major companies release their diversity numbers
          (a practice that only {' '}
          <a href="https://work.qz.com/1092540/techs-diversity-failures-are-a-massive-business-opportunity-for-the-minority-recruitment-industry/">
            began in 2013
          </a>
          )—while they are largely improving, they paint a sad picture of an
          industry supposedly on the bleeding-edge of the future of our society.
          For example, only {' '}
          <a href="https://www.apple.com/diversity/">32% of Apple</a> and
          Facebook employees and {' '}
          <a href="https://www.amazon.com/b/ref=tb_surl_diversity/?node=10080092011">
            39% of Amazon
          </a>{' '}
          are female—but in technology roles, only {' '}
          <a href="https://newsroom.fb.com/news/2015/06/driving-diversity-at-facebook/">
            16% of Facebook engineers are women
          </a>
          {', and just '}
          <a href="https://diversity.google/commitments/">22% at Google</a>
          {' and '}
          <a href="https://diversity.github.com/">GitHub</a>
          . None of these diversity reports even counts non-binary people
          (though GitHub, trying to fix its culture after {' '}
          <a href="https://www.wired.com/2014/04/tom_pw/">
            major sexual harassment
          </a>
          {' and '}
          <a href="https://where.coraline.codes/blog/my-year-at-github/">
            transphobia
          </a>{' '}
          cases, mentions “transgender/genderqueer” in their report). An
          outstanding example of the result of this imbalance is {' '}
          <a href="https://www.washingtonpost.com/news/morning-mix/wp/2017/08/10/im-not-a-sexist-fired-google-engineer-stands-behind-controversial-memo/?utm_term=.1a40c146bf8c&amp;tid=a_inl">
            James “I’m not a sexist” Damore
          </a>
          , a former engineer at Google, who wrote a 10-page memo patiently
          explaining why women are biologically less capable of holding
          technology jobs.
        </p>

        <p>
          The industry is not new, and the public is only {' '}
          <a href="https://www.nytimes.com/interactive/2017/10/13/opinion/sunday/Silicon-Valley-Is-Not-Your-Friend.html">
            beginning to realize
          </a>{' '}
          its intentions are often not the best. It is run by privileged white
          men who don’t consider the side-effects of their products and actions.
          Facebook began after Mark Zuckerberg made a site, Facemash, letting
          Harvard students {' '}
          <a href="https://en.m.wikipedia.org/wiki/History_of_Facebook#FaceMash">
            rate the attractiveness of their fellow female classmates
          </a>
          . When Twitter began, its founders wanted to create a paradise of free
          speech (as one {' '}
          <a href="https://www.goodreads.com/book/show/18296144-things-a-little-bird-told-me">
            wrote in his book
          </a>
          , they genuinely wanted to change the world for the better). As their
          platform became overrun with Nazis and trolls, they tried to profit.
          As Mike Monteiro {' '}
          <a href="https://medium.com/@monteiro/one-persons-history-of-twitter-from-beginning-to-end-5b41abed6c20">
            recently wrote
          </a>
          : “With their investors demanding growth, and their leadership blind
          to the bomb they were sitting on, Twitter decided that the audience
          Trump was bringing them was more important than upholding their core
          principles, their ethics, and their own terms of service.” Do we want
          to live in a world where Uber {' '}
          <a href="https://m.signalvnoise.com/exponential-growth-devours-and-corrupts-c5562fbf131">
            flies drones above cars in traffic
          </a>{' '}
          to promote their services? Do we want {' '}
          <a href="https://www.theatlantic.com/technology/archive/2017/10/what-facebook-did/542502/">
            Facebook to influence our elections
          </a>
          ? We can choose to regulate these companies,{' '}
          <a href="https://www.buzzfeed.com/bensmith/theres-blood-in-the-water-in-silicon-valley?utm_term=.nfPJ0YbEm#.ooy7pPQE2">
            as Ben Smith wrote
          </a>
          , or continue an ongoing march towards a technocracy. And as long as
          the tech industry itself is ruled by white men building products to {' '}
          <a href="https://www.theatlantic.com/magazine/archive/2017/09/has-the-smartphone-destroyed-a-generation/534198/">
            addict as many millions as possible
          </a>
          , it is clear the white technocracy will not make a great future.
        </p>
        <p>
          <Jump href="#jump">Return to essay ⤴</Jump>
        </p>
      </AsideArticle>
    </Aside>
    <Footer>Made with ♥️ by Lachlan Campbell, 2017.</Footer>
  </Provider>
)

export default App
