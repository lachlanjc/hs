import Document, { Head, Main, NextScript } from 'next/document'

const description = 'A starter guide for young people to take back the power.'

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Good Morning</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={description} />
          <meta property="twitter:site" content="@lachlanjc" />
          <meta property="og:type" content="website" />
          <meta
            propetty="og:url"
            content="https://lachlanjc-synthesis.now.sh"
          />
          <meta property="og:title" content="Good Morning" />
          <meta property="og:description" content={description} />
          <meta name="theme-color" content="#bd10e0" />
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
