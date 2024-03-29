import type { GatsbyConfig } from 'gatsby'
const settings = require('./src/util/site.json')

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Basic Instructions`,
    author: {
      name: `Don Boulton`,
      summary: `Resides in OKC.`,
    },
    description: `Basic Instructions`,
    siteUrl: `https://gatsbystarterbasicinstructions.gatsbyjs.io`,
    siteImage: `/assets/apple-touch-icon.png`,
    social: {
      twitter: `donboulton`,
    },
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          '/*': ['Cache-Control: public, max-age=31536000, immutable'],
          '/static/*': ['Cache-Control: public, max-age=31536000, immutable'],
        },
        allPageHeaders: [
          'Strict-Transport-Security: max-age=31536000; preload',
          'X-Robots-Tag: index',
          'X-Frame-Options: DENY',
          'X-XSS-Protection: 1; mode=block',
          'X-Content-Type-Options: nosniff',
          'Referrer-Policy: same-origin',
          'Access-Control-Allow-Origin: https://gatsbystarterbasicinstructions.gatsbyjs.io/, https://utteranc.es/client.js',
          'Access-Control-Allow-Methods: POST; GET; PUT; DELETE; HEAD',
        ],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers, path) => headers,
        generateMatchPathRewrites: true,
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
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
              ratio: 1.77,
              height: 400,
              related: false, 
              noIframeBorder: true, 
              loadingStrategy: 'lazy',
              containerClass: 'embedVideo-container',
              iframeId: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              backgroundColor: 'none',
              disableBgImage: true,
              withWebp: true,
              loading: 'lazy',
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
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              escapeEntities: {},
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
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
                  custom_elements: [{ 'content:encoded': node.html }],
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
            output: '/rss.xml',
            title: 'Gatsby Starter Blog RSS Feed',
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
        icon: 'static' + settings.meta.iconimage,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`, `description`, `content`, `path`, `date`],
        resolvers: {
          BlogPost: {
            title: node => node.title,
            description: node => node.description,
            content: node => node.rawMarkdownBody,
            path: node => node.slug,
            date: node => node.date,
            featuredImage: (node, getNode) => getNode(node.featuredImage___NODE),
          },
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            content: node => node.rawMarkdownBody,
            path: node => node.frontmatter.path,
            date: node => node.frontmatter.date,
          },
        },
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
        duration: 1000,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        analyzerPort: '3001',
        analyzerHost: 'https://gatsbystarterbasicinstructions.gatsbyjs.io',
        defaultSizes: 'gzip',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `about`, `/contact`, `/posts/*`],
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
      },
    },
  ],
}

export default config
