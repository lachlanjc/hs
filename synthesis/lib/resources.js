require('isomorphic-fetch')
const _ = require('lodash')
const size = require('http-image-size')
const fs = require('fs')
const pMap = require('p-map')

const items = {
  'without-gender': {
    internalUrl: 'without-gender',
    title: 'My life without gender by Tyler Ford',
    link: 'https://www.theguardian.com/world/2015/aug/07/my-life-without-gender-strangers-are-desperate-to-know-what-genitalia-i-have',
    width: 1200,
    height: 630,
  },
  'coming-of-age': {
    internalUrl: 'coming-of-age',
    title:
      'In Coming-Of-Age Movies, Not Everyone Can Afford To Find Themselves',
    link: 'https://www.buzzfeed.com/geoffnelson/not-everyone-can-afford-to-find-themselves',
    width: 1245,
    height: 651,
  },
  'femme-simon': {
    internalUrl: 'femme-simon',
    title: 'The Gay Men We See on Screen',
    link: 'https://www.nytimes.com/2018/03/28/opinion/love-simon-gay-femme-hollywood.html',
    width: 1050,
    height: 550,
  },
  'only-a-beer': {
    internalUrl: 'only-a-beer',
    title: '‘It’s only a beer’: the unwritten contracts between men and women',
    link: 'https://www.theguardian.com/lifeandstyle/2018/may/29/its-only-a-beer-the-unwritten-contracts-between-men-and-women',
    src: 'https://i.guim.co.uk/img/media/f7a68596b08817fba8da8d025e369067c6083591/0_0_3300_2336/master/3300.jpg?w=1920&q=55&auto=format&usm=12&fit=max&s=c6bb335764b22bd22280e47449b3109a',
    width: 1200,
    height: 630,
  },
  'racism-in-america': {
    internalUrl: 'racism-in-america',
    title: 'Racism in America',
    link: 'https://www.nbcnews.com/think/opinion/everyday-racism-america-being-black-means-constantly-rendering-yourself-unthreatening-ncna878291',
    src: 'https://nodeassets.nbcnews.com/cdnassets/projects/socialshareimages-bento/og-nbcnews1200x630.png',
    width: 1200,
    height: 630,
  },
  'racism-in-advertising': {
    internalUrl: 'racism-in-advertising',
    title: 'Racism in American Advertising',
    link: 'https://twitter.com/i/moments/843154812434857984',
    src: 'https://pbs.twimg.com/media/C7N9hxgXkAEutnD.jpg',
    width: 450,
    height: 661,
  },
  'founded-on-supremacy': {
    internalUrl: 'founded-on-supremacy',
    title:
      'Stop saying this nation was founded on faith and freedom — it was founded on violence and white supremacy',
    link: 'http://www.nydailynews.com/news/national/king-stop-nation-founded-faith-freedom-article-1.3410178',
    src: 'http://www.nydailynews.com/resizer/HL5HM88iWw9dLxNqva6pMEi_41c=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/2EXJ57X54ZZZECRV3AAMASKFH4.jpg',
    width: 1200,
    height: 630,
  },
  'not-the-best-country': {
    internalUrl: 'not-the-best-country',
    title: 'Here’s why the United States is not the best country in the world ',
    link: 'http://www.nydailynews.com/news/national/king-united-states-not-best-country-world-article-1.3303665',
    src: 'http://www.nydailynews.com/resizer/ulUFxhJZl_Bb-MOTOVoKw9Ss_OE=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/V5SABXLENO5P3GL4KXUUG54HKU.jpg',
    width: 1200,
    height: 630,
  },
}

const addImage = async (item) => {
  const meta = await fetch(`https://links.spectrum.chat/?url=${item.link}`)
    .then((res) => res.json())
    .catch((err) => {
      console.error('Error getting link data: ', err)
    })
  const { image, publisher, description } = meta
  item.src = image
  if (!_.isEmpty(item.width)) {
    await size(item.src, (err, dimensions, length) => {
      item.width = dimensions.width
      item.height = dimensions.height
    })
  }
  return item
}

pMap(_.values(items), addImage).then((list) => {
  const script = `
const sortOrder = ${JSON.stringify(_.map(list, 'internalUrl'))}

const mapping = ${JSON.stringify(items)}

module.exports = { sortOrder, mapping }
`

  fs.writeFile('./showcase-manifest.js', script, () => {
    console.log('done!')
  })
})
