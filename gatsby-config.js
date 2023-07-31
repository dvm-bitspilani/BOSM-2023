/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `BOSM '23 | The Roar of Resilience`,
    siteUrl: `https://bosm-2023.netlify.app`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",'gatsby-plugin-react-css-modules', {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
      "G-CJR8559EZR", // Google Analytics / GA
      ],
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true
      },
    },
  }
]
  
};