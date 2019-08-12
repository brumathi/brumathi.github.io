module.exports = {
  siteMetadata: {
    title: `Brumathi`,
    authors: {
      'bcfurtado': {
        avatar: 'https://avatars0.githubusercontent.com/u/1187535?s=460&v=4',
        name: `Bruno Furtado`,
        description: `Bruno should edit this`
      },
      'mauriciovieira': {
        avatar: 'https://avatars2.githubusercontent.com/u/95258?s=460&v=4',
        name: `Mauricio Vieira`,
        shortBio: `lives in Salvador and owns omnicode.solutions`
      },
      'thicolares': {
        avatar: 'https://avatars3.githubusercontent.com/u/849493?s=460&v=4',
        name: `Thiago Colares`,
        description: `Thiago should edit this`
      }
    },
    description: `Our group blog.`,
    siteUrl: `https://brumathi.github.io/`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
