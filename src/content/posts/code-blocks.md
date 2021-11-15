---
template: blog-post
title: Code Blocks
path: /posts/code-blocks
date: 2020-05-11 08:40
description: Post with no image
tags:
  - plant
  - desk
featuredImage: ../../images/blog.webp
---

## Code Blocks

Hello with Code Blocks.

Add to you blog-post.js template or globally in gatsby-browser.js

```javascript
require('prismjs')
require("prismjs/themes/prism-okaidia.css")
```

### Add Gatsby elasticlunr Search

```javascript{27,33}
  {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index Add Featured Image to fields and in Markdown below to index images
        fields: [`title`, `description`, `content`, `path`, `date`],
        // How to resolve each field`s value for a supported node type, excerpt could replace content for a smaller index
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
```
