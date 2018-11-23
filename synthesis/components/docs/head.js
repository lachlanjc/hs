import Head from 'next/head'

export default ({ children, ...props }) => (
  <Head>
    <title>{`${props.title} – Good Morning`}</title>
    <meta
      name="twitter:card"
      content={props.image ? 'summary_large_image' : 'summary'}
    />
    <meta name="twitter:site" content="@lachlanjc" />
    <meta name="og:title" content={props.title} />
    <meta name="description" content={props.description} />
    <meta name="og:description" content={props.description} />
    {children}
  </Head>
)
