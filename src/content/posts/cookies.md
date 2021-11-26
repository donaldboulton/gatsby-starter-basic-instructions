---
template: blog-post
title: Cookies Consent Gdpr
path: /posts/cookies
date: 2021-11-15 12:37
description: How-to setup GDPR cookie consent with Gatsby
tags: [cookies, gdpr]
category: code  
featuredImage: ../../../static/assets/cookies.jpg
---

## How-to setup GDPR cookie consent with Gatsby

Cookie Consent without External Scripts Dated: January 26, 2020

[By Bojan Bedrač](https://www.improvebadcode.com/gatsby-gdpr-cookie-consent/)

[Stackoverflow Explanation](https://stackoverflow.com/questions/59860068/how-set-up-a-gatsby-cookie-consent-banner-with-gatsby-plugin-gdpr-cookies/59922277#59922277)

General Data Protection Regulation (GDPR) imposes a couple of requirements on websites in regard to collecting and processing user data.

Simple tracking solutions like Google Analytics or Facebook Pixel can only be used in compliance when the users agree with their visits and actions being tracked.

To make your Gatsby site compliant there are two parts you need to implement.

Allow or prevent user data to be collected based on user choice.
Give the user a choice to opt-in or opt-out to have their data collected.

### CONTROL WHEN USERS DATA IS COLLECTED

To be compliant with GDPR, no user data can be collected unless the user gave an explicit consent. When it comes to tracking scripts that means the scripts can’t be activated before the user gives the consent.

A convenient Gatsby plugin takes care of this part. The gatsby-plugin-gdpr-cookies checks for two cookies that control if Google Analytics or Facebook Pixel scripts should be activated.

The cookies are named after the scripts gatsby-gdpr-google-analytics and gatsby-gdpr-facebook-pixel. When these cookies value is true the scripts are activated.

You can install the plugin using npm:

```bash
npm install --save gatsby-plugin-gdpr-cookies
```

To configure the plugin put the configuration in your gatsby-config.js:

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-00000000-1', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        googleTagManager: {
          trackingId: 'GTM-00000', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        tikTokPixel: {
          pixelId: 'YOUR_TIKTOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-tiktok-pixel', // default
        },
        hotjar: {
          hjid: 'YOUR_HOTJAR_ID',
          hjsv: 'YOUR_HOTJAR_SNIPPET_VERSION',
          cookieName: 'gatsby-gdpr-hotjar', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
  ],
};
```

### COLLECT USER CONSENT

Giving the user a way to give consent for their data to be collected can be done by building your own form and setting the cookies (gatsby-gdpr-google-analytics and gatsby-gdpr-facebook-pixel).

If you’re using React in your Gatsby site, you can opt for a ready made solution react-cookie-consent.

The React component comes packaged in an npm module, so you can add it to your project by running:

```bash
npm install --save react-cookie-consent
```

[Configuration](https://github.com/Mastermindzh/react-cookie-consent)

After that add the component in your layout.js file or wherever you define your layout. It’s important that the component is loaded on any page so the consent can be collected regardless of the entry page.

```javascript
import CookieConsent from 'react-cookie-consent';

<CookieConsent
    location="bottom"
    buttonText="Accept"
    declineButtonText="Decline"
    cookieName="gatsby-gdpr-google-analytics">
    This site uses cookies ...
</CookieConsent>
```

Or Taylor it to you needs

```javascript
  <CookieConsent
    enableDeclineButton 
    flipButtons
    location="bottom"
    buttonText="Accept"
    declineButtonText="Decline"
    cookieName="gatsby-gdpr-google-analytics"
    style={{
      background: "linear-gradient(to right, orange, yellow, green, cyan, blue, violet)",
      textShadow: "2px 2px black",
    }}
    buttonStyle={{
      background: "linear-gradient(to left, orange, yellow, green, cyan, blue, violet)",
      color: "white",
      fontWeight: "bolder",
      borderRadius: '3px',
      textShadow: "2px 2px black",
    }}
  >
    This website uses cookies for user experience.{" "}
    <span style={{ fontSize: "10px" }}><Link to='/privacy' alt='Privacy Page' area-label="Privacy">Privacy Page</Link></span>
  </CookieConsent>
```

The important part is to set the cookieName prop to the value of the cookie you want to set (e.g.: gatsby-gdpr-google-analytics).

There are many props to configure the components behavior and appearance.

Quick tip When you want to set both cookies with one action, you can hook into the flow by using the onAccept and onDecline callbacks. You can set the cookies yourself by importing the Cookies (from js-cookie) like this:

```bash
import CookieConsent, { Cookies } from "react-cookie-consent";
```

Hopefully this helped you making your Gatsby site GDPR compliant.

Cookie's Explained In this sites [Privacy Page](/privacy#Cookies-And-Beacons)