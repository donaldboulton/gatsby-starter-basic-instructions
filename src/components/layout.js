    /** @jsx jsx */
import { jsx } from 'theme-ui'
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Scroll from './Scroll'
import ScrollDown from './ScrollDown'
import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"
import "../assets/scss/style.scss"
import Footer from "./footer"
import Theme from "./theme"
import Search from "./search"

const query = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`

const Layout = ({ className, children }) => {
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
          '"header header header" "nav main ads" "footer footer footer"'
        ],
        gridTemplateColumns: [
          '1fr',
          '64px 1fr 64px'
        ],
        gridTemplateRows: [
          'min-content min-content 1fr min-content min-content',
          'min-content 1fr min-content'
        ]
      }}>
        <div
          sx={{
            gridArea: 'header'
          }}>
            <Header>
            <Logo />
            <div sx={layoutStyle.nav}>
              <div sx={{ display: ["flex", "flex", "flex", "none"] }}>
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
            gridArea: 'main'
          }}>
          <main className={"container " + className}>{children}</main>
          <ScrollDown
            direction='down' to={205}
            showAbove={1500}
            css='position: fixed; right: 1em; top: 4.5em;'
          />
          <Scroll
            showBelow={1500}
            css='position: fixed; right: 1em; bottom: 4em;'
          />
        </div>
        <div
          sx={{
            gridArea: 'nav'
          }}>
        </div>
        <div
          sx={{
            gridArea: 'ads'
          }}>
        </div>
        <div
          sx={{
            gridArea: 'footer'
          }}>
            <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}
