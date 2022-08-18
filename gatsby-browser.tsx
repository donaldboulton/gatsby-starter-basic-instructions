import * as React from 'react'
import 'prismjs/themes/prism.css'
import { AnimatePresence } from 'framer-motion'

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
}

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm('This application has been updated. ' + 'Reload to display the latest version?')

  if (answer === true) {
    window.location.reload()
  }
}

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  const pagePath = location ? location.pathname + location.search + location.hash : undefined
  setTimeout(() => {
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', { page_path: pagePath })
    }
  }, 100)
}

export const shouldUpdateScroll = ({ routerProps: { location, transitionDelay }, getSavedScrollPosition }) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => {
      // console.log('scroll to top')
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // feel free to use or not
      })
    }, transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]
    const top = savedPosition[1]
    window.setTimeout(() => {
      // console.log('scroll to saved position')
      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }, transitionDelay)
  }
  return false
}
