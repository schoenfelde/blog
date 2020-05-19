module.exports = {
  siteMetadata: {
    title: `Elliot Schoenfeld`,
    description: `I am a person who wants to be a better story teller and writer, so I will be putting my thoughts and stories here.`,
    keywords: [`writer`, `traveller`, `engineer`, `travel`],
    author: `Elliot Schoenfeld`,
    siteUrl: `https://pizzadevs.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `About`,
        link: `/about`,
        type: `internal`, //internal or anchor
      },
      //      {
      //        name: `Anchor 1`,
      //        link: `#anchor-1`,
      //        type: `anchor`, //internal or anchor
      //      },
      //      {
      //        name: `Page 2`,
      //        link: `/page-2`,
      //        type: `internal`, //internal or anchor
      //        subMenu: [
      //          {
      //            name: `Sub 1`,
      //            link: `/sub-1`,
      //            type: `internal`, //internal or anchor
      //          },
      //          {
      //            name: `Sub 2`,
      //            link: `/sub-2`,
      //            type: `internal`, //internal or anchor
      //          },
      //        ],
      //      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `elliot@ollieware.com`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Youtube`,
        link: `https://youtube.com/channel/UCeDS7zMtJG_b-vkUiENUQig`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Instagram`,
        link: `https://www.instagram.com/schoenfelde`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/schoenfelde`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        //Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // displaySiteLogo: true,
        // displaySiteTitle: true,
        // displaySiteLogoMobile: true,
        // displaySiteTitleMobile: true,
        // invertLogo: false,
        // useStickyHeader: false,
        // useSocialLinks: true,
        // useColorMode: true,
        // footerContentLocation: "left", // "left", "right", "center"
        // remarkImagesWidth: 1440,
      },
    },
    `gatsby-theme-catalyst-header-side`, // Try `gatsby-theme-catalyst-header-side`
    `gatsby-theme-catalyst-footer`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
