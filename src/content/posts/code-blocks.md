---
template: blog-post
title: Code Blocks
path: /posts/code-blocks
date: 2021-11-11 08:40
description: Post with no image
category: code
tags: [code, prismjs]
featuredImage: ../../../static/assets/blog.jpg
---

## Code Blocks

Hello with Code Blocks.

Add to you blog-post.js template or globally in gatsby-browser.js

```bash
require('prismjs')
require("prismjs/themes/prism-okaidia.css")
```

### Add Gatsby elasticlunr Search

```javascript{1,3}:title=Elasticlunr
  {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index, Add Featured Image to fields and in Markdown below to index images
        fields: [`title`, `description`, `content`, `path`, `date`],
        // How to resolve each field`s value for a supported node type, description could replace content for a logical search display
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
