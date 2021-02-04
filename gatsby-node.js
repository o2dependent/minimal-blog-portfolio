const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const { data } = await graphql(
    `
      query {
        BlogPosts: allDatoCmsBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
        Projects: allDatoCmsProjectPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
  // Handle error
  if (data.errors) {
    reporter.panicOnBuild(`Error while fetching BlogData`)
    return
  }
  // build blog pages
  const blogTemplate = path.resolve(`./src/templates/BlogTemplate.js`)
  data.BlogPosts.edges.forEach(({ node }) => {
    const path = `/posts/${node.slug}`
    createPage({
      path,
      component: blogTemplate,
      context: {
        id: node.id,
      },
    })
  })
  // build project pages
  const projectTemplate = path.resolve(`./src/templates/ProjectTemplate.js`)
  data.Projects.edges.forEach(({ node }) => {
    const path = `/projects/${node.slug}`
    createPage({
      path,
      component: projectTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
