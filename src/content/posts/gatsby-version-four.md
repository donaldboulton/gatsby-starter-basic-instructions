---
template: blog-post
title: Gatsby Version Four
path: /posts/gatsby-version-four
date: 2021-11-23 03:40
description: Gatsby Version Four with Server-Side Rendering
tags: [gatsby, starter]
category: code 
featuredImage: ../../../static/assets/gatsby-starter-rendering-modes-thumbnail-wide.jpg
---

## DEFERRED STATIC GENERATION (DSG)

> The performance of static sites without all of those long build times

![DSG](../../../static/assets/DSG_for_blog_article_and_G4_overview_page.jpg "Statically Generated Websites")

### Local DSG Example

[DSG Example Page](/dsg)

The benefits of statically generated websites - performance, security, reliability - are now available to websites of all shapes and sizes, giving teams a new way to build and deliver digital experiences at scale.

## SERVER-SIDE RENDERING (SSR)

> Request and render data at run-time with Gatsby

![SSR](../../../static/assets/SSR_for_blog_article_and_G4_overview_page.jpg "Render Data At Run-time")

### Local SSR Example

[SSR Example Page](/ssr)

Gatsby 4 now supports Server-Side Rendering, giving developers the choice of generating content at either build time, as with static-site generation, or at run time. With Server-Side Rendering, teams can now run more effective A/B tests, personalize content, and more all while still using the Gatsby framework.

## My Function SSR Page

Node fetch was killing this so to isomorphic-fetch, and it worked perfect.

Lowered my LightHouse Performance score from 99 to 95. It goes up and down???

![Gatsby Cloud Build Pic](../../../static/assets/ssr-dsg.jpg)

```javascript
import * as React from 'react'
import fetch from 'isomorphic-fetch'
import { Link } from 'gatsby'

function SSR (props) {
  const { image } = props.serverData

  return (    
    <>
      <div className="not-found-page">
        <div
          className="wrapper"
          style={{
            marginTop: "40px",
            alignText: "center"
          }}
        >
          <Link to='/posts/gatsby-version-four'>Back to Post</Link><br />
          <h1>SSR: Server Side Rendering</h1>
          <div>You Should See Doggies Below</div>
          <div>Refresh The Page for More Doggies</div>
          <div>
            <img
              alt='doggo'
              src={image}
            />
          </div>          
        </div>
      </div>
    </>
  )
}

export default SSR

export async function getServerData ({ params }) {
  const data = await fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())

  return {
    props: {
     // data has the shape of "message", "status" where message is the image src
      image: data.message
    }
  }
}
```

### Excerpt From Medium

[Medium by Eduardo Valencia](https://medium.com/@8025918/gatsby-4-using-ssr-and-dsg-14742eaecb66)

With static generation or deferred static generation, Gatsby builds the website’s files only once. With server-side rendering, however, a server builds each page each time the user visits it.

Server-side rendering is useful when your pages update frequently. For example, you might build an e-commerce application where products’ prices and descriptions update frequently. In Gatsby 4, you would have to rebuild the application each time you wanted to update the product data. 

In contrast, server-side rendering can rebuild the product page each time a user visits it, so the page will always show the latest product information. By using server-side rendering, you can update pages automatically without needing to rebuild your entire website.

> ## Build Output
>
> (SSG) Generated at build time ,
>
> > D (DSG) Deferred static generation - page generated at runtime 
>
> > ∞ (SSR) Server-side renders at runtime (uses getServerData) 
>
> > λ (Function) Gatsby function 

## 4 Cool Things You Can Build with Gatsby 4

`video: https://www.youtube.com/watch?v=9EX36Gtl89I`


[See More About Gatsby Version Four](https://www.gatsbyjs.com/gatsby-4/)
