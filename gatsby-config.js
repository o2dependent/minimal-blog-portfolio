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
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-KC0ZV002BG", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
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
