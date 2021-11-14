> **Update** Basic Instructions is now built with Gatsby V4 "4.1.4", this includes many performance with Latest Gatsby!

GatsbyJS Version 4.1.4 with all the latest modules from npm.

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
  Gatsby's Starter Basic Instructions
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
- Blog Posts Tags
- Customize theme color from CMS
- Search bar
- Customize content of Homepage, About and Contact page.
- Add / Modify / Delete blog posts.
- Edit website settings, Add Google Analytics and make it your own all with in the CMS.
- SEO Optimized
- Social media icons
- OpenGraph structured data
- Twitter Cards meta
- Beautiful XML Sitemaps
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

- Goto app.netlify.com > select your website from the list
- Goto identity and Click **Enable Identiy**
- Click on **Invite Users** and invite yourself. You will receive an email and you need to accept the invitation to set the password.
- Now headover to Settings > Identity > Services and **Enable Git Gateway**
- You can also manage who can register and log in to your CMS. Goto Settings > Identity > Registration >Registration Preferences. I would prefer to keep it to **Invite Only**, if i am the only one using it.
- Now, goto to **site-name.netlify.app/admin/**, and login with your credentials.

## ⛭ Installation of CMS

> gatsby-plugin-netlify-cms Version 6.1.0

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

Add to folder under src/cms/cms.js

```js
import CMS from "netlify-cms-app"

export default {
  CMS,
}
```

### The Configuration file

Change /static/admin/config.yml file to your site needs. 

> Otherwise its tailored for this Configuration!

* * *

## 📝 Editing content and Adding posts

Once you are in your Netlify CMS, you can navigate to Posts and Pages. Here you will find a list of existing pages and posts.

You can select any existing post or page to start editing or add a **New Post**. Have fun :)

## ⚙ Customize Site details

You can find all the website settings such website Site title, Website URL, Google anlaytics etc,.. in your Netlify CMS `Admin > Settings > General`

## 🌐 Adding Custom domain to netlify website

We have written a short article on [Custom domain with Netlify website](custom-domain)

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

Open the `gatsby-starter-foundation` directory in your code editor of choice and edit. Save your changes and the browser will update in real time!

You can use Netlify CMS in you local just run `npx netlify-cms-proxy-server` and start run `gatsby develop`

## 🙏 Thank you

We really appreciate you taking time to build your website with our `gatsby-starter-basic-instructions`.

I would love to get your feedback and contributions.

Feel free to ping [@donaldboulton](donaldboulton) for help regarding your JAMstack website, our DM's are open. And do not forget to share you website with me 😊

[gatsby]: https://gatsbyjs.org
[netlifycms]: https://www.netlifycms.org
[stackrole]: https://stackrole.com
[twitter]: https://twitter.com/donboulton
