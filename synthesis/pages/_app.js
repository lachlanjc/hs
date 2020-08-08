import '../public/fonts.css'
import Head from 'next/head'

const description = 'A starter guide for young people to take back the power.'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Good Morning</title>
      <meta name="description" content={description} />
      <meta property="twitter:site" content="@lachlanjc" />
      <meta property="og:type" content="website" />
      <meta
        propetty="og:url"
        content="https://hs.lachlanjc.vercel.app/synthesis"
      />
      <meta property="og:title" content="Good Morning" />
      <meta property="og:description" content={description} />
      <meta name="theme-color" content="#bd10e0" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
