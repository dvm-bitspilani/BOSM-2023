/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `BOSM '23 | The Roar of Resilience`,
    siteUrl: `https://bitsbosm.org`,
    description: `Get ready for the ultimate showdown of collegiate sports excellence at the 36th edition of BITS Open Sports Meet (BOSM '23)! Join us from September 22nd to 26th as top college teams from across the nation go head-to-head, showcasing their skills and determination on the grandest stage.`,
    keywords: `bits sports fest, bosm, bosm 2023, bits fest, bits pilani fest, bits, bits pilani, bits pilani pilani campus, bppc, 2023`,
    image: `src/images/icon.png`,
  },
  plugins: [
    "swiper",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-css-modules",
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAJHUIfulE-WbODAYqfNh5iTeU2cLDdz5I",
          authDomain: "bosm23-e7b78.firebaseapp.com",
          projectId: "bosm23-e7b78",
          storageBucket: "bosm23-e7b78.appspot.com",
          messagingSenderId: "915516325620",
          appId: "1:915516325620:web:18b1a1519e3282b8d3e8a1",
        },
        features: {
          auth: true, // Enable authentication features
          firestore: true, // Enable Firestore
          storage: true, // Enable Firebase Storage
          // analytics: false, // You can enable/disable analytics as needed
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`, // Use __dirname to get the correct path
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-CJR8559EZR", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true, // Puts tracking script in the head instead of the body
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png", // Fix the icon path
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
  ],
};
