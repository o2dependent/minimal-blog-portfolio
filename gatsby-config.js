require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Ethan Olsen Development`,
    siteUrl: `https://www.eolsen.dev`,
    description: `Ethan Olsen's web development portfolio. React, Gatsby, CSS tips and more.`,
    author: `Ethan Olsen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/pages/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Dark+ (default dark)", // Or install your favorite theme from GitHub
            },
          },
        ],
        defaultLayouts: {
          projects: require.resolve(
            "./src/components/mdxLayouts/ProjectsLayout.js"
          ),
          posts: require.resolve("./src/components/mdxLayouts/PostsLayout.js"),
          default: require.resolve(
            "./src/components/mdxLayouts/DefaultLayout.js"
          ),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ethan Olsen Dev`,
        short_name: `EO Dev`,
        start_url: `/`,
        background_color: `#101319`,
        theme_color: `#101319`,
        display: `standalone`,
        icon: `src/images/eolsen-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-KC0ZV002BG"],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
