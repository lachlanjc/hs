import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Next.js is a lightweight framework for static and server-rendered applications"
          />
          <meta
            property="twitter:card"
            content="https://nextjs.org/static/images/twitter_card.png"
          />
          <meta property="twitter:site" content="@zeithq" />
          <meta property="og:type" content="website" />
          <meta propetty="og:url" content="https://nextjs.org" />
          <meta property="og:title" content="Next.js" />
          <meta
            property="og:description"
            content="Next.js is a lightweight framework for static and server-rendered applications"
          />
          <meta
            property="og:image"
            content="https://nextjs.org/static/images/twitter_card.png"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicon/safari-pinned-tab.svg"
            color="#000000"
          />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta
            name="msapplication-config"
            content="/static/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#000" />
          <link rel="stylesheet" href="/static/fonts.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
