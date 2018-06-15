require('isomorphic-fetch')
const _ = require('lodash')
const size = require('http-image-size')
const fs = require('fs')
const pMap = require('p-map')
const pWaterfall = require('p-waterfall')

const items = {
  'without-gender': {
    internalUrl: 'without-gender',
    title: 'My life without gender by Tyler Ford',
    link:
      'https://www.theguardian.com/world/2015/aug/07/my-life-without-gender-strangers-are-desperate-to-know-what-genitalia-i-have',
    width: 1200,
    height: 630
  },
  'coming-of-age': {
    internalUrl: 'coming-of-age',
    title:
      'In Coming-Of-Age Movies, Not Everyone Can Afford To Find Themselves',
    link:
      'https://www.buzzfeed.com/geoffnelson/not-everyone-can-afford-to-find-themselves',
    width: 1245,
    height: 651
  },
  'femme-simon': {
    internalUrl: 'femme-simon',
    title: 'The Gay Men We See on Screen',
    link:
      'https://www.nytimes.com/2018/03/28/opinion/love-simon-gay-femme-hollywood.html',
    width: 1050,
    height: 550
  },
  'only-a-beer': {
    internalUrl: 'only-a-beer',
    title: '‘It’s only a beer’: the unwritten contracts between men and women',
    link:
      'https://www.theguardian.com/lifeandstyle/2018/may/29/its-only-a-beer-the-unwritten-contracts-between-men-and-women',
    src:
      'https://i.guim.co.uk/img/media/f7a68596b08817fba8da8d025e369067c6083591/0_0_3300_2336/master/3300.jpg?w=1920&q=55&auto=format&usm=12&fit=max&s=c6bb335764b22bd22280e47449b3109a',
    width: 1200,
    height: 630
  }
}

const getLinkPreviewFromUrl = url =>
  fetch(`https://links.spectrum.chat/?url=${url}`)
    .then(res => res.json())
    .catch(err => {
      console.error('Error getting link data: ', err)
    })

const addImage = async item => {
  const meta = await fetch(`https://links.spectrum.chat/?url=${item.link}`)
    .then(res => res.json())
    .catch(err => {
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
  // console.log(JSON.stringify(item))
  return item
}

pMap(_.values(items), addImage).then(list => {
  const script = `
const sortOrder = ${JSON.stringify(_.map(list, 'internalUrl'))}

const mapping = ${JSON.stringify(items)}

module.exports = { sortOrder, mapping }
`

  fs.writeFile('./showcase-manifest.js', script, () => {
    console.log('done!')
  })
})
