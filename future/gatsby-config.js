module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/years`,
        name: 'years'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-smartypants']
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components'
  ]
}
