> **Update** [Basic Instructions Hosted on Gatsby Cloud](https://gatsbystarterbasicinstructions.gatsbyjs.io/) is now built with Gatsby V4 "4.2.0", this includes many performance updates with Latest Gatsby!

GatsbyJS Version @latest with all the @latest modules from npm.

[![npm version](https://badge.fury.io/js/gatsby.svg)](https://badge.fury.io/js/gatsby) 

gatsby-plugin-image With the Plugins proper usage.

* * *

# Basic Instructions is Based on Starter Foundation

<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Basic Instructions
</h1>

Kick off your project with this blog boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the blog starter.

    ```shell
    # create a new Gatsby site using the blog starter
    gatsby new my-blog-starter https://github.com/donaldboulton/gatsby-starter-basic-instructions
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-blog-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    Open the `my-blog-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-blog)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── yarn-lock
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

## 👌 Features

- A Blog and Personal website with Netlify CMS.
- Responsive Web Design
- Using Theme-Ui for structure and styles
- Dark / Light Mode
- Blog Posts Tags Pages with a added component
- Blog Posts Categories Pages with a added component
- Using Remark-Rehype to add Html or Modules to Blog Posts Markdown Pages
- Customize theme color from CMS
- Search bar
- Customize content of Homepage, About and Contact page.
- Add / Modify / Delete blog posts.
- Edit website settings, Add Google Analytics and make it your own all with in the CMS.
- SEO Optimized
- Social media icons
- OpenGraph structured data
- Twitter Cards meta
- Beautiful XML Sitemaps, for now hand built
- Robots.txt
- Netlify Contact Form, Works right out of the box after deployment.
- Invite collaborators into Netlify CMS, without giving access to your Github account via Git Gateway
- Gatsby Incremental Builds with Netlify.
- Images with gatsby-plugin-image

## 🚀 Quick Deploy

Just click on the **Deploy to Netlify** button.

This would fork `gatsby-starter-basic-instructions` to your Github account and start building your website on [Netlify](https://netlify.com). Once the deployment is done. Your website will be live and website address would look like **site-name.netlify.app**

### Further Instructions

- [Access to Netlify CMS](#access-to-netlify-cms)
- [Editing content and Adding posts](#editing-content-and-adding-posts)
- [Customing Site details](#customing-site-details)
- [Adding Custom domain to netlify website](#adding-custom-domain-to-netlify-website)
- [Install Locally](#install-locally)
- [Folder Structure](#folder-structure)
- [Learning Gatsby](#learning-gatsby)
- [Thank you from Basic Instructions](#thank-you)

## ⚙ Access to Netlify CMS

### Will not work on Gatsby Cloud

- Install Below
- Goto app.netlify.com > select your website from the list
- Goto identity and Click **Enable Identiy**
- Click on **Invite Users** and invite yourself. You will receive an email and you need to accept the invitation to set the password.
- Now headover to Settings > Identity > Services and **Enable Git Gateway**
- You can also manage who can register and log in to your CMS. Goto Settings > Identity > Registration >Registration Preferences. I would prefer to keep it to **Invite Only**, if i am the only one using it.
- Now, goto to **site-name.netlify.app/admin/**, and login with your credentials.

## ⛭ Installation of CMS

> gatsby-plugin-netlify-cms Version @latest

> netlify-cms-app Version @latest

```bash
yarn add gatsby-plugin-netlify-cms netlify-cms-app gatsby-plugin-netlify-cms-paths
```

### gatsby.config file add

```bash
{
  resolve: 'gatsby-plugin-netlify-cms',
  options: {
    modulePath: `${__dirname}/src/cms/cms.js`,
  },
},
```

### CMS file in src/cms

Add to initialize **netlify-cms-app** as a folder under src/cms/cms.js

```js
import CMS from "netlify-cms-app"

export default {
  CMS,
}
```

### The Configuration file

Change /static/admin/config.yml file to your site needs. 

> Otherwise its tailored for this Configuration!

#### Config.yml

```bash
backend:
  name: git-gateway
  branch: main
  commit_messages:
    create: "Create {{collection}} “{{slug}}”"
    update: "Update {{collection}} “{{slug}}”"
    delete: "Delete {{collection}} “{{slug}}”"
    uploadMedia: "[skip ci] Upload “{{path}}”"
    deleteMedia: "[skip ci] Delete “{{path}}”"

# Uncomment local_backend when you need to develop in your local
local_backend: true # run npx netlify-cms-proxy-server for local testing

media_folder: "static/assets"
public_folder: "/assets"

collections:
  - name: "posts" # Used in routes, ie.: /admin/collections/:slug/edit
    label: "Posts" # Used in the UI
    label_singular: "Post" # Used in the UI, ie: "New Post"
    description: >
      Create awesome content here.
    folder: "src/content/posts"
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    summary: "{{title}} — {{year}}/{{month}}/{{day}}"
    create: true # Allow users to create new documents in this collection
    fields: # The fields each document in this collection have
      - {
          label: "Template",
          name: "template",
          widget: "hidden",
          default: "blog-post",
        }
      - { label: "Title", name: "title", widget: "string", tagname: "h1" }
      - {
          label: "Path",
          name: "path",
          widget: "string",
          hint: "Start path with /. Use only alphanumeric characters, - and _. Avoid spaces in any cases.",
        }
      - {
          label: "Publish Date",
          name: "date",
          widget: "datetime",
          dateFormat: "YYYY-MM-DD",
          timeFormat: "HH:mm",
          format: "YYYY-MM-DD HH:mm",
        }
      - { label: "SEO Description", name: "description", widget: "text" }
      - { label: "Tags", name: "tags", widget: "text" }
      - {
          label: "Featured Image",
          name: "featuredImage",
          widget: "image",
          required: false,
          tagname: "",
        }

      - {
          label: "Body",
          name: "body",
          widget: "markdown",
          hint: "Main content goes here.",
        }
  - label: "Pages"
    name: "pages"
    files:
      - label: "Home"
        name: "home"
        file: "src/content/pages/index.md"
        fields:
          - {
              label: "Template",
              name: "template",
              widget: "hidden",
              default: "index-page",
            }
          - { label: "Path", name: "path", widget: "hidden", default: "/" }
          - { label: "Title", name: "title", widget: "string" }
          - { label: "Tagline", name: "tagline", widget: "string" }
          - { label: "Featured Image", name: "featuredImage", widget: "image" }
          - { label: "Body", name: "body", widget: "markdown" }
          - label: "CTA"
            name: "cta"
            widget: "object"
            fields:
              - name: "ctaText"
                label: "CTA text"
                widget: "string"
              - name: "ctaLink"
                label: "CTA Link"
                widget: "string"
      - label: "About"
        name: "about"
        file: "src/content/pages/about.md"
        fields:
          - {
              label: "Template",
              name: "template",
              widget: "hidden",
              default: "about-page",
            }
          - { label: "Path", name: "path", widget: "hidden", default: "/about" }
          - { label: "Title", name: "title", widget: "string" }
          - { label: "Featured Image", name: "featuredImage", widget: "image" }
          - { label: "Body", name: "body", widget: "markdown" }
      - label: "Contact"
        name: "contact"
        file: "src/content/pages/contact.md"
        fields:
          - {
              label: "Template",
              name: "template",
              widget: "hidden",
              default: "contact-page",
            }
          - {
              label: "Path",
              name: "path",
              widget: "hidden",
              default: "/contact",
            }
          - { label: "Title", name: "title", widget: "string" }
          - { label: "Featured Image", name: "featuredImage", widget: "image" }
          - { label: "Body", name: "body", widget: "markdown" }
  - name: settings
    label: Settings
    files:
      - name: general
        label: General
        file: "src/util/site.json"
        fields:
          - label: meta
            name: meta
            widget: object
            fields:
              - widget: string
                name: title
                label: Site Title
                required: true
              - widget: string
                name: titleTemplate
                label: Title Template
                default: "%s"
                required: true
              - widget: string
                name: siteUrl
                label: Website URL
                required: true
              - widget: text
                name: description
                label: Description
                default: ""
                required: false
              - widget: image
                name: image
                label: image
                default: "/assets/stackrole.png"
              - widget: image
                name: iconimage
                label: favicon
              - widget: string
                name: twitterUsername
                label: Twitter
                required: false

          - label: "Google Analytics"
            name: ga
            widget: string
            hint: "Add you tracking ID, for example UA-XXXXXXXXX-X"
      - label: Social Icons
        name: socialIcons
        file: "src/util/socialmedia.json"
        fields:
          - label: Social Icons
            name: socialIcons
            widget: list
            collapsed: true
            hint: "Here you can add social icons, Click on 'Add social icons'"
            fields:
              - label: "Icons"
                name: "icon"
                widget: "select"
                options:
                  [
                    "facebook",
                    "twitter",
                    "linkedin",
                    "youtube",
                    "instagram",
                    "rss",
                    "github",                  
                  ]
                hint: "Select the Icon"
              - widget: string
                name: url
                label: url
                required: true
                hint: "Paste the 'URL' of your Social media"

  - label: "Appearance"
    name: "appearance"
    identifier_field: "name"
    files:
      - label: "Default Theme"
        name: "themescolors"
        file: "src/util/default-colors.json"
        fields:
          - label: "Primary Color"
            name: "siteColor"
            widget: "color"
            enableAlpha: true
            allowInput: true
      - label: "Dark Theme"
        name: "darkthemescolors"
        file: "src/util/dark-theme-colors.json"
        fields:
          - label: "Primary Color"
            name: "siteColor"
            widget: "color"
            enableAlpha: true
            allowInput: true

```

* * *

## 📝 Editing content and Adding posts

Once you are in your Netlify CMS, you can navigate to Posts and Pages. Here you will find a list of existing pages and posts.

You can select any existing post or page to start editing or add a **New Post**. Have fun :)

## ⚙ Customize Site details

You can find all the website settings such website Site title, Website URL, Google anlaytics etc,.. in your Netlify CMS `Admin > Settings > General`

## 🌐 Adding Custom domain to netlify website

Article on [Custom domain with a Netlify website](https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-a-records/)

## 🖥 Install Locally

Use the Gatsby CLI to create a new site, specifying the `gatsby-starter-basic-instructions` starter.

```bash
gatsby new gatsby-starter-basic-instructions https://github.com/donaldboulton/gatsby-starter-basic-instructions
```

> You need Node and Gatsby-CLI installed, check out Gatsby [Setup Instructions](https://www.gatsbyjs.org/tutorial/part-zero/)

### Start developing

Navigate into your new site’s directory and start it up.

```shell
cd my-hello-world-starter/
gatsby develop
```

**Open the source code and start editing!**

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

Open the `gatsby-starter-basic-instructions` directory in your code editor of choice and edit. Save your changes and the browser will update in real time!

You can use Netlify CMS in you local just run `npx netlify-cms-proxy-server` and start run `gatsby develop`

## 🙏 Thank you

We really appreciate you taking time to build your website with our `gatsby-starter-basic-instructions`.

I would love to get your feedback and contributions.

Feel free to ping [@donaldboulton](donaldboulton) for help regarding your JAMstack website, our DM's are open. And do not forget to share your website with me 😊

[gatsby]: https://gatsbyjs.org
[netlifycms]: https://www.netlifycms.org
[publiuslogic]: https://publiuslogic.com
[twitter]: https://twitter.com/donboulton
