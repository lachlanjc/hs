require('isomorphic-fetch')
const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const getLinkPreviewFromUrl = url =>
  fetch(`https://links.spectrum.chat/?url=${url}`)
    .then(res => res.json())
    .catch(err => {
      console.error('Error getting link data: ', err)
    })

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: _.kebabCase(node.frontmatter.name)
    })
    const { url } = node.frontmatter
    const meta = getLinkPreviewFromUrl(url)
    const { image, publisher, description } = meta
    createNodeField({ node, name: 'image', value: image })
    createNodeField({ node, name: 'publisher', value: publisher })
    createNodeField({ node, name: 'description', value: description })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const component = path.resolve('./src/templates/article.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1024) {
              edges {
                node {
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.id,
            component,
            context: { slug: edge.node.id }
          })
        })
      })
    )
  })
}
