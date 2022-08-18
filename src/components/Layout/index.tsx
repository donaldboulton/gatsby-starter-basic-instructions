/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import CookieConsent from 'react-cookie-consent'
import Scroll from '../Scroll'
import ScrollDown from '../ScrollDown'
import Header from '../Header'
import Logo from '../Logo'
import Navigation from '../Navigation'
import '../../assets/scss/style.scss'
import Footer from '../Footer'
import Theme from '../Theme'
import Search from '../Search'
import { SiGnuprivacyguard } from 'react-icons/si'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('../FramerFeatures').then(res => res.default)

interface LayoutProps {
  children: React.ReactNode
}
const query = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const Layout = ({ className, children, path }: LayoutProps) => {
  const { siteSearchIndex } = useStaticQuery(query)

  return (
    <>
      <Helmet>
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </Helmet>
      <div
        sx={{
          display: 'grid',
          minHeight: '100vh',
          gridTemplateAreas: [
            '"header" "nav" "main" "ads" "footer"',
            '"header header header" "nav main ads" "footer footer footer"',
          ],
          gridTemplateColumns: ['1fr', '64px 1fr 64px'],
          gridTemplateRows: ['min-content min-content 1fr min-content min-content', 'min-content 1fr min-content'],
        }}
      >
        <div
          sx={{
            gridArea: 'header',
          }}
        >
          <Header>
            <Logo />
            <div sx={layoutStyle.nav}>
              <div sx={{ display: ['flex', 'flex', 'flex', 'none'] }}>
                <Search searchIndex={siteSearchIndex.index} />
              </div>
              <Navigation />
            </div>
            <div sx={layoutStyle.appearance}>
              <Search searchIndex={siteSearchIndex.index} />
              <Theme />
            </div>
          </Header>
        </div>
        <div
          sx={{
            gridArea: 'main',
          }}
        >
          <m.main
            key={path}
            className={'container ' + className}
            variants={animationConfiguration}
            transition={{ duration: 2 }}
            exit="exit"
          >
            {children}
          </m.main>
          <ScrollDown direction="down" to={205} showAbove={1500} css="position: fixed; right: 1em; top: 4.5em;" />
          <Scroll showBelow={1500} css="position: fixed; right: 1em; bottom: 4em;" />
        </div>
        <div
          sx={{
            gridArea: 'nav',
          }}
        ></div>
        <div
          sx={{
            gridArea: 'ads',
          }}
        ></div>
        <div
          sx={{
            gridArea: 'footer',
          }}
        >
          <Footer />
        </div>
        <CookieConsent
          enableDeclineButton
          flipButtons
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gtag"
          style={{
            background: 'linear-gradient(to right, transparent, #171717)',
            textShadow: '2px 2px black',
          }}
          buttonStyle={{
            background: 'radial-gradient(circle at top right, #222, transparent)',
            color: 'white',
            fontWeight: 'bolder',
            borderRadius: '3px',
            border: '1px black',
            textShadow: '2px 2px black',
          }}
        >
          Basic Instructions uses cookies for user experience.{' '}
          <span
            style={{
              fontSize: '14px',
              textAlign: 'center',
              marginLeft: '20px',
            }}
          >
            <span className="icon -lock">
              <SiGnuprivacyguard />
            </span>{' '}
            <Link to="/privacy" alt="Privacy Page">
              Privacy Page
            </Link>
          </span>
        </CookieConsent>
      </div>
    </>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ['none', 'none', 'none', 'flex'],
    alignItems: 'center',
    gap: 4,
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
}
