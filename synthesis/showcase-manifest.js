const sortOrder = ['without-gender', 'coming-of-age']

const mapping = {
  'without-gender': {
    title: 'My life without gender by Tyler Ford',
    link:
      'https://www.theguardian.com/world/2015/aug/07/my-life-without-gender-strangers-are-desperate-to-know-what-genitalia-i-have',
    internalUrl: 'without-gender',
    src:
      'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/8/7/1438969238511/075626f8-2ba7-4c67-85e2-cb6cd4a6f65f-2060x1236.jpeg?w=1200&h=630&q=55&auto=format&usm=12&fit=crop&crop=faces%2Centropy&bm=normal&ba=bottom%2Cleft&blend64=aHR0cHM6Ly91cGxvYWRzLmd1aW0uY28udWsvMjAxOC8wMS8zMS9mYWNlYm9va19kZWZhdWx0LnBuZw&s=7df1775f0641c43ae55126bdf0190df4'
  },
  'coming-of-age': {
    title:
      'In Coming-Of-Age Movies, Not Everyone Can Afford To Find Themselves',
    link:
      'https://www.buzzfeed.com/geoffnelson/not-everyone-can-afford-to-find-themselves?utm_term=.yfPWmpMXr#.ypzG5nNMw',
    internalUrl: 'coming-of-age',
    src:
      'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/27/13/asset/buzzfeed-prod-fastlane-02/sub-buzz-26613-1514398888-14.jpg?crop=1245:651;136,201'
  }
}

module.exports = {
  sortOrder,
  mapping
}
