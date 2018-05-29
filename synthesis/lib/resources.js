require('isomorphic-fetch')
const _ = require('lodash')
const size = require('http-image-size')
const fs = require('fs')

const items = {
  'without-gender': {
    title: 'My life without gender by Tyler Ford',
    link:
      'https://www.theguardian.com/world/2015/aug/07/my-life-without-gender-strangers-are-desperate-to-know-what-genitalia-i-have'
  },
  'coming-of-age': {
    title:
      'In Coming-Of-Age Movies, Not Everyone Can Afford To Find Themselves',
    link:
      'https://www.buzzfeed.com/geoffnelson/not-everyone-can-afford-to-find-themselves?utm_term=.yfPWmpMXr#.ypzG5nNMw'
  }
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const getLinkPreviewFromUrl = url =>
  fetch(`https://links.spectrum.chat/?url=${url}`)
    .then(res => res.json())
    .catch(err => {
      console.error('Error getting link data: ', err)
    })

Promise.all(
  _.values(items).map(async (item, i) => {
    item.internalUrl = Object.keys(items)[i]
    return await fetch(`https://links.spectrum.chat/?url=${item.link}`)
      .then(res => res.json())
      .then(({ image, publisher, description }) => {
        item.src = image
        return image
      })
      .then(src => {
        size(src, (err, dimensions, length) => {
          item.width = dimensions.width
          item.height = dimensions.height
        })
      })
      .catch(err => {
        console.error('Error getting link data: ', err)
      })
  })
).then(() => {
  const script = `const sortOrder = ${JSON.stringify(Object.keys(items))}

const mapping = ${JSON.stringify(items)}

module.exports = {
  sortOrder,
  mapping
}
`

  fs.writeFile('./showcase-manifest.js', script, () => {
    console.log('done!')
  })
})
