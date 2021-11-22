const settings = require("./src/util/site.json")

module.exports = {
  siteMetadata: {
    title: `Basic Instructions`,
    author: {
      name: `Don Boulton`,
      summary: `Resides in OKC.`,
    },
    description: `Basic Instructions.`,
    siteUrl: `https://gatsbystarterbasicinstructions.gtsb.io/`,
    social: {
      twitter: `donboulton`,
    },
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "/*": [
            "Cache-Control: public, max-age=2592000, immutable",
          ],
          "/static/*": [
            "Cache-Control: public, max-age=31536000, immutable",
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [
          "Link: <../../static/assets/logo.png>; rel=preload; as=image",
          "Strict-Transport-Security: max-age=31536000; preload",
          "X-Frame-Options: DENY",
          "X-XSS-Protection: 1; mode=block",
          "X-Content-Type-Options: nosniff",
          "Referrer-Policy: same-origin",
          "Access-Control-Allow-Origin: https://gatsbystarterbasicinstructions.gatsbyjs.io/, https://utteranc.es/client.js",
          "Access-Control-Allow-Methods: POST; GET; PUT; DELETE; HEAD",
          "Permissions-Policy: fullscreen=(self); autoplay=(self); picture-in-picture=(self)",
          "Content-Security-Policy: connect-src 'self' blob: https://gatsbystarterbasicinstructions.gatsbyjs.io/, https://utteranc.es/client.js, https://www.googletagmanager.com/gtag/js, https://stats.g.doubleclick.net/; form-action 'self': https://netlify.com, https://twitter.com, https://*.twitter.com, font-src 'self' blob: data: https://fonts.gstatic.com; frame-src 'self': https://www.google.com/ https://unpkg.com; img-src 'self' blob: data: https://img.badgesize.io/, https://referrer.disqus.com, https://img.shields.io, https://avatars0.githubusercontent.com, https://avatars1.githubusercontent.com, https://avatars2.githubusercontent.com, https://cdn.rawgit.com, https://withspectrum.github.io, https://api.netlify.com, https://widget.cloudinary.com, https://static.doubleclick.net, https://*.cdn.twitter.com, https://ton.twitter.com, https://*.twimg.com; manifest-src 'self'; media-src 'self' blob: https://res.cloudinary.com, https://widget.cloudinary.com, https://static.doubleclick.net, https://www.youtube.com, https://twitter.com, https://*.twimg.com, https://*.vine.co, https://*.giphy.com; object-src 'self' script-src 'self' 'unsafe-inline' 'unsafe-eval': https://api.bitbucket.org, https://secure.gravatar.com, https://graphql.fauna.com, https://graphql.fauna.com/graphql, https://api.applause-button.com, https://api.netlify.com, https://netlify.com, https://res.cloudinary.com, https://www.google-analytics.com, https://platform.slack-edge.com, https://static.doubleclick.net, https://www.youtube.com, https://www.youtube.de, https://twitter.com, https://*.twimg.com, https://www.google-analytics.com, https://www.googletagmanager.com; script-src-elem 'self' blob: 'unsafe-inline': https://www.google.com/recaptcha/api.js, https://storage.googleapis.com, https://github.com, https://cdn.lr-ingest.io, https://www.googletagmanager.com, https://www.google-analytics.com, https://api.netlify.com, https://app.logrocket.com, https://api.logrocket.com, https://c.disquscdn.com; style-src 'self' 'unsafe-inline' https://static.small.chat/messenger.css; worker-src 'self' blob: https://www.googletagmanager.com/gtag/js, https://storage.googleapis.com, https://www.google-analytics.com/analytics.js; report-uri https://donboulton.report-uri.com/r/d/csp/reportOnly" 
        ], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
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
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              backgroundColor: 'none',
              disableBgImage: true,
              withWebp: true,
              loading: "lazy",
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden='true' height='20' version='1.1' viewBox='0 0 16 16' width='20'><path fill='#777' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'></path></svg>`,
              className: `link-icon`,
              maintainCase: true,
              removeAccents: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
       resolve: `gatsby-plugin-google-analytics`,
       options: {
         trackingId: `UA-2378526-1`,
       },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Basic`,
        short_name: `Basic Instructions`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "static" + settings.meta.iconimage,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index Add Featured Image to fields and in Markdown below to index images
        fields: [`title`, `description`, `content`, `path`, `date`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          BlogPost : {
            title         : node => node.title,
            description   : node => node.description,
            content       : node => node.rawMarkdownBody,
            path          : node => node.slug,
            date          : node => node.date,
            featuredImage : (node, getNode) => getNode(node.featuredImage___NODE)
          },
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            content: node => node.rawMarkdownBody,
            path: node => node.frontmatter.path,
            date: node => node.frontmatter.date
          },
        },
      },
    },
    'gatsby-plugin-sass', 
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 1000
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/contact`, `/posts/*`],
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
      },
    },
  ],
}
