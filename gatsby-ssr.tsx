import * as React from 'react'
import { AnimatePresence } from 'framer-motion'
import type { GatsbySSR } from 'gatsby'
import { Partytown } from '@builder.io/partytown/react'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return <AnimatePresence wait>{element}</AnimatePresence>
}

const ORIGIN = 'https://www.googletagmanager.com'
const GATSBY_GA_MEASUREMENT_ID = 'GTM-PSZS4JD'

export function onRenderBody({ setHeadComponents, setHtmlAttributes }) {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') return null
  setHtmlAttributes({ lang: 'en' })
  setHeadComponents([
    <Partytown key="partytown" forward={['gtag']} />,
    <script key="google-analytics" type="text/partytown" src={`${ORIGIN}/gtag/js?id=${GATSBY_GA_MEASUREMENT_ID}`} />,
    <script
      key="google-analytics-config"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date()); 
        gtag('config', '${GATSBY_GA_MEASUREMENT_ID}', { send_page_view: false })`,
      }}
    />,
  ])
}
